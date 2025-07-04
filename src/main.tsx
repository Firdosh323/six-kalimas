
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initializeSEO } from './utils/headManager'

// Initialize SEO when the app loads
initializeSEO();

createRoot(document.getElementById("root")!).render(<App />);
