---
title: "نکات تکمیلی"
sidebar_label: "نکات تکمیلی"
description: "Nextcloud یک سامانه مدیریت ابری (Cloud) اوپن سورس می باشد که بر روی سرورهای اختصاصی قابل نصب است. این نرم افزار امکان مدیریت و به اشتراک گذاری انواع فایل‌ها، تقویم ها، مخاطبان و دیگر برنامه های کاربردی را از طریق وب به شما می‌دهد."
---

# فضای ذخیره سازی NextCloud
---

در این بخش می خواهیم نکات تکمیلی را به شما آموزش دهیم.

## تغییر دامنه سرویس

برای تغییر دامنه سرویس به دامنه مد نظر خود، بعد از اتصال دامنه به سرویس، به قسمت تنظیمات سرویس رفته و در بخش متغیر های محیطی پلتفرم، دامنه خود را طبق نمونه زیر در بخش `OVERWRITEHOST` وارد نمایید.

```properties
# name : value

OVERWRITEHOST : your-domain
```

## اجرا دستور occ

برای اجرا دستور `occ` و یا نصب پلاگین از طریق کنسول، ابتدا به کنسول سرویس خود مراجعه نموده و کامند زیر را اجرا نمایید.

```shell
apt update && apt install -y sudo 
```

بعد از تکمیل نصب `sudo` در سرویس، در ابتدا کامند `occ` مد نظر خود `sudo -u www-data` را قرار داده و سپس کامند اجرایی را مانند نمونه زیر وارد نمایید:

```shell
sudo -u www-data ./occ
```

## MAINTENACE MODE

در صورتی که در سرویس خود با پیام `MAINTENACE MODE` مواجه شدید کافیست کد زیر را در قسمت کنسول سرویس خود وارد کنید.

```shell
./occ upgrade
```

در صورتی که پیام `MAINTENACE MODE` همچنان باقی بود کد زیر را وارد نمایید.

```shell
php occ maintenance:mode --off
```

---
<a href="https://hub.chabokan.net/fa/services/create/nextcloud" ><img src="https://s1.chabokan.net/docs/images/nextcloud-banner.png" /></a>