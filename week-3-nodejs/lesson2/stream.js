const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/newlorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);