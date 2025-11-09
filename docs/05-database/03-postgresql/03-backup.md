---
title: "آموزش Backup از دیتابیس PostgreSQL"
icon: "faServer"
sidebar_label: "نحوه ‌Backup و Restore"
description: "در ادامه میخواهیم آموزش نحوه ‌Backup و Restore در سرویس ابری پوستگر اس کیو ال را به شما آموزش دهیم."
---

# نحوه ‌Backup و Restore در PostgreSQL
---

در ادامه میخواهیم آموزش نحوه ‌Backup و Restore را در سرویس [دیتابیس پوستگر اس کیو ال](https://chabokan.net/services/postgresql/) به شما آموزش دهیم.

برای تهیه backup از دیتابیس PostgreSQL خود میتوانید به دلخواه یکی از روش های زیر را استفاده نمایید و همچنین برای بازگردانی backup نیز اقدام فرمایید.


## بکاپ پنل چابکان

برای بکاپ و بازگردانی دیتابیس در **سرویس چابکان** میتوانید از این روش استفاده نموده تا از دیتای خود بکاپ گرفته و یا دیتای تایم مد نظر خود را بازگردانی نمایید.


### ایجاد بکاپ از دیتابیس
برای گرفتن بک آپ از سرویس PostgreSQL میتوانید در داشبورد سرویس PostgreSQL خود به قسمت بکاپ ها مراجعه کرده و بر روی گزینه ی ایجاد بک آپ کلیک نمایید تا عملیات بک آپ سرویس شما توسط چابکان انجام شود.

![](https://s1.chabokan.net/docs/images/database_backup_2.jpg)

### بازگردانی
همانطور که مشاهده میکنید امکان دانلود و بازگردانی بک آپ برای شما فراهم گردیده است که میتوانید بکاپ سرویس خود را دانلود فرمایید و یا بکاپ تاریخ موجود سرویس را از طریق دکمه ی بازگردانی Restore کنید که سرویس به آن تاریخ Restore می شود.

## بکاپ پنل سرویس PGadmin

ابتدا سرویس جانبی Pgadmin را از داشبورد سرویس دیتابیس خود فعال نمایید (مدتی صبر کرده تا سرویس به طور کامل ساخته شود) و سپس وارد آن شوید.


:::caution توجه

عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.

:::

![](https://s1.chabokan.net/docs/images/pgadmin_connect.png)

بعد از فعال کردن، اطلاعات مربوط برای ورود به دیتابیس مانند تصویر زیر در قسمت سرویس های جانبی ایجاد می گردد که با کلیک بر روی مشاهده pgadmin می توانید وارد صفحه مربوطه شده و پس از وارد کرد نام کاربری و پسورد به دیتابیس خود وارد شوید.

![](https://s1.chabokan.net/docs/images/pgadmin_login_connect_2-edited-1.png)

سپس روی گزینه ی add new server کلیک کنید.

![](https://s1.chabokan.net/docs/images/odoo_1-edited.jpg)

حالا اطلاعات را مانند نمونه وارد فرمایید.

#### سربرگ General:

name: نام دلخواه

![](https://s1.chabokan.net/docs/images/Screenshot-1402-06-04-at-4.20.22-PM-1.png)

#### سربرگ Connection:

همانند مشخصات سرویس postgresql این قسمت را کامل کرده و سپس روی گزینه ی save کلیک می نمایید.

```properties
Host name/address: Host
Port: Port
Maintenance database: Database name
Username: User
Password: Password
```

![](https://s1.chabokan.net/docs/images/odoo_2.jpg)

### ایجاد بکاپ از دیتابیس
برای ایجاد بکاپ می توانید بر روی دیتابیس خود راست کلیک نموده و سپس بر روی گزینه بکاپ کلیک نمایید

![](https://s1.chabokan.net/docs/images/Screenshot-1402-06-04-at-4.58.39-PM-edited.png)

سپس در قسمت Filename نام بکاپ و در قسمت Format خروجی فرمت مورد نظر را وارد نمایید و روی گزینه بکاپ کلیک نمایید

![](https://s1.chabokan.net/docs/images/Screenshot-1402-06-04-at-4.58.49-PM-edited.png)

شما در تب Processes می توانید به تمام بکاپ ها دسترسی داشته باشید و بعد از انتخاب بکاپ مورد نظر روی ایکون View details مانند تصویر زیر کلیک نمایید

![](https://s1.chabokan.net/docs/images/Screenshot-1402-06-04-at-5.11.07-PM-edited.png)

سپس روی آیکون Storage Manager کلیک کرده (همانند تصویر زیر)

![](https://s1.chabokan.net/docs/images/pgadminasd.png)

در نهایت روی دانلود مانند تصویر زیر کلیک کرده تا از بکاپ خود خروجی بگیرید

![](https://s1.chabokan.net/docs/images/Screenshot-1402-06-04-at-5.11.28-PM-edited.png)

### بازگردانی
بعد از ایجاد دیتابیس خود روی دیتابیس راست کلیک نمایید سپس بر گزینه Restore کلیک نمایید

![](https://s1.chabokan.net/docs/images/Restore-1.png)

سپس روی گزینه Folder کیلیک نمایید

![](https://s1.chabokan.net/docs/images/Restore-2.png)

سپس روی گزینه Upload کلیک کرده و فایلی که در مرحله قبل Backup گرفتید را از سیستم خود آپلود نمایید

![](https://s1.chabokan.net/docs/images/Restore-3.png)

بعد از این که فایل مورد نظر را آپلود کردید مانند تصویر زیر اضافه می شود روی فایل کلیک کرده سپس روی گزینه Select کلیک نمایید

![](https://s1.chabokan.net/docs/images/Restore-4.png)

بعد از مرحله بالا مانند تصویر زیر در قسمت Filename بکاپ شما اضافه می شود بعد از کلیک روی گزینه Restore، بکاپ شما بازگردانی می شود

![](https://s1.chabokan.net/docs/images/Restore-5.png)

---
<a href="https://hub.chabokan.net/fa/services/create/postgresql" ><img src="https://s1.chabokan.net/docs/images/postgresql-banner.png" /></a>