const { randomId } = require("../Crypto/crypto-Utils");
const { selectReq, createReq, selectReqByUserID } = require("../Models/CereriModel");
const { selectPubByID } = require("../Models/PubelaModel");
const { getUserFromToken } = require("./token");



async function getRequests(req, res) {
    try {
        const user=await getUserFromToken(req);
        const requests = await selectReqByUserID(user.ID);
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(requests.rows.at(0)));

    } catch (err) {
        console.log(err.message);
    }

}

async function createRequest(req, res) {
    try {   

        var buf = ''
        req.on('data', (data) => {
            buf += data.toString();
        })
        req.on('end', async function () {
            const data = JSON.parse(buf.toString());

            const pubela = (await selectPubByID(data.idPubela)).rows.at(0).json_agg;
            const user = await getUserFromToken(req);

            data["id"] = randomId();
            data["tipGunoi"] = pubela[0].tipGunoi;
            data["stare"] = false;
            data["idUser"] = user.ID;

            const event = await createReq(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(event.rows.at(0)));
        })


    } catch (err) {
        console.log(err.message);
    }
}
module.exports = {
    createRequest,
    getRequests
}