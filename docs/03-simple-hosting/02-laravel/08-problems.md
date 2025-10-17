---
title: "مشکلات احتمالی"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که در سرویس `Laravel` ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## ارور Call to undefined function Laravel

![](https://s1.chabokan.net/docs/images/laravel-migrate-error.jpg)

ارور **Call to undefined function Laravel\Prompts\shell_exec()** زمانی رخ میدهد که از shell_exec و یا exec استفاده کرده باشیم. به دلایل امنیتی این Function ها غیرفعال هستند.

یک فایل با نام `chabok-php.ini` در ریشه (root) فایل های سرویس خود ایجاد کنید و دستور زیر را در آن قرار دهید و بعد از ذخیره کردن فایل یکبار سرویس را ری استارت نمایید تا تغییرات بر روی سرویس اعمال شود.

```ini
disable_functions = system,passthru,proc_close,proc_open,dl,popen,show_source,posix_kill,posix_mkfifo,posix_getpwuid,posix_setpgid,posix_setsid,posix_setuid,posix_setgid,posix_seteuid,posix_setegid,posix_uname,mail
```

## خطای CORS در لاراول

در صورت برخورد با ارور CORS No Allow Credentials و یا CORS Missing Allow Header میتوانید از راه حل زیر استفاده نمایید.

برای حل مشکل میتوانید از [این پکیج](https://github.com/fruitcake/laravel-cors) استفاده نمایید و با استفاده از دستور زیر آنرا به پروژه خود اضافه نمایید.

```shell
composer require fruitcake/laravel-cors
```

سپس طبق [این مستندات](https://github.com/fruitcake/laravel-cors#global-usage) CORS را در برنامه خود فعال نمایید.


---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>