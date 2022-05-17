const http= require('http');
const fs= require('fs');
const { debug } = require('console');
var path= require('path')

const PORT = process.env.PORT || 5000

const server= http.createServer((req,res) =>{
    
     if(req.url === "/"){
    fs.readFile('./App/Views/index.html',null,function(err,data) {
        if(err){
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.statusCode= 200;
            res.setHeader('Content-Type','text/html');
            res.write(data);
        }
        res.end();
        })
     }
    else if(req.url.match("\.html")){
        var htmlPath= path.join(__dirname,'App','Views',req.url);
        var fileStream=fs.createReadStream(htmlPath,"utf8");
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        fileStream.pipe(res);

    } else if(req.url.match("\.css$")){
        var cssPath=path.join(__dirname,'Resources',req.url);
        var fileStream= fs.createReadStream(cssPath,"utf8");
        res.statusCode= 200;
        res.setHeader('Content-Type','text/css');
        fileStream.pipe(res);



    } else if(req.url.match("\.png$")){
        var pngPath=path.join(__dirname,req.url);
        var fileStream=fs.createReadStream(pngPath);
        res.statusCode= 200;
        res.setHeader('Content-Type','text/png');
        fileStream.pipe(res);

    } else if( req.url.match("\.jpg$")){
        var jpgPath=path.join(__dirname,req.url);
        var fileStream=fs.createReadStream(jpgPath);
        res.statusCode= 200;
        res.setHeader('Content-Type','text/jpg');
        fileStream.pipe(res);

    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }
    
})

server.listen(PORT,() => console.log(`Server running on port: ${PORT}`))
