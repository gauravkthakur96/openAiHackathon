// Runtime config for the frontend. Leave this empty (default) when the
// frontend and backend are served from the same origin, as with the local
// "npm start" workflow in server/ — the app then talks to a relative "/api".
//
// If you deploy the frontend and backend separately (e.g. frontend on
// Netlify, backend on Render/Railway), set this to your backend's URL so
// sign-in, complaint filing, tracking and registration all reach it:
//
// window.JHARERA_API_BASE = 'https://your-backend.onrender.com/api';
window.JHARERA_API_BASE = '';
