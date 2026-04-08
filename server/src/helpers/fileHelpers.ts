import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const parseJsonFile = <T>(filename: string) =>
  JSON.parse(readFileSync(join(__dirname, filename), 'utf-8')) as T;
