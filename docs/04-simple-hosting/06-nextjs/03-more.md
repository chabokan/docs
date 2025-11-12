---
title: "نکات آموزشی NextJs"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست نکست جی اس Next به شما آموزش دهیم."
---

# نکات تکمیلی NextJs
---

در این بخش می خواهیم نکات تکمیلی را در [هاست نکست جی اس Next](https://chabokan.net/cloud-hosting/nodejs/next/) به شما آموزش دهیم.

## تغییر دستور نصب

با تنظیم متغییر `NPM_INSTALL_COMMAND` در بخش تنظیمات سرویس، می توانید دستور نصب مورد نظر خودتان را معرفی نمایید.

```properties
# name : value

NPM_INSTALL_COMMAND : "yarn install"
```

## تغییر دستور ساخت

برای تغییر دستور `build` در سرویس خود، می توانید از طریق فایل `package.json`، مقدار دستور `build` را با دستور مورد نظر جایگزین فرمایید.

```json
"scripts": {
    ...
    "build": "your-build-command",
    ...
```

## تغییر پورت پیشفرض

سرویس `NextJs` چابکان به صورت پیشفرض پورت `3000` را برای برنامه شما در نظر می گیرد و اگر برنامه شما روی این پورت اجرا شود آنرا نمایش می دهد. اما اگر شما پورت دیگری را برای برنامه خود انتخاب کرده اید، می توانید آن را از طریق داشبورد سرویس، قسمت پورت ها تغییر دهید.

## اجرا مداوم یک فایل در برنامه

در صورتی که نیاز دارید در برنامه ی خود فایل خاصی همیشه در حال اجرا باشد، میتوانید در فایل `package.json` سرویس خود `scripts` برنامه با نام `start` رو با دستور خودتون مقدار دهی کنید.

## ران کردن prisma

برای ران کردن کافیست تا مسیر فایل `schema.prisma` را در فایل `package.json` قسمت script دستور build قرار داده و آنرا ویرایش بفرمایید.

## تغییر ورژن NextJs

سرویس های `NextJs` چابکان به صورت پیشفرض با استفاده از آخرین ورژن `LTS` نود جی اس اجرا می شود که البته شما می توانید ورژن `Nodejs` خود را از طریق داشبورد سرویس، قسمت تنظیمات تغییر دهید.

```text
node versions:

- 22
- 20
- 18
- 16
- 14
```

![تغییر ورژن سرویس NextJS چابکان](https://s1.chabokan.net/docs/images/next-node-version.png)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/next/"
img="https://s1.chabokan.net/docs/images/next-banner.png"
/>