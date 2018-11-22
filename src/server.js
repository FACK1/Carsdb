var proccess = require('dotenv/config');
const http=require('http');
const router=require('./router.js');
//const PORT = ;
const server=http.createServer(router);
server.listen(process.env.PORT || 5000);
console.log(` the server up and running on port ${process.env.PORT || 5000}!`);