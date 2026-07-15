# setup-maia.ps1 — downloads lc0 (Windows CPU build) + Maia weights.
# Run once:  powershell -ExecutionPolicy Bypass -File setup-maia.ps1
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Download into this script's own folder (…/chess tool/maia), so the repo works
# wherever it is cloned — no hardcoded user paths.
$base    = $PSScriptRoot
$lcDir   = Join-Path $base "lc0"
$wDir    = Join-Path $base "weights"
New-Item -ItemType Directory -Force -Path $base,$lcDir,$wDir | Out-Null
$ua = @{ 'User-Agent' = 'maia-setup' }

Write-Host "== 1/3  Finding latest lc0 Windows CPU build ==" -ForegroundColor Cyan
if (Test-Path (Join-Path $lcDir "lc0.exe")) {
  Write-Host "lc0.exe already present, skipping download." -ForegroundColor Yellow
} else {
  $rel = Invoke-RestMethod "https://api.github.com/repos/LeelaChessZero/lc0/releases/latest" -Headers $ua
  # prefer a CPU build (dnnl > blas > onednn), windows, .zip
  $asset = $rel.assets |
    Where-Object { $_.name -match 'windows' -and $_.name -match 'cpu' -and $_.name -match '\.zip$' } |
    Sort-Object { if ($_.name -match 'dnnl') {0} elseif ($_.name -match 'blas') {1} else {2} } |
    Select-Object -First 1
  if (-not $asset) { throw "No Windows CPU lc0 asset found in latest release. Download manually from https://github.com/LeelaChessZero/lc0/releases" }
  $zip = Join-Path $base $asset.name
  Write-Host ("Downloading " + $asset.name + " ...")
  Invoke-WebRequest $asset.browser_download_url -OutFile $zip -Headers $ua
  Write-Host "Extracting ..."
  Expand-Archive -Path $zip -DestinationPath $lcDir -Force
  Remove-Item $zip
  # lc0.exe may land in a subfolder; flatten if needed
  $exe = Get-ChildItem -Path $lcDir -Recurse -Filter lc0.exe | Select-Object -First 1
  if (-not $exe) { throw "lc0.exe not found after extraction." }
  if ($exe.DirectoryName -ne $lcDir) {
    Copy-Item (Join-Path $exe.DirectoryName '*') $lcDir -Recurse -Force
  }
  Write-Host ("lc0 ready: " + (Join-Path $lcDir 'lc0.exe')) -ForegroundColor Green
}

Write-Host "`n== 2/3  Downloading Maia weights (1100-1900) ==" -ForegroundColor Cyan
$nets = 1100,1300,1500,1700,1900
foreach ($n in $nets) {
  $out = Join-Path $wDir "maia-$n.pb.gz"
  if (Test-Path $out) { Write-Host "maia-$n.pb.gz present, skip."; continue }
  $url = "https://github.com/CSSLab/maia-chess/raw/master/maia_weights/maia-$n.pb.gz"
  Write-Host "Downloading maia-$n.pb.gz ..."
  Invoke-WebRequest $url -OutFile $out -Headers $ua
}
Write-Host "Weights ready in $wDir" -ForegroundColor Green

Write-Host "`n== 3/3  Verifying lc0 runs ==" -ForegroundColor Cyan
& (Join-Path $lcDir "lc0.exe") --version
$serverPath = Join-Path (Split-Path $PSScriptRoot -Parent) "maia_server.py"
Write-Host "`nDone. Now run:  python `"$serverPath`"" -ForegroundColor Green
