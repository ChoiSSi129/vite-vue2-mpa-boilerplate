import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import mpa from 'vite-plugin-mpa'
import path from 'path'

export default (comand) => {
  console.log("comand", comand)
  return defineConfig({
    plugins: [
      createVuePlugin(), 
      mpa()
    ],
  
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
    },
  
    build: {
      polyfillModulePreload: false,
      // cssCodeSplit: false,
      rollupOptions: {
        output: {
          entryFileNames: (fileName) => {
            console.log("fileName", fileName)
            return `[name]/assets/js/main.[hash].js`
          },
          // chunkFileNames: (chunkInfo) => { return `[name].[hash].js`},
          // assetFileNames: (assetInfo) => {
          //   console.log("process.cwd()",  process.build)
          //   if (assetInfo.name.includes('.css'))
          //     return '[name].css';
          //   return 'assest/img/[name].[ext]';
          // },
          // cssModulesOptions: {
          //   generateScopedName: 'test/[name]/[name][hash:base64:8]',
          // },
        }
      }
    }
  })
}
