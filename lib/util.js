const crypto = require('crypto');

module.exports = {
    /**
     * Port of Python's base64.urlsafe_b64encode: Returns a base64-encoded
     * representation of s, made URL-safe by replacing + and / with - and _
     * respectively. Additionally all trailing =s are stripped from the
     * resulting value to mirror django.core.signing.b64_encode.
     * @param  {string} s Input string.
     * @return {string}   URL-safe encoded string.
     */
    b64Encode: function (s) {
        // Validate
        if (typeof s !== 'string') return;

        // Convert from binary to Base64
        var b64String = new Buffer(s, 'binary').toString('base64');

        // Replace special characters with URL-safe alternates
        return b64String.replace(
            /[+/]/g,
            function (c) {
                return {'+': '-', '/': '_'}[c];
            }
        ).replace(/=+$/, '');
    },

    /**
     * Port of Python's base64.urlsafe_b64decode: Returns a base64-decoded
     * representation of s, made URL-safe by replacing + and / with - and _
     * respectively. Handles removal of trailing =s which are stripped from
     * encoded values to mirror django.core.signing.b64_decode.
     * @param  {string} s Base64 encoded string.
     * @return {string}   Decoded string.
     */
    b64Decode: function (s) {
        // Validate
        if (typeof s !== 'string') return;

        // Trim leading "dot" character
        if (s[0] === '.') s = s.substring(1);

        // Replace encoded special characters
        s = s.replace(
            /[-_]/g,
            function (c) {
                return {'-': '+', '_': '/'}[c];
            }
        );

        // Convert from Base64 to binary
        return new Buffer(s, 'base64').toString('binary');
    },

    /**
     * Creates an MD5 hash from the specified input string.
     * @param  {string} s Input string.
     * @return {string}   Hash.
     */
    md5: function (s) {
        // Validate
        if (typeof s !== 'string') return;

        // Create hash and return hex digest
        return crypto
            .createHash('md5')
            .update(s)
            .digest('hex');
    }
};
