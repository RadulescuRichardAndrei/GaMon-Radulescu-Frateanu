const pool = require("../API/database");



//Create
async function createEv(req) {
    return new Promise((resolve, reject) => {
        try {
            const { id, descriere, image, idSuperUser } = req.body;
            const newEvent = pool.query(
                `Insert into "Evenimente"("ID", "descriere", "image", "idSuperUser") Values($1,$2,$3,$4) Returning *;`,
                [id, descriere, image, idSuperUser]
            );
            resolve(newEvent);
        } catch (err) {
            reject(err);
        }
    })
}
//Delete
async function deleteEv(id) {
    return new Promise((resolve, reject) => {
        try {
            const deletedEvent = pool.query(
                `delete from "Evenimente" where "id"=${id};`,
            );
            resolve();
        } catch (err) {
            reject(err);
        }
    })

}
//Update
async function updateEv(id, req) {
    return new Promise((resolve, reject) => {
        try {
            const { newId, descriere, image } = req.body;
            const updatedEvent = pool.query(
                `update "Evenimente" set "ID"=$1, "descriere"=$2, "image"=$3 where "id"=${id};`, [newId, descriere, image]
            )
            resolve(updatedEvent);
        } catch (err) {
            reject(err);
        }
    })
}


//getAll
async function selectEv() {
    return new Promise((resolve, reject) => {
        try {
            const Events = pool.query(
                `select json_agg(t) from (Select "nume","descriere",
               "image" from "Evenimente") t;`
            )
            resolve(Events);
        } catch (err) {
            reject(err);
        }
    })
}
//getByID
async function selectEvByID(id) {
    return new Promise((resolve, reject) => {
        try {
            const Event = pool.query(
                `select json_agg(t) from (select * from "Evenimente" where "ID"=${id}) t`
            );
            resolve(Event);
            console.log(err.message);
        } catch (err) {
            reject(err);
        }
    })
}



module.exports = {
    selectEvByID,
    selectEv,
    updateEv,
    deleteEv,
    createEv
}