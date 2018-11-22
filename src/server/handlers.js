const fs = require('fs');
const path = require('path');
const querystring=require('querystring');
const searchCars = require('..searchCars/searchCars');

const homeHandler = (request, response) => {
  var htmlPath = path.join(__dirname, '..','..', 'public', 'index.html');
    fs.readFile(htmlPath, (error, file) => {
        if(error){
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>Page Not Found</h1><p>Error Code 404</p>');
            return
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(file);
    });
};

const publicHandler = (request, response) => {
    const extention = request.url.split('.')[1];
    const ContentTypeMapping = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'application/js',
        'jpg': 'image/jpg',
        'ico': 'image/x-ico'
    };

    if(ContentTypeMapping[extention] === undefined){
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end('<h1>Page Not Found</h1><p>Error Code 404211</p>');
        return;
    }
    else {
        var filePath = path.join(__dirname, '..','..', 'public', request.url);
        fs.readFile(filePath, (error, file) => {
            if(error){
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.end('<h1>Sorry, There is an error!</h1>');
                return
            }
            response.writeHead(200, {'Content-Type': ContentTypeMapping[extention]});
            response.end(file);
        });
    }
};
const suggestionHandler=(request,response)=>{
  const value=request.url.split('/')[2];
  if(value===undefined){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('error');
    return;
  }
  else{
    const result= searchCars(value);
    var convertedData = JSON.stringify(result);
    response.writeHead(200,{'Content-Type': 'application/json'});
    response.end(convertedData);
  }
}

module.exports = {homeHandler, publicHandler,suggestionHandler}
