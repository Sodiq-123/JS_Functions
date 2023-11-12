import * as fs from 'fs';
import * as path from 'path';

const envFilePath = path.join(process.cwd(), '.env');
const exampleFilePath = path.join(process.cwd(), '.env.sample');

/**
 * Reads the contents of the .env file and returns an array of variable names.
 * @returns A set of variable names from the .env file.
 */
const readVariablesFromEnv = () => {
  if (!fs.existsSync(envFilePath)) {
    return new Set();
  }

  const content = fs.readFileSync(envFilePath, 'utf8');
  return new Set(
    content
      .split('\n')
      .filter((line) => line.includes('='))
      .map((line) => line.split('=')[0]),
  );
};

/**
 * Updates the .env.example file with the variable names from the .env file.
 */
const updateExampleFile = () => {
  // Read variable names from the .env file
  const envVars = readVariablesFromEnv();

  console.log(`Updating ${exampleFilePath}`);

  const updatedContent = Array.from(envVars)
    .sort()
    .map((varName) => `${varName}=`)
    .join('\n');

  fs.writeFileSync(exampleFilePath, updatedContent);
};

// const watcher = chokidar.watch(envFilePath, { persistent: true });
// watcher.on('change', updateExampleFile);

updateExampleFile();
