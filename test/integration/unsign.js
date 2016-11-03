const test = require('tap').test;
const Auth = require('../../index');

const cases = require('../fixtures/cases');

test('spec', function (t) {
    const a = new Auth();
    t.type(Auth, 'function');
    t.type(a, 'object');
    t.type(a.unsign, 'function');
    t.end();
});

test('valid', function (t) {
    const c = cases.valid;
    const a = new Auth(c.salt, c.secret);
    t.strictEqual(a.unsign(c.signed), c.unsigned);
    t.end();
});

test('invalid salt', function (t) {
    const c = cases.invalidSalt;
    const a = new Auth(c.salt, c.secret);
    t.strictEqual(a.unsign(c.signed), c.unsigned);
    t.end();
});

test('invalid secret', function (t) {
    const c = cases.invalidSecret;
    const a = new Auth(c.salt, c.secret);
    t.strictEqual(a.unsign(c.signed), c.unsigned);
    t.end();
});

test('invalid token', function (t) {
    const c = cases.invalidToken;
    const a = new Auth(c.salt, c.secret);
    t.strictEqual(a.unsign(c.signed), c.unsigned);
    t.end();
});

test('missing token', function (t) {
    const c = cases.missingToken;
    const a = new Auth(c.salt, c.secret);
    t.strictEqual(a.unsign(c.signed), c.unsigned);
    t.end();
});
