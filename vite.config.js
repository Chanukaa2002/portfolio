import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure the app binds to the correct port and host
    port: 3000,  // Use PORT env variable, or fallback to 3000
    host: '0.0.0.0',  // Allow external access (important for deployment)
  },
});
