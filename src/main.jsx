import { createRoot } from 'react-dom/client';
import { ensureGsap } from './utils/gsap';
import App from './App.jsx';

ensureGsap();

createRoot(document.getElementById('root')).render(<App />);
