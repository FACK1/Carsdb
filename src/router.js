const handlers = require('./handlers');
const router =(request,response)=>{
	if (request.url === '/' ) {
		handlers.publicHandler(request,response);
	}
	else if (request.url.includes('/suggesstion/')) {
		handlers.suggesstionHandler(request,response);
	}
	else
	{
		response.writeHead(404,{'Content-Type':'text/html'});
		response.end('<h1> Page Not Found </h1>');
	}
}
module.exports=router;