import {resolve} from "path"
import md from "vite-plugin-vue-markdown-resolver"
import provider from "vite-plugin-inject-virtual-content"
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import { describeGenerate } from "./load-shell/describe-generate"
import vueJsx from '@vitejs/plugin-vue-jsx'

/**
 * @type {import('vite').UserConfig}
 */
const config = defineConfig({
    resolve: {
        alias: [
            {
                find: '@utils',
                replacement: '/src/utils'
            },
            {
                find: '@components',
                replacement: '/src/components'
            },
            {
                find: '@',
                replacement: '/src'
            }
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    build: {
        target: 'es6',
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, './index.html'),
                mobile: resolve(__dirname, './src/mobile/index-mobile.html'),
            }
        },
        sourceMap: true,
        minify: false,
        brotliSize: false, // 禁用压缩大小报告，会加快速度
        
    },
    plugins: [
        vue(),
        vueJsx(),
        {
           ...md({}),
        },
        provider({
            token: '@component-describe',
            content: () => (describeGenerate())
        }),
    ],
})

export default config