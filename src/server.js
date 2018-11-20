const http=require('http');
const router=require('./router.js');
const PORT=4000;
const server=http.createServer(router)
server.listen(PORT);
console.log(` the server up and running on port ${PORT}!`)
