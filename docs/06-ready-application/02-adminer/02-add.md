---
title: "آموزش اتصال سرویس Adminer به دیتابیس"
icon: "faPlug"
sidebar_label: "اتصال به دیتابیس"
description: "بعد از ساخت سرویس Adminer میتوانید دیتابیس های مختلف را به صورت همزمان مدیریت کرده و به `Adminer` اضافه کنید."
---

# اتصال Adminer به دیتابیس
---

بعد از ساخت [سرویس Adminer](/ready-application/adminer/install/) میتوانید دیتابیس های مختلف را به صورت همزمان مدیریت کرده و به `Adminer` اضافه کنید.

برای این کار ابتدا به صفحه ی لاگین `Adminer` خود مراجعه فرمایید و اطلاعات دیتابیس مد نظر خود را وارد نمایید.

```properties
System: Database type
Server: Host:Port
Username: User
Password: Pass
Database: DB name
```

```yaml
Database types:
- PostgreDB
- MySQL
- MongoDB
```

![اتصال به دیتابیس در سرویس Adminer چابکان](https://s1.chabokan.net/docs/images/adminer_7.jpg)

بعد از لاگین کردن میتوانید به صفحه ی اصلی برگشته و دیتابیس های دیگر خود را نیز وارد نمایید. بعد از وارد کردن در ستون سمت چپ برنامه میتوانید دیتابیس های متصل شده ی خود را مشاهده نمایید.

![اتصال به دیتابیس در سرویس Adminer چابکان](https://s1.chabokan.net/docs/images/adminer_6.jpg)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/adminer"
img="https://s1.chabokan.net/docs/images/adminer-banner.png"
/>
