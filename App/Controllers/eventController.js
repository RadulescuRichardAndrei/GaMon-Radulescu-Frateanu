const pool = require("../API/database");

module.exports = {

    //Create
createEvent: async(req,res)=>{
    try{
        const {description}= req.body;
        const newEvent= await pool.query(
            `Insert into "Evenimente"("ID", "descriere", "image", "idSuperUser") Values($1) Returning *;`,
            [description]
        );
        res.json(newEvent.rows[0]);
    }catch(err){
        res.err(err);
    }
 
},
    //Delete
deleteEvent("/Evenimente/:id", async(req,res)=>{
    try{ 
        const {id} =
        const del= await pool.query(
            `Delete from "Evenimente" where "ID"=${id}`
        )

    }
})
    //Update

    //getAll

    //getByID


}