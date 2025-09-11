// function sayHello(name) {
//     console.log('Hello node program started' +name)
// }
import express from 'express';

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/',(req,res) => {
    res.end('Hello World Try for minicude Github Action!');
});


app.listen(port, hostname, () => {
  console.log(`Server Node running at http://${hostname}:${port}/`);
});