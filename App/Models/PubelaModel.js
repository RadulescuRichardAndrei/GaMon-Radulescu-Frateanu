const pool = require("../API/database");
//Create
async function createPub(req) {
    return new Promise((resolve, reject) => {
        try {
            const { id, tipGunoi, capacitate, idCartier } = req.body;
            const newPub = pool.query(
                `Insert into "Pubele"("ID", "tipGunoi", "capacitate", "idCartier") Values($1,$2,$3,$4) Returning *;`,
                [id, tipGunoi, capacitate, idCartier]
            );
            resolve(newPub);
        } catch (err) {
            reject(err);
        }
    })
}
//Delete
async function deletePub(id) {
    return new Promise((resolve, reject) => {
        try {
            const deletedPubela = pool.query(
                `delete from "Pubele" where "ID"=${id};`,
            );
            resolve();
        } catch (err) {
            reject(err);
        }
    })

}
//UpdateAdm
async function updatePubA(id, req) {
    return new Promise((resolve, reject) => {
        try {
            const { newId, dataCuratare } = req.body;
            const updatedPubelaA = pool.query(
                `update "Pubele" set "ID"=$1, "dataCuratare"=$2 where "ID"=${id};`, [newId,dataCuratare]
            )
            resolve(updatedPubelaA);
        } catch (err) {
            reject(err);
        }
    })
}
async function updateStatusPub(id,status){
    return new Promise((resolve, reject) => {
        try {
            const updatedPubelaU = pool.query(
                `update "Pubele" set "raportat"=$1 where "ID"=$2;`, [status,id] 
            )
            resolve(updatedPubelaU);
        } catch (err) {
            reject(err);
        }
    })
}
//UpdateUsr
async function updatePubU(id, req) {
    return new Promise((resolve, reject) => {
        try {
            const { cantitate } = req.body;
            const updatedPubelaU = pool.query(
                `update "Pubele" set "cantitate"=$1 where "ID"=${id};`, [cantitate]
            )
            resolve(updatedPubelaU);
        } catch (err) {
            reject(err);
        }
    })
}

//getByID
async function selectPubByID(id) {
    return new Promise((resolve, reject) => {
        try {
            const Pubela= pool.query(
                `select json_agg(t) from (select * from "Pubele" where "ID"=${id}) t`
            );
            resolve(Pubela);
            console.log(err.message);
        } catch (err) {
            reject(err);
        }
    })
}
async function selectPubByStare(){
    return new Promise((resolve, reject) => {
        try {
            const pub = pool.query(
                `select json_agg(t) from (select "Pubele"."ID", "Pubele"."cantitate", "Cartiere"."Nume" 
                as "cart", "Zone"."Nume" as "zn" from "Pubele" Join "Cartiere"
    ON "Pubele"."idCartier"="Cartiere"."ID" and "Pubele"."raportat" JOIN "Zone"
    ON "Cartiere"."idZona"="Zone"."ID") t`
            )
            resolve(pub);
        } catch (err) {
            reject(err);
        }
    })
}

async function selectPub(){
    return new Promise((resolve, reject) => {
        try {
            const pub = pool.query(
                `select json_agg(t) from (Select * from "Pubele") t;`
            )
            resolve(pub);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = {
    selectPubByID,
    updatePubA,
    updatePubU,
    deletePub,
    createPub,
    selectPub,
    updateStatusPub,
    selectPubByStare
}