---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Nginx را به شما آموزش دهیم"
---

# استقرار اولیه Nginx
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Nginx را به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا
میبایست `Nginx` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس
جدید > میزبانی آسان > `Docker` میرویم.
![استقرار Nginx در چابکان](https://s1.chabokan.net/docs/gifs/docker-install.gif)

![استقرار Nginx در چابکان](https://s1.chabokan.net/docs/images/docker-install.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس محتوای `Dockerfile` را قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.

```dockerfile
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
```

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید به تنظیم `Nginx` بپردازید.

:::tip نکته
دقت کنید که `Dockerfile` این سرویس در قسمت مدیریت فایل‌ها موجود است و در صورت نیاز می‌توانید آن را ویرایش کنید.
:::

در این مثال از دستور زیر برای اعمال تنظیمات `Nginx` استفاده کردیم:

```dockerfile
COPY nginx.conf /etc/nginx/nginx.conf
```

در نتیجه باید فایلی به نام `nginx.conf` در مسیر اصلی سرویس قرار دهیم تا در هنگام `build` سرویس داکر، این فایل به `Nginx`
تحویل داده شود. برای اینکار ابتدا در داشبورد به قسمت **مدیریت فایل‌ها** بروید و یک فایل جدید به نام `nginx.conf` ایجاد
کنید. سپس با گزینه `edit` محتوای فایل‌ را مانند مثال اضافه کنید:

```nginx title="nginx.conf"
worker_processes auto;

events {
    worker_connections 1024;
}

http {
    server {
        listen 80;

        location / {
            proxy_pass http://ORIGIN_IP:ORIGIN_PORT;

            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $remote_addr;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

در این مثال باید مقادیر `ORIGIN_IP` و `ORIGIN_PORT` را مطابق با نیاز خود جایگزین کنید، همچنین در این مثال وب سرور Nginx
روی پورت `80` فعال می‌شود و باید آن را در قسمت پورت‌ها مشخص کنیم تا برنامه در دسترس قرار
بگیرد.

:::tip نکته
سرویس‌های `Docker` در چابکان به صورت پیشفرض روی پورت `80` باز هستند.
:::

![استقرار Nginx در چابکان](https://s1.chabokan.net/docs/images/nginx-port.png)

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/docker"
img="https://s1.chabokan.net/docs/images/docker-banner.png"
/>