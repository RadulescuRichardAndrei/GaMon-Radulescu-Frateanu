const pool = require("../API/database");
//Create
async function createRep(req) {
    return new Promise((resolve, reject) => {
        try {
            const { id, descriere, image, idUser } = req.body;
            const newReport = pool.query(
                `Insert into "Report"("ID", "descriere", "image", "idUser") Values($1,$2,$3,$4) Returning *;`,
                [id, descriere, image, idUser]
            );
            resolve(newReport);
        } catch (err) {
            reject(err);
        }
    })
}
//Delete
async function deleteRep(id) {
    return new Promise((resolve, reject) => {
        try {
            const deletedEvent = pool.query(
                `delete from "Report" where "ID"=${id};`,
            );
            resolve();
        } catch (err) {
            reject(err);
        }
    })

}
//getAll
async function selectRep() {
    return new Promise((resolve, reject) => {
        try {
            const Reports = pool.query(
                `select json_agg(t) from (Select "ID","descriere",
               "image" from "Report") t;`
            )
            resolve(Reports);
        } catch (err) {
            reject(err);
        }
    })
}
//getByID
async function selectRepByID(id) {
    return new Promise((resolve, reject) => {
        try {
            const Report = pool.query(
                `select json_agg(t) from (select * from "Report" where "ID"=${id}) t`
            );
            resolve(Report);
            console.log(err.message);
        } catch (err) {
            reject(err);
        }
    })
}



module.exports = {
    selectRepByID,
    selectRep,
    deleteRep,
    createRep
}