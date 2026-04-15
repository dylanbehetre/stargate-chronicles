import { createGlassPanel } from './GlassPanel.js';

export class GateDialer {
  constructor() {
    this.element = createGlassPanel({ 
      id: 'gate-dialer', 
      title: 'DH-CENTRAL COMMAND',
      className: 'glow-interactive'
    });
    this._initLayout();
  }

  _initLayout() {
    const content = this.element.querySelector('.panel-body');
    content.innerHTML = `
      <div class="dialer-display" style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <div class="chevron-row" id="chevron-display" style="display: flex; justify-content: space-around; gap: 10px;">
          ${Array(7).fill('<div class="chevron-slot" style="width: 40px; height: 50px; border: 1px solid var(--color-cyan); display: flex; align-items: center; justify-content: center; font-family: Eurostile; font-size: 1.5rem; color: var(--color-cyan);">[ ]</div>').join('')}
        </div>
      </div>
      <div class="glyph-grid" id="glyph-grid" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; margin-bottom: 20px;">
        <!-- Glyphs injected here via CSS/JS -->
      </div>
      <div class="dialer-actions" style="display: flex; gap: 15px;">
        <button id="btn-engage" class="glow-border-cyan glow-interactive" style="flex: 2;">ENGAGE VORTEX</button>
        <button id="btn-abort" class="glow-border-amber" style="flex: 1; color: var(--color-amber); border-color: var(--color-amber);">ABORT</button>
      </div>
    `;
  }

  renderTo(parent) {
    parent.appendChild(this.element);
  }
}
