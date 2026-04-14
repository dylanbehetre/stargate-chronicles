/**
 * UI Component for SG Team deployment animation.
 */
export class SGTeamAnimation {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  play(onComplete) {
    const overlay = document.createElement('div');
    overlay.style = `
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 10, 0, 0.8); z-index: 10000;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      color: var(--terminal-green); font-family: var(--font-main);
    `;

    overlay.innerHTML = `
      <div style="font-size: 2rem; margin-bottom: 20px; animation: flicker 0.2s infinite;">[ SG TEAM DEPLOYMENT ]</div>
      <div style="width: 500px; height: 300px; border: 1px solid var(--terminal-green); overflow: hidden; position: relative;">
        <img src="./src/ui/assets/moments/ruins.webp" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7;">
        <div style="position: absolute; bottom: 10px; left: 10px; background: black; padding: 5px;">
          > SG-1 TRANSITING WORMHOLE...
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    setTimeout(() => {
      document.body.removeChild(overlay);
      onComplete();
    }, 3000);
  }
}
