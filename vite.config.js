import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'uuid',  // Externalize 'uuid'
        '@fortawesome/react-fontawesome'  // Explicitly externalize FontAwesome package
      ]
    }
  }
});
