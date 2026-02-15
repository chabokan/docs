---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه Hugo را به شما آموزش دهیم"
---

# استقرار اولیه Hugo

در این بخش می خواهیم نحوه استقرار اولیه Hugo را به شما آموزش دهیم. Hugo یک فریمورک سریع و ساده برای ساخت وب‌سایت‌های ایستا است که مبتنی بر زبان Go و استفاده از **Static Site Generation (SSG)** طراحی شده است.
برای استقرار آن به صورت SSG در چابکان می‌توانید از [سرویس Static](https://chabokan.net/products/cloud-hosting/static/) استفاده کنید.

:::tip درباره هاست Static بیشتر بدانید

برای آشنایی بیشتر با سرویس میزبانی آسان Static چابکان می‌توانید [این مستند](/simple-hosting/static/) را مطالعه بفرمائید.

:::

برای استقرار Hugo در هاست چابکان، ابتدا باید سرویس `Static` را ایجاد کنید. به منظور انجام این کار، به پنل کاربری خود مراجعه کرده و به قسمت "ساخت سرویس جدید" > "میزبانی آسان" > `Static` بروید.
![استقرار Hugo در چابکان](https://s1.chabokan.net/docs/images/static-docs-1.png)

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید با آپلود فایل‌های برنامه خود، Hugo را روی سرویس‌های میزبانی آسان چابکان مستقر کنید. برای آپلود فایل‌های برنامه، می‌توانید از یکی از روش‌های موجود استفاده کنید:

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

:::caution توجه
برای استقرار فریمورک `Hugo` روی سرویس `Static` در محیط توسعه خود ابتدا با دستور زیر پروژه را `build` کنید:

```shell
hugo
```

سپس محتوای پوشه‌ی `public` که شامل فایل‌های `html`، `js` و `css` است را آپلود کنید.

:::

حال سرویس شما آماده استفاده است و می‌توانید با مراجعه به دامنه‌ی خود در داشبورد سرویس، خروجی را مشاهده کنید و یا دامنه‌ی
اختصاصی خود را بر روی سرویس تنظیم نمایید. ([تنظیم دامنه](/features/domains/))

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/static"
img="https://s1.chabokan.net/docs/images/static-banner.png"
/>

