---
title: "آموزش تنظیمات NGINX در Django"
icon: "faGear"
sidebar_label: "تنظیمات NGINX"
description: "در این بخش می خواهیم تنظیمات NGINX در Django  را در هاست جنگو به شما آموزش دهیم"
---

# تنظیمات NGINX در Django
---

در این بخش می خواهیم تنظیمات `NGINX` در `Django`  را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم.

سرویس های ابری `Django` چابکان با استفاده از یک `Nginx` برنامه شما را نمایش می دهند و گاهی اوقات نیاز است تا تنظیمات `Nginx` با توجه به نیاز های برنامه شما تغییر کند. برای اینکار باید یک فایل با نام `nginx.conf` در روت اصلی برنامه خود ایجاد کنید و تنظیمات مورد نظر خود را درآن قرار دهید. با این کار هربار که برنامه شما ریستارت شود تنظیمات که برای `Nginx` در نظر گرفته اید جایگزین خواهد شد.

البته در تمام برنامه ها تنظیمات `Nginx` نیاز نیست و چابکان به صورت خودکار این کار را برای شما انجام می دهد و اگر چیزی غیر از این تنظیمات پیش فرض نیاز دارید باید آن را تغییر دهید.

تنظیمات پیشفرض `Nginx` توسط چابکان:

```bash
server {
    listen 80;
    server_tokens off;

    location / {
        include /etc/nginx/proxy_params;
          proxy_pass      http://0.0.0.0:3000;
    }

    location /static/ {
       alias /app/static/;
    }

    location /media/ {
       alias /app/media/;
    }
}
```

## تغییر حجم آپلود

برای تغییر حجم آپلود در سرویس `django` میتوانید از طریق nginx به صورت زیر `client_max_body_size` را با حجم مورد نظر تنظیم نمایید.

```bash
server {
    listen 80;
    client_max_body_size 250M;
    server_tokens off;

    location / {
        include /etc/nginx/proxy_params;
          proxy_pass      http://0.0.0.0:3000;
    }
}
```

## خطای CORS در django

در صورت برخورد با ارور CORS No Allow Credentials و یا CORS Missing Allow Header میتوانید از راه حل زیر استفاده نمایید.

برای رفع این ارور میتوانید در روت سرویس خود یک فایل به نام nginx.conf را ایجاد نموده و تنظیمات زیر را در آن وارد نمایید.

```bash
server {
    listen 80;
    server_tokens off;

    location / {
        include /etc/nginx/proxy_params;
          proxy_pass      http://0.0.0.0:3000;
    }

    location /static/ {
      alias /app/static/;
    }

    location /media {
       add_header Access-Control-Allow-Origin *;
       alias /usr/src/app/media;
      }
}
```
---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>