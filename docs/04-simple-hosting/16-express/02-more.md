---
title: "نکات آموزشی Express"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست Express به شما آموزش دهیم."
---

# نکات تکمیلی Express
---

در این بخش می خواهیم نکات تکمیلی را در [هاست Express](https://chabokan.net/services/express-js/) به شما آموزش دهیم.

## تغییر دستور نصب

با تنظیم متغییر `NPM_INSTALL_COMMAND` در بخش تنظیمات سرویس، می توانید دستور نصب مورد نظر خودتان را معرفی نمایید.

```properties
# name : value

NPM_INSTALL_COMMAND : "yarn install"
```

## تغییر پورت پیشفرض

سرویس `Express` چابکان به صورت پیشفرض پورت `3000` را برای برنامه شما در نظر می گیرد و اگر برنامه شما روی این پورت اجرا شود آنرا نمایش می دهد. اما اگر شما پورت دیگری را برای برنامه خود انتخاب کرده اید، می توانید آن را از طریق داشبورد سرویس، قسمت پورت ها تغییر دهید.

## اجرا مداوم یک فایل در برنامه

در صورتی که نیاز دارید در برنامه ی خود فایل خاصی همیشه در حال اجرا باشد، میتوانید در فایل `package.json` سرویس خود `scripts` برنامه با نام `start` رو با دستور خودتون مقدار دهی کنید.

## ارور ossl

در صورتی که ارور `ossl` را دریافت نمودید، میتوانید با اضافه کردن متغیر محیطی زیر در تنظیمات سرویس خود این مشکل را برطرف نمایید.

```properties
# name: value

NODE_OPTIONS: --openssl-legacy-provider
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

## تغییر دستور build

برای تغییر دستور build در سرویس خود، می توانید از طریق فایل `package.json`، مقدار دستور build را با دستور مورد نظر جایگزین فرمایید.

```json
"scripts": {
    ...
    "build": "your-build-command",
    ...
```

## ران کردن prisma

برای ران کردن کافیست تا مسیر فایل `schema.prisma` را در فایل `package.json` قسمت script دستور build قرار داده و آنرا ویرایش بفرمایید.

## تغییر ورژن Express

سرویس های Express چابکان به صورت پیشفرض با استفاده از آخرین ورژن LTS نود جی اس اجرا می شود که البته شما می توانید ورژن Nodejs خود را از طریق داشبورد سرویس، قسمت تنظیمات تغییر دهید.

```text
node versions:

- 22
- 20
- 18
- 16
- 14
```

![تغییر ورژن سرویس ExpressJS چابکان](https://s1.chabokan.net/docs/images/express-node-version1.png)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/express"
img="https://s1.chabokan.net/docs/images/express-banner.png"
/>