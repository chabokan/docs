---
title: "آموزش نصب سرویس Flask"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه `Python` را در هاست فلسک Flask به شما آموزش دهیم."
---

# استقرار اولیه Flask
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه `Flask` را در [هاست فلسک Flask](https://chabokan.net/flask/) به شما آموزش دهیم.
 همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Flask` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `Flask` می سازیم.

 ![نحوه استقرار Flask در چابکان](https://s1.chabokan.net/docs/gifs/flask-install.gif)
 
import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

## خطاهای رایج در فرایند استقرار

در چابکان به صورت پیشفرض ماژول `app` برای را اندازی برنامه انتخاب می شود یعنی استقرار سرویس با دستور زیر انجام می شود:

```shell
gunicorn app:app
```

اما چنانچه شما از نام دیگری استفاده می‌کنید و در زمان دیپلوی خطای زیر را دریافت می‌کنید:

```log
ModuleNotFoundError: No module named 'app'
```

برای رفع این مشکل می توانید با استفاده از متغیر `FLASK_MODULE` نام ماژول پیشفرض برنامه خود را به چابکان معرفی کنید:

```properties
# name : value

FLASK_MODULE : blog:app
```
## ورژن های Flask

سرویس `Flask` در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](/simple-hosting/flask/more/#تغییر-ورژن-flask) مراجعه نمایید.

import Versions from '/docs/04-simple-hosting/09-python/_versions.md';

<Versions />

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="Flask"
services={[
"mysql",
"mariadb"
]}
/>

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/flask"
img="https://s1.chabokan.net/docs/images/flask-banner.png"
/>