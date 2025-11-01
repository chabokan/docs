---
title: "آموزش Backup از دیتابیس Mongodb"
icon: "faServer"
sidebar_label: "نحوه ‌Backup و Restore"
description: "در ادامه میخواهیم آموزش نحوه ‌Backup و Restore در سرویس ابری مونگو دی بی را به شما آموزش دهیم."
---

# نحوه ‌Backup و Restore در Mongodb
---

در ادامه میخواهیم آموزش نحوه ‌Backup و Restore را در سرویس [دیتابیس مونگو دی بی](https://chabokan.net/services/mongodb/) به شما آموزش دهیم.

برای تهیه backup از دیتابیس Mongodb خود میتوانید به دلخواه یکی از روش های زیر را استفاده نمایید و همچنین برای بازگردانی backup نیز اقدام فرمایید.

## بکاپ پنل چابکان

برای بکاپ و بازگردانی دیتابیس در سرویس چابکان میتوانید از این روش استفاده نموده تا از دیتای خود بکاپ گرفته و یا دیتای تایم مد نظر خود را بازگردانی نمایید.

### ایجاد بکاپ از دیتابیس
برای گرفتن بک آپ از سرویس Mongodb میتوانید در داشبورد سرویس Mongodb خود به قسمت بکاپ ها مراجعه کرده و بر روی گزینه ی ایجاد بک آپ کلیک نمایید تا عملیات بک آپ سرویس شما توسط چابکان انجام شود.

![](https://s1.chabokan.net/docs/images/database_backup_2.jpg)

### بازگردانی
همانطور که مشاهده میکنید امکان دانلود و بازگردانی بک آپ برای شما فراهم گردیده است که میتوانید بک آپ سرویس خود را دانلود فرمایید و یا یک آپ تاریخ موجود سرویس را از طریق دکمه ی بازگردانی Restore کنید که سرویس به آن تاریخ Restore می شود.

## ‌Backup و Restore از طریق MongoDB Compass

ابتدا نرم افزار MongoDB Compass دانلود و نصب نمایید.
وارد نرم افزار شده و طبق تصویر روی گزینه 1 و سپس 2 کلیک نمایید.

![](https://s1.chabokan.net/docs/images/mongodb-compass11.png)

اطلاعت داده شده در قسمت مشخصات سرویس خود را در کادر های مشخص شده وارد نمایید.

![](https://s1.chabokan.net/docs/images/mongodb-Compass22.png)

![](https://s1.chabokan.net/docs/images/mongodb-Compass333.png)

روی گزینه Connect کلیک نموده تا ارتباط شما با دیتابیس MongoDB برقرار شود.

از منو سمت چپ وارد config و سپس settings شوید در این قسمت میتوانید به راحتی اقدام به ‌Backup و Restore دیتابیس خود نمایید.

![](https://s1.chabokan.net/docs/images/mongodb-Compass411.png)

## بکاپ از طریق Mongodump

برای تهیه بکاپ با استفاده از Mongodump از دیتابیس ها و یا یک دیتابیس مورد نظر و یا بازگردانی بکاپ خود میتوانید از این روش استفاده نمایید.

### ایجاد بکاپ از دیتابیس
 
ابتدا به سرویس خود مراجعه نموده و وارد کنسول سرویس می شوید. سپس با استفاده از کامند زیر میتوانید از دیتابیس خود بک آپ تهیه نمایید. با توجه به مشخصات سرویس خود اقدام به تکمیل کامند نمایید.

```bash
# host = سرور
# port = پورت mongodb
# user = نام کاربری
# password = رمز عبور
mongodump --host=host --port=port --authenticationDatabase="admin" -u="user" -p="password" --out=filename
```

### بازگردانی

برای بازگردانی بکاپ خود نیز میتوانید از کامند زیر استفاده نمایید.با توجه به مشخصات سرویس خود اقدام به تکمیل کامند نمایید.

```bash
# host = سرور
# port = پورت mongodb
# user = نام کاربری
# password = رمز عبور
mongorestore --host=host --port=port --authenticationDatabase="admin" -u="user" -p="password" ./filename/
```

---
<a href="https://hub.chabokan.net/fa/services/create/mongodb" ><img src="https://s1.chabokan.net/docs/images/mongodb-banner.png" /></a>