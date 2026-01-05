---
title: "آموزش اتصال سرویس Gitea به دیتابیس"
icon: "faPlug"
sidebar_label: "اتصال به دیتابیس"
description: "بعد از ساخت سرویس `Gitea` می‌توانید به انتخاب خود برنامه را به دیتابیس‌های اشتراکی یا اختصاصی متصل کنید."
---

# اتصال Gitea به دیتابیس
---

### اتصال دیتابیس

به بخش تنظیمات اولیه `Gitea` منتقل میشوید. در اینجا به صورت خودکار تنظیمات دیتابیس اشتراکی موجود در سرویس شما ست شده است. در صورتی که مایل به تنظیم دیتابیس اختصاصی بر روی سرویس خود هستید می بایست به مرحله ی بعد مراجعه نمایید در غیر اینصورت به قسمت `Optional Settings` مراجعه و ساخت برنامه ی خود را ادامه دهید.

![اتصال به دیتابیس در سرویس Gitea چابکان](https://s1.chabokan.net/docs/images/gitea_2.jpg)

### اتصال دیتابیس اختصاصی

در صورت تمایل به اتصال دیتابیس اختصاصی می بایست به تنظیمات سرویس `Gitea` خود مراجعه نمایید و از قسمت  **متغیرهای محیطی پلتفرم** اطلاعات دیتابیس خود را به صورت زیر ست نمایید. سپس به `URL` برنامه خود مراجعه کرده و تنظیمات دیتابیس در صورتی که به درستی ست شده اند آنها را تغییر نداده و مراحل را ادامه دهید.

```properties
GITEA__database__DB_TYPE = "mysql": "MySQL", "postgres": "PostgreSQL", "mssql": "MSSQL"
GITEA__database__HOST = Host:Port
GITEA__database__USER = Database user
GITEA__database__PASSWD = Password
GITEA__database__NAME = Database name
```

![اتصال به دیتابیس در سرویس Gitea چابکان](https://s1.chabokan.net/docs/images/Gitea_5.jpg)

### Optional Settings

به قسمت `Optional Settings` میرسیم. در اینجا با توجه به نیاز خود میتوانید اطلاعات خواسته شده را وارد نمایید و با کلیک بر روی `Install Gitea` برنامه ی شما ساخته می شود.

![اتصال به دیتابیس در سرویس Gitea چابکان](https://s1.chabokan.net/docs/images/gitea_3.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Gitea` وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](/features/domains/))

![اتصال به دیتابیس در سرویس Gitea چابکان](https://s1.chabokan.net/docs/images/gitea_4.jpg)

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="Gitea"
services={[
"mysql",
"mariadb"
]}
/>

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/gitea"
img="https://s1.chabokan.net/docs/images/gitea-banner.png"
/>
