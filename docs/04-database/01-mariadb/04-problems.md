---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است در [دیتابیس ماریا دی بی](https://chabokan.net/services/mariadb/) با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## ارور max queries دیتابیس اشتراکی

```bash
User 'user' has exceeded the 'max_queries_per_hour' resource (current value: 300000)
```
در صورتی که با ارور `max_queries_per_hour` مواجه شدید، میبایست تا برطرف شدن محدودیت کوئری ها یک ساعت صبر نمایید. برای اینکه بتوانید بدون محدودیت از دیتابیس خود استفاده نمایید میبایست از دیتابیس اختصاصی `MariaDB` استفاده نمایید.

## پر شدن حجم هارد

![](https://s1.chabokan.net/docs/images/error-binlog-1.jpg)

در صورت پر شدن ناگهانی هارد سرویس دیتابیس `Mariadb` خود، میتوانید از طریق کنسول سرویس خود کامند زیر را اجرا نموده و در صورت مشاهده فایل های `binlog` میتوانید از روش گفته شده برای حذف آنها و خالی کردن فضای دیتابیس خود استفاده نمایید، در صورتی که از روش گفته شده استفاده نکنید ممکن است دیتای شما دچار آسیب شود.(قبل از هر گونه تغییر از طریق بخش بکاپ از دیتابیس خود پشتیبان تهیه نمایید.)


```bash
du -sh * --total
```

![](https://s1.chabokan.net/docs/images/mariadb-error-binlog-2.png)

حال میبایست در محیط کنسول سرویس، دستور زیر را با مشخصات دیتابیس خود تکمیل کرده و وارد `Mariadb Monitor` شده و سپس دستور `purge` را در محیط `Mariadb` وارد میکنیم تا `log` ها حذف شوند.

```bash
mariadb -h DB_HOST --port DB_PORT -u DB_USER -p'DB_PASSWORD' DB_NAME

# After log in to mysqlcli

PURGE BINARY LOGS BEFORE '2024-01-01 09:55:22';; // این تاریخ میبایست آخرین تاریخ مد نظر شما باشد.(2024-01-01 09:55:22)
```

![](https://s1.chabokan.net/docs/images/mariadb-error-binlog-1.png)

---
<a href="https://hub.chabokan.net/fa/services/create/mariadb" ><img src="https://s1.chabokan.net/docs/images/mariadb-banner.png" /></a>