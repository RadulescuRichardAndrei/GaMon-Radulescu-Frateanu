const {   selectCartByID, deleteCart, createCart, selectCart } = require("../Models/CartierModel");
const { goodCredentials } = require("./authentificate");
async function createCartier(req,res){
    try{
        var credential = await goodCredentials(req);
        if(credential != 4 ){
            res.writeHead(403)
            res.end();
        }else{
        const Cartiere= await createCart(req);
        res.writeHead(201);
        res.end();
    }
    }catch(err){
        console.log(err.message);
    }
}
async function deleteCartier(req,res,id){
    try{
        var credential = await goodCredentials(req);
        if(credential != 4 ){
            res.writeHead(403)
            res.end();
        }else{
        const Cartiere=await deleteCart(id);
        res.writeHead(204);
        res.end();
        }
    }catch(err){
        console.log(err.message);
    }
}
async function getCartierByID(req,res,id){
    try{
        const Cartiere= await selectCartByID(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(Cartiere.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function getCartiere(req,res){
    try{
        const Cartiere= await selectCart();
        res.writeHead(200, {'Content-Type': 'application/json'})
       
        res.end(JSON.stringify(Cartiere.rows.at(0)));

    }catch(err){
        console.log(err.message);
    }
}
module.exports={
    createCartier,
    deleteCartier,
    getCartierByID,
    getCartiere
}