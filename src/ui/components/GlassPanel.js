/**
 * Functional component for a glassmorphic panel.
 */
export function createGlassPanel({ id, title, content = '', className = '' }) {
  const panel = document.createElement('div');
  panel.id = id;
  panel.className = `glass-panel transition-smooth ${className}`;
  panel.style.padding = '20px';
  panel.style.display = 'flex';
  panel.style.flexDirection = 'column';

  if (title) {
    const header = document.createElement('h2');
    header.textContent = title;
    header.style.marginBottom = '15px';
    header.style.color = 'var(--color-cyan)';
    header.style.borderBottom = '1px solid var(--color-cyan)';
    header.style.paddingBottom = '5px';
    panel.appendChild(header);
  }

  const body = document.createElement('div');
  body.className = 'panel-body';
  if (typeof content === 'string') {
    body.innerHTML = content;
  } else {
    body.appendChild(content);
  }
  panel.appendChild(body);

  return panel;
}
