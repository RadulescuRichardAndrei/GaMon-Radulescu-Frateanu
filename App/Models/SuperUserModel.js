const pool = require("../API/database");
async function selectSuperUsers() {
    return new Promise((resolve, reject) => {
        try {
            const Users = pool.query(
                `select json_agg(t) from (Select * from "SuperUseri") t;`
            )
            resolve(Users);
        } catch (err) {
            reject(err);
        }
    })
}

module.exports={
    selectSuperUsers
}