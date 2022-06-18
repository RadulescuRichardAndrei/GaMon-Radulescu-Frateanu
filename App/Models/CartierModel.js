const pool = require("../API/database");
//Create
async function createCart(req) {
    return new Promise((resolve, reject) => {
        try {
            const { id,  nume, adresa, idZona  } = req.body;
            const newCartier = pool.query(
                `Insert into "Cartiere"("ID", "Nume", "adresa", "idZona") Values($1,$2,$3,$4) Returning *;`,
                [id, nume, adresa, idZona]
            );
            resolve(newCartier);
        } catch (err) {
            reject(err);
        }
    })
}
//Delete
async function deleteCart(id) {
    return new Promise((resolve, reject) => {
        try {
            const deletedCartier = pool.query(
                `delete from "Cartiere" where "ID"=${id};`,
            );
            resolve();
        } catch (err) {
            reject(err);
        }
    })

}
async function selectCart(){
    return new Promise((resolve, reject) => {
        try {
            const Cartiere = pool.query(
                `select json_agg(t) from (Select * from "Cartiere") t;`
            )
            resolve(Cartiere);
        } catch (err) {
            reject(err);
        }
    })
}

//getByID
async function selectCartByID(id) {
    return new Promise((resolve, reject) => {
        try {
            const Cartier= pool.query(
                `select json_agg(t) from (select * from "Cartiere" where "ID"=${id}) t`
            );
            resolve(Cartier);
            console.log(err.message);
        } catch (err) {
            reject(err);
        }
    })
}
module.exports = {
    selectCartByID,
    deleteCart,
    createCart,
    selectCart
}