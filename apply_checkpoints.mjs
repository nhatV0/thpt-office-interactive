import fs from 'fs';
import path from 'path';
import { CHECKPOINT_QUESTIONS_MAP } from './src/data/theoryCheckpointQuestions';

const curriculumPath = path.resolve('./src/data/curriculumData.ts');
let code = fs.readFileSync(curriculumPath, 'utf8');

// We will inject the checkpointQuestion for each theory card if not present
let replacedCount = 0;
for (const [theoryId, qData] of Object.entries(CHECKPOINT_QUESTIONS_MAP)) {
  // Find id: 'theoryId',
  const targetStr = `id: '${theoryId}',`;
  if (code.includes(targetStr)) {
    // Find where the object ends or inject right before the closing brace of this theory
    // We can inject it after examTip or shortcut
    const regex = new RegExp(`(id:\\s*'${theoryId}',[\\s\\S]*?examTip:[^\\n]+)`, 'g');
    if (regex.test(code)) {
      const qJson = JSON.stringify(qData, null, 12).replace(/"([^"]+)":/g, '$1:');
      code = code.replace(regex, `$1,\n            checkpointQuestion: ${qJson}`);
      replacedCount++;
    }
  }
}

console.log(`Injected checkpoint questions into ${replacedCount} theory cards!`);
fs.writeFileSync(curriculumPath, code, 'utf8');
