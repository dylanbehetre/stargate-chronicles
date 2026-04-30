import re
import sys
import os

def validate_index(file_path):
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found.")
        return False

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    planet_ids = set()
    addresses = set()
    errors = []

    # Regex for table lines: | ID | Name | Desig | Glyphes | Source |
    # Example: | `mw-abydos` | Abydos | P8X-873 | 27-07-15-32-12-30 | Canon |
    row_pattern = re.compile(r'\|\s*`?([^`\s|]+)`?\s*\|\s*([^|]+)\|\s*([^|]+)\|\s*([\d-]+)\s*\|')

    for i, line in enumerate(lines):
        match = row_pattern.search(line)
        if match:
            p_id = match.group(1).strip()
            p_name = match.group(2).strip()
            address = match.group(4).strip()

            # Check for Duplicate ID
            if p_id in planet_ids:
                errors.append(f"Ligne {i+1}: ID en double détecté: {p_id} ({p_name})")
            planet_ids.add(p_id)

            # Check for Duplicate Address
            if address in addresses:
                errors.append(f"Ligne {i+1}: Adresse en double détectée: {address} ({p_name})")
            addresses.add(address)

            # Check Address Format (6 pairs of digits)
            if not re.match(r'^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$', address):
                errors.append(f"Ligne {i+1}: Format d'adresse invalide: {address} ({p_name})")

    if errors:
        print("❌ Erreurs de validation détectées :")
        for error in errors:
            print(f"  - {error}")
        return False
    else:
        print("✅ Validation réussie : Aucune collision ou erreur de format détectée.")
        print(f"   Planètes indexées : {len(planet_ids)}")
        return True

if __name__ == "__main__":
    index_path = os.path.join(os.path.dirname(__file__), "knowledge", "COORDINATES_INDEX.md")
    if not validate_index(index_path):
        sys.exit(1)
