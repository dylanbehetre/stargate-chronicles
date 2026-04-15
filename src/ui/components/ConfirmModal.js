/**
 * UI Component for dangerous mission confirmation.
 */
export class ConfirmModal {
  constructor(message, onConfirm, onCancel) {
    this.message = message;
    this.onConfirm = onConfirm;
    this.onCancel = onCancel;
    this.render();
  }

  render() {
    const modal = document.createElement('div');
    modal.className = 'transition-smooth';
    modal.style = `
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(10, 25, 47, 0.85);
      backdrop-filter: blur(10px);
      z-index: 10002;
      display: flex; align-items: center; justify-content: center;
      color: var(--color-amber);
      font-family: var(--font-ui);
    `;

    modal.innerHTML = `
      <div class="glass-panel glow-border-amber" style="width: 450px; padding: 25px; text-align: center; background: rgba(0,0,0,0.4);">
        <h3 style="margin-bottom: 20px; font-weight: bold; letter-spacing: 2px;">SEC-ALERT: PROTOCOLE DE RISQUE</h3>
        <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; line-height: 1.5; margin-bottom: 30px;">
          ${this.message}
        </p>
        <div style="display: flex; gap: 15px;">
          <button id="confirm-no" style="flex: 1; border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.6);">ANNULATION</button>
          <button id="confirm-yes" class="glow-border-amber" style="flex: 1; background: rgba(255,170,0,0.15); font-weight: bold;">PROCÉDER</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#confirm-yes').addEventListener('click', () => {
      document.body.removeChild(modal);
      this.onConfirm();
    });

    modal.querySelector('#confirm-no').addEventListener('click', () => {
      document.body.removeChild(modal);
      this.onCancel();
    });
  }
}

