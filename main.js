import { GameState } from './src/domain/entities/GameState.js';
import { LocalStorageRepository } from './src/infrastructure/LocalStorageRepository.js';
import { GateService } from './src/domain/services/GateService.js';
import { Planet } from './src/domain/entities/Planet.js';

// UI Components
import { PlanetListPanel } from './src/ui/components/PlanetListPanel.js';
import { ManualDialingPanel } from './src/ui/components/ManualDialingPanel.js';
import { PlanetInfoPanel } from './src/ui/components/PlanetInfoPanel.js';
import { MALPAnimation } from './src/ui/animations/MALPAnimation.js';
import { SGTeamAnimation } from './src/ui/animations/SGTeamAnimation.js';
import { MissionReportModal } from './src/ui/components/MissionReportModal.js';
import { ConfirmModal } from './src/ui/components/ConfirmModal.js';

// Services
import { GateService } from './src/domain/services/GateService.js';
import { MALPService } from './src/domain/services/MALPService.js';
import { SGTeamService } from './src/domain/services/SGTeamService.js';
import { NarrativeEngine } from './src/domain/services/NarrativeEngine.js';

// Data
import planetsData from './src/data/planets.json';
import symbolsData from './src/data/gate-symbols.json';
import narrativeData from './src/data/narrative-templates.json';

// Initialize state and repository
const state = new GameState();
const repository = new LocalStorageRepository();

// Convert raw data to entities
const planets = planetsData.map(p => new Planet(p));

// Services
const gateService = new GateService(planets, state);
const malpService = new MALPService(state);
const narrativeEngine = new NarrativeEngine(narrativeData);
const sgTeamService = new SGTeamService(state, narrativeEngine);

// Animations
const malpAnimation = new MALPAnimation('app');
const sgTeamAnimation = new SGTeamAnimation('app');

// DOM elements
const clockEl = document.getElementById('clock');
const missionLogsEl = document.getElementById('mission-logs');
const gateDisplayEl = document.getElementById('gate-display');

// Functions
function updateClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('fr-FR');
}

function log(message, type = 'info') {
    const entry = document.createElement('div');
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    if (type === 'warning') entry.style.color = 'var(--terminal-amber)';
    if (type === 'error') entry.style.color = 'var(--terminal-red)';
    missionLogsEl.prepend(entry);
}

// UI Initialization
const planetInfoPanel = new PlanetInfoPanel('planet-info');

const planetListPanel = new PlanetListPanel('planet-list', planets, (planet) => {
    state.setDestination(planet);
    planetInfoPanel.update(planet);
    log(`Destination sélectionnée : ${planet.name}`);
});

const manualDialingPanel = new ManualDialingPanel('coordinates-input', symbolsData, (address) => {
    log(`Tentative de numérotation : ${address.join('-')}`, 'warning');
    handleDial(address);
});

function handleDial(address) {
    const success = gateService.dial(address);
    animateGate(success);
}

function animateGate(success) {
    const ring = gateDisplayEl.querySelector('.gate-ring');
    ring.classList.add('spinning');
    
    log("Numérotation en cours...");
    
    setTimeout(() => {
        ring.classList.remove('spinning');
        if (success) {
            ring.innerHTML = '<div class="vortex active"></div>';
            log("VORTEX ÉTABLI. DESTINATION VERROUILLÉE.", 'info');
        } else {
            log("ÉCHEC DE LA NUMÉROTATION : ADRESSE INVALIDE.", 'error');
        }
    }, 2000);
}

// Bootstrap
function init() {
    updateClock();
    setInterval(updateClock, 1000);
    
    // Load state
    const savedState = repository.load('sgc_game_state');
    if (savedState) {
        // Hydrate state... (omitted for brevity in MVP)
    }

    log("Système SGC opérationnel. En attente de coordonnées.");
    
    // Initial UI state
    gateDisplayEl.innerHTML = '<div class="gate-ring"></div>';
}

init();

// Hook for buttons in the Info Panel
document.addEventListener('click', (e) => {
    if (!e.target) return;

    if (e.target.id === 'btn-lock-gate') {
        if (state.lockedDestination) {
            handleDial(state.lockedDestination.address);
        }
    }

    if (e.target.id === 'btn-deploy-malp') {
        if (malpService.deploy()) {
            malpAnimation.play(() => {
                planetInfoPanel.update(state.lockedDestination);
                log(`Sondage terminé pour ${state.lockedDestination.name}. Données reçues.`);
            });
        } else {
            log("ERREUR : IMPOSSIBLE D'ENVOYER LE MALP. PORTE INACTIVE.", "error");
        }
    }

    if (e.target.id === 'btn-deploy-sg') {
        const dest = state.lockedDestination;
        if (dest.status !== 'scouted' && (dest.danger === 'high' || dest.danger === 'extreme')) {
            new ConfirmModal(
                "DANGER EXTRÊME DÉTECTÉ. AUCUN MALP ENVOYÉ. PROCÉDER QUAND MÊME ?",
                () => executeSGDeployment(),
                () => log("DÉPLOIEMENT ANNULÉ.", "warning")
            );
        } else {
            executeSGDeployment();
        }
    }
});

function executeSGDeployment() {
    const report = sgTeamService.deploy();
    if (report) {
        sgTeamAnimation.play(() => {
            new MissionReportModal(report, () => {
                planetInfoPanel.update(state.lockedDestination);
                log(`Mission terminée sur ${state.lockedDestination.name}. Rapport classifié généré.`);
            });
        });
    } else {
        log("ERREUR : IMPOSSIBLE DE DÉPLOYER L'ÉQUIPE. PORTE INACTIVE.", "error");
    }
}
