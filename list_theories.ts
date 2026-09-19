import { CURRICULUM_DATA } from './src/data/curriculumData';

const modules = ['word', 'excel', 'powerpoint'];
let totalTheories = 0;
modules.forEach(m => {
  CURRICULUM_DATA[m].lessons.forEach(l => {
    totalTheories += l.theories.length;
    console.log(`${l.id}: ${l.theories.length} theories (${l.theories.map(t => t.id).join(', ')})`);
  });
});

console.log("Total theory cards:", totalTheories);
