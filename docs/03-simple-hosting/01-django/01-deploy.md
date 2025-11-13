---
title: "آموزش استقرار Django"
icon: "faRocket"
sidebar_label: "استقرار اولیه"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه Django هاست جنگو به شما آموزش دهیم."
---

# استقرار اولیه Django
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه `Django` را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Django` را از طریق قسمت ساخت سرویس جدید > میزبانی آسان > `Django` می سازیم.

![](https://s1.chabokan.net/docs/gifs/django-install.gif)

import Deploy from '/docs/08-deploy/_deploy.md';

<Deploy />

## خطاهای رایج در فرایند استقرار

در پلتفرم `Django` برای استقرار به فایل `wsgi` نیاز هست تا سرویس بتواند کار خود را انجام دهد. در سرویس `Django` چابکان به صورت خودکار مسیر این فایل شناسایی می شود. اما گاهی اوقات با توجه به ساختار برنامه شما ممکن هست این شناسایی خودکار با مشکل مواجه شود. برای رفع این مشکل شما باید مسیر `wsgi` پروژه تان را از طریق تنظیمات سرویس قسمت متغیر ها به چابکان معرفی کنید.

```properties
# name = value

WSGI_PATH = my_app_name.wsgi
```

## ورژن های Django

سرویس Django در چابکان از ورژن های زیر پشتیبانی میکند و میتوانید با توجه به نیاز برنامه خود، ورژن مورد نظر را انتخاب نمایید. برای تغییر ورژن میتوانید به [این مستند](https://docs.chabokan.net/simple-hosting/django/more/#تغییر-ورژن-django) مراجعه نمایید.

```text
python versions:

- 3.6
- 3.7
- 3.8
- 3.9
- 3.10
- 3.11
- 3.12
```

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست Django به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](https://docs.chabokan.net/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

import Features from '/docs/11-features/_features.md';

<Features />

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>
