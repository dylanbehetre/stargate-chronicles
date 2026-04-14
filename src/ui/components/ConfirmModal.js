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
    modal.style = `
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(50, 0, 0, 0.7);
      z-index: 10002;
      display: flex; align-items: center; justify-content: center;
      color: var(--terminal-amber);
      font-family: var(--font-main);
    `;

    modal.innerHTML = `
      <div class="panel" style="width: 400px; border: 2px solid var(--terminal-amber); padding: 20px; text-align: center; background: #110000;">
        <h3 style="margin-bottom: 15px;">AVERTISSEMENT DE SÉCURITÉ</h3>
        <p>${this.message}</p>
        <div style="margin-top: 20px;">
          <button id="confirm-yes" style="background: var(--terminal-amber); color: black;">PROCÉDER</button>
          <button id="confirm-no">ANNULER</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('confirm-yes').addEventListener('click', () => {
      document.body.removeChild(modal);
      this.onConfirm();
    });

    document.getElementById('confirm-no').addEventListener('click', () => {
      document.body.removeChild(modal);
      this.onCancel();
    });
  }
}
