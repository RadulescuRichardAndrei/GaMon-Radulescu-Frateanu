const { allRoutes } = require("./routes");


function handler(req, res) {

    let key = 'default';
    if(req.url.match("/api/auth") && req.method==='POST'){
        key='auth';
    }else if(req.url.match("/api/token") && req.method==='POST'){
        key='token';
    }else if( req.url.match("/api/Register") && req.method==='POST'){
        key='/api/Register';
    }   if (req.url.match(/\/api\/Events\/([0-9]+)/) && req.method === 'PUT') {
        key = '/api/updateEvent';
    } if (req.url.match(/\/api\/Events\/([0-9]+)/) && req.method === 'DELETE') {
        key = '/api/deleteEvent';
    } else if (req.url.match("/api/Events") && req.method === 'POST') {
        key = '/api/createEvent';
    } else if (req.url.match(/\/api\/Events\/([0-9]+)/) && req.method === 'GET') {
        key = '/api/getEventByID';
    } else if (req.url.match("/api/Events") && req.method === 'GET') {
        key = '/api/getEvents';
    } else if (req.url.match("\.css$")) {
        key = 'css';
    } else if (req.url.match("\.png$")) {
        key = 'png';
    } else if (req.url.match("\.jpg$")) {
        key = 'jpg';
    } else if (req.url.match("\.html$")) {
        key = 'html';
    }
    const chosen = allRoutes[key];
    return chosen(req, res);
}

module.exports.handler = handler;