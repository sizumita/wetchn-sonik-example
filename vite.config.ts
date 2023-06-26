import { defineConfig } from 'vite'
import { sonikVitePlugin } from 'sonik/vite'

export default defineConfig(({ mode }) => {
  if (mode === 'server') {
    return {
      plugins: [sonikVitePlugin()],
      ssr: {
        noExternal: true,
        format: 'esm',
        // target: "node"
      },
      build: {
        rollupOptions: {
          external: ['__STATIC_CONTENT_MANIFEST', 'preact', 'node:async_hooks'],
        },
        ssr: './app/server.ts',
      },
    }
  }
  return {
    plugins: [sonikVitePlugin()],
    build: {
      lib: {
        noExternal: true,
        entry: './app/client.tsx',
        fileName: 'client',
        formats: ['es'],
      },
      manifest: true,
    },
  }
})
