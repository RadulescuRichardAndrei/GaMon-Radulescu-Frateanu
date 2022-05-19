const crypto= require('crypto');
const fs= require('fs');
const { format } = require('path');

function genKeyPair(){
    const keyPair= crypto.generateKeyPairSync('rsa',{ 
        modulLength: 4096,
        publicKeyEncoding:{
            type:'pkcs1',
            format:'pem'
        },
        privateKeyEncoding:{
            type: 'pkcs1',
            format:'pem'
        }
    });

    fs.writeFileSync(__dirname + '/id_rsa_pub.pem',keyPair.publicKeyEncoding);
    fs.writeFileSync(__dirname + '/id_rsa_private.pem',keyPair.privateKeyEncoding);
}



