---
title: "آموزش راه اندازی Gitea"
icon: "faCodeBranch"
description: "Gitea یک سکوی توسعه نرم‌افزار متن باز است که در اصل به عنوان یک شبیه‌سازی برای GitHub طراحی شده بود. اما اکنون به یک سکوی مدیریت ریپازیتوری‌ها برای پروژه‌های نرم‌افزاری تبدیل شده است."
---

# مدیریت پروژه با Gitea
---

[Gitea](https://chabokan.net/services/Gitea/) یک سکوی توسعه نرم‌افزار متن باز است که در اصل به عنوان یک شبیه‌سازی برای GitHub طراحی شده بود. اما اکنون به یک سکوی مدیریت ریپازیتوری‌ها برای پروژه‌های نرم‌افزاری تبدیل شده است.

## نصب و راه اندازی Gitea

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Gitea` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Gitea` می سازیم.

![](https://s1.chabokan.net/docs/gifs/gitea-install.gif)

![](https://s1.chabokan.net/docs/images/gitea-platform-docs-1.jpg)

بعد از دقایقی برنامه ی شما با موفقیت ساخته می شود و میتوانید با مراجعه به دامنه ی خود در سرویس `Gitea` وارد برنامه شوید.

![](https://s1.chabokan.net/docs/images/gitea-platform-docs-2.jpg)

### اتصال دیتابیس

به بخش تنظیمات اولیه `Gitea` منتقل میشوید. در اینجا به صورت خودکار تنظیمات دیتابیس اشتراکی موجود در سرویس شما ست شده است. در صورتی که مایل به تنظیم دیتابیس اختصاصی بر روی سرویس خود هستید می بایست به مرحله ی بعد مراجعه نمایید در غیر اینصورت به قسمت `Optional Settings` مراجعه و ساخت برنامه ی خود را ادامه دهید.

![](https://s1.chabokan.net/docs/images/gitea_2.jpg)

### اتصال دیتابیس اختصاصی

در صورت تمایل به اتصال دیتابیس اختصاصی می بایست به تنظیمات سرویس `Gitea` خود مراجعه نمایید و از قسمت  **متغیرهای محیطی پلتفرم** اطلاعات دیتابیس خود را به صورت زیر ست نمایید. سپس به `URL` برنامه خود مراجعه کرده و تنظیمات دیتابیس در صورتی که به درستی ست شده اند آنها را تغییر نداده و مراحل را ادامه دهید.

```properties
GITEA__database__DB_TYPE = "mysql": "MySQL", "postgres": "PostgreSQL", "mssql": "MSSQL"
GITEA__database__HOST = Host:Port
GITEA__database__USER = Database user
GITEA__database__PASSWD = Password
GITEA__database__NAME = Database name
```

![](https://s1.chabokan.net/docs/images/Gitea_5.jpg)

### Optional Settings

به قسمت `Optional Settings` میرسیم. در اینجا با توجه به نیاز خود میتوانید اطلاعات خواسته شده را وارد نمایید و با کلیک بر روی `Install Gitea` برنامه ی شما ساخته می شود.

![](https://s1.chabokan.net/docs/images/gitea_3.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Gitea` وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](https://docs.chabokan.net/features/domains/))

![](https://s1.chabokan.net/docs/images/gitea_4.jpg)

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست Gitea به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](https://docs.chabokan.net/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

---
<a href="https://hub.chabokan.net/fa/services/create/gitea" ><img src="https://s1.chabokan.net/docs/images/gitea-banner.png" /></a>