import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_PROXY_BASE_URL, VITE_TARGET_URL } = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: "0.0.0.0",
      port: 7410,
      proxy: {
        [VITE_PROXY_BASE_URL]: {
          target: VITE_TARGET_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(VITE_PROXY_BASE_URL, ""),
        },
      },
    },
  }
})
