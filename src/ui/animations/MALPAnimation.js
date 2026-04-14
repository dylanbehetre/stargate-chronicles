/**
 * UI Component for MALP deployment animation.
 */
export class MALPAnimation {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  play(onComplete) {
    const overlay = document.createElement('div');
    overlay.className = 'malp-overlay';
    overlay.style = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 20, 0, 0.9);
      z-index: 10000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--terminal-green);
      font-family: var(--font-main);
      animation: flicker 0.1s infinite;
    `;

    overlay.innerHTML = `
      <div style="font-size: 2rem; margin-bottom: 20px;">[ MALP DEPLOYMENT IN PROGRESS ]</div>
      <div id="malp-status" style="width: 400px; border: 1px solid var(--terminal-green); padding: 20px;">
        <div>> INITIALIZING PROBE...</div>
        <div id="p1" style="display:none;">> ENTERING WORMHOLE...</div>
        <div id="p2" style="display:none;">> ACQUIRING BIOME DATA...</div>
        <div id="p3" style="display:none;">> TRANSMITTING VISUALS...</div>
      </div>
      <div class="static" style="position: absolute; width:100%; height:100%; opacity: 0.1; pointer-events:none; background: url('https://media.giphy.com/media/oEI9uWUicGLeU/giphy.gif'); background-size: cover;"></div>
    `;

    document.body.appendChild(overlay);

    const steps = ['p1', 'p2', 'p3'];
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        document.getElementById(steps[currentStep]).style.display = 'block';
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          document.body.removeChild(overlay);
          onComplete();
        }, 1000);
      }
    }, 1000);
  }
}
