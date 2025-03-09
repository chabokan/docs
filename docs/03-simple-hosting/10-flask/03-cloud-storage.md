---
title:  "آموزش اتصال سرویس فایل S3 به Flask"
sidebar_label: "اتصال به سرویس فایل S3"
description: "در این بخش می خواهیم آموزش نحوه اتصال `Flask` به سرویس فایل `S3` را در هاست فلسک Flask به شما آموزش دهیم."
---

# اتصال Flask به سرویس فایل S3
---

در این بخش می خواهیم آموزش نحوه اتصال `Flask` به سرویس فایل `S3` را در [هاست فلسک Flask](https://chabokan.net/flask/) به شما آموزش دهیم.

برای متصل کردن `Flask` به سرویس فایل `S3` باید یکسری تغییرات در پروژه خود اعمال کنید که این تغییرات در این صفحه قدم به قدم خدمت شما شرح داده خواهد شد.

## نصب AWS SDK

برای استفاده از سرویس فایل `S3` باید ابتدا با استفاده از دستور زیر کتابخانه مربوط به این سرویس را در پروژه خود نصب کنید.

```bash
pip install boto3
```

## تنظیم کلیدها

حالا که کتابخانه مربوط نصب شد، باید مشخصات سرویس فایل `S3` خود را با استفاده از `env` ها به `Flask` معرفی کنید. که برای اینکار می توانید از فایل قسمت متغیر های محیطی چابکان استفاده کنید.

```bash
# name : value
ENDPOINT : <Bucket Endpoint>
BUCKET_NAME : <Bucket Name>
ACCESS_KEY : <Access Key>
SECRET_KEY : <Secret Key>
```

## نحوه‌ی استفاده

نمونه کد برای دریافت لیست باکت‌های ایجاد شده:

```python
import boto3, os

s3 = boto3.resource('s3',
        endpoint_url=os.environ.get(ENDPOINT),
        aws_access_key_id=os.environ.get(ACCESS_KEY),
        aws_secret_access_key=os.environ.get(SECRET_KEY)
      )

for bucket in s3.buckets.all():
    print(bucket.name)
```

---
<a href="https://hub.chabokan.net/fa/services/create/flask" ><img src="https://s1.chabokan.net/docs/images/flask-banner.png" /></a>