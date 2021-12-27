const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 4080;
const app = express();

app.get('*', (req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.resolve(`${__dirname}/public/build`, 'index.html'));
});

app.use((req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port);

console.log(123);
console.log(`Start local server http://localhost:${port}`);

export {};
