const test = require('tap').test;
const signer = require('../../lib/signer');

test('spec', function (t) {
    t.type(signer, 'object');
    t.type(signer.getSaltedHmacKey, 'function');
    t.type(signer.getSaltedHmac, 'function');
    t.type(signer.base64Hmac, 'function');
    t.end();
});

test('getSaltedHmacKey', function (t) {
    // Valid input
    t.strictEqual(
        signer.getSaltedHmacKey('foo', 'bar'),
        '\x88C×ù$\x16!\x1Déë¹cÿLâ\x81%\x93(x'
    );

    // Invalid input
    t.strictEqual(signer.getSaltedHmacKey('foo', undefined), undefined);
    t.strictEqual(signer.getSaltedHmacKey(undefined, 'bar'), undefined);
    t.end();
});

test('getSaltedHmac', function (t) {
    // Valid input
    t.type(signer.getSaltedHmac('foo', 'bar', 'baz'), 'object');

    // Invalid input
    t.strictEqual(signer.getSaltedHmac('foo', 'bar', undefined), undefined);
    t.strictEqual(signer.getSaltedHmac('foo', undefined, 'baz'), undefined);
    t.strictEqual(signer.getSaltedHmac(undefined, 'bar', 'baz'), undefined);
    t.end();
});

test('base64Hmac', function (t) {
    // Valid input
    t.type(signer.base64Hmac('foo', 'bar', 'baz'), 'string');

    // Invalid input
    t.strictEqual(signer.base64Hmac('foo', 'bar', undefined), undefined);
    t.strictEqual(signer.base64Hmac('foo', undefined, 'baz'), undefined);
    t.strictEqual(signer.base64Hmac(undefined, 'bar', 'baz'), undefined);
    t.end();
});
