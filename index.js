const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('styles.js'),
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    if(line.includes('styled') && line.includes('`')){
        console.log(`SC: ${line}`);
    }
  });
  