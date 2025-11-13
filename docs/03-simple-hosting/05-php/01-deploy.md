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

![](https://s1.chabokan.net/docs/gifs/php-install.gif)

import Deploy from '/docs/08-deploy/_deploy.md';

<Deploy />

## ورژن های php

سرویس `php` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](https://docs.chabokan.net/simple-hosting/php/more/#تغییر-ورژن-php) مراجعه نمایید.

```text
php versions:

- php 7.1         - php fpm 7.1
- php 7.2         - php fpm 7.2
- php 7.3         - php fpm 7.3
- php 7.4         - php fpm 7.4
- php 8.0         - php fpm 8.0
- php 8.1         - php fpm 8.1
- php 8.2         - php fpm 8.2
- php 8.3         - php fpm 8.3
```

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست php به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](https://docs.chabokan.net/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

import Features from '/docs/11-features/_features.md';

<Features />

---
<a href="https://hub.chabokan.net/fa/services/create/php" ><img src="https://s1.chabokan.net/docs/images/php-banner.png" /></a>