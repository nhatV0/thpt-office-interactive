import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

async function addFolderToZip(zip, folderPath, rootPath) {
  const items = fs.readdirSync(folderPath);
  for (const item of items) {
    const fullPath = path.join(folderPath, item);
    const relPath = path.relative(rootPath, fullPath);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await addFolderToZip(zip, fullPath, rootPath);
    } else {
      const data = fs.readFileSync(fullPath);
      zip.file(relPath.replace(/\\/g, '/'), data);
    }
  }
}

async function createZips() {
  const base = path.resolve('../Dữ liệu thực hành MOS WORD 2019/Dữ liệu thực hành MOS WORD 2019');
  const outDir = path.resolve('./public/downloads');

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Exam 1
  const exam1Path = path.join(base, '2019_Word_Exam_1');
  if (fs.existsSync(exam1Path)) {
    console.log('Zipping Exam 1 from', exam1Path);
    const zip1 = new JSZip();
    await addFolderToZip(zip1, exam1Path, exam1Path);
    const content1 = await zip1.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(path.join(outDir, 'MOS_Word_2019_Exam_1.zip'), content1);
    console.log('Created MOS_Word_2019_Exam_1.zip, size:', (content1.length / 1024).toFixed(1), 'KB');
  }

  // 2. Exam 2
  const exam2Path = path.join(base, '2019_Word_Exam_2');
  if (fs.existsSync(exam2Path)) {
    console.log('Zipping Exam 2 from', exam2Path);
    const zip2 = new JSZip();
    await addFolderToZip(zip2, exam2Path, exam2Path);
    const content2 = await zip2.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(path.join(outDir, 'MOS_Word_2019_Exam_2.zip'), content2);
    console.log('Created MOS_Word_2019_Exam_2.zip, size:', (content2.length / 1024).toFixed(1), 'KB');
  }

  // 3. Full Package including Skill Reviews
  const zipFull = new JSZip();
  await addFolderToZip(zipFull, base, base);
  const contentFull = await zipFull.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
  fs.writeFileSync(path.join(outDir, 'Goi_Thuc_Hanh_MOS_Word_2019_Full.zip'), contentFull);
  console.log('Created Goi_Thuc_Hanh_MOS_Word_2019_Full.zip, size:', (contentFull.length / (1024 * 1024)).toFixed(2), 'MB');
}

createZips().catch(console.error);
