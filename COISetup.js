// eslint-disable-next-line security/detect-child-process
const { exec } = require('child_process');
const { platform } = require('process');

const url = 'https://raw.githubusercontent.com/Yash-Handa/The_Constitution_Of_India/master/COI.json';

if (platform === 'win32') {
  exec(`Invoke-WebRequest ${url} -O src/COI.json`, (err) => {
    if (err) throw err;
  });
} else if (platform === 'darwin') {
  exec(`curl ${url} -o src/COI.json`, (err) => {
    if (err) throw err;
  });
} else {
  exec(`wget ${url} -O src/COI.json`, (err) => {
    if (err) throw err;
  });
}
