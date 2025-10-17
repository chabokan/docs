---
title: "مشکلات احتمالی"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که در سرویس `django` ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## کار نکردن CSS پنل ادمین

![](https://s1.chabokan.net/docs/images/error-django-1.jpg)

در صورتی که مشکل کار نکردن پنل ادمین را داشتید و یا سی اس اس پنل ادمین یا وبسایت شما دچار مشکل شده و از کار افتاده بود و یا مشکلاتی در JS(کدهای جی اسی) داشته اید، میتوانید با استفاده از روش زیر این مشکل را بر طرف نمایید.

در برنامه های `Django` برای رفع مشکل لود نشدن فایل های `static` لازم است مسیر `static` و `media` را در فایل `settings.py` برنامه خودتان به صورت صحیح معرفی کنید.

```python
MEDIA_ROOT = BASE_DIR / 'media'
MEDIA_URL = '/media/'


STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'
```

## مشکل Invalid HTTP_HOST

![](https://s1.chabokan.net/docs/images/error-django-3.jpg)

در صورت برخورد با ارور `404` و یا مشکل `ALLOWED_HOSTS` میتوانید با استفاده از روش زیر این مشکل را بر طرف نمایید.

در برنامه های `Django` برای رفع مشکل `ALLOWED HOSTS` می بایست متغیر `ALLOWED_HOSTS` را در فایل `settings.py` با آدرس دامنه ای که استفاده می کنید مقدار دهی نمایید.

```python
ALLOWED_HOSTS = ["https://test.chbk.run"]
```

## ارور CSRF verification failed

![](https://s1.chabokan.net/docs/images/error-django-csrf.jpg)

در صورت برخورد با ارور csrf و یا مشکل توکن سی آر اس اف میتوانید با استفاده از روش زیر این مشکل را بر طرف نمایید.

در برنامه های `Django` برای رفع مشکل `CSRF Token` می بایست متغییر `CSRF_TRUSTED_ORIGINS` را در فایل `settings.py` با آدرس دامنه ای که استفاده می کنید مقدار دهی نمایید.

```python
CSRF_TRUSTED_ORIGINS = ["https://test.chbk.run"]
```

## مشکل WSGI

در پلتفرم `Django` برای استقرار به فایل `wsgi` نیاز هست تا سرویس بتواند کار خود را انجام دهد. در سرویس `Django` چابکان به صورت خودکار مسیر این فایل شناسایی می شود. اما گاهی اوقات با توجه به ساختار برنامه شما ممکن هست این شناسایی خودکار با مشکل مواجه شود. برای رفع این مشکل شما باید مسیر `wsgi` پروژه تان را از طریق تنظیمات سرویس قسمت متغیر ها به چابکان معرفی کنید.

```properties
# name : value

WSGI_PATH : my_app_name.wsgi
```

## مشکل ERR_TOO_MANY_REDIRECTS

در صورت برخورد با ارور ERR_TOO_MANY_REDIRECTS در جنگو میتوانید موارد زیر را بررسی بفرمایید تا مشکل رفع شود.

![](https://s1.chabokan.net/docs/images/django-problems-redirect.png)

ابتدا در صورتی که دامنه به سرویس خود متصل کرده اید، از قسمت تنظیمات دامنه > تنظیمات `HTTPS` گزینه **انتقال خودکار HTTP به HTTPS** را غیر فعال نمایید و بعد از گذشت چند دقیقه وبسایت خود را چک نمایید.

سپس در صورت بر طرف نشدن خطا، به مدیریت فایل سرویس رفته و در فایل `settings.py` برنامه خود `SECURE_SSL_REDIRECT` را برابر  `False` قرار دهید:

```python
SECURE_SSL_REDIRECT = False
```

## خطای CORS در جنگو

در صورت برخورد با ارور `CORS No Allow Credentials` و یا `CORS Missing Allow Header` میتوانید از راه حل زیر استفاده نمایید.

برای حل مشکل میتوانید از [این پکیج](https://pypi.org/project/django-cors-headers/) استفاده نمایید و بعد از نصب و استفاده از پکیج در برنامه خود، میبایست موارد زیر را نیز در قسمت `settings.py` برنامه خود معرفی نمایید.

```python

CORS_ALLOWED_ORIGINS = [
    "https://your-site-url.com",
]
CORS_ALLOW_METHODS = [
  "DELETE",
  "GET",
  "OPTIONS",
  "PATCH",
  "POST",
  "PUT",
]
```


## برخورد با ImportError

در صورت مواجه شدن با ارور زیر میتوانید ورژن جنگوی خود را تغییر داده تا مشکل برطرف شود.

```log
ImportError: cannot import name 'decodestring' from 'base64' (/usr/local/lib/python3.9/base64.py)
```

## مشکل اجرا نشدن سرویس

![](https://s1.chabokan.net/docs/images/structure_error_1.PNG)

در صورت برخورد با ارور `Not Found requirements.txt file in /app` و یا `project structure is not correct` میتوانید با استفاده از روش زیر این ارور را برطرف نمایید.

کافیست تا فایل `requirements.txt` را در پوشه `/app` برنامه خود معرفی نمایید.


---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>