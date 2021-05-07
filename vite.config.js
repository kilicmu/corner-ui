import {resolve} from "path"
import md from "/home/herin/workspace/vue-markdown-resolver"
import provider from "vite-plugin-inject-virtual-content"
import vue from "@vitejs/plugin-vue"
import {defineConfig} from "vite"
import { describeGenerate } from "./load-shell/describe-generate"
import vueJsx from '@vitejs/plugin-vue-jsx'

/**
 * @type {import('vite').UserConfig}
 */
const config = defineConfig({
    esbuild: {
        // jsxFactory: 'h', // 不在React使用JSX使用自定义规则
        // jsxFragment: 'Fragment',
        // jsxInject: `import React from 'react'` // 自动注入 import 语句
    },
    resolve: {
        // alias: {
            
        //     // '@assets': './src/assets',
        //     // '@components': './src/components',
        // },
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
            // apply: build
        },
        provider({
            token: '@component-describe',
            content: () => (describeGenerate())
        }),
        {
            configureServer: (s) => {
                s.middlewares.use((req, resp, next) => {
                    console.log('====>', req.url)
                    next()
                    console.log('<====', req.url)
                })
            }
        }
    ],
})

export default config