const fs = require('fs');
const path = require('path');

const reportsDir = 'cypress/cucumber-json';
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

fs.readdir(reportsDir, (err, files) => {
  if (err) {
    console.error('Error reading reports directory:', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.json')) {
      const oldPath = path.join(reportsDir, file);
      const newPath = path.join(reportsDir, `${timestamp}-${file}`);
      fs.rename(oldPath, newPath, err => {
        if (err) {
          console.error(`Error renaming file ${file}:`, err);
        } else {
          console.log(`Renamed ${file} to ${timestamp}-${file}`);
        }
      });
    }
  });
});
