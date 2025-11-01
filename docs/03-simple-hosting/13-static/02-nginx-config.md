---
title: "آموزش تنظیمات NGINX در سرویس Static"
icon: "faGear"
sidebar_label: "تنظیمات NGINX"
description: "در این بخش می خواهیم آموزش نحوه اتنظیمات `NGINX` را در هاست Static به شما آموزش دهیم."
---

# تنظیمات NGINX در Static
---

در این بخش می خواهیم آموزش نحوه اتنظیمات `NGINX` را در [هاست Static](https://chabokan.net/services/static/) به شما آموزش دهیم.


سرویس های ابری `Static` چابکان با استفاده از یک `Nginx` برنامه شما را نمایش می دهند و گاهی اوقات نیاز است تا تنظیمات `Nginx` با توجه به نیاز های برنامه شما تغییر کند. برای اینکار باید یک فایل با نام `nginx.conf` در روت اصلی برنامه خود ایجاد کنید و تنظیمات مورد نظر خود را درآن قرار دهید. با این کار هربار که برنامه شما ریستارت شود تنظیمات که برای `Nginx` در نظر گرفته اید جایگزین خواهد شد.

البته در تمام برنامه ها تنظیمات `Nginx` نیاز نیست و چابکان به صورت خودکار این کار را برای شما انجام می دهد و اگر چیزی غیر از این تنظیمات پیش فرض نیاز دارید باید آن را تغییر دهید.

تنظیمات پیشفرض `Nginx` توسط چابکان:

:::caution توجه

در سرویس static میبایست مسیر نهایی برنامه آماده خود را در قسمت root /app/path/to/app معرفی نمایید. در تنظیمات زیر، مسیر دیفالت برنامه معرفی شده است.

:::

```bash
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /usr/share/nginx/html;
        index index.html index.htm;
        server_name _;

        location / {
                try_files $uri $uri/ /index.html =404;
        }
}
```

---
<a href="https://hub.chabokan.net/fa/services/create/static" ><img src="https://s1.chabokan.net/docs/images/static-banner.png" /></a>