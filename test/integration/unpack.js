const test = require('tap').test;
const Auth = require('../../index');

const object = {foo: 'bar'};
const encoded = 'eyJmb28iOiJiYXIifQ==';

test('spec', function (t) {
    const a = new Auth();
    t.type(Auth, 'function');
    t.type(a, 'object');
    t.type(a.unpack, 'function');
    t.end();
});

test('uncompressed', function (t) {
    const a = new Auth();
    t.strictDeepEqual(a.unpack(encoded), object);
    t.end();
});

test('invalid', function (t) {
    const a = new Auth();
    t.strictDeepEqual(a.unpack(undefined), undefined);
    t.end();
});
