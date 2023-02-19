import { defineConfig /* , normalizePath */ } from 'vite'
// import path from 'path'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// const variablePath = normalizePath(path.resolve('./src/variable.scss'))

export default defineConfig({
  root: './src',
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      exclude: ['node_modules']
    }),
    svgr()
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ browsers: 'ie 9' })]
    },
    modules: {
      generateScopedName: '[name]-[local]-[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "${variablePath}";`
      }
    }
  }
})
