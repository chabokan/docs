---
title: "آموزش تنظیم متغیرها در Wordpress"
icon: "faCode"
sidebar_label: "تنظیم متغیرها (env)"
description: "در بعضی موارد نیاز هست تا تنظیمات داخل فایل wp-config.php را تغییر دهید و یا به متغییر هایی از خارج از سطح کد نیاز داشته باشید. در این صورت می توانید از متغییر های محیطی نمایش داده شده در تنظیمات سرویس وردپرس چابکان استفاده نمایید."
---

# تنظیم متغیرها (env) در Wordpress
---

در بعضی موارد نیاز هست تا تنظیمات داخل فایل `wp-config.php` را تغییر دهید و یا به متغییر هایی از خارج از سطح کد نیاز داشته باشید. در این صورت می توانید از متغییر های محیطی نمایش داده شده در تنظیمات سرویس وردپرس چابکان استفاده نمایید.

به صورت پیش فرض متغییر های زیر در فایل `wp-config.php` وردپرس شما استفاده می شوند که می توانید آن ها را از تنظیمات سرویس تغییر دهید.

متغییر زیر پیشوند جداول وردپرس را مشخص می کند:

```properties
# name : value

WORDPRESS_TABLE_PREFIX : wp_
```

متغییر زیر وضعیت دیباگ وردپرس را مشخص می کند:

```properties
# name : value

WORDPRESS_DEBUG : true
```

متغییر زیر هاست دیتابیس وردپرس را مشخص می کند:

```properties
# name : value

WORDPRESS_DB_HOST : services.irnx.chabokan.net:34566
```

متغییر زیر نام کاربری دیتابیس وردپرس را مشخص می کند:

```properties
# name : value

WORDPRESS_DB_USER : root
```

متغییر زیر رمزعبور دیتابیس وردپرس را مشخص می کند:

```properties
# name : value

WORDPRESS_DB_PASSWORD : passwrod
```

متغییر زیر نام دیتابیس وردپرس را مشخص می کند:

```properties
# name : value

WORDPRESS_DB_NAME : mysite
```

---
<a href="https://hub.chabokan.net/fa/services/create/wordpress" ><img src="https://s1.chabokan.net/docs/images/wordpress-docs-banner-1.jpg" /></a>