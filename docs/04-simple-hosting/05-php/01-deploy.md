---
title: "آموزش استقرار PHP"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه `PHP` را در هاست php به شما آموزش دهیم."
---

# استقرار اولیه PHP
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه `PHP` را در [هاست php](https://chabokan.net/cloud-hosting/php/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `PHP` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `PHP` می سازیم.

![نحوه استقرار PHP در چابکان](https://s1.chabokan.net/docs/gifs/php-install.gif)

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

## ورژن های php

سرویس `php` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/php/more/#تغییر-ورژن-php) مراجعه نمایید.

import Versions from './_versions.md';

<Versions />

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست php به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/php"
img="https://s1.chabokan.net/docs/images/php-banner.png"
/>