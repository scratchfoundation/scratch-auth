const test = require('tap').test;
const util = require('../../lib/util');

test('spec', function (t) {
    t.type(util, 'object');
    t.type(util.b64Encode, 'function');
    t.type(util.b64Decode, 'function');
    t.type(util.md5, 'function');
    t.end();
});

test('b64Encode', function (t) {
    // Valid input
    t.strictEqual(util.b64Encode('foobar'), 'Zm9vYmFy');
    t.strictEqual(util.b64Encode('http://foo-bar'), 'aHR0cDovL2Zvby1iYXI');
    t.strictEqual(util.b64Encode('http:/`\\'), 'aHR0cDovYFw');

    // Invalid input
    t.strictEqual(util.b64Encode(undefined), undefined);
    t.strictEqual(util.b64Encode(null), undefined);
    t.strictEqual(util.b64Encode(NaN), undefined);
    t.strictEqual(util.b64Encode(0), undefined);
    t.strictEqual(util.b64Encode({}), undefined);
    t.end();
});

test('b64Decode', function (t) {
    // Valid input
    t.strictEqual(util.b64Decode('Zm9vYmFy'), 'foobar');
    t.strictEqual(util.b64Decode('aHR0cDovL2Zvby1iYXI'), 'http://foo-bar');
    t.strictEqual(util.b64Decode('.aHR0cDovYFy='), 'http:/`\\');

    // Invalid input
    t.strictEqual(util.b64Decode(undefined), undefined);
    t.strictEqual(util.b64Decode(null), undefined);
    t.strictEqual(util.b64Decode(NaN), undefined);
    t.strictEqual(util.b64Decode(0), undefined);
    t.strictEqual(util.b64Decode({}), undefined);
    t.end();
});

test('md5', function (t) {
    // Valid input
    t.strictEqual(util.md5('foobar'), '3858f62230ac3c915f300c664312c63f');

    // Invalid input
    t.strictEqual(util.md5(undefined), undefined);
    t.strictEqual(util.md5(null), undefined);
    t.strictEqual(util.md5(NaN), undefined);
    t.strictEqual(util.md5(0), undefined);
    t.strictEqual(util.md5({}), undefined);
    t.end();
});
