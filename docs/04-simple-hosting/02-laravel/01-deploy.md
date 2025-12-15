---
title: "آموزش استقرار Laravel"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار برنامه لاراول را در هاست لاراول laravel به شما آموزش دهیم."
---

# استقرار اولیه Laravel
---

در این بخش می خواهیم آموزش نحوه استقرار برنامه لاراول را در [هاست لاراول laravel](https://chabokan.net/cloud-hosting/php/laravel/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Laravel` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `Laravel` می سازیم.

![نحوه استقرار Laravel در چابکان](https://s1.chabokan.net/docs/gifs/laravel-install.gif)

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

:::tip نکته

برای نصب پکیج های برنامه خود کافیست آنها را در `package.json` قرار دهید تا به صورت خودکار در سرویس شناسایی و نصب شود، برای اجرا برنامه نیز نیازی به اجرای دستور `composer` نیست و به صورت خودکار برنامه شما بعد از دیپلوی شدن در چابکان اجرا می شود.

:::

## ورژن های Laravel

سرویس `Laravel` در چابکان از ورژن های زیر پشتیبانی میکند:

import Versions from './_versions.md';

<Versions />

همچنین میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر PHP را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/laravel/more/#تغییر-ورژن-laravel) مراجعه نمایید.

import PhpVersions from '/docs/04-simple-hosting/05-php/_versions.md';

<PhpVersions />

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="Laravel"
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
buyLink="https://hub.chabokan.net/fa/services/create/laravel"
img="https://s1.chabokan.net/docs/images/laravel-banner.png"
/>