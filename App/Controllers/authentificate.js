const cookie = require('cookie');
const { hashPasswordSalt } = require('../Crypto/crypto-Utils');
const { decryptWithPrivateKey } = require('../Crypto/decrypt');
const { readPvKey } = require('../Crypto/KeyRead');
const { selectSuperUsers } = require('../Models/SuperUserModel');
const { selectUsers } = require('../Models/UserModel');

function hex_to_ascii(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

function containCredentials(credentials, users, superUsers) {
        
    for(var i=0; i<users.length;i++)
        if(credentials.username.match(users[i].username))
        {
            var password=hashPasswordSalt(credentials.password,users[i].passwordSalt)
            if(users[i].passwordHash.match(password))
            return 1;
        }
    for(var i=0; i<superUsers.length;i++)
        if(credentials.username.match(superUsers[i].username))
        {
            var password=hashPasswordSalt(credentials.password,superUsers.at(i).passwordSalt)
            if(superUsers[i].passwordHash.match(password))
            return 2;
        }    
    return 0;

}

async function UserToken(req, res) {
    try {

        var cookies = cookie.parse(req.headers.cookie || '');
        var key = await readPvKey();

        var token = Buffer.from(cookies.token, 'base64');

        var credentialsHex = decryptWithPrivateKey(key, token).toString('hex');
        var credentials = JSON.parse(hex_to_ascii(credentialsHex));
      
        var users =(await selectUsers()).rows.at(0).json_agg;
        var superUsers =(await selectSuperUsers()).rows.at(0).json_agg;
       
        switch (containCredentials(credentials, users, superUsers)) {
            case 0:
                res.writeHead(401)
                break;

            case 1:
                res.writeHead(302,{'Location':'user.html'});
                break;
            case 2:
                res.writeHead(302,{'Location':'superuser.html'});
                break;
        }
        res.end();
    } catch (err) {
        console.log(err);
    }
}

module.exports.UserToken = UserToken;