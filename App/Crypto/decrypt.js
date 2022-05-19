const crypto= require('crypto');

function decryptWithPrivateKey(privateKey, encryptedMsg){
    return crypto.privateDecrypt(privateKey,encryptedMsg);
}

function decryptWithPublicKey(publicKey,encryptedMsg){
    return crypto.publicDecrypt(publicKey,encryptedMsg);
}

module.exports.decryptWithPublicKey= decryptWithPublicKey;
module.exports.decryptWithPrivateKey= decryptWithPrivateKey;