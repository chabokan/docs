---
title: "مشکلات احتمالی"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

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

## خطای CORS در نکست

در صورت برخورد با ارور CORS No Allow Credentials و یا CORS Missing Allow Header میتوانید از راه حل زیر استفاده نمایید.

ابتدا میبایست [cors](https://www.npmjs.com/package/cors) را نصب نمایید.

```shell
 npm install cors
```

و سپس مانند نمونه زیر میتوانید از آن در برنامه استفاده نمایید:

```javascript
import Cors from 'cors'

const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  await runMiddleware(req, res, cors)

  res.json({ message: 'Works.' })
}

export default handler
```

> — مقالات مرتبط:
>
> — [CORS Installation documentation](https://expressjs.com/en/resources/middleware/cors.html)

---
<a href="https://hub.chabokan.net/fa/services/create/next/" ><img src="https://s1.chabokan.net/docs/images/next-banner.png" /></a>