import json from '@rollup/plugin-json'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import 'dotenv/config'

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'demo/src/index.tsx',
  output: {
    file: 'demo/public/js/bundle.min.js',
    format: 'iife',
    sourcemap: true,
    plugins: [terser()],
  },
  plugins: [
    json(),
    typescript({
      typescript: require('typescript'),
    }),
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.MAP_TILER_API_KEY': JSON.stringify(process.env.MAP_TILER_API_KEY),
      preventAssignment: true,
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: 'demo/public',
      host: 'localhost',
      port: 3000,
    }),
    livereload({ watch: ['demo/public/js', 'dist'] }),
  ],
}
