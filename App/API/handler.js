const { allRoutes } = require("./routes");


function handler (req, res){
      

    
    let key='default';
   
    
    if(req.url.match("/api/getEvents")){
           key='/api/getEvents';
        } else if(req.url.match("\.css$")){          
            key='css';
        } else if(req.url.match("\.png$")){
            key='png';
        } else if( req.url.match("\.jpg$")){
            key='jpg';            
        }else if(req.url.match("\.html")){
            key='html';
        }
const chosen= allRoutes[key];
return chosen(req,res);
}

module.exports.handler= handler;