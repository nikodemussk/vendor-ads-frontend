import CryptoJS from 'crypto-js';

const ENCRYPTION_ALGORITHM = 'AES';
const SECRET_KEY_ALGORITHM = 'PBKDF2';
const CIPHER_ALGORITHM = 'AES-CBC';

const encrypt = (strToEncrypt) => {
    try {
        const secretKey = CryptoJS.PBKDF2('abcd', 'abcd', {
            keySize: 256 / 32,
            iterations: 65536,
            hasher: CryptoJS.algo.SHA256,
        });
        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(strToEncrypt, secretKey, {
            iv,
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC,
        });
        const encryptedData = iv.concat(encrypted.ciphertext);
        return encryptedData.toString(CryptoJS.enc.Base64);
    } catch (error) {
        console.error('Error while encrypting:', error.toString());
        return null;
    }
};

const decrypt = (strToDecrypt) => {
    try {
        const encryptedData = CryptoJS.enc.Base64.parse(strToDecrypt);
        const iv = encryptedData.clone();
        iv.sigBytes = 16;
        iv.clamp();
        const ciphertext = encryptedData.clone();
        ciphertext.words.splice(0, 4); // Remove IV
        ciphertext.sigBytes -= 16; // Remove IV
        const secretKey = CryptoJS.PBKDF2('abcd', 'abcd', {
            keySize: 256 / 32,
            iterations: 65536,
            hasher: CryptoJS.algo.SHA256,
        });
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext },
            secretKey,
            {
                iv,
                padding: CryptoJS.pad.Pkcs7,
                mode: CryptoJS.mode.CBC,
            }
        );
        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.log('Error while decrypting:', error.toString());
        return null;
    }
};

export { encrypt, decrypt };

