const { selectEvents } = require("../Models/eventModel");

async function getEvents(req,res){
    try{
        const events= await selectEvents();
        res.writeHead(200, {'Content-Type': 'application/json'})
       
        res.end(JSON.stringify(events.rows.at(0)));

    }catch(err){
        console.log(err.message);
    }

}

module.exports.getEvents=getEvents;