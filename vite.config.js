import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` makes the build serve correctly whether GitHub Pages deploys it
// to <user>.github.io/<repo>/ or to a custom domain root. No edits needed per repo.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
})
