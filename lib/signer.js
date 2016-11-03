const crypto = require('crypto');
const util = require('./util');

const signer = module.exports = {
    /**
     * Method for obtaining the key for the HMAC-SHA1.
     * @param  {string} salt   Crypto salt
     * @param  {string} secret Crypto secret
     * @return {Buffer}        Binary SHA1 digest of the salt and secret
     */
    getSaltedHmacKey: function (salt, secret) {
        // Validate
        if (typeof salt !== 'string') return;
        if (typeof secret !== 'string') return;

        // Create SHA1 hash
        var keySha1Sum = crypto.createHash('sha1');
        keySha1Sum.update(salt + secret, 'binary');
        return keySha1Sum.digest('binary');
    },

    /**
     * Port of django.utils.crypto.salted_hmac:
     * Returns the HMAC-SHA1 of `value`, using a key generated from the
     * specified salt and secret.
     * @param  {string} salt   Crypto salt
     * @param  {string} value  Value to be transformed
     * @param  {string} secret Crypto secret
     * @return {object}        HMAC object
     */
    getSaltedHmac: function (salt, value, secret) {
        // Validate
        if (typeof salt !== 'string') return;
        if (typeof value !== 'string') return;
        if (typeof secret !== 'string') return;

        // Return HMAC-SHA1 of the specified `value`
        var hmac = crypto.createHmac(
            'sha1',
            new Buffer(signer.getSaltedHmacKey(salt, secret), 'binary')
        );
        hmac.update(value, 'binary');
        return hmac;
    },

    /**
     * Port of django.core.signing.base64_hmac:
     * Returns a URL-safe Base64 encoded representation of the digest of the
     * HMAC of `value`.
     * @param  {string} salt  Crypto salt
     * @param  {string} value Value to be transformed
     * @param  {string} key   Crypto secret
     * @return {string}       URL-safe and Base64 encoded digest
     */
    base64Hmac: function (salt, value, key) {
        // Validate
        if (typeof salt !== 'string') return;
        if (typeof value !== 'string') return;
        if (typeof key !== 'string') return;

        // Get salted HMAC digest and Base64 encode
        var saltedHmac = signer.getSaltedHmac(salt + 'signer', value, key);
        return util.b64Encode(saltedHmac.digest('binary'));
    }
};
