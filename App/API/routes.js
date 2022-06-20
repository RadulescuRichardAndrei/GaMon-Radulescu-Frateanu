const { selectEvents } = require("../Models/eventModel");
const fs= require('fs');
const path= require('path');
const { getEvents, getEventByID, createEvent, updateEvent,deleteEvent } = require("../Controllers/eventController");
const { Register } = require("../Controllers/registerController");
const { getToken } = require("../Controllers/token");
const { UserToken } = require("../Controllers/authentificate");
const { getZone } = require("../Controllers/ZonaController");
const { getCartiere } = require("../Controllers/CartierController");
const { getPubele } = require("../Controllers/PubelaController");
const { createRequest } = require("../Controllers/CereriController");

const allRoutes = {
    'auth':function(req,res){
        UserToken(req,res);
    },
    'token':function(req,res){
        getToken(req,res);
    },
    'js':function(req,res){
        var jsPath = path.join(__dirname,'..','..',req.url);
        var fileStream = fs.createReadStream(jsPath);
        res.statusCode = 200;
        //        res.setHeader('Cache-control', 'public, max-age=300000');
        res.setHeader('Content-Type', 'text/javascript');
        fileStream.pipe(res);
        
    },
    'html': function (req, res) {
        var file=req.url.split("/");
        var htmlPath = path.join(__dirname, '..', 'Views',file[file.length-1]);
        var fileStream = fs.createReadStream(htmlPath, "utf8");
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fileStream.pipe(res);
    },
    'jpg': function (req, res) {
        var jpgPath = path.join(__dirname,'..','..',req.url);
        var fileStream = fs.createReadStream(jpgPath);
        res.statusCode = 200;
        res.setHeader('Cache-control', 'public, max-age=300000');
        res.setHeader('Content-Type', 'text/jpg');
        fileStream.pipe(res);
    },
    'png': function (req, res) {
        var pngPath = path.join(__dirname,'..','..', req.url);
        var fileStream = fs.createReadStream(pngPath);
        res.statusCode = 200;
        res.setHeader('Cache-control', 'public, max-age=300000');
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
    '/api/Register': function(req,res){
        Register(req,res);
    },
    'api/Zone':function(req,res){
        getZone(req,res);
    },
    'api/Cartiere':function(req,res){
        getCartiere(req,res);
    },
    'api/Pubele':function(req,res){
        getPubele(req,res);
    },
    'api/Cerere':function(req,res){
        
        createRequest(req,res);
    },
    default: (req, res) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("No Page Found");
    }

}

module.exports.allRoutes = allRoutes;