import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',
        },
        plugins: [react()],
        server: {
            port: 3000
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/vitest-setup.js'
        },
    };
});