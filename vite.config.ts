import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'FortressPluginDate',
      fileName: format => format === 'es' ? 'index.js' : `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'dayjs',
        'dayjs/plugin/customParseFormat.js',
      ],
      output: {
        globals: {
          'dayjs': 'dayjs',
          'dayjs/plugin/customParseFormat.js': 'customParseFormat',
        },
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'lib'),
    },
  },
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
      copyDtsFiles: true,
    }),
  ],
});
