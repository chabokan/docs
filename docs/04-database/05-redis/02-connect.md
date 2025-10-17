---
title: "آموزش روش های اتصال به دیتابیس Redis"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به Redis در سرویس ابری ردیس را به شما آموزش دهیم."
---

# روش های اتصال به Redis
---

در ادامه میخواهیم آموزش نحوه اتصال به `Redis` را در سرویس [دیتابیس ردیس](https://chabokan.net/services/redis/) به شما آموزش دهیم.

برای اتصال به سرویس دیتابیس ابری `Redis` می توانید به انتخاب خود یکی از روش های زیر را استفاده نمایید تا به راحتی دیتا های خود را مدیریت نمایید.

## اتصال از طریق phpRedisAdmin

برای اتصال از طریق `phpRedisAdmin` کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن phpRedisAdmin** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی `phpRedisAdmin` در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

![](https://s1.chabokan.net/docs/images/redis_4.jpg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی `phpRedisAdmin` نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::

![](https://s1.chabokan.net/docs/images/redis_5.jpg)

## اتصال از طریق Redis CLI

همواره شما می توانید از طریق ترمینال یا کنسول نیز با این سرویس ارتباط برقرار نماید. برای این کار ابتدا باید `redis-cli` را بر روی سیستم عامل خود نصب نمایید و با استفاده از دستور زیر به دیتابیس ابری `Redis` متصل شوید.

```shell
redis-cli -h REDIS_HOST -p REDIS_PORT -a REDIS_PASSWORD
```

## اتصال با استفاده از Connection String

برای اتصال به دیتابیس `Redis` از طریق `Connection String` می توانید مانند نمونه زیر `Connection String` خود را ایجاد نمایید:

```text
redis://:<your_password>@<your_host>:<your_port>/<database_number>
```

## اتصال از طریق Django

برای اتصال `Redis` از طریق `django` کافیست قطعه کد زیر را  با توجه به مشخصات سرویس `Redis` خود کامل کرده و درون فایل تنظیمات برنامه خود در `settings.py` قرار دهید.


```python
CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": "redis://:<your_password>@<your_host>:<your_port>/<database_number>",
    }
}
```

---
<a href="https://hub.chabokan.net/fa/services/create/redis" ><img src="https://s1.chabokan.net/docs/images/redis-banner.png" /></a>