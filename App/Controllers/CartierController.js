const {   selectCartByID, deleteCart, createCart } = require("../Models/CartierModel");
async function createCartier(req,res){
    try{
        const event= await createCart(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deleteCartier(req,res,id){
    try{
        const event=await deleteCart(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getCartierByID(req,res,id){
    try{
        const event= await selectCartByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        console.log
        res.end(JSON.stringify(event.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createCartier,
    deleteCartier,
    getCartierByID
}