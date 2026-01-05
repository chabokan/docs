---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که در سرویس `Laravel` ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## ارور Call to undefined function Laravel

![مشکلات احتمالی در سرویس Laravel چابکان](https://s1.chabokan.net/docs/images/laravel-migrate-error.jpg)

ارور **Call to undefined function Laravel\Prompts\shell_exec()** زمانی رخ میدهد که از shell_exec و یا exec استفاده کرده باشیم. به دلایل امنیتی این Function ها غیرفعال هستند.

یک فایل با نام `chabok-php.ini` در ریشه (root) فایل های سرویس خود ایجاد کنید و دستور زیر را در آن قرار دهید و بعد از ذخیره کردن فایل یکبار سرویس را ری استارت نمایید تا تغییرات بر روی سرویس اعمال شود.

```ini
disable_functions = system,passthru,proc_close,proc_open,dl,popen,show_source,posix_kill,posix_mkfifo,posix_getpwuid,posix_setpgid,posix_setsid,posix_setuid,posix_setgid,posix_seteuid,posix_setegid,posix_uname,mail
```

## خطای CORS در لاراول

در صورتی که با خطاهای CORS No Allow Credentials یا CORS Missing Allow Header مواجه شدید، می‌توانید از راهکار زیر برای رفع مشکل استفاده کنید.

برای فعال‌سازی تنظیمات CORS، دستور زیر را اجرا نمایید:

```shell
php artisan config:publish cors
```

پس از اجرای این دستور، فایل cors.php در پوشه config پروژه ایجاد می‌شود. شما می‌توانید تنظیمات مربوط به CORS را در این فایل مطابق با نیاز پروژه خود پیکربندی کنید.

:::warning نسخه‌های قبل از `9.2`

در صورتی که از نسخه‌های لاراول پایین‌تر از 9.2 استفاده می‌کنید، لازم است تنظیمات CORS را به روش متفاوتی انجام دهید.

برای رفع این مشکل، می‌توانید از این پکیج
استفاده کرده و آن را با اجرای دستور زیر به پروژه خود اضافه نمایید:

برای حل مشکل میتوانید از [این پکیج](https://github.com/fruitcake/laravel-cors) استفاده نمایید و با استفاده از دستور زیر آنرا به پروژه خود اضافه نمایید.

```shell
composer require fruitcake/laravel-cors
```

سپس طبق [این مستندات](https://github.com/fruitcake/laravel-cors#global-usage) CORS را در برنامه خود فعال نمایید.

:::

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/laravel"
img="https://s1.chabokan.net/docs/images/laravel-banner.png"
/>