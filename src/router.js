const handlers = require('./handlers');
const router =(request,response)=>{
	if (request.url === '/' ) {
		handlers.homeHandler(request,response);
	}
	else if (request.url.includes('/suggestions/')) {
		handlers.suggestionHandler(request,response);
	}
	else
	{
		handlers.publicHandler(request,response);
	}
}
module.exports=router;