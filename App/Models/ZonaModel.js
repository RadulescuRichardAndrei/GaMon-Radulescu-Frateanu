const pool = require("../API/database");
//Create
async function createZon(req) {
    return new Promise((resolve, reject) => {
        try {
            const { id,  nume } = req.body;
            const newZona = pool.query(
                `Insert into "Zone"("ID", "Nume") Values($1,$2) Returning *;`,
                [id, nume,]
            );
            resolve(newZona);
        } catch (err) {
            reject(err);
        }
    })
}
//Delete
async function deleteZon(id) {
    return new Promise((resolve, reject) => {
        try {
            const deletedCartier = pool.query(
                `delete from "Zone" where "ID"=${id};`,
            );
            resolve();
        } catch (err) {
            reject(err);
        }
    })

}
//getByID
async function selectZonByID(id) {
    return new Promise((resolve, reject) => {
        try {
            const Zone= pool.query(
                `select json_agg(t) from (select * from "Zone" where "ID"=${id}) t`
            );
            resolve(Zone);
            console.log(err.message);
        } catch (err) {
            reject(err);
        }
    })
}
module.exports = {
    selectZonByID,
    deleteZon,
    createZon
}