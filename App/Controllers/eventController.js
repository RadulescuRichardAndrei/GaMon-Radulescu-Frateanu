const { selectEv,createEv,deleteEv,updateEv,selectEvByID } = require("../Models/eventModel");

async function getEvents(req,res){
    try{
        const events= await selectEv();
        res.writeHead(200, {'Content-Type': 'application/json'})
       
        res.end(JSON.stringify(events.rows.at(0)));

    }catch(err){
        console.log(err.message);
    }

}
async function getEventByID(req,res,id){
    try{
        const event= await selectEvByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function createEvent(req,res){
    try{
        const event= await createEv(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function updateEvent(req,res,id){
    try{
        const event=await updateEv(id,req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deleteEvent(req,res,id){
    try{
        const event=await deleteEv(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createEvent,
    updateEvent,
    getEventByID,
    getEvents,
    deleteEvent,
}