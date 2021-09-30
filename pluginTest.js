import { Plugin, UserConfig } from 'vite'
import path from 'path'

// console.log("UserConfig2", UserConfig)

export default function pluginTest() {
  // console.log("UserConfig", UserConfig);
  let resolvedConfig = null
  return {
    name: 'pluginTest',

    config(config) {
      resolvedConfig = config
      console.log("input:", config.build.rollupOptions.input)
      console.log("output:", config.build.rollupOptions.output.entryFileNames())
    },

    configResolved(resolvedConfig) {
      // console.log("resolvedConfig", resolvedConfig)
    },

    closeBundle() {
      // console.log("closeBundle", resolvedConfig)
    },

    resolveId(id) {
      // console.log("resolveId", id)
    },

    load(id) {
      // console.log("load", id)
    },

    transform(src, id) {
      // console.log("transform src", src)
      // console.log("transform id", id)
    },

    renderChunk(a, b, c) {
      // console.log("renderChunk a", a)
      // console.log("renderChunk b", b)
      // console.log("renderChunk c", c)
    },

    generateBundle(_options, bundle) {
      
    }

  }
}