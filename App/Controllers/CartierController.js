const {   selectCartByID, deleteCart, createCart, selectCart } = require("../Models/CartierModel");
async function createCartier(req,res){
    try{
        const Cartiere= await createCart(req);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(Cartiere.rows.at(0)));
    }catch(err){
        console.log(err.message);
    }
}
async function deleteCartier(req,res,id){
    try{
        const Cartiere=await deleteCart(id);
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(Cartiere.rows.at(0)));
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