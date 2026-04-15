import { GlassPanel } from './GlassPanel.js';

export class GateDialer {
  constructor() {
    this.element = GlassPanel.create({ 
      id: 'gate-dialer', 
      title: 'DH-CENTRAL CONTROL',
      classes: ['dialer-container', 'glow-cyan']
    });
    this._initLayout();
  }

  _initLayout() {
    const content = this.element.querySelector('.panel-content');
    content.innerHTML = `
      <div class="dialer-display">
        <div class="chevron-row" id="chevron-display">
          ${Array(7).fill('<div class="chevron-slot"></div>').join('')}
        </div>
      </div>
      <div class="glyph-grid" id="glyph-grid">
        <!-- Glyphs will be injected here -->
      </div>
      <div class="dialer-actions">
        <button id="btn-engage" class="glow-hover">Engage Gate</button>
        <button id="btn-abort" class="text-amber">Abort</button>
      </div>
    `;
  }

  renderTo(parent) {
    parent.appendChild(this.element);
  }
}
