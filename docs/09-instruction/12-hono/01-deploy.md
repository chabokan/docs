---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Hono را به شما آموزش دهیم"
---

# استقرار اولیه Hono
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Hono را به شما آموزش دهیم. Hono یک فریمورک مبتنی بر Javascript است که برای
استقرار آن در چابکان می‌توانید از [سرویس NodeJS](https://chabokan.net/products/cloud-hosting/nodejs/) استفاده کنید.

:::tip درباره هاست NodeJS بیشتر بدانید

برای آشنایی بیشتر با سرویس میزبانی آسان NodeJS چابکان می‌توانید [این مستند](/simple-hosting/nodejs/) را مطالعه بفرمائید.

:::

همانطور قبل‌تر اشاره کردیم ابتدا باید سرویس `NodeJS` را ایجاد کنید. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به
قسمت ساخت سرویس جدید > میزبانی آسان > `NodeJS` میرویم.

![استقرار Hono در چابکان](https://s1.chabokan.net/docs/images/nodejs-docs-1.png)

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید با آپلود سورس‌کد برنامه خود، `Hono` را روی سرویس‌های
میزبانی آسان چابکان مستقر کنید. برای آپلود سورس کد برنامه می‌توانید از یکی از روش‌های موجود استفاده کنید:

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

:::caution توجه
برای استقرار فریمورک `Hono` روی سرویس `NodeJS` باید آداپتور `NodeJS` را به پروژه‌تان اضافه کنید، برای این کار دستور زیر
را در شاخه اصلی پروژه خود اجرا کنید:

```shell
npm install @hono/node-server
```

همچنین مقدار `scripts.start` را در فایل `package.json` مانند زیر تنظیم کنید:

```json title="package.json"
{
  // other configs
  "scripts": {
    "start": "node dist/index.js"
  }
}
```

:::

فریمورک `Hono` به صورت پیشفرض روی پورت `300۰` فعال می‌شود و سرویس میزبانی آسان NodeJS چابکان نیز به صورت پیشفرض روی همین
پورت فعال است. اما برای تغییر پورت پیشفرض شما‌می‌توانید این [مستند](/features/ports) را مطالعه بفرمائید.

![استقرار Hono در چابکان](https://s1.chabokan.net/docs/images/hono-port.png)

پس از راه‌اندازی اولیه سرویس می‌توانید با مراجعه به دامنه‌ی خود در داشبورد سرویس، خروجی را مشاهده کنید و یا دامنه‌ی
اختصاصی خود را بر روی سرویس تنظیم نمایید.([تنظیم دامنه](/features/domains/))

## ورژن های NodeJs

سرویس `NodeJs` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب
نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/nodejs/more/#تغییر-ورژن-nodejs) مراجعه نمایید.

import Versions from '../../04-simple-hosting/04-nodejs/_versions.md';

<Versions />

:::caution دقت کنید
برای استفاده از `Hono` در هاست `NodeJS` باید حداقل از نسخه `18` استفاده کنید.
:::

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