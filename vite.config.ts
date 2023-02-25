import { defineConfig } from 'vite'
// import path from 'path'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'
import viteEslint from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import svgr from 'vite-plugin-svgr'
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default defineConfig((/* config */) => {
  return {
    root: './src',
    envDir: process.cwd(),
    resolve: {
      alias: {
        '@assets': path.join(__dirname, 'src/assets')
      }
    },
    /** 依赖预构建相关 */
    optimizeDeps: {
      include: []
    },
    plugins: [
      react(),
      viteEslint({
        exclude: ['node_modules']
      }),
      viteStylelint({
        exclude: ['node_modules']
      }),
      /** 将svg文件直接转换为react组件使用 */
      svgr()
    ],
    css: {
      postcss: {
        /** 自动补全css前缀 */
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
  }
})
