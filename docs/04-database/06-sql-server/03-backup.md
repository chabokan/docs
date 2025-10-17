---
title: "آموزش Backup از دیتابیس SQL Server"
sidebar_label: "نحوه ‌Backup و Restore"
description: "در ادامه میخواهیم آموزش نحوه ‌Backup و Restore در سرویس ابری اس کیو ال سرور را به شما آموزش دهیم."
---

# نحوه ‌Backup و Restore در SQL Server
---

در ادامه میخواهیم آموزش نحوه ‌Backup و Restore را در سرویس [دیتابیس اس کیو ال سرور](https://chabokan.net/services/mssql/) به شما آموزش دهیم.

برای تهیه backup از دیتابیس SQL Server خود میتوانید به دلخواه یکی از روش های زیر را استفاده نمایید و همچنین برای بازگردانی backup نیز اقدام فرمایید.


## بکاپ پنل چابکان

برای بکاپ و بازگردانی دیتابیس در سرویس چابکان میتوانید از این روش استفاده نموده تا از دیتای خود بکاپ گرفته و یا دیتای تایم مد نظر خود را بازگردانی نمایید.

### ایجاد بکاپ از دیتابیس
برای گرفتن بک آپ از سرویس MSSql میتوانید در داشبورد سرویس MSSql خود به قسمت بکاپ ها مراجعه کرده و بر روی گزینه ی ایجاد بک آپ کلیک نمایید تا عملیات بک آپ سرویس شما توسط چابکان انجام شود.

![](https://s1.chabokan.net/docs/images/database_backup_2.jpg)

### بازگردانی
همانطور که مشاهده میکنید امکان دانلود و بازگردانی بک آپ برای شما فراهم گردیده است که میتوانید بک آپ سرویس خود را دانلود فرمایید و یا یک آپ تاریخ موجود سرویس را از طریق دکمه ی بازگردانی Restore کنید که سرویس به آن تاریخ Restore می شود.

## بکاپ پنل نرم افزار SSMS

برای بکاپ به صورت دستی با استفاده از نرم افزار SSMS از دیتابیس ها و یا یک دیتابیس مورد نظر و یا بازگردانی بکاپ خود میتوانید از این روش استفاده نمایید.

### ایجاد بکاپ از دیتابیس
ابتدا وارد نرم افزار ssms شوید.[(آموزش نحوه اتصال به SSMS)](https://docs.chabokan.net/database/sql-server/connect/)

حال بر روی دیتابیس مد نظر کلیک راست کرده و از بخش Tasks بر روی Back Up کلیک نمایید.

![](https://s1.chabokan.net/docs/images/backup-db-ssms.png)

در پنجره "Back Up Database"، در بخش "Database" پایگاه داده مورد نظر را انتخاب کنید و در بخش "Backup type"، انتخاب کنید که بک‌آپ را به چه صورتی ذخیره کنید، مانند "Full" یا "Differential".

![](https://s1.chabokan.net/docs/images/mssql-connect-backup-1.jpg)

در بخش "Destination"، یک مکان مشخص برای ذخیره بک‌آپ مشخص شده است(پیشنهاد می شود از تغییر این مکان پرهیز نمایید تا در فرآیند Restore با مشکل رو به رو نشوید). سپس بر روی "OK" کلیک کنید تا بک‌آپ ایجاد شود.

![](https://s1.chabokan.net/docs/images/mssql-connect-backup-2.jpg)

حال برای دانلود backup تهیه شده خود و ذخیره آن بر روی سیستم local میتوانید مانند تصویر زیر به بخش بکاپ ها سرویس دیتابیس خود در چابکان مراجعه نموده و بر روی دکمه ایجاد بکاپ کلیک نمایید. سپس روی گزینه دانلود کلیک کنید و بعد از دریافت فایل با مراجعه به مسیر زیر میتوانید بکاپ خود را در سیستم خود ذخیره نمایید.

```shell
/data/data/your-backup.bak
```
![](https://s1.chabokan.net/docs/images/database_backup_2.jpg)

این مراحل به طور خلاصه نحوه گرفتن بک‌آپ از پایگاه داده MSSQL با استفاده از SQL Server Management Studio (SSMS) را توضیح می‌دهد. لطفا توجه داشته باشید که تنظیمات و فرآیند ایجاد بک‌آپ ممکن است با توجه به نسخه SSMS و نحوه تنظیم سرور MSSQL متفاوت باشد.

### بازگردانی

ابتدا وارد نرم افزار [SSMS](https://docs.chabokan.net/database/sql-server/connect/) شوید. سپس در SSMS، روی نام سرور راست کلیک کنید و "Restore Database" را انتخاب کنید.

![](https://s1.chabokan.net/docs/images/mssql-restore-2.jpg)

در بخش `Source،` روی `Device` کلیک کنید و بر روی دکمه `...` کلیک کنید تا پنجره `Select backup devices`باز شود.

![](https://s1.chabokan.net/docs/images/mssql-restore-3.jpg)


در صورتی که بکاپ خود را با استفاده از [روش بالا](https://docs.chabokan.net/database/sql-server/backup/#%D8%A7%DB%8C%D8%AC%D8%A7%D8%AF-%D8%A8%DA%A9%D8%A7%D9%BE-%D8%A7%D8%B2-%D8%AF%DB%8C%D8%AA%D8%A7%D8%A8%DB%8C%D8%B3-1) تهیه نموده اید، به مرحله بعد مراجعه نمایید و در صورتی که نیاز به استفاده از بکاپ فایل لوکال خود دارید، میبایست ابتدا فایل بکاپ را در یک سایت آپلود نموده و لینک دانلود مستقیم آنرا دریافت نمایید.

سپس وارد کنسول سرویس دیتابیس خود شده و کامند های زیر را به ترتیب وارد نمایید تا فایل بکاپ شما در سرویس بارگذاری شود.

```shell
1. cd data/  #location must be: /var/opt/mssql/data

2. wget "Backup-File-URL"
```
![](https://s1.chabokan.net/docs/images/terminal-for-database.jpg)

در پنجره `Select backup devices`، روی `Add` کلیک کنید و فایل بک آپ را انتخاب کنید و روی `OK` کلیک کنید.

![](https://s1.chabokan.net/docs/images/mssql-restore-7.jpg)

بر اساس نوع بک آپ، فایل های بک آپ به فهرست "Backup sets to restore" اضافه می‌شوند. در این بخش می توانید بررسی کنید که کدام فایل بک آپ را می خواهید بازیابی کنید.

به طور پیش فرض، قسمت "Destination" ترجیحاً خالی بماند تا پایگاه داده در همان مسیر و با همان نام قبلی بازیابی شود. اگر می خواهید بازیابی را در مکان دیگری یا با نام متفاوتی انجام دهید، مسیر و نام مقصد را مشخص کنید.

![](https://s1.chabokan.net/docs/images/mssql-restore-5.jpg)

در بخش "Options"، تنظیمات پیشرفته ای مانند Rewriting existing data و Recovery State را بررسی کنید، گاهی نیاز به تنظیم این مورد با توجه به بک آپ شما می باشد در غیر اینصورت عملیات Restore با ارور رو به رو می شود.

![](https://s1.chabokan.net/docs/images/mssql-restore-6.jpg)

حال روی "OK" کلیک کنید تا عملیات بازیابی آغاز شود.


## بکاپ پنل نرم افزار ADS

برای بکاپ به صورت دستی با استفاده از نرم افزار ADS از دیتابیس ها و یا یک دیتابیس مورد نظر و یا بازگردانی بکاپ خود میتوانید از این روش استفاده نمایید.

### ایجاد بکاپ از دیتابیس

برای سیستم عامل مک پیشنهاد می شود از نرم افزار **Azure Data Studio** استفاده شود، بعد از نصب نرم افزار وارد آن شده و اطلاعات دیتابیس خود را وارد می نماییم.( [آموزش نحوه اتصال به **Azure Data Studio**](https://docs.chabokan.net/database/sql-server/connect/))

![](https://s1.chabokan.net/docs/images/mssql-connect-azure.jpg)

در صفحه اصلی Azure Data Studio، در سمت چپ پنجره، بر روی "Databases" کلیک کنید تا لیست دیتابیس‌های موجود را مشاهده کنید. سپس روی دیتابیس مورد نظرتان کلیک راست کنید و "Tasks" را انتخاب کنید، سپس "Backup" را انتخاب کنید.

![](https://s1.chabokan.net/docs/images/mssql-connect-azure-2.jpg)

در پنجره "Backup Database"، تنظیمات مربوط به نسخه پشتیبان را تکمیل کنید:

"Backup Name": نامی برای فایل پشتیبان انتخاب کنید.

"Backup Type": انتخاب کنید که می‌خواهید یک پشتیبان کامل (Full Backup) یا یک پشتیبان تراکنشی (Transaction Log Backup) را بگیرید.

"Backup files": یک مکان مشخص برای ذخیره بک‌آپ مشخص شده است.(پیشنهاد می شود از تغییر این مکان پرهیز نمایید تا در فرآیند Restore با مشکل رو به رو نشوید)

پس از تنظیم تمامی گزینه‌ها، روی دکمه "Backup" کلیک کنید تا عملیات پشتیبان‌گیری آغاز شود.

![](https://s1.chabokan.net/docs/images/mssql-connect-azure-3.jpg)

بعد از اتمام عملیات پشتیبان‌گیری، پیغامی با عنوان "Backup completed successfully" نشان داده می‌شود.

### بازگردانی

ابتدا وارد نرم افزار Azure Data Studio شوید.[آموزش نحوه اتصال به Azure Data Studio](https://docs.chabokan.net/database/sql-server/connect/)

در صفحه اصلی Azure Data Studio، در سمت چپ پنجره، بر روی "Databases" کلیک کنید تا لیست دیتابیس‌های موجود را مشاهده کنید. روی دیتابیسی که می‌خواهید نسخه پشتیبان را در آن بازیابی کنید، کلیک راست کنید و سپس "Restore" را انتخاب کنید.

![](https://s1.chabokan.net/docs/images/mssql-connect-azure-4.jpg)

در پنجره "Restore Database"، زیرمجموعه‌های زیر را تنظیم کنید:

"Source": اینجا شما باید تنظیمات مربوط به فایل پشتیبان را جهت بازیابی وارد کنید. ابتدا "Restore from" را بر روی Backup file تنظیم نمایید و سپس در قسمت "Backup file path" بر روی سه نقطه سمت راست این قسمت کلیک نمایید.

![](https://s1.chabokan.net/docs/images/mssql-connect-azure-5.jpg)

در صورتی که بکاپ خود را با استفاده از [روش بالا](https://docs.chabokan.net/database/sql-server/backup/#%D8%A7%DB%8C%D8%AC%D8%A7%D8%AF-%D8%A8%DA%A9%D8%A7%D9%BE-%D8%A7%D8%B2-%D8%AF%DB%8C%D8%AA%D8%A7%D8%A8%DB%8C%D8%B3-2) تهیه نموده اید، به مرحله بعد مراجعه نمایید و در صورتی که نیاز به استفاده از بکاپ فایل لوکال خود دارید، میبایست ابتدا فایل بکاپ را در یک سایت آپلود نموده و لینک دانلود مستقیم آنرا دریافت نمایید.

سپس وارد کنسول سرویس دیتابیس خود شده و کامند های زیر را به ترتیب وارد نمایید تا فایل بکاپ شما در سرویس بارگذاری شود.

```shell
1. cd data/  #location must be: /var/opt/mssql/data

2. wget "Backup-File-URL"
```
![](https://s1.chabokan.net/docs/images/terminal-for-database.jpg)

حال در مسیر زیر فایل بک آپ خود را پیدا کرده و آنرا انتخاب نمایید:

```shell
/var/opt/mssql/data/
```

در صورتی که بک آپ با فرمت .bak از قبل داشته اید ابتدا از طریق کنسول سرویس دستور cd data را زده تا به پوشه بک آپ ها وارد شوید و سپس با دستور wget لینکی که بک آپ تون داخلش هست را در سرویس قرار دهید و سپس فایل را از طریق نرم افزار انتخاب نمایید.

![](https://s1.chabokan.net/docs/images/mssql-connect-azure-6.jpg)

"Destination": اینجا شما مشخص می‌کنید که کجا می‌خواهید دیتابیس را بازیابی کنید. می‌توانید دیتابیس را در همان دیتابیس فعلی بازیابی کنید یا در دیگر دیتابیس ها بازیابی کنید.

"Backup sets to restore": این قسمت نمایش فهرست پشتیبان‌های موجود است. شما باید پشتیبان مورد نظر را از این قسمت انتخاب کنید.

"Options": تنظیمات پیشرفته ای مانند Rewriting existing data و Recovery State را بررسی کنید، گاهی نیاز به تنظیم این مورد با توجه به بک آپ شما می باشد در غیر اینصورت عملیات Restore با ارور رو به رو می شود.

![](https://s1.chabokan.net/docs/images/mssql-connect-azure-7.jpg)

پس از تنظیم تمامی گزینه‌ها، روی دکمه "Restore" کلیک کنید تا عملیات بازیابی آغاز شود. بعد از اتمام عملیات بازیابی، پیغامی با عنوان "Restore completed successfully" نشان داده می‌شود.

---
<a href="https://hub.chabokan.net/fa/services/create/mssql" ><img src="https://s1.chabokan.net/docs/images/sqlserver-banner.png" /></a>