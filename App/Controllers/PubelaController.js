const {  selectPubByID, updatePubA, updatePubU, deletePub, createPub, selectPub } = require("../Models/PubelaModel");

async function createPubela(req,res){
    try{
        const event= await createPub(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deletePubela(req,res,id){
    try{
        const event=await deletePub(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function updatePubelaA(req,res,id){
    try{
        const event=await updatePubA(id,req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function updatePubelaU(req,res,id){
    try{
        const event=await updatePubU(id,req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getPubelaByID(req,res,id){
    try{
        const event= await selectPubByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getPubele(req,res){
    try{
        const event= await selectPub();
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createPubela,
    updatePubelaA,
    updatePubelaU,
    getPubelaByID,
    deletePubela,
    getPubele
}