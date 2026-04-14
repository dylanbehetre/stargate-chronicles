/**
 * UI Component for manual address composition.
 */
export class ManualDialingPanel {
  constructor(containerId, symbols, onDial) {
    this.container = document.getElementById(containerId);
    this.symbols = symbols;
    this.onDial = onDial;
    this.currentAddress = [];
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="manual-dial-container" style="text-align: center;">
        <div class="current-address" id="dialed-address-display" style="font-size: 1.5rem; letter-spacing: 10px; margin-bottom: 15px; min-height: 2em; border: 1px dashed var(--glass-border); padding: 10px;">
          ${this.currentAddress.map(s => `<span>${this.symbols.find(sym => sym.id === s).symbol}</span>`).join('')}
        </div>
        <div class="symbols-grid" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 5px;">
          ${this.symbols.map(sym => `
            <button class="symbol-btn" data-id="${sym.id}" title="${sym.name}" style="padding: 10px; font-size: 1.2rem;">
              ${sym.symbol}
            </button>
          `).join('')}
        </div>
        <div class="controls" style="margin-top: 15px;">
          <button id="clear-dial" class="warning">EFFACER</button>
          <button id="execute-dial" style="font-weight: bold;">ENCODER</button>
        </div>
      </div>
    `;

    // Events
    this.container.querySelectorAll('.symbol-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.currentAddress.length < 7) {
          this.currentAddress.push(parseInt(btn.getAttribute('data-id')));
          this.renderDisplay();
        }
      });
    });

    document.getElementById('clear-dial').addEventListener('click', () => {
      this.currentAddress = [];
      this.renderDisplay();
    });

    document.getElementById('execute-dial').addEventListener('click', () => {
      if (this.currentAddress.length === 7) {
        this.onDial(this.currentAddress);
      } else {
        alert("ADRESSE INVALIDE : 7 CHEVRONS REQUIS.");
      }
    });
  }

  renderDisplay() {
    const display = document.getElementById('dialed-address-display');
    display.innerHTML = this.currentAddress.map(s => {
      const sym = this.symbols.find(sym => sym.id === s);
      return `<span>${sym ? sym.symbol : '?'}</span>`;
    }).join('');
  }
}
