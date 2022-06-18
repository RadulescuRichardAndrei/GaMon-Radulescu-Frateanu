const {   selectZonaByID, deletZona, creatZona, selectZone } = require("../Models/ZonaModel");
async function createZona(req,res){
    try{
        const zone= await creatZona(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(zone.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deleteZona(req,res,id){
    try{
        const zone=await deletZona(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(zone.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getZonaByID(req,res,id){
    try{
        const zone= await selectZonaByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(zone.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getZone(req,res){
    try{
        const Cartiere= await selectZone();
        res.writeHead(200, {'Content-Type': 'application/json'})
       
        res.end(JSON.stringify(Cartiere.rows.at(0)));

    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createZona,
    deleteZona,
    getZonaByID,
    getZone
}