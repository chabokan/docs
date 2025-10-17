---
title: "آموزش راه اندازی Syncthing"
description: "Syncthing یک نرم‌افزار برای همگام‌سازی فایل‌ها بین دستگاه‌ها است. این ابزار امکان همگام‌سازی فایل‌ها بین دستگاه‌های مختلف شما، مثل کامپیوترها، تلفن همراه‌ها و سرورها را فراهم می‌کند."
---

# برنامه آماده Syncthing
---

[Syncthing](https://chabokan.net/services/syncthing/) یک نرم‌افزار برای همگام‌سازی فایل‌ها بین دستگاه‌ها است. این ابزار امکان همگام‌سازی فایل‌ها بین دستگاه‌های مختلف شما، مثل کامپیوترها، تلفن همراه‌ها و سرورها را فراهم می‌کند.همچنین، سینک‌تینگ برای حفظ حریم خصوصی و امنیت اطلاعات شخصی کاربران طراحی شده است.


## نصب و راه اندازی Syncthing Server

ابتدا سرویس `Syncthing` را از طریق قسمت ایجاد سرویس جدید > برنامه های آماده > `Syncthing` می سازیم.

![](https://s1.chabokan.net/docs/images/syncthing-docs-1.jpg)

بعد از دقایقی برنامه ی شما با موفقیت ساخته می شود و میتوانید با مراجعه به دامنه ی خود در سرویس `Syncthing` وارد برنامه شوید.

![](https://s1.chabokan.net/docs/images/syncthing-docs-2.jpg)

سپس برای امنیت سرویس، مانند تصویر زیر بر روی قسمت `Actions` کلیک می کنیم.

![](https://s1.chabokan.net/docs/images/syncthing-docs-3.jpg)

حال به بخش `GUI` رفته و در قسمت `Authentication` نام کاربری و رمز عبور دلخواه را وارد نمایید.

![](https://s1.chabokan.net/docs/images/syncthing-docs-4.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Syncthing` وارد برنامه شوید و با استفاده از گزینه `Add Remote Device`  به دلخواه سیستم لوکال خود و یا سرور دیگری را برای sync دیتا به برنامه خود متصل نمایید. همچنین میتوانید  دامنه ی اختصاصی خود را نیز بر روی برنامه ست نمایید.( [تنظیم دامنه](https://docs.chabokan.net/features/domains/))

![](https://s1.chabokan.net/docs/images/syncthing-docs-5.jpg)

## نصب و راه اندازی Syncthing Client

برای اتصال سرویس به سیستم لوکال خود، ابتدا به [این لینک](https://syncthing.net/downloads/) مراجعه نموده و با توجه به سیستم عامل خود اقدام به نصب برنامه نمایید.

در هنگام نصب، میتوانید به سرویس پورت دلخواه را داده تا در مرورگر بتوانید به `UI` برنامه متصل شوید، آدرس دیفالت برنامه به صورت زیر میباشد:

```shell
127.0.0.1:8384
```

![](https://s1.chabokan.net/docs/images/syncthing-docs-5-1.jpg)

بعد از ورود به آدرس خود در صورت روبه رو شدن با ارور عدم وجود گواهینامه ssl برای سرویس لوکال، بر روی گزینه `Proceed Anyway` را کلیک نمایید.

![](https://s1.chabokan.net/docs/images/syncthing-docs-6.jpg)

بعد از ورود به صفحه مدیریت برنامه در سیستم لوکال خود، از قسمت `Actions` بر روی `Show ID` کلیک نموده و `ID` برنامه را کپی نمایید:

![](https://s1.chabokan.net/docs/images/syncthing-docs-7.jpg)

سپس در داشبورد سرویس `Syncthing` چابکان خود، بر روی `Add Remote Device` زده و `ID` کپی شده را پیست نمایید:

![](https://s1.chabokan.net/docs/images/syncthing-docs-5.jpg)

حال در سرور لوکال خود یک ناتیفیکیشن دریافت کرده اید که میبایست برای اضافه شدن سرور آنرا تایید نمایید.

![](https://s1.chabokan.net/docs/images/syncthing-docs-9.jpg)

بعد از اتصال سرویس ها میتوانید در سیستم لوکال خود اقدام به معرفی فولدر های دلخواه برای `sync` شدن با سرور را از طریق گزینه `Add Folder` نمایید و بعد از `sync` شدن فولدر با سرور، مانند تصویر زیر عبارت `Up to Date` را مشاهده مینمایید.

در صورت تغییر در یک فولدر، عملیات `sync` انجام شده و در لحظه محتویات سرور نیز تغییر میکنند، برای مشاهده فایل های خود در چابکان بعد از عملیات `sync` میتوانید از بخش مدیریت فایل سرویس خود استفاده نمایید.

![](https://s1.chabokan.net/docs/images/syncthing-docs-10.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/syncthing" ><img src="https://s1.chabokan.net/docs/images/syncthing-banner.jpg" /></a>
