# 📜 Feuille de Personnage (Template)

Utilisez ce modèle pour créer ou stocker les informations de votre personnage. Le MJ et l'agent peuvent s'y référer pour tous les calculs de jeu.

---

## 👤 Informations Générales
- **Nom :** [ ]
- **Joueur :** [ ]
- **Race :** [ ]
- **Profession / Grade :** [ ]
- **Divinité / Allégeance :** [ ]
- **Points d'EXP :** [ ]
- **Jauge d'Étourdissement :** [ ]

---

## 📊 Caractéristiques de Base
*Le modificateur est calculé selon la table dans [[03_caracteristiques_et_competences]].*

| Caractéristique | Abrév. | Score | Modificateur |
| :--- | :---: | :---: | :---: |
| **Force** | FOR | 10 | 0 |
| **Dextérité** | DEX | 10 | 0 |
| **Constitution** | CON | 10 | 0 |
| **Astuce** | AST | 10 | 0 |
| **Intelligence** | INT | 10 | 0 |
| **Perception** | PER | 10 | 0 |
| **Volonté** | VOL | 10 | 0 |
| **Charisme** | CHA | 10 | 0 |

---

## 🎓 Compétences
*Formule : Total = Modificateur de Caract. + Points investis + Bonus Raciaux.*

| Compétence | Caract. | Total | Pts investis | Bonus/Modif. |
| :--- | :---: | :---: | :---: | :---: |
| Combat à Mains Nues | FOR | 0 | 0 | |
| Natation | FOR | 0 | 0 | |
| Saut & Escalade | FOR | 0 | 0 | |
| Combat à Distance | DEX | 0 | 0 | |
| Arme de Contact | DEX | 0 | 0 | |
| Furtivité | DEX | 0 | 0 | |
| Pilotage | AST | 0 | 0 | |
| Technologie | INT | 0 | 0 | |
| Médical | INT | 0 | 0 | |
| Perception (Général) | PER | 0 | 0 | |
| Concentration | VOL | 0 | 0 | |
| Négociation | CHA | 0 | 0 | |

---

## ⚔️ Combat et Protection

| Arme / Objet | Toucher | Dégâts | Type | Notes |
| :--- | :---: | :---: | :---: | :--- |
| [Nom] | +0 | +0 | | |

| Protection | Absorption | Poids | Notes |
| :--- | :---: | :---: | :--- |
| [Nom] | +0 | | |

---

## ✨ Aptitudes et Particularités
- **Traits Raciaux :** [ ]
- **Aptitudes Spéciales :** [ ]

---

## ⚙️ Logique de Calcul (Pour l'IA)
1. **Tests de Compétence :** Lancer `2D10 + Total`.
2. **Absorption :** Lancer `X D6` où `X = Modificateur de Constitution + Valeur Armure`.
3. **Santé :** Max niveaux de dégâts = 5. À chaque niveau, appliquer les malus (voir [[04_regles_de_combat]]).
