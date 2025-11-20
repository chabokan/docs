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

سرویس های میزبانی آسان چابکان به روش های مختلفی امکان استقرار را دارا هستند، این شما هستید که می توانید انتخاب کنید کدام روش برای شما مناسب تر می باشد، برای آشنایی با هر کدام از روش های استقرار می توانید از لیست زیر اقدام به مطالعه بیشتر بفرمایید:

> —  [استقرار از طریق CLI (پیشنهادی)](/deploy/cli)
>
> —  [استقرار از طریق FTP](/deploy/ftp/)
>
> —  [استقرار از طریق git](/deploy/git/)
>
> —  [استقرار از طریق فایل منیجر](/deploy/file-manager/)

اگر سرویس خود را از طریق CLI چابکان استقرار داده اید حتما صفحه [تنظیمات مسیر های دائمی](/features/permanent-path/) را نیز مطالعه بفرمایید که هم با فرآیند `deploy` از طریق `cli` بیشتر آشنا شوید و هم مشکلی برایتان ایجاد نشود.

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

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست Laravel به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/laravel"
img="https://s1.chabokan.net/docs/images/laravel-banner.png"
/>