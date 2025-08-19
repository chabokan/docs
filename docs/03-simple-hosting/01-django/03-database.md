---
title: "آموزش اتصال Django به دیتابیس"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش اتصال Django به دیتابیس را در هاست جنگو به شما آموزش دهیم"
---

# اتصال Django به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `Django` به دیتابیس را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم. برای اتصال سرویس `Django` به دیتابیس میتوانید از یکی از روش های زیر استفاده نمایید.

برای اتصال به دیتابیس در سرویس `Django` کافیست ابتدا از طریق حساب کاربری خود یک دیتابیس ایجاد کنید و سپس با استفاده از دستورعمل‌های زیر دیتابیس را به سرویس خود متصل کنید.

همچنین در سرویس Django امکان استفاده از دیتابیس‌های اشتراکی نیز فراهم شده است. شما می‌توانید در صورت تمایل، یکی از سرویس‌های دیتابیس اشتراکی موجود را تهیه کنید.
سرویس‌های اشتراکی قابل ارائه در هاست Django شامل موارد زیر می‌باشند (برای آشنایی بیشتر با تفاوت سرویس‌های اشتراکی و اختصاصی می‌توانید به این [مستند](https://docs.chabokan.net/general-tips/share-db-vs-dedicated-db/) مراجعه فرمایید):

* MySQL
* MariaDB

بدین ترتیب، بسته به نیاز خود می‌توانید از دیتابیس اختصاصی یا اشتراکی استفاده نمایید و سرویس مناسب را انتخاب کنید.

## اتصال از طریق متغیر های چابکان

بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `Django` معرفی کنید. برای این کار ابتدا به قسمت تنظیمات سرویس `Django` خود مراجعه نمایید.

![](https://s1.chabokan.net/docs/images/python-database-connect-1.jpg)

سپس کافیست هاست، `نام کاربری`، `رمزعبور`، `پورت` و `نوع دیتابیس` ایجاد شده را در قسمت `متغیر های محیطی پلتفرم` مانند نمونه های زیر اضافه نمایید.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="mysql" label="Mysql" default>
    ```bash
    # name = value

    DB_ENGINE = django.db.backends.mysql
    DB_HOST = Host-adress
    DB_PORT = Port-number
    DB_DATABASE = DB-name
    DB_USERNAME = root
    DB_PASSWORD = Password
    ```

  </TabItem>
  <TabItem value="postgresql" label="Postgresql">
    ```bash
    # name = value

    DB_ENGINE = django.db.backends.postgresql
    DB_HOST = Host-adress
    DB_PORT = Port-number
    DB_DATABASE = DB-name
    DB_USERNAME = root
    DB_PASSWORD = Password
    ```
  </TabItem>
</Tabs>

بعد از تنظیم متغیر ها کافیست قسمت دیتابیس فایل `setting.py` را مانند زیر تغیر دهید.(ماژول os باید import شود)

```python
DATABASES = {
    'default': {
        'ENGINE': os.getenv("DB_ENGINE"),
        'NAME': os.getenv("DB_DATABASE"),
        'USER': os.getenv("DB_USERNAME"),
        'PASSWORD': os.getenv("DB_PASSWORD"),
        'HOST': os.getenv("DB_HOST"),
        'PORT':  os.getenv("DB_PORT"),
    }
}
```

## اتصال مستقیم به دیتابیس

برای اتصال مستقیم به دیتابیس کافیست اطلاعاتی که بعد از ایجاد دیتابیس در اختیار شما قرار گرفت(هاست، نام کاربری، رمزعبور، پورت) را مستقیما در `setting.py` سرویس خود وارد کنید.

> [مستند رسمی **اتصال به دیتابیس** در سرویس **Django**](https://docs.djangoproject.com/en/5.0/ref/databases/)

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>