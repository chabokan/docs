---
title:  "نحوه migration در Django" 
sidebar_label: "اجرای Migration ها"
description: "در این بخش می خواهیم آموزش اجرای Migration ها در Django هاست جنگو به شما آموزش دهیم"
---

# اجرای Migration ها در Django
---

در این بخش می خواهیم آموزش اجرای `Migration` ها در `Django` را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم.

بعد از اتصال دیتابیس به سرویس خود، کافیست هربار که در جنگو `Model` ها را تغییر می دهید، ابتدا یکبار دستور زیر را در کنسول اجرا نمایید تا تغییرات در دیتابیس برای شما اعمال شود. ([کنسول چیست](https://docs.chabokan.net/features/console/))

```shell
python manage.py makemigrations
python manage.py migrate
```

![](https://s1.chabokan.net/docs/images/console-chabokan.jpg)


## راه‌اندازی Hook برای اجرای خودکار Migration

برای تسهیل فرایند توسعه و جلوگیری از اجرای دستی این دستورات پس از هر بار به‌روزرسانی کد در هاست، می‌توان از قابلیت [Hook](https://docs.chabokan.net/features/etc/hook/) در سرویس هاست چابکان بهره گرفت تا این دستورات به صورت خودکار اجرا شوند.

در مسیر اصلی پروژه‌تان فایلی با نام `chabok-pre-start.sh` ایجاد کنید و دستورات مربوط به `Migration` را در این فایل قرار دهید.

```shell
python manage.py makemigrations
python manage.py migrate
```

از این پس، هر بار که پروژه را روی چابکان اجرا کنید، این دستورات به‌صورت خودکار اجرا خواهند شد و دیتابیس شما همیشه به‌روز خواهد بود، بدون نیاز به دخالت و اجرای دستی. با بهره‌گیری از این قابلیت، می‌توانید کنترل و تنظیم دقیق عملیات استقرار و اجرای برنامه را به‌طور کامل مدیریت کنید. هوک‌ها ابزاری قدرتمند برای ساده‌سازی و بهینه‌سازی فرایند توسعه و استقرار نرم‌افزار شما محسوب می‌شوند.


> [مستند رسمی **اجرای Migration** در سرویس **Django**](https://docs.djangoproject.com/en/5.0/topics/migrations/#workflow)

>[استفاده از Hookها در کانتینر ابری](https://docs.chabokan.net/features/etc/hook/)

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>