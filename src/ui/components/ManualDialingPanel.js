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
      <div class="manual-dial-container" style="padding: 10px;">
        <div class="current-address glass-panel" id="dialed-address-display" 
          style="font-size: 1.8rem; letter-spacing: 12px; margin-bottom: 20px; min-height: 50px; display: flex; align-items: center; justify-content: center; color: var(--color-cyan); text-shadow: var(--glow-cyan); border-color: rgba(0, 255, 242, 0.3);">
          ${this.currentAddress.map(s => `<span>${this.symbols.find(sym => sym.id === s)?.symbol || ''}</span>`).join('')}
        </div>
        <div class="symbols-grid" style="display: grid; grid-template-columns: repeat(9, 1fr); gap: 8px;">
          ${this.symbols.map(sym => `
            <button class="symbol-btn transition-smooth" data-id="${sym.id}" title="${sym.name}" 
              style="padding: 12px 5px; font-size: 1.2rem; background: rgba(0,0,0,0.2); border: 1px solid rgba(0, 255, 242, 0.2); color: rgba(255,255,255,0.7);">
              ${sym.symbol}
            </button>
          `).join('')}
        </div>
        <div class="controls" style="margin-top: 20px; display: flex; gap: 10px;">
          <button id="clear-dial" style="flex: 1; border-color: var(--color-amber); color: var(--color-amber);">RÉINITIALISER</button>
          <button id="execute-dial" class="glow-border-cyan" style="flex: 2; font-weight: bold; background: rgba(0, 255, 242, 0.1);">VÉRIFIER & ENCODER</button>
        </div>
      </div>
    `;

    // Events
    this.container.querySelectorAll('.symbol-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.color = 'var(--color-cyan)';
        btn.style.borderColor = 'var(--color-cyan)';
        btn.style.boxShadow = 'var(--glow-cyan)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.color = 'rgba(255,255,255,0.7)';
        btn.style.borderColor = 'rgba(0, 255, 242, 0.2)';
        btn.style.boxShadow = 'none';
      });

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
        // We could use a custom modal but for now alert is fine if we want quick results
        alert("SÉQUENCE INCOMPLÈTE : 7 CHEVRONS REQUIS.");
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

