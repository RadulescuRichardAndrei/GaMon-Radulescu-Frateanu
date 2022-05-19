const pool = require("../API/database");



    //Create
async function createEvent(req,res){
    try{
        const {description}= req.body;
        const newEvent= await pool.query(
            `Insert into "Evenimente"("ID", "descriere", "image", "idSuperUser") Values($1) Returning *;`,
            [description]
        );
        res.end();
    }catch(err){
        console.log(err.message);
    }
 
}
    //Delete

    //Update

    //getAll
async function selectEvents() {
    try{
         const Events= await pool.query(
            `select json_agg(t) from (Select "nume","descriere",
            "image" from "Evenimente") t;`
        )
                
        return Events;    
       
    }catch(err){
        console.log(err.message);
    }
}
    


    //getByID


module.exports.selectEvents= selectEvents;