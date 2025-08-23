---
title: "نکات آموزشی سرویس FastAPI"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست FastAPI به شما آموزش دهیم."
---

# نکات تکمیلی FastAPI
---

در این بخش می خواهیم نکات تکمیلی را در [هاست FastAPI](https://chabokan.net/products/cloud-hosting/fastapi/) به شما آموزش دهیم.

## تغییر سطح لاگ uvicorn

درصورتی که می خواهید سطح لاگ های `uvicorn` تغییر دهید، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `UVICORN_LOG_LEVEL` با مقدار موردنظر خود مقدار دهی کنید.

```bash
# name : value

UVICORN_LOG_LEVEL : info
```

## کش کردن پکیج ها

برای فعال نمودن سیستم کشینگ پکیج های سرویس میتوانید متغیر زیر را در بخش تنظیمات سرویس، متغیر های محیطی پلتفرم ست نمایید. اینکار باعث سرعت بخشیدن به روند استارت و ری استارت سرویس می شود.

```bash
# name : value

CHBK_PYTHON_SAVE : true
```

## افزایش تعداد UVICORN_WORKERS

درصورتی که می خواهید `UVICORN` با بیش از یک `Worker` کار کند، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `UVICORN_WORKERS` را با مقدار موردنظر خود مقدار دهی کنید.

```bash
# name : value

UVICORN_WORKERS : 2
```

### تغییر سطح لاگ UVICORN

درصورتی که می خواهید سطح لاگ های `UVICORN` تغییر دهید، می‌توانید وارد تنظیمات سرویس خود شده و در بخش متغیرها، متغیر `UVICORN_LOG_LEVEL` با مقدار موردنظر خود مقدار دهی کنید.

```bash
# name : value

UVICORN_LOG_LEVEL : info
```


## تغییر ورژن FastAPI

در صورتی که قصد دارید ورژن FastAPI خود را تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن Python سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.

```php
Python versions:

- 3.6
- 3.7
- 3.8
- 3.9
- 3.10
- 3.11
- 3.12
```

![](https://s1.chabokan.net/docs/images/fastapi-python-version.png)

---
<a href="https://hub.chabokan.net/fa/services/create/fastapi" ><img src="https://s1.chabokan.net/docs/images/fastapi-banner.png" /></a>