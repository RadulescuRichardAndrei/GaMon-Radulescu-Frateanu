const { selectEvents } = require("../Models/eventModel");
const fs= require('fs');
const path= require('path');
const { getEvents, getEventByID, createEvent, updateEvent,deleteEvent } = require("../Controllers/eventController");

const allRoutes = {

    'html': function (req, res) {
        var htmlPath = path.join(__dirname, '..', 'Views', req.url);
        var fileStream = fs.createReadStream(htmlPath, "utf8");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fileStream.pipe(res);
    },
    'jpg': function (req, res) {
        var jpgPath = path.join(__dirname,'..','..', req.url);
        var fileStream = fs.createReadStream(jpgPath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/jpg');
        fileStream.pipe(res);
    },
    'png': function (req, res) {
        var pngPath = path.join(__dirname,'..','..', req.url);
        var fileStream = fs.createReadStream(pngPath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/png');
        fileStream.pipe(res);
    },
    'css': function (req, res) {
        var cssPath = path.join(__dirname,'..','..', req.url);
        var fileStream = fs.createReadStream(cssPath, "utf8");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        fileStream.pipe(res);
    },
    '/api/getEvents': function (req, res) {
        getEvents(req,res);        
    },
    '/api/getEventByID': function(req,res){
        const id=req.url.split('/')[4];
        
        getEventByID(req,res,id);

    },
    '/api/createEvent': function(req,res){
        createEvent(req,res);
    },
    '/api/updateEvent': function(req,res){
        const id= req.url.split('/')[4];
        updateEvent(req,res,id);
    },
    '/api/deleteEvent': function(req,res){
        const id= req.url.split('/')[4];
        deleteEvent(req,res,id);
    },
    default: (req, res) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }

}

module.exports.allRoutes = allRoutes;