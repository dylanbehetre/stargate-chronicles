# Référence SGC : Niveaux 01 à 10 (Surface, Admin & Logistique)

Ce bloc regroupe les niveaux supérieurs du complexe, allant de la surface extérieure de Cheyenne Mountain jusqu'aux premiers quartiers d'habitation souterrains.

## Niveau 1 à 3 : Infrastructures NORAD et Surface
* **Nom de la Salle** : Points de Contrôle Surface / Ascenseurs d'accès
* **Utilité dans le SGC** : Sécurité de surface, accueil, accès aux installations du NORAD. Le SGC est dissimulé sous les installations du NORAD.
* **Historique** : Construit pendant la Guerre Froide pour la défense aérospatiale (NORAD).
* **Description pour Modélisation (Sprite2D)** : Salles avec portes blindées épaisses, guérites de sécurité, murs en béton armé, gardes lourdement armés.
* **Lien Gameplay** : 
  - *Mécanique* : Défense de base. Peut agir comme première ligne de défense en cas d'intrusion depuis la surface, ou sas de sécurité pour les événements narratifs (visites d'inspecteurs, politiciens).

## Niveau 4 : Administration et Comptabilité
* **Nom de la Salle** : Bureaux de l'Administration du SGC
* **Utilité dans le SGC** : Gestion des budgets de la base, comptabilité, gestion des paies du personnel militaire et civil, salle des archives papier.
* **Description pour Modélisation (Sprite2D)** : Salles de bureaux classiques "années 90/2000", armoires métalliques, ordinateurs de bureau vieillissants, néons au plafond, piles de dossiers.
* **Lien Gameplay** : 
  - *Mécanique* : Améliorer cette salle pourrait réduire les coûts de maintenance globaux (via `ResourceManager`) ou augmenter le plafond budgétaire (subventions gouvernementales).

## Niveau 5, 6 et 7 : Stockage Général
* **Nom de la Salle** : Soutes de Stockage
* **Utilité dans le SGC** : Entreposage du matériel non-critique, de la nourriture, des pièces de rechange courantes, et de l'équipement d'expédition de base.
* **Description pour Modélisation (Sprite2D)** : Vastes pièces sombres, étagères industrielles en métal, caisses de ravitaillement militaires estampillées "USAF", chariots élévateurs.
* **Lien Gameplay** : 
  - *Mécanique* : Salles "capacitaires". Elles augmentent la limite de stockage des ressources (ex: Matériel, Vivres).

## Niveau 8 : Énergie et Générateurs
* **Nom de la Salle** : Salle des Générateurs Principaux
* **Utilité dans le SGC** : Fournir l'immense quantité d'électricité nécessaire au fonctionnement de la base, et surtout, à l'activation de la Porte des Étoiles.
* **Historique** : Anciens générateurs du silo réadaptés et largement augmentés en capacité.
* **Description pour Modélisation (Sprite2D)** : Pièce bruyante, énormes turbines, câbles de haute tension jaunes et noirs, panneaux de contrôle clignotants, grilles au sol.
* **Lien Gameplay** : 
  - *Mécanique* : Production d'Énergie. L'énergie est consommée passivement par les autres salles et massivement lors de l'activation de la Porte (dispatch de missions). Sans énergie, malus globaux.

## Niveau 9 et 10 : Logements du Personnel et VIP
* **Nom de la Salle** : Quartiers d'habitation
* **Utilité dans le SGC** : Loger le personnel de garde, les chercheurs travaillant de nuit, et héberger les visiteurs diplomatiques extraterrestres (VIP).
* **Historique** : Le Niveau 9 a parfois été utilisé pour des confinements légers ou des quarantaines VIP.
* **Description pour Modélisation (Sprite2D)** : 
  - *Quartiers standards* : Petites chambres spartiates, lits superposés en métal, casiers.
  - *Quartiers VIP* : Chambres légèrement plus spacieuses, équipées de mobilier terrien confortable (TV, fauteuil) pour les invités aliens.
* **Lien Gameplay** : 
  - *Mécanique* : Capacité de Personnel. Ces salles définissent combien de scientifiques et soldats peuvent opérer dans le SGC. Améliorer la salle augmente le "Moral" ou la régénération des troupes.
