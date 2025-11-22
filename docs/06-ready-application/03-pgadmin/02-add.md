---
title: "آموزش اتصال سرویس PGadmin به دیتابیس"
icon: "faPlug"
sidebar_label: "اتصال به دیتابیس"
description: "بعد از ساخت سرویس PGadmin میتوانید دیتابیس های مختلف را به صورت همزمان مدیریت کرده و به PGadmin اضافه کنید."
---

# اتصال PGadmin به دیتابیس
---

بعد از ساخت [سرویس PGadmin](/ready-application/pgadmin/install/) میتوانید دیتابیس های مختلف را به صورت همزمان مدیریت کرده و به [PGadmin](/ready-application/pgadmin/install/) اضافه کنید.

برای این کار ابتدا به صفحه ی [PGadmin](/ready-application/pgadmin/install/) خود مراجعه فرمایید و بر روی `add new server` کلیک نمایید.

![اتصال به دیتابیس در سرویس PGAdmin چابکان](https://s1.chabokan.net/docs/images/odoo_1-edited-1.jpg)

حالا اطلاعات را مانند نمونه وارد فرمایید.

## سربرگ General

```properties
name: نام دلخواه
```
![اتصال به دیتابیس در سرویس PGAdmin چابکان](https://s1.chabokan.net/docs/images/Screenshot-1402-06-04-at-4.20.22-PM.png)

## سربرگ Connection

همانند مشخصات سرویس `Postgresql` این قسمت را کامل کرده و سپس روی گزینه ی save کلیک می نمایید.

```properties
Host name/address: Host
Port: Port
Maintenance database: Database name
Username: User
Password: Password
```

![اتصال به دیتابیس در سرویس PGAdmin چابکان](https://s1.chabokan.net/docs/images/odoo_2.jpg)

سپس مشاهده مینمایید که دیتابیس به `PGadmin` متصل شده و دسترسی کامل به دیتابیس خود را دارید. حال برای اضافه کردن دیتابیس های `Postgresql` دیگر نیز میتوانید طبق مراحل بالا پیش بروید تا آنها را نیز به سرویس خود متصل نمایید.

![اتصال به دیتابیس در سرویس PGAdmin چابکان](https://s1.chabokan.net/docs/images/pgadmin_add_1.jpg)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/pgadmin"
img="https://s1.chabokan.net/docs/images/pgadmin-banner.png"
/>
