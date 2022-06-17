const {   selectZonByID, deleteZon, createZon } = require("../Models/ZonaModel");
async function createZona(req,res){
    try{
        const event= await createZon(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deleteZona(req,res,id){
    try{
        const event=await deleteZon(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getZonaByID(req,res,id){
    try{
        const event= await selectZonByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createZona,
    deleteZona,
    getZonaByID
}