import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import glsl from 'vite-plugin-glsl'

const checkerPlugin = checker({
    typescript: true,
    eslint: {
        dev: {
            logLevel: ['error'],
        },
        lintCommand: 'eslint --ext .js,.jsx,.ts,.tsx .',
    },
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), checkerPlugin, glsl({ watch: true })],
})
