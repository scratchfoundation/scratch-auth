## scratch-auth
#### Authentication utilities for Scratch

[![Build Status](https://travis-ci.org/LLK/scratch-auth.svg?branch=develop)](https://travis-ci.org/LLK/scratch-auth)
[![Coverage Status](https://coveralls.io/repos/github/LLK/scratch-auth/badge.svg?branch=develop)](https://coveralls.io/github/LLK/scratch-auth?branch=develop)
[![dependencies Status](https://david-dm.org/LLK/scratch-auth/status.svg)](https://david-dm.org/LLK/scratch-auth)
[![devDependencies Status](https://david-dm.org/LLK/scratch-auth/dev-status.svg)](https://david-dm.org/LLK/scratch-auth?type=dev)

## Installation
```bash
npm install scratch-auth
```

## Usage
```js
const Auth = require('scratch-auth');
const a = new Auth('salt', 'secret');

const unsigned = a.unsign('value:zyBNJHpGyml3X-RhCx0mbjLFzPs');
const unpacked = a.unpack(unsigned);
```

## Donate
We provide [Scratch](https://scratch.mit.edu) free of charge, and want to keep it that way! Please consider making a [donation](https://secure.donationpay.org/scratchfoundation/) to support our continued engineering, design, community, and resource development efforts. Donations of any size are appreciated. Thank you!
