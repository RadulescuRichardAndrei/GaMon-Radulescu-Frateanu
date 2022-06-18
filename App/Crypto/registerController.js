
const { parserUser } = require("../API/parser");
const { createUser } = require("../Models/UserModel");


async function Register(req,res){
try{
var buf=''
req.on('data',(data)=>{
    buf+=data.toString();
})
req.on('end',()=>{
const user=parserUser(buf);

createUser(user);

res.writeHead(302,{'Location':'user.html'});
res.end();
})

}catch(err){
    console.log(err);
}

}
module.exports.Register=Register;