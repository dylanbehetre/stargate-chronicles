$indexPath = Join-Path $PSScriptRoot "..\knowledge\COORDINATES_INDEX.md"
if (-not (Test-Path $indexPath)) {
    Write-Error "Fichier non trouvé : $indexPath"
    exit 1
}

$lines = Get-Content $indexPath
$planetIds = @{}
$addresses = @{}
$errors = @()

$rowPattern = '\|\s*`?([^`\s|]+)`?\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*(\d[\d-]+)\s*\|'

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match $rowPattern) {
        $p_id = $Matches[1].Trim()
        
        # Ignorer les lignes de séparation du tableau (tirets uniquement)
        if ($p_id -match '^-+$') { continue }
        $pName = $Matches[2].Trim()
        $address = $Matches[4].Trim()

        # Check Duplicate ID
        if ($planetIds.ContainsKey($p_id)) {
            $errors += "Ligne $($i+1): ID en double détecté: $p_id ($pName)"
        }
        $planetIds[$p_id] = $pName

        # Check Duplicate Address
        if ($addresses.ContainsKey($address)) {
            $errors += "Ligne $($i+1): Adresse en double détectée: $address ($pName)"
        }
        $addresses[$address] = $pName

        # Check Format
        if ($address -notmatch '^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$') {
            $errors += "Ligne $($i+1): Format d'adresse invalide: $address ($pName)"
        }
    }
}

if ($errors.Count -gt 0) {
    Write-Host "❌ Erreurs de validation détectées :" -ForegroundColor Red
    foreach ($err_msg in $errors) {
        Write-Host "  - $err_msg" -ForegroundColor Yellow
    }
    exit 1
} else {
    Write-Host "✅ Validation réussie : Aucune collision ou erreur de format détectée." -ForegroundColor Green
    Write-Host "   Planètes indexées : $($planetIds.Count)"
    exit 0
}
