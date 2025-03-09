---
title: "مشکلات احتمالی"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است در [دیتابیس مای اس کیو ال](https://chabokan.net/services/mysql/) با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.


## ارور max queries دیتابیس اشتراکی

```bash
User 'user' has exceeded the 'max_queries_per_hour' resource (current value: 300000)
```
در صورتی که با ارور `max_queries_per_hour` مواجه شدید، میبایست تا برطرف شدن محدودیت کوئری ها یک ساعت صبر نمایید. برای اینکه بتوانید بدون محدودیت از دیتابیس خود استفاده نمایید میبایست از دیتابیس اختصاصی `Mysql` استفاده نمایید.


## پر شدن حجم هارد

![](https://s1.chabokan.net/docs/images/error-binlog-1.jpg)

در صورت پر شدن ناگهانی هارد سرویس دیتابیس `Mysql` خود، میتوانید از طریق کنسول سرویس خود کامند زیر را اجرا نموده و در صورت مشاهده فایل های `binlog` میتوانید از روش گفته شده برای حذف آنها و خالی کردن فضای دیتابیس خود استفاده نمایید، در صورتی که از روش گفته شده استفاده نکنید ممکن است دیتای شما دچار آسیب شود.(قبل از هر گونه تغییر از طریق بخش بکاپ از دیتابیس خود پشتیبان تهیه نمایید.)


```bash
du -sh * --total
```

![](https://s1.chabokan.net/docs/images/error-binlog-2.jpg)

حال میبایست در محیط کنسول سرویس، دستور زیر را با مشخصات دیتابیس خود تکمیل کرده و وارد `Mysql CLI` شده و سپس دستور `purge` را در محیط `mysql` وارد میکنیم تا `binlog` ها حذف شوند.

```bash
mysql -u DB_USER -p'DB_PASSWORD' --host DB_HOST --port DB_PORT

# After log in to mysqlcli

PURGE BINARY LOGS TO 'binlog.000026'; // این عدد میبایست آخرین عدد نشان داده شده در لیست بالا باشد.(binlog.000026)
```

![](https://s1.chabokan.net/docs/images/error-binlog-3.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/mysql" ><img src="https://s1.chabokan.net/docs/images/mysql-banner.png" /></a>