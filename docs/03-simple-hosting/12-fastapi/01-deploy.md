---
title: "آموزش نصب سرویس FastAPI"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه  `FastAPI` را در هاست FastAPI به شما آموزش دهیم."
---

# استقرار اولیه FastAPI
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه  `FastAPI` را در [هاست FastAPI](https://chabokan.net/products/cloud-hosting/fastapi/) به شما آموزش دهیم.
 همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `FastAPI` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `FastAPI` می سازیم.

![](https://s1.chabokan.net/docs/gifs/fastapi-install.gif)

 ## روش های استقرار برنامه

سرویس های میزبانی آسان چابکان به روش های مختلفی امکان استقرار را دارا هستند، این شما هستید که می توانید انتخاب کنید کدام روش برای شما مناسب تر می باشد، برای آشنایی با هر کدام از روش های استقرار می توانید از لیست زیر اقدام به مطالعه بیشتر بفرمایید:

> —  [استقرار از طریق CLI (پیشنهادی)](/deploy/cli)
>
> —  [استقرار از طریق FTP](/deploy/ftp/)
>
> —  [استقرار از طریق git](/deploy/git/)
>
> —  [استقرار از طریق فایل منیجر](/deploy/file-manager/)

اگر سرویس خود را از طریق `CLI` چابکان استقرار داده اید حتما صفحه [تنظیمات مسیر های دائمی](/features/permanent-path/) را نیز مطالعه بفرمایید که هم با فرآیند `deploy` از طریق `CLI` بیشتر آشنا شوید و هم مشکلی برایتان ایجاد نشود.

## خطاهای رایج در فرایند استقرار

در چابکان به صورت پیشفرض ماژول `main` برای را اندازی برنامه انتخاب می شود یعنی استقرار سرویس با دستور زیر انجام می شود:

```shell
uvicorn main:app
```

اما چنانچه شما از نام دیگری استفاده می‌کنید و در زمان دیپلوی خطای زیر را دریافت می‌کنید:

```log
ModuleNotFoundError: No module named 'main'
```

برای رفع این مشکل می توانید با استفاده از متغیر `FASTAPI_MODULE` نام ماژول پیشفرض برنامه خود را به چابکان معرفی کنید:

```properties
# name : value
FASTAPI_MODULE : blog:app
```
## ورژن های FastAPI

سرویس `FastAPI` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/fastapi/more/#تغییر-ورژن-fastapi) مراجعه نمایید.

import Versions from '/docs/03-simple-hosting/09-python/_versions.md';

<Versions />

import Features from '/docs/11-features/_features.md';

<Features />

---
<a href="https://hub.chabokan.net/fa/services/create/fastapi" ><img src="https://s1.chabokan.net/docs/images/fastapi-banner.png" /></a>