---
title: "آموزش راه اندازی Adminer"
icon: "faRocket"
sidebar_label: "نصب و راه اندازی"
description: "اسکریپت قدرتمند Adminer مدیریت حرفه ای پایگاه داده های mysql, mongodb, postgres و MS SQL جایگزین مناسب PHPmyAdmin می باشد."
---

# مدیریت پایگاه داده Adminer
---

اسکریپت قدرتمند [Adminer](https://chabokan.net/services/adminer/) مدیریت حرفه ای پایگاه داده های Mysql, Mongodb, Postgres و MSSQL جایگزین مناسب PHPmyAdmin می باشد.

## نصب و راه اندازی Adminer

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Adminer` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Adminer` می سازیم.

![نصب و راه‌اندازی Adminer در چابکان](https://s1.chabokan.net/docs/gifs/adminer-install.gif)

![نصب و راه‌اندازی Adminer در چابکان](https://s1.chabokan.net/docs/images/adminer-platform-doc-1.jpg)

بعد از دقایقی برنامه ی شما با موفقیت ساخته می شود و میتوانید با مراجعه به دامنه ی خود در سرویس `Adminer` وارد برنامه شوید.

![نصب و راه‌اندازی Adminer در چابکان](https://s1.chabokan.net/docs/images/adminer-platform-doc-2.jpg)

ابتدا با مشخصات سرویس داده شده در داشبورد سرویس وارد `Adminer` خود شوید و سپس اطلاعات دیتابیس مورد نظر را مانند نمونه ی زیر در صفحه ی لاگین وارد نمایید.

```properties
System: Database type
Server: services.irnx.chabokan.net:Port
Username: User
Password: Pass
Database: DB name
```

![نصب و راه‌اندازی Adminer در چابکان](https://s1.chabokan.net/docs/images/adminer_2.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Adminer` وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](https://docs.chabokan.net/features/domains/))

![نصب و راه‌اندازی Adminer در چابکان](https://s1.chabokan.net/docs/images/adminer_3.jpg)

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/adminer"
img="https://s1.chabokan.net/docs/images/adminer-banner.png"
/>
