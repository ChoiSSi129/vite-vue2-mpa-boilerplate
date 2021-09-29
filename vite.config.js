import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2' // https://www.npmjs.com/package/vite-plugin-vue2
import mpa from 'vite-plugin-mpa' // https://www.npmjs.com/package/vite-plugin-mpa
import path from 'path'

export default (comand) => {
  return defineConfig({
    plugins: [
      createVuePlugin(), 

      /**
       * MPA 지원 플러그인
       */
      mpa({
        scanDir: 'src/pages',
        scanFile: 'main.js',
        filename: 'index.html'
      })
    ],
  
    /**
     * 소스내 기본 경로 설정
     */
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '~@': path.resolve(__dirname, './src')
      }
    },
  
    build: {
      // cssCodeSplit: false,
      sourcemap: false,
      assetsDir: 'assets/img',
      rollupOptions: {
        output: {
          /**
           * 엔트리 파일 JS
           * @param {*} entryInfo
           * @returns 
           */
          entryFileNames: (entryInfo) => {
            // console.log("entryInfo", entryInfo)
            return `assets/js/[name].[hash].js`
          },

          /**
           * 청크 네임 설정
           * @param {*} id 
           * @returns 
           */
           manualChunks(id) {
            // console.log("manualChunks", id)
            if (id.includes('node_modules')) {
              return 'chunk-vendors';
            }
          },

          /**
           * 청크 파일 JS
           * @param {*} chunkInfo 
           * @returns 
           */
          chunkFileNames: (chunkInfo) => {
            // console.log("chunkInfo", chunkInfo)
            return `assets/js/[name].[hash].js`
          },

          /**
           * CSS 파일 설정
           * @param {*} assetInfo 
           * @returns 
           */
          assetFileNames: (assetInfo) => {
            // console.log("assetInfo", assetInfo)
            return 'assets/[ext]/[name].[hash].[ext]'
          }
        }
      }
    },

    /**
     * scss 공통 변수 설정
     */
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@scss/shared.scss";'
        }
      }
    },

  })
}
