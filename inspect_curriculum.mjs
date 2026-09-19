import fs from 'fs';
import path from 'path';

// Let's inspect curriculumData.ts to see structure
const filePath = path.resolve('./src/data/curriculumData.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Match theories: [ { id: ..., title: ..., ... } ]
console.log("File read successfully, size:", content.length);
