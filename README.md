# koay-ua

[![npm package](https://nodei.co/npm/koay-ua.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/koay-ua)

---

## Table of contents

  - [Installation](#installation)
  - [Usage](#usage)

---

## Installation

```bash
npm install --save koay-ua

# or

cnpm install --save koay-ua
```

---

## Usage

```javascript

const Koa = require('koa');
const ua = require('koay-ua');

const app = new Koa();

ua.middleware(app);
app.use((ctx) => {
  ctx.userAgent = ctx.parseUserAgent();
});

// or
app.use((ctx) => {
  ctx.userAgent = ua(ctx.headers['user-agent']);
});

```
