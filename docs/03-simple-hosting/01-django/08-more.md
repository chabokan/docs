---
title: "نکات آموزشی Django"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی Django را در هاست جنگو به شما آموزش دهیم"
---

# نکات تکمیلی Django
---

در این بخش می خواهیم نکات تکمیلی Django را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم.

## استقرار برنامه‌های ASGI

برای استقرار برنامه های `ASGI` نیاز هست تا متغییر محیطی `ASGI_PATH` را از طریق تنظیمات سرویس با مسیر فایل `asgi.py` مقدار دهی نمایید.

```properties
ASGI_PATH=core.asgi:application
```

## رفع مشکل AppRegistryNotReady در برنامه های ASGI

برای رفع این مشکل در برنامه های `ASGI` کافیست کد زیر را در ابتدا فایل `asgi.py` (قبل از import ها) برنامه خودتان قرار دهید.

```python
import django
django.setup()
```

## افزایش زمان تایم‌اوت Gunicorn

درصورتی که در سرویس خود با خطای `CRITICAL WORKER TIMEOUT` مواجه شده‌اید و به `WORKER TIMEOUT` بیشتر از ۳۰ ثانیه نیاز دارید می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_TIMEOUT` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_TIMEOUT : 90
```

## افزایش تعداد ورکر Gunicorn

درصورتی که می خواهید Gunicorn با بیش یک Worker کار کند، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_WORKERS` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_WORKERS : 2
```

## افزایش تعداد Gunicorn thread

درصورتی که می خواهید `Gunicorn` با بیش یک `thread` کار کند، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_THREADS` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_THREADS : 2
```

## تغییر سطح لاگ Gunicorn

درصورتی که می خواهید سطح لاگ های `Gunicorn` تغییر دهید، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_LOG_LEVEL` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_LOG_LEVEL : info
```

## رفع مشکل CSRF Token

در برنامه های Django برای رفع مشکل CSRF Token می بایست متغییر `CSRF_TRUSTED_ORIGINS` را در فایل `settings.py` با آدرس دامنه ای که استفاده می کنید مقدار دهی نمایید.

```python
CSRF_TRUSTED_ORIGINS = ["https://test.chbk.run"]
```

## رفع مشکل ALLOWED HOSTS

در برنامه های Django برای رفع مشکل ALLOWED HOSTS می بایست متغییر `ALLOWED_HOSTS` را در فایل `settings.py` با آدرس دامنه ای که استفاده می کنید مقدار دهی نمایید.

```python
ALLOWED_HOSTS = ["https://test.chbk.run"]
```

## رفع مشکل لود نشدن فایل های static

در برنامه های Django برای رفع مشکل لود نشدن فایل های static لازم است مسیر static و media را در فایل `settings.py` برنامه خودتان به صورت صحیح معرفی کنید.

```python
MEDIA_ROOT = BASE_DIR / 'media'
MEDIA_URL = '/media/'


STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'
```

## کش کردن پکیج ها

برای فعال نمودن سیستم کشینگ پکیج های سرویس میتوانید متغیر زیر را در بخش تنظیمات سرویس، متغیر های محیطی پلتفرم ست نمایید. اینکار باعث سرعت بخشیدن به روند استارت و ری استارت سرویس می شود.

```properties
# name = value

CHBK_PYTHON_SAVE = true
```

![](https://s1.chabokan.net/docs/images/elk-env.jpg)


## اتصال دامنه به سرویس Django

برای اتصال دامنه به سرویس جنگو می بایست در فایل `.env` سرویس دامنه اصلی خود را وارد نمایید.

```properties
SITE_URL=example.com
```

## استفاده از کتابخانه crontab

شما باید یک فایل با نام `cron-jobs` در سرویس ایجاد کنید و دستور زیر درون اون قرار بدید و سپس یکبار سرویس را ریستارت کنید تا کرون ها اجرا شوند:

```shell
/usr/local/bin/python3 /app/manage.py crontab run ######## >> /app/mylog.log 2>&1 

```

## تغییر ورژن Django

در صورتی که قصد دارید ورژن python خود را تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن Django سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.

import Versions from '/docs/03-simple-hosting/09-python/_versions.md';

<Versions />

![](https://s1.chabokan.net/docs/images/django-python-version.png)

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>