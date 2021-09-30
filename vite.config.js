import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2' // https://www.npmjs.com/package/vite-plugin-vue2
import eslintPlugin from 'vite-plugin-eslint'; // https://www.npmjs.com/package/vite-plugin-eslint
import mpa from 'vite-plugin-mpa' // https://www.npmjs.com/package/vite-plugin-mpa
import path from 'path'
import pluginTest from './pluginTest.js'

/**
 * 아래 인자 값 사용 가능
 * @param {*} command
 * @param {*} mode
 * export default (command, mode)
 */
export default () => {
  return defineConfig({
    plugins: [
      createVuePlugin(),

      /**
       * vite에서 eslint 설정을 위한 플러그인
       */
      eslintPlugin({
        fix: true,
      }),

      /**
       * MPA 지원 플러그인
       */
      mpa({
        scanDir: 'src/pages',
        scanFile: 'main.js',
        filename: 'index.html'
      }),

      pluginTest()
    ],
  
    /**
     * 소스내 기본 경로 설정
     */
    resolve: {
      alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '~@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
    },
  
    build: {
      // target: 'es2015',
      // terserOptions: {
      //   compress: {
      //     // drop_console: true, // production 환경에서 콘솔 제거
      //   },
      // },
      
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
          // manualChunks: undefined,

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
            return assetInfo.name.includes(".css") ? `assets/css/[name].[hash].[ext]` : `assets/[name].[hash].[ext]`
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
          // javascriptEnabled: true
          // additionalData: '@import "@scss/shared.scss";'
        }
      }
    },

  })
}
