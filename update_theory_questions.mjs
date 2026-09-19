import fs from 'fs';
import path from 'path';

// Let's create an automated enhancer that adds checkpointQuestion to every theory in curriculumData.ts
// We'll read CURRICULUM_DATA, map over every lesson, and add a bespoke checkpointQuestion to every single theory card!

// First, let's build the checkpoint questions generator for all theory cards in curriculumData.ts
const curriculumPath = './src/data/curriculumData.ts';
let code = fs.readFileSync(curriculumPath, 'utf8');

console.log("Original curriculum code length:", code.length);
