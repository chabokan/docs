---
title: "مشکلات احتمالی"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## مشکل بالا نیامدن سرویس و ERR_OSSL_EVP

![](https://s1.chabokan.net/docs/images/error-nodejs-1.jpg)

در صورتی که سرویس شما دارای ارور `502` بود و در لاگ های خود ارور `OSSL` را مشاهده نمودید، میتوانید با روش زیر این مشکل را برطرف نمایید. با اضافه کردن متغیر محیطی زیر در قسمت تنظیمات سرویس خود این مشکل را برطرف نمایید.

```properties
# name = value

NODE_OPTIONS = --openssl-legacy-provider
```

## مشکل Client does not support authentication

![](https://s1.chabokan.net/docs/images/error-nodejs-2.jpg)

در صورتی که برنامه با مشکل در اتصال به پایگاه داده برخورد کرد و یا با ارور `ER_NOT_SUPPORTED_AUTH_MODE` و یا `Handshake.ErrorPacket` مواجه شدید میتوانید از روش زیر برای رفع این مشکل استفاده بفرمایید.

برای رفع این مشکل میبایست به جای استفاده از پکیج `mysql` از پکیج `mysql2` استفاده نمایید. برای این کار کافیست این پکیج را نصب نمایید:

```shell
npm install mysql2
```

سپس، کد اتصال خود را تغییر دهید و از `mysql2` به جای `mysql` استفاده کنید:

```javascript
const mysql = require('mysql2');
```

## مشکل CORS در نود جی اس

در صورت برخورد با ارور CORS No Allow Credentials و یا CORS Missing Allow Header میتوانید از راه حل زیر با توجه به framework سرویس خود استفاده نمایید.

### Express

در صورتی که از Express استفاده مینمایید ابتدا میبایست [cors](https://www.npmjs.com/package/cors) را نصب نمایید.

```shell
 npm install cors
```

و سپس مانند نمونه زیر میتوانید از آن استفاده نمایید:

```javascript
const express = require('express');
const app = express();

const allowedOrigin = 'https://domain';

app.use((req, res, next) => {
  // تنظیمات CORS
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// تعریف مسیر مورد نظر
app.get('/your-path', (req, res) => {
  // ارسال پاسخ درخواست
});

app.listen(3000, () => {
  console.log('سرور اجرا شد در درگاه 3000');
});
```

> — مقالات مرتبط:
>
> — [CORS Installation documentation](https://expressjs.com/en/resources/middleware/cors.html)

### Fastify

در صورتی که از Fastify استفاده مینمایید میبایست افزونه‌ی fastify-express و [cors](https://www.npmjs.com/package/cors) را به صورت زیر در برنامه خود معرفی نمایید.

```javascript
await fastify.register(require('fastify-express'))
fastify.use(require('cors')())
```

## ارور ossl

در صورتی که ارور `ossl` را دریافت نمودید، میتوانید با اضافه کردن متغیر محیطی زیر در تنظیمات سرویس خود این مشکل را برطرف نمایید.

```properties
# name: value

NODE_OPTIONS : --openssl-legacy-provider
```

## ارور Client does not support authentication

در صورت برخورد با این ارور میبایست به جای استفاده از پکیج `mysql` از پکیج `mysql2` استفاده نمایید. برای این کار کافیست این پکیج را نصب نمایید:

```shell
npm install mysql2
```
سپس، کد اتصال خود را تغییر دهید و از `mysql2` به جای `mysql` استفاده کنید:

```javascript
const mysql = require('mysql2');
```


---
<a href="https://hub.chabokan.net/fa/services/create/nodejs" ><img src="https://s1.chabokan.net/docs/images/nodejs-banner.png" /></a>