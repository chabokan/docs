---
title: "آموزش استقرار PHP"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه `PHP` را در هاست php به شما آموزش دهیم."
---

# استقرار اولیه PHP
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه `PHP` را در [هاست php](https://chabokan.net/cloud-hosting/php/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `PHP` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `PHP` می سازیم.

![](https://s1.chabokan.net/docs/gifs/php-install.gif)

سرویس های میزبانی آسان چابکان به روش های مختلفی امکان استقرار را دارا هستند، این شما هستید که می توانید انتخاب کنید کدام روش برای شما مناسب تر می باشد، برای آشنایی با هر کدام از روش های استقرار می توانید از لیست زیر اقدام به مطالعه بیشتر بفرمایید:

> —  [استقرار از طریق CLI (پیشنهادی)](https://docs.chabokan.net/deploy/cli)
>
> —  [استقرار از طریق FTP](https://docs.chabokan.net/deploy/ftp/)
>
> —  [استقرار از طریق git](https://docs.chabokan.net/deploy/git/)
>
> —  [استقرار از طریق فایل منیجر](https://docs.chabokan.net/deploy/file-manager/)

اگر سرویس خود را از طریق `CLI` چابکان استقرار داده اید حتما صفحه [تنظیمات مسیر های دائمی](https://docs.chabokan.net/features/permanent-path/) را نیز مطالعه بفرمایید که هم با فرآیند `deploy` از طریق `CLI` بیشتر آشنا شوید و هم مشکلی برایتان ایجاد نشود.

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

---
<a href="https://hub.chabokan.net/fa/services/create/php" ><img src="https://s1.chabokan.net/docs/images/php-banner.png" /></a>