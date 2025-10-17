---
title: "نکات آموزشی Flask"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست فلسک Flask به شما آموزش دهیم."
---

# نکات تکمیلی Flask
---

در این بخش می خواهیم نکات تکمیلی را در [هاست فلسک Flask](https://chabokan.net/flask/) به شما آموزش دهیم.


## افزایش زمان تایم‌اوت Gunicorn

درصورتی که در سرویس خود با خطای `CRITICAL WORKER TIMEOUT` مواجه شده‌اید و به `WORKER TIMEOUT` بیشتر از ۳۰ ثانیه نیاز دارید می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_TIMEOUT` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_TIMEOUT : 90
```

### افزایش تعداد ورکر Gunicorn

درصورتی که می خواهید `Gunicorn` با بیش یک `Worker` کار کند، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_WORKERS` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_WORKERS : 2
```

### افزایش تعداد Gunicorn thread

درصورتی که می خواهید `Gunicorn` با بیش یک `thread` کار کند، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_THREADS` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_THREADS : 2
```

### تغییر سطح لاگ Gunicorn

درصورتی که می خواهید سطح لاگ های `Gunicorn` تغییر دهید، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `GUNICORN_LOG_LEVEL` با مقدار موردنظر خود مقدار دهی کنید.

```properties
# name : value

GUNICORN_LOG_LEVEL : info
```
## تغییر ورژن Flask

در صورتی که قصد دارید ورژن Flask خود را تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن Python سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.

```text
Python versions:

- 3.7
- 3.8
- 3.9
- 3.10
- 3.11
- 3.12
```

![](https://s1.chabokan.net/docs/images/flask-python-version.png)

---
<a href="https://hub.chabokan.net/fa/services/create/flask" ><img src="https://s1.chabokan.net/docs/images/flask-banner.png" /></a>