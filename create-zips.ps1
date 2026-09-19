$ErrorActionPreference = "Stop"
$current = (Get-Location).Path
$base = Join-Path $current "Dữ liệu thực hành MOS WORD 2019\Dữ liệu thực hành MOS WORD 2019"
$outDir = Join-Path $current "thpt-office-interactive\public\downloads"

if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$src1 = Join-Path $base "2019_Word_Exam_1"
$zip1 = Join-Path $outDir "MOS_Word_2019_Exam_1.zip"
Write-Host "Compressing Exam 1..."
Compress-Archive -Path "$src1\*" -DestinationPath $zip1 -Force

$src2 = Join-Path $base "2019_Word_Exam_2"
$zip2 = Join-Path $outDir "MOS_Word_2019_Exam_2.zip"
Write-Host "Compressing Exam 2..."
Compress-Archive -Path "$src2\*" -DestinationPath $zip2 -Force

Get-ChildItem $outDir | Select-Object Name, Length
