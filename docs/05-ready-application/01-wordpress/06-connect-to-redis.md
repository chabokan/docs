---
title: "آموزش اتصال Wordpress به Redis"
icon: "faBolt"
sidebar_label: "اتصال به Redis"
description: "برای اتصال Redis به وردپرس میبایست مراحل زیر را به ترتیب طی کرده تا اتصال سرویس وردپرس شما به Redis تکمیل شود."
---

# اتصال Wordpress به Redis
---

برای اتصال `Redis` به وردپرس میبایست مراحل زیر را به ترتیب طی کرده تا اتصال سرویس وردپرس شما به `Redis` تکمیل شود.

## نصب و فعالسازی افزونه Redis

ابتدا وارد پیشخوان وردپرس خود شوید و سپس به بخش **افزونه‌ها** رفته و **افزودن جدید** را کلیک کنید.

در قسمت جستجو، `Redis` را جستجو کرده و افزونه `Redis Object Cache` را پیدا کنید و افزونه را نصب و فعال نمایید.

![](https://s1.chabokan.net/docs/images/redis-connect-1.jpg)

## پیکربندی سرور Redis

ابتدا سرویس [دیتابیس ابری Redis](https://docs.chabokan.net/database/redis/install/) خود را بسازید. سپس در سرویس وردپرس خود به قسمت مدیریت فایل ها رفته و فایل `wp-config.php` را انتخاب کرده و گزینه `Edit` را کلیک کنید.

![](https://s1.chabokan.net/docs/images/redis-connect-2.jpg)

کامند های زیر را در `wp-config.php` خود وارد نمایید و سپس بر روی ذخیره تغییرات کلیک نمایید.

کامند های زیر را در فایل `wp-config.php` خود بعد از معرفی دیتابیس وارد نموده و از گذاشتن آنها در آخر فایل `wp-config.php` خودداری نمایید در غیر این صورت در وردپرس با ارور عدم اتصال `Redis` رو به رو خواهید شد.

```bash
define( 'WP_REDIS_HOST', 'آدرس_سرور_Redis' );
define( 'WP_REDIS_PORT', پورت_Redis );
define('WP_REDIS_PASSWORD', 'رمزعبور_Redis');
define( 'WP_REDIS_PREFIX', 'نام دلخواه' );
define( 'WP_REDIS_DATABASE', 0 );
define( 'WP_REDIS_TIMEOUT', 1 );
define( 'WP_REDIS_READ_TIMEOUT', 1 );
```

![](https://s1.chabokan.net/docs/images/redis-connect-3.jpg)

## تایید اتصال Redis

برای تأیید اتصال `Redis،` به افزونه `Redis Object Cache` مراجعه نمایید برای اینکار، به بخش **تنظیمات** در پیشخوان وردپرس بروید و `Redis` را انتخاب کنید و سپس در صفحه `Redis Object Cache`، گزینه `Enable object cache` را کلیک کنید.

![](https://s1.chabokan.net/docs/images/redis-connect-4.jpg)

در صورتی که همه موارد به درستی پیکربندی شده باشد، مقادیر زیر در صفحه شما به نمایش در می آید.

![](https://s1.chabokan.net/docs/images/redis-connect-5.jpg)

پس از اجرای مراحل فوق، ارتباط بین وردپرس و سرور `Redis` برقرار خواهد شد و وردپرس از `Redis` برای حافظه‌پنهان‌سازی و بهینه‌سازی استفاده خواهد کرد.

---
<a href="https://hub.chabokan.net/fa/services/create/wordpress" ><img src="https://s1.chabokan.net/docs/images/wordpress-docs-banner-1.jpg" /></a>