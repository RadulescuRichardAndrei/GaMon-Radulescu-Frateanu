const { encryptWithPublicKey } = require("../Crypto/encrypt");
const { readPbKey } = require("../Crypto/KeyRead");
const cookie = require('cookie');
async function getToken(req, res) {

    var buf = ''
    req.on('data', (data) => {
        buf += data.toString();
    })
    let key = await readPbKey();

    let token = encryptWithPublicKey(key, buf.toString());


    res.setHeader('Set-Cookie', cookie.serialize('token', token.toString('base64'), { maxAge: 60 * 60 * 24 * 2, path: '/', sameSite: "lax", secure: 'true' }));
    res.writeHead(200);
    res.end();
}

module.exports={
    getToken  

}