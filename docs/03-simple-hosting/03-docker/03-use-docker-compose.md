---
title: "آموزش استفاده از Docker Compose"
sidebar_label: "استفاده از Docker Compose"
description: "در این بخش می خواهیم آموزش نحوه استفاده از `Docker Compose` را در هاست داکر Docker به شما آموزش دهیم."
---
# استفاده از Docker Compose
---

در این بخش می خواهیم آموزش نحوه استفاده از `Docker Compose` را در [هاست داکر Docker](https://chabokan.net/cloud-hosting/docker/) به شما آموزش دهیم.

`Docker Compose`  یک ابزار است که به شما این امکان را می دهد تا بتوانید با استفاده از یک فایل تنظیم، چندین داکر کانتینر را تعیین و مدیریت نمایید.

با استفاده از `Docker Compose`، شما می توانید کتابخانه های مورد نیاز برنامه ها، تنظیمات شبکه، محیط متغیرها (مثلاً متغیر های محیطی) و سایر تنظیمات مورد نیاز خود را توصیف کنید. 

## استفاده از Compose

برای استفاده از `Docker Compose` در چابکان میتوانید با توجه به `Compose` مد نظر اقدام به ساخت سرویس های وابسته آن کرده و سپس با استفاده از سرویس `Docker`، آنها را مدیریت نمایید. برای اینکار ابتدا سرویس های وابسته را در چابکان می سازیم(در صورتی که سرویس وابسته در چابکان وجود نداشت میتوانید آن را نیز با سرویس داکر ایجاد نمایید) و سرویس اصلی را بر روی سرویس داکر چابکان می سازیم و با استفاده از امکانات سرویس داکر چابکان میتوانیم سرویس های دیگر را مدیریت کرده و به سرویس اصلی متصل نماییم. حال با هم نمونه ای در این زمینه بررسی کرده تا با این فرآیند بیشتر آشنا شویم:

برای نمونه میخواهیم با استفاده از داکر کامپوز سرویس `Odoo` را راه اندزای کنیم. ابتدا داکر کامپوزی مد نظر را بررسی میکنیم.

```bash
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
    image: odoo:16
    user: root
    depends_on:
      - db
    ports:
      - "10016:8069"
      - "20016:8072" 
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
در این داکر کامپوز نیاز به دو سرویس می باشد. یک دیتابیس `postgres` و یک سرویس `odoo`.

ابتدا سرویس دیتابیس را از طریق قسمت ایجاد سرویس چابکان می سازیم.([نحوه ایجاد دیتابیس Postgres](https://docs.chabokan.net/database/postgresql/install/))

برای ایجاد سرویس `odoo` نیز یک [سرویس داکر](https://docs.chabokan.net/simple-hosting/docker/deploy/) ساخته و `image` مد نظر را به صورت زیر فراخوانی میکنیم.

```bash
docker.chabokan.net/odoo:16
```
حال پورت های برنامه را در قسمت پورت های سرویس داکر خود باز نمایید.

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-3.jpg)

سپس به قسمت تنظیمات رفته و در بخش  متغیرهای محیطی پلتفرم، متغیر های داخل داکر کامپوز را ست مینماییم.

![](https://s1.chabokan.net/docs/images/elk-env.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/docker" ><img src="https://s1.chabokan.net/docs/images/docker-banner.png" /></a>