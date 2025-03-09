---
title: "آموزش استقرار Docker"
sidebar_label: "استقرار چندین پروژه (PM2)"
description: "در این بخش می خواهیم آموزش نحوه استقرار چندین پروژه `(PM2)` را در NodeJS به شما آموزش دهیم."
---

# استقرار چندین پروژه (PM2) در NodeJs
---

در این بخش می خواهیم آموزش نحوه استقرار چندین پروژه `(PM2)` را در [هاست  نود جی اس NodeJS](https://chabokan.net/cloud-hosting/nodejs/) به شما آموزش دهیم.


گاهی اوقات نیاز است تا چندین پروژه `Nodejs` را داخل یک سرویس استقرار دهید و از آن ها استفاده کنید. البته که اینکار از نظر ما یعنی پلتفرم ابری چابکان در برنامه های `Production` کار صحیحی نیست اما شما این امکان را دارد که با استفاده از ابزار `PM2` اینکار را انجام دهید.

## PM2 چیست

`PM2` یک ابزار کاربردی برای `Nodejs` می باشد که به شما کمک می کند برنامه های نوشته با `Nodejs` را اجرا و مدیریت کنید. برای نصب `PM2` کافیست دستور زیر را در محیط کنسول سیستم عامل خود وارد نمایید:

```bash
npm install -g pm2
```

## تنظیمات PM2 در سرویس

برای اجرا چندین پروژه با استفاده `PM2` ابتدا باید یک دایرکتوری ایجاد نمایید و سپس فایل با نام `ecosystem.config.js` برای قرار دادن تنظیمات `PM2` ایجاد نمایید. بعد از ایجاد فایل تنظیمات، باید دایرکتوری پروژه های خود را به دایرکتوری ایجاد شده درکنار فایل تنظیمات `PM2` انتقال دهید.

سپس مانند نمونه زیر می توانید فایل `ecosystem.config.js` را تنظیم نمایید:

```javascript
module.exports = {
  apps : [
        {
                name   : "nameofapplication1",
                cwd : "./pathtoapplcation1",
                script: "npm",
                args: "start",
                env:{
                        NODE_ENV: "production"
                    }
        },
        {
                name : "nameofapplication2",
                cwd: "./pathtoapplication2",
                script: "npm",
                args: "start",
                env: {
                        NODE_ENV: "production"
                     }
         }
]
}
```

## اجرا PM2 با سرویس

اگر تمام مراحل ذکر شده را به درستی انجام داده باشید، حالا می توانید با دستور زیر تمام برنامه های خود را اجرا نمایید:

```bash
pm2 start ecosystem.config.js
```

## تنظیمات استقرار روی چابکان

برای استقرار برنامه های `PM2` روی چابکان ابتدا باید با تنظیم متغییر محیطی `START_COMMAND` در تنظیمات سرویس دستور اجرا سرویس را به دستور موردنظر خود تغییر دهید:

```bash
# name : value
START_COMMAND : "pm2 start ecosystem.config.js"
```

تمام دستورات `PM2` در کنسول چابکان با استفاده از `sudo` قابل اجرا هستند.

## مشکلات احتمالی

در صورت برخورد با ارور `Not Found package.json file in /app` میتوانید یک فایل `package.json` ساده داخل پروژه خود قرار دهید تا برنامه به درستی شناسایی شود.

> [مستند **استقرار چندین پروژه (PM2)** در سرویس **Nodejs**](https://pm2.keymetrics.io/docs/usage/quick-start/)

---
<a href="https://hub.chabokan.net/fa/services/create/nodejs" ><img src="https://s1.chabokan.net/docs/images/nodejs-banner.png" /></a>