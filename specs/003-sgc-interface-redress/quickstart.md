# Quickstart: SGC Interface Redress (Anime-Style)

This guide helps you set up and test the new "Anime-style" interface and repaired services.

## Prerequisites

- Node.js 22 LTS
- Vite 6.x
- Git (feature branch: `003-sgc-interface-redress`)

## Installation & Setup

1. **Switch to Feature Branch**:
   ```bash
   git checkout 003-sgc-interface-redress
   ```

2. **Clean Install**:
   ```bash
   npm install
   ```

3. **Verify Build**:
   ```bash
   npm run build
   ```

## Running the Dev Server

Launch the SGC Command Center with the new CSS theme and repaired services:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Testing the New Loop

1. **Dial an Address**: Use the Gate terminal to enter a 7-chevron code.
2. **Deploy MALP**: If the address is valid, click the `DEPLOIER MALP` button. Wait 3 seconds for the "Anime-style" biome illustration to appear.
3. **Mission Deployment**: Select SG-1 and click `ENVOYER ÉQUIPE`. Wait 5 seconds for the mission report modale (CR).
4. **Resilience Test**: Refresh the page (F5). All scanned planets and mission reports MUST persist in the history.

## Technical Notes

- **Anime Aesthetics**: Managed via `styles/theme-anime.css`.
- **Glassmorphism**: Requires modern Chrome/Edge/Firefox for `backdrop-filter`.
- **Logic Repair**: ALL domain logic is unit-testable via:
  ```bash
  npm run test
  ```
