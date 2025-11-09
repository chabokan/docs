---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## خطای CORS در نست

در صورت برخورد با ارور `CORS No Allow Credentials` و یا `CORS Missing Allow Header` میتوانید از راه حل زیر استفاده نمایید.

برای رفع این خطا میبایست مقادیر `origin` و `methods` را در تنظیمات `CORS` بررسی نمایید. کد زیر نمونه‌ای از تنظیمات صحیح `CORS` است:

```javascript
app.enableCors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
});
```

> - origin: این پارامتر مشخص می‌کند که چه دامنه‌هایی می‌توانند به `API` شما دسترسی داشته باشند. در مثال بالا، `*` به معنی این است که همه دامنه‌ها می‌توانند به `API` شما دسترسی داشته باشند.

> - methods: این پارامتر مشخص می‌کند که چه روش‌های `HTTP` (مانند `GET`، `POST`، `PUT` و غیره) برای `API` شما مجاز هستند. در مثال بالا، تمام روش‌های `HTTP` مجاز هستند.

---
<a href="https://hub.chabokan.net/fa/services/create/nest" ><img src="https://s1.chabokan.net/docs/images/nest-banner.png" /></a>