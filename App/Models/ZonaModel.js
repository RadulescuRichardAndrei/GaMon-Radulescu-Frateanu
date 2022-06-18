const pool = require("../API/database");
async function selectZone(){
    return new Promise((resolve, reject) => {
        try {
            const Zone = pool.query(
                `select json_agg(t) from (Select * from "Zone") t;`
            )
            resolve(Zone);
        } catch (err) {
            reject(err);
        }
    })
}
async function creatZona(req) {
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
async function deletZona(id) {
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

async function selectZonaByID(id) {
    return new Promise((resolve, reject) => {
        try {
            const Cartier= pool.query(
                `select json_agg(t) from (select * from "Zone" where "ID"=${id}) t`
            );
            resolve(Cartier);
            console.log(err.message);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports={
    selectZone,
    creatZona,
    deletZona,
    selectZonaByID
}