---
title: "آموزش اتصال سرویس Wordpress به دیتابیس"
sidebar_label: "اتصال به دیتابیس"
description: "سرویس wordpress کافی است بعد از ساخت سرویس دیتابیس(mariadb/mysql) مشخصات سرویس دیتابیس را در قسمت تنظیمات سرویس wordpress خود وارد کنید."
---

# اتصال Wordpress به دیتابیس
---

برای اتصال سرویس دیتابیس خود به سرویس wordpress کافی است بعد از ساخت سرویس دیتابیس(mariadb/mysql) مشخصات سرویس دیتابیس را در قسمت تنظیمات سرویس wordpress خود وارد کنید. حتما تنظیمات فایل wp-config خود را چک بفرمایید اگر متغییر ها به صورت دستی تغییر کرده بودند در این قسمت نیز مشخصات سرویس دیتابیس خود را وارد کنید، سپس سرویس خود را یکبار ری استارت کرده تا تنظیمات برای شما اعمال شود.

```
WORDPRESS_DB_HOST = پورت:سرور
WORDPRESS_DB_NAME = نام دیتابیس
WORDPRESS_DB_USER = نام کاربری
WORDPRESS_DB_PASSWORD = رمزعبور
```

![](https://s1.chabokan.net/docs/images/wordpress_database-2-1.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/wordpress" ><img src="https://s1.chabokan.net/docs/images/wordpress-docs-banner-1.jpg" /></a>