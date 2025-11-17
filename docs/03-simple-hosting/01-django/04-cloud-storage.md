---
title:  "آموزش اتصال سرویس فایل S3 به Django"
icon: "faCloudArrowUp"
sidebar_label: "اتصال به سرویس فایل S3"
description: "در این بخش می خواهیم آموزش اتصال Django به فایل S3 هاست جنگو به شما آموزش دهیم"
---

# اتصال Django به فایل S3
---

در این بخش می خواهیم آموزش نحوه اتصال `Django` به سرویس فایل `S3` را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم. برای متصل کردن `Django` به سرویس فایل `S3` باید یکسری تغییرات در پروژه خود اعمال کنید که این تغییرات در این صفحه قدم به قدم خدمت شما شرح داده خواهد شد.

## نصب AWS SDK

برای استفاده از سرویس فایل `S3` ابتدا باید با استفاده از دستور زیر کتابخانه های [boto3](https://github.com/boto/boto3) و [django-storages](https://django-storages.readthedocs.io/en/latest/index.html) را در پروژه خود نصب کنید.

```shell
pip install boto3
pip install django-storages
```

## تنظیم کلیدها

حالا که کتابخانه مربوط نصب شد، باید مشخصات سرویس فایل `S3` خود را با استفاده از `ENV` ها به `Django` معرفی کنید. که برای اینکار می توانید از طریق قسمت تنظیمات سرویس خود از قسمت متغیر های محیطی چابکان استفاده کنید. برای آشنایی بیشتر با متغیر‌های محیطی چابکان این [مستند](/features/settings/env/) را مطالعه بفرمائید.

```properties
# name : value

ENDPOINT : Bucket-Endpoint
BUCKET_NAME : Bucket-Name
ACCESS_KEY : Access-Key
SECRET_KEY : Secret-Key
```

## پیکربندی تنظیمات

در مرحله‌ی آخر باید فایل `settings.py` برنامه‌تان را به‌شکل زیر ویرایش کنید:

```python
INSTALLED_APPS = [
  ...,
  'storages',
]

AWS_S3_ENDPOINT_URL = os.getenv("ENDPOINT")
AWS_STORAGE_BUCKET_NAME = os.getenv("BUCKET_NAME")
AWS_ACCESS_KEY_ID = os.getenv("ACCESS_KEY")
AWS_SECRET_ACCESS_KEY = os.getenv("SECRET_KEY")
AWS_S3_OBJECT_PARAMETERS = {
  'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
```

## نحوه‌ی استفاده

برای مثال شما می‌توانید با استفاده از قطعه کد زیر، محتوای `Contents` را در فایلی با نام `example.txt` قرار داده و آن را در فضای ذخیره‌سازی ابری ذخیره کنید:

```python
from django.core.files.base import ContentFile
from django.core.files.storage import default_storage

path = default_storage.save('/example.txt', ContentFile(b'Contents'))
```

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>