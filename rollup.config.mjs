// eslint-disable-next-line import/order
import pkg from './package.json';
// @ts-check
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import builtinModules from 'builtin-modules';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const nodeResolvePlugin = resolve({ extensions, preferBuiltins: true });

/**
 * @type { import('rollup').RollupOptions}
 */
const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.exports['.'].import,
      format: 'esm',
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
    {
      file: pkg.exports['.'].require,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
  ],
  plugins: [
    nodeResolvePlugin,
    babel({
      extensions,
    }),
  ],
  external: builtinModules,
};

export default config;
