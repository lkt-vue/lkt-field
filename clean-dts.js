import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';

const distDir = resolve('./dist');

const cleanDtsFile = (filePath) => {
  let content = readFileSync(filePath, 'utf8');
  content = content.replace(/\.ts(['"])/g, '.d.ts$1');
  content = content.replace(/\/\/.*\.ts\s*$/gm, '');
  writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned: ${filePath}`);
};

const processDir = (dir) => {
  readdirSync(dir).forEach((file) => {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.d.ts')) {
      cleanDtsFile(fullPath);
    }
  });
};

// Inicia el proceso
processDir(distDir);
console.log('Finished .d.ts clean.');