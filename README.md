## scratch-auth
#### Utilities for authenticating Scratch users.

## Installation
```bash
npm install git@github.com:LLK/scratch-auth.git
```

## Basic Use
```js
const Auth = require('scratch-auth');
const a = new Auth('salt', 'secret');

const unsigned = a.unsign('sometoken');
const unpacked = a.unpack(unsigned);
```
