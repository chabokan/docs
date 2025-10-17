---
title: "آموزش استفاده از Docker Compose"
sidebar_label: "استفاده از Docker Compose"
description: "در این بخش می خواهیم آموزش نحوه استفاده از `Docker Compose` را در هاست داکر Docker به شما آموزش دهیم."
---
# استفاده از Docker Compose
---

در این بخش می‌خواهیم آموزش نحوه استفاده از `Docker Compose` را در [هاست داکر Docker](https://chabokan.net/cloud-hosting/docker/) به شما آموزش دهیم.

`Docker Compose`  یک ابزار است که به شما این امکان را می‌دهد تا بتوانید با استفاده از یک فایل تنظیم، چندین داکر کانتینر را تعیین و مدیریت نمایید.

با استفاده از `Docker Compose`، شما می‌توانید کتابخانه‌های مورد نیاز برنامه‌ها، تنظیمات شبکه، محیط متغیرها (مثلاً متغیرهای محیطی) و سایر تنظیمات مورد نیاز خود را توصیف کنید. 

## استفاده از Compose

برای استفاده از `Docker Compose` در چابکان میتوانید با توجه به `Compose` مد نظر اقدام به ساخت سرویس‌های وابسته آن کرده و سپس با استفاده از سرویس `Docker`، آنها را مدیریت نمایید. برای اینکار ابتدا سرویس‌های وابسته را در چابکان می‌سازیم(در صورتی که سرویس وابسته در چابکان وجود نداشت میتوانید آن را نیز با سرویس داکر ایجاد نمایید) و سرویس اصلی را بر روی سرویس داکر چابکان می‌سازیم و با استفاده از امکانات سرویس داکر چابکان میتوانیم سرویس‌های دیگر را مدیریت کرده و به سرویس اصلی متصل نماییم. حال با هم نمونه ای در این زمینه بررسی کرده تا با این فرآیند بیشتر آشنا شویم:

برای نمونه میخواهیم با استفاده از داکر کامپوز سرویس `Odoo` را راه اندزای کنیم. ابتدا داکر کامپوز مد نظر را بررسی میکنیم.

```properties
version: '3'
services:
  db:
    image: postgres:15
    user: root
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo16@2022      
      - POSTGRES_DB=postgres
    restart: always             
    volumes:
        - ./postgresql:/var/lib/postgresql/data

  odoo16:
    image: odoo:17
    user: root
    depends_on:
      - db
    ports:
      - "10016:8069"
    tty: true
    command: --
    environment:
      - HOST=db
      - USER=odoo
      - PASSWORD=odoo16@2022
    volumes:
      - ./addons:/mnt/extra-addons
      - ./etc:/etc/odoo
    restart: always
```

در این داکر کامپوز نیاز به دو سرویس می‌باشد:
* دیتابیس `postgres`
* سرویس `odoo`

## راه‌اندازی پایگاه‌داده Postgres

ابتدا سرویس دیتابیس را از طریق قسمت ایجاد سرویس چابکان می‌سازیم.([نحوه ایجاد دیتابیس Postgres](https://docs.chabokan.net/database/postgresql/install/))

:::tip نکته

با توجه به اینکه پایگاه‌داده `Postgres` یکی از سرویس‌های پیشفرض چابکان است. تمامی تنظیماتی که در این `docker compose` آمده اند به صورت خودکار اعمال می‌شوند و شما هیچ نیازی به تنظیم دستی ندارید. پس از ساخت پایگاه‌داده `Postgres` اطلاعات مربوط به نحوه اتصال در داشبورد سرویس در اختیار شما قرار خواهد گرفت.

:::

## راه‌اندازی سرویس Odoo

برای ایجاد سرویس `odoo` نیز یک [سرویس داکر](https://docs.chabokan.net/simple-hosting/docker/deploy/) ساخته و `image` مد نظر را به صورت زیر قرار می‌دهیم.

```text
docker.chabokan.net/odoo:17
```

### اتصال پورت
حال پورت‌ برنامه را در قسمت پورت‌های سرویس داکر خود باز نمایید.

![](https://s1.chabokan.net/docs/images/compose-port.png)

:::tip نکته

برای دریافت اطلاعات بیشتر درباره **پورت** این [مستند](https://docs.chabokan.net/features/ports/) را مطالعه کنید.

:::

### تنظیم متغیرهای محلی (environment)

سپس به قسمت تنظیمات رفته و در بخش متغیرهای محیطی پلتفرم، متغیرهای داخل داکر کامپوز را ست مینماییم.

![](https://s1.chabokan.net/docs/images/compose-env.png)

:::caution توجه

با توجه به اینکه پایگاه‌داده `Postgres` را با استفاده از سرویس‌های آماده چابکان ایجاد کردیم، مقادیر `HOST`، `PORT`، `USER` و `PASSWORD` را باید طبق مقادیر جدید تنظیم ‌کنیم.

:::

:::tip نکته

برای دریافت اطلاعات بیشتر درباره **متغیرهای محیطی** این [مستند](https://docs.chabokan.net/features/settings/env/) را مطالعه کنید.

:::

### تنظیم دیسک‌ها (volumes)

در قسمت `volumes` ۲ مسیر تعریف شده‌اند:
* ./addons:/mnt/extra-addons
* ./etc:/etc/odoo

برای تعریف `volumes` در سرویس داکر چابکان می‌بایست از قسمت دیسک‌ها مسیرهای مورد نیاز را تعریف کنیم تا محتوای آن مسیرها در صورت ری‌استارت شدن سرویس از بین نرود.

![](https://s1.chabokan.net/docs/images/compose-volumes.png)


:::tip نکته

برای دریافت اطلاعات بیشتر درباره **دیسک‌ها** این [مستند](https://docs.chabokan.net/simple-hosting/docker/disks/) را مطالعه کنید.

:::

---
<a href="https://hub.chabokan.net/fa/services/create/docker" ><img src="https://s1.chabokan.net/docs/images/docker-banner.png" /></a>