---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Fastify را به شما آموزش دهیم"
---

# استقرار اولیه Fastify
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Fastify را به شما آموزش دهیم. Fastify یک فریمورک مبتنی بر Javascriptاست که
برای استقرار آن در چابکان می‌توانید از [سرویس NodeJS](https://chabokan.net/products/cloud-hosting/nodejs/) استفاده کنید.

:::tip درباره هاست NodeJS بیشتر بدانید

برای آشنایی بیشتر با سرویس میزبانی آسان NodeJS چابکان می‌توانید [این مستند](/simple-hosting/nodejs/) را مطالعه بفرمائید.

:::

در این بخش می خواهیم آموزش نحوه استقرار اولیه Fastify را به شما آموزش دهیم. همانطور قبل‌تر اشاره کردیم ابتدا باید سرویس
`NodeJS` را ایجاد کنید. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس
جدید > میزبانی آسان > `NodeJS` میرویم.
![استقرار Fastify در چابکان](https://s1.chabokan.net/docs/images/nodejs-docs-1.png)

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید با آپلود سورس‌کد برنامه خود `Fastify` را روی سرویس‌های
میزبانی آسان چابکان مستقر کنید. برای آپلود سورس کد برنامه می‌توانید از یکی از روش‌های موجود استفاده کنید:

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

این فریمورک را می‌توانید با استفاده از دستور زیر به پروژه خود اضافه کنید:

```shell
npm install fastify
```

دقت کنید که باید وب‌سرور fastify را مانند نمونه به آدرس `0.0.0.0` متصل کنید تا در سرویس‌های چابکان برنامه شما در دسترس
قرار بگیرد:

```js
const fastify = require('fastify')({
    logger: true
})

fastify.get('/', function (request, reply) {
    reply.send({hello: 'world'})
})


fastify.listen(
    {port: 3000, host: '0.0.0.0'},
    function (err, address) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
        fastify.log.info(`Server is now listening on ${address}`)
    })
```

همچنین با توجه به اینکه سرویس‌های `NodeJS` چابکان به صورت پیشفرض پورت `3000` را باز کرده‌اند می‌توانید از این پورت در
برنامه خود استفاده کنید اما می‌توانید از پورت‌های دیگر هم استفاده کنید که حتما باید در قسمت پورت‌های سرویس مشخص کنید.
برای آگاهی بیشتر از این فرایند این [مستند](/features/ports) را مطالعه بفرمائید.

پس از تنظیم پورت و آدرس آی‌پی `0.0.0.0` سرویس شما آماده استفاده است و می‌توانید با مراجعه به دامنه‌ی خود در داشبورد
سرویس خروجی را مشاهده
کنید و یا دامنه‌ی اختصاصی خود را بر روی سرویس تنظیم نمایید.([تنظیم دامنه](/features/domains/))

## ورژن های NodeJs

سرویس `NodeJs` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب
نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/nodejs/more/#تغییر-ورژن-nodejs) مراجعه نمایید.

import Versions from '../../04-simple-hosting/04-nodejs/_versions.md';

<Versions />

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="NodeJS"
services={[
"mysql",
"mariadb"
]}
/>

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/nodejs"
img="https://s1.chabokan.net/docs/images/nodejs-banner.png"
/>