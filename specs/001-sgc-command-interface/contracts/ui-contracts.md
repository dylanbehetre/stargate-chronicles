# UI Contracts: SGC Command Interface

**Feature**: 001-sgc-command-interface  
**Date**: 2026-04-14  
**Type**: Interface web — contracts entre couches Domain ↔ UI

---

## Contrats des Services de Domaine

Ces interfaces définissent ce que la couche UI peut appeler depuis le domaine. Les implémentations ne doivent jamais importer de DOM APIs.

---

### IGateService

Gère la composition et la validation des adresses de porte.

```typescript
interface IGateService {
  /**
   * Valider une adresse à 7 chevrons.
   * @returns DialingResult avec succès/échec et la planète trouvée ou générée
   */
  dialAddress(address: GateSymbol[7]): DialingResult;

  /**
   * Récupérer toute la liste des planètes connues.
   */
  getKnownPlanets(): Planet[];

  /**
   * Filtrer les planètes selon leur statut d'exploration.
   */
  filterPlanets(filter: PlanetFilter): Planet[];
}

type PlanetFilter = 'ALL' | 'EXPLORED' | 'UNEXPLORED';

type DialingResult =
  | { success: true;  planet: Planet; isNew: boolean }
  | { success: false; reason: 'INVALID_ADDRESS' | 'CONNECTION_FAILED' };
```

---

### IMALPService

Gère l'envoi d'un MALP et la récupération des données de biome.

```typescript
interface IMALPService {
  /**
   * Envoyer un MALP vers une planète sélectionnée.
   * Met à jour le profil de la planète (biome, environnement, danger).
   * @returns Le rapport MALP (MissionReport de type MALP)
   */
  sendMALP(planetId: string): MALPResult;
}

type MALPResult = {
  mission: Mission;
  report: MissionReport;
  updatedPlanet: Planet;
};
```

---

### ISGTeamService

Gère l'envoi d'une équipe SG et la génération du compte rendu.

```typescript
interface ISGTeamService {
  /**
   * Vérifier si un MALP a déjà été envoyé (pour l'avertissement de confirmation).
   */
  requiresConfirmation(planetId: string): boolean;

  /**
   * Envoyer une équipe SG.
   * Auto-résout la mission et génère un CR complet.
   * @returns Le CR de mission et l'état mis à jour de la planète
   */
  sendSGTeam(planetId: string): SGMissionResult;

  /**
   * Récupérer l'historique des missions pour une planète.
   */
  getMissionHistory(planetId: string): MissionHistoryEntry[];
}

type SGMissionResult = {
  mission: Mission;
  report: MissionReport;
  updatedPlanet: Planet;
};

type MissionHistoryEntry = {
  mission: Mission;
  report: MissionReport;
};
```

---

### IStorageRepository

Interface de persistance (implémentée par `LocalStorageRepository`).

```typescript
interface IStorageRepository {
  load(): GameState | null;
  save(state: GameState): void;
  clear(): void;
}
```

---

## Contrats des Composants UI

Ces contrats définissent les données attendues en entrée par chaque composant d'affichage principal.

---

### PlanetListPanel

Panneau de gauche : liste filtrable des planètes connues.

```typescript
type PlanetListPanelProps = {
  planets: Planet[];
  activeFilter: PlanetFilter;
  selectedPlanetId: string | null;
  onFilterChange: (filter: PlanetFilter) => void;
  onPlanetSelect: (planetId: string) => void;
};
```

---

### ManualDialingPanel

Interface de composition manuelle des 7 chevrons.

```typescript
type ManualDialingPanelProps = {
  onAddressSubmit: (address: GateSymbol[]) => void;
  isDialing: boolean;   // true pendant l'animation d'ouverture
};
```

---

### PlanetInfoPanel

Panneau central : informations sur la planète sélectionnée.

```typescript
type PlanetInfoPanelProps = {
  planet: Planet | null;
  missionHistory: MissionHistoryEntry[];
  onOpenReport: (reportId: string) => void;
};
```

---

### ActionPanel

Onglet d'actions disponibles pour la planète sélectionnée.

```typescript
type ActionPanelProps = {
  planet: Planet | null;
  isGateOpen: boolean;
  onSendMALP: () => void;
  onSendSGTeam: () => void;
  isSending: boolean;   // true pendant animation MALP/SG
};
```

---

### MissionReportModal

Modale d'affichage d'un compte rendu de mission.

```typescript
type MissionReportModalProps = {
  report: MissionReport | null;
  planet: Planet | null;
  onClose: () => void;
};
```

---

## Événements UI → Domaine (flux d'actions)

```
[User: sélectionne planète]
  → PlanetListPanel.onPlanetSelect(planetId)
  → UI charge Planet + missionHistory → affiche PlanetInfoPanel + ActionPanel

[User: compose adresse manuelle]
  → ManualDialingPanel.onAddressSubmit(address)
  → IGateService.dialAddress(address)
  → if success → joue GateOpenAnimation → sélectionne planète résultante
  → if failure → joue GateFailAnimation → feedback d'erreur

[User: clique "Envoyer MALP"]
  → ActionPanel.onSendMALP()
  → joue MALPAnimation
  → IMALPService.sendMALP(planetId)
  → met à jour PlanetInfoPanel avec biome + illustration
  → sauvegarde GameState (IStorageRepository.save)

[User: clique "Envoyer équipe SG"]
  → ActionPanel.onSendSGTeam()
  → if ISGTeamService.requiresConfirmation(planetId) → affiche modale confirmation
  → joue SGTeamAnimation
  → ISGTeamService.sendSGTeam(planetId)
  → affiche MissionReportModal avec CR complet
  → sauvegarde GameState (IStorageRepository.save)
```
