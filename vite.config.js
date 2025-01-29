import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      skipDiagnostics: false, // Permite detectar errores pero no bloquear la generación de tipos
      staticImport: true, // Genera importaciones estáticas para las declaraciones
    }),
  ],
  resolve: {
    alias: { '@': src, '@test': test },
  },
  build: {
    lib: {
      entry: `${src}/index.ts`,
      name: 'LktField',
      fileName: 'index',
      formats: ['es'],
    },
    outDir,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        'lkt-i18n',
        'lkt-field-validation',
        'lkt-button',
        'lkt-modal',
        'lkt-tooltip',
        'lkt-http-client',
        'lkt-object-tools',
        'lkt-string-tools',
        'lkt-date-tools',
        'axios',
        'lkt-data-state',
      ],
      output: {
        globals: {
          vue: 'Vue',
          axios: 'axios',
          'lkt-events': 'LktEvents',
          'lkt-button': 'LktButton',
          'lkt-http-client': 'LktHttpClient',
          'lkt-string-tools': 'LktStringTools',
        },
        sourcemapExcludeSources: true,
      },
    },
  },
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      const path = testPath.split('/').splice(-2);
      return `${snapshots}/${path[0]}/${path[1]}${snapExtension}`;
    },
  },
};