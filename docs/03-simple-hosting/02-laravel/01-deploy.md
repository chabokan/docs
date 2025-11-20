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

![](https://s1.chabokan.net/docs/gifs/laravel-install.gif)

import Deploy from '/docs/08-deploy/_deploy.md';

<Deploy />

:::tip نکته

برای نصب پکیج های برنامه خود کافیست آنها را در `package.json` قرار دهید تا به صورت خودکار در سرویس شناسایی و نصب شود، برای اجرا برنامه نیز نیازی به اجرای دستور `composer` نیست و به صورت خودکار برنامه شما بعد از دیپلوی شدن در چابکان اجرا می شود.

:::

## ورژن های Laravel

سرویس `Laravel` در چابکان از ورژن های زیر پشتیبانی میکند:

import Versions from './_versions.md';

<Versions />

همچنین میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر PHP را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/laravel/more/#تغییر-ورژن-laravel) مراجعه نمایید.

import PhpVersions from '/docs/03-simple-hosting/05-php/_versions.md';

<PhpVersions />

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست Laravel به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

import Features from '/docs/11-features/_features.md';

<Features />

---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>