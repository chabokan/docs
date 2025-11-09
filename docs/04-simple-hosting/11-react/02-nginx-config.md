---
title: "آموزش تنظیمات NGINX در سرویس React"
icon: "faGear"
sidebar_label: "تنظیمات NGINX"
description: "در این بخش می خواهیم آموزش نحوه تنظیمات `NGINX` را در هاست ریکت React به شما آموزش دهیم."
---

# تنظیمات NGINX در React
---

در این بخش می خواهیم آموزش نحوه تنظیمات `NGINX` را در [هاست ریکت React](https://chabokan.net/cloud-hosting/react/) به شما آموزش دهیم.

سرویس های ابری `React` چابکان با استفاده از یک `Nginx` برنامه شما را نمایش می دهند و گاهی اوقات نیاز است تا تنظیمات `Nginx` با توجه به نیاز های برنامه شما تغییر کند. برای اینکار باید یک فایل با نام `nginx.conf` در روت اصلی برنامه خود ایجاد کنید و تنظیمات مورد نظر خود را درآن قرار دهید. با این کار هربار که برنامه شما ریستارت شود تنظیمات که برای `Nginx` در نظر گرفته اید جایگزین خواهد شد.

البته در تمام برنامه ها تنظیمات `Nginx` نیاز نیست و چابکان به صورت خودکار این کار را برای شما انجام می دهد و اگر چیزی غیر از این تنظیمات پیش فرض نیاز دارید باید آن را تغییر دهید.

تنظیمات پیشفرض `Nginx` توسط چابکان:

```nginx
server {
        listen 80 default_server;
        listen [::]:80 default_server;
        root /app/dist;
        index index.html index.htm;
        server_name _;

        location / {
                try_files $uri $uri/ /index.html =404;
        }
}
```

---
<a href="https://hub.chabokan.net/fa/services/create/react" ><img src="https://s1.chabokan.net/docs/images/react-banner.png" /></a>