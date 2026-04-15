import { GameState } from './src/domain/entities/GameState.js';
import { LocalStorageRepository } from './src/infrastructure/LocalStorageRepository.js';
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
const malpService = new MALPService(state, repository);
const narrativeEngine = new NarrativeEngine(narrativeData);
const sgTeamService = new SGTeamService(state, repository);

// Animations
const malpAnimation = new MALPAnimation('app');
const sgTeamAnimation = new SGTeamAnimation('app');

// Add Flicker CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes flicker {
        0% { opacity: 0.8; }
        50% { opacity: 1; }
        100% { opacity: 0.9; }
    }
`;
document.head.appendChild(style);


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
    entry.style.marginBottom = '4px';
    entry.style.paddingLeft = '10px';
    entry.style.borderLeft = `2px solid var(--color-${type === 'error' ? 'amber' : 'cyan'})`;
    entry.innerHTML = `<span style="color: rgba(255,255,255,0.4); font-size: 0.7rem;">[${new Date().toLocaleTimeString()}]</span> ${message}`;
    
    if (type === 'warning') entry.style.color = 'var(--color-amber)';
    if (type === 'error') entry.style.color = '#ff4444';
    
    missionLogsEl.prepend(entry);
}

// UI Initialization
const planetInfoPanel = new PlanetInfoPanel('planet-info', symbolsData);

const planetListPanel = new PlanetListPanel('planet-list', planets, (planet) => {

    state.setDestination(planet);
    planetInfoPanel.update(planet);
    log(`Destination sélectionnée : ${planet.name}`);
});

const manualDialingPanel = new ManualDialingPanel('coordinates-input', symbolsData, (address) => {
    log(`Numérotation manuelle amorcée : ${address.join('-')}`, 'warning');
    handleDial(address);
});

// Tabs Logic
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        
        // Update Buttons
        tabs.forEach(t => {
            t.classList.remove('active');
            t.style.borderBottom = 'none';
        });
        tab.classList.add('active');
        tab.style.borderBottom = '2px solid var(--color-cyan)';

        // Update Content
        document.querySelectorAll('.tab-content').forEach(c => {
            c.style.display = 'none';
            c.classList.remove('active');
        });
        const target = document.getElementById(targetId);
        target.style.display = targetId === 'gate-display' ? 'flex' : 'block';
        target.classList.add('active');
    });
});

function handleDial(address) {
    const success = gateService.dial(address);
    animateGate(success);
}

async function animateGate(success) {
    const gateRing = document.querySelector('.gate-ring');
    const innerRing = gateRing.querySelector('.gate-inner-ring');
    const chevrons = gateRing.querySelectorAll('.chevron');
    const vortex = gateRing.querySelector('.vortex');

    // Reset
    chevrons.forEach(c => c.classList.remove('locked'));
    vortex.classList.remove('active');
    
    // Switch to Gate View if not active
    document.querySelector('[data-target="gate-display"]').click();

    log("Séquence de numérotation engagée. Encodeur en rotation...");
    innerRing.style.animationDuration = '5s';

    // Lock 7 chevrons one by one
    for (let i = 0; i < 7; i++) {
        await new Promise(r => setTimeout(r, 600));
        chevrons[i].classList.add('locked');
        log(`Chevron ${i + 1} enclenché.`);
    }

    setTimeout(() => {
        innerRing.style.animationDuration = '40s';
        if (success) {
            vortex.classList.add('active');
            log("VORTEX ÉTABLI. HORIZON D'ÉVÉNEMENTS STABLE.", 'info');
            state.isGateActive = true;
        } else {
            log("ÉCHEC : SÉQUENCE DE NUMÉROTATION INTERROMPUE.", 'error');
            state.isGateActive = false;
        }
        if (state.lockedDestination) planetInfoPanel.update(state.lockedDestination);
    }, 1000);
}

// Bootstrap
function init() {
    updateClock();
    setInterval(updateClock, 1000);
    
    // Load state
    const savedState = repository.load('sgc_global_state');
    if (savedState) {
        Object.assign(state, savedState);
    }

    log("Système SGC - BIOS v4.2.0 chargé. Connexion satellite établie.");
}


init();

// Hook for buttons in the Info Panel (Delegated)
document.addEventListener('click', async (e) => {
    if (!e.target) return;

    if (e.target.id === 'btn-lock-gate') {
        if (state.lockedDestination) {
            handleDial(state.lockedDestination.address);
        } else {
            log("ERREUR : AUCUNE DESTINATION SÉLECTIONNÉE.", "error");
        }
    }

    if (e.target.id === 'btn-deploy-malp') {
        log("Lancement du MALP en cours. Attente du signal...", "warning");
        const scoutedPlanet = await malpService.deploy();
        if (scoutedPlanet) {
            malpAnimation.play(() => {
                planetInfoPanel.update(scoutedPlanet);
                log(`Sondage terminé pour ${scoutedPlanet.name}. Biome détecté : ${scoutedPlanet.biome}.`);
            });
        } else {
            log("ÉCHEC DU LANCEMENT : VORTEX INEXISTANT OU INSTABLE.", "error");
        }
    }

    if (e.target.id === 'btn-deploy-sg') {
        const dest = state.lockedDestination;
        if (dest.dangerLevel >= 8 && dest.status === 'unexplored') {
            new ConfirmModal(
                "DANGER ÉLEVÉ DÉTECTÉ. AUCUNE RECONNAISSANCE MALP PRÉALABLE. CONTINUER ?",
                () => executeSGDeployment(),
                () => log("DÉPLOIEMENT ANNULÉ PAR SÉCURITÉ.", "warning")
            );
        } else {
            executeSGDeployment();
        }
    }
});

async function executeSGDeployment() {
    log("Déploiement équipe SG-1. Fermeture radio dans 5s...", "warning");
    const report = await sgTeamService.deploy();
    if (report) {
        sgTeamAnimation.play(() => {
            new MissionReportModal(report, () => {
                planetInfoPanel.update(state.lockedDestination);
                log(`Mission terminée sur ${state.lockedDestination.name}. Rapport technique disponible.`);
            });
        });
    } else {
        log("ERREUR : DÉPLOIEMENT IMPOSSIBLE SANS VORTEX ACTIF.", "error");
    }
}

