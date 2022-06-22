const { selectSuperUsers, delSuperUser } = require("../Models/SuperUserModel");

async function getSuperUser(req, res) {
    try {
        const events = await selectSuperUsers();
        res.writeHead(200, { 'Content-Type': 'application/json' })

        res.end(JSON.stringify(events.rows.at(0)));

    } catch (err) {
        console.log(err.message);
    }

}
async function deleteSuperUser(req, res) {
try {
    var buffer = '';
    req.on('data', (data)=>{
        buffer+=data.toString();
    }).on('end', async function (){
        var data = JSON.parse(buffer)
        console.log(data.id);
        await delSuperUser(data.id);
        res.writeHead(200);
        res.end(); 
    
    })
    
   
 } catch (err) {
        console.log(err.message);
    }

}


module.exports= {getSuperUser,
    deleteSuperUser
}