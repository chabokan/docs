---
title:  "نحوه migration در Django" 
sidebar_label: "اجرای Migration ها"
description: "در این بخش می خواهیم آموزش اجرای Migration ها در Django هاست جنگو به شما آموزش دهیم"
---

# اجرای Migration ها در Django
---

در این بخش می خواهیم آموزش اجرای `Migration` ها در `Django` را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم.

بعد از اتصال دیتابیس به سرویس خود، کافیست هربار که در جنگو `Model` ها را تغییر می دهید، ابتدا یکبار دستور زیر را در کنسول اجرا نمایید تا تغییرات در دیتابیس برای شما اعمال شود. ([کنسول چیست](https://docs.chabokan.net/features/console/))

```python
python manage.py migrate
```

![](https://s1.chabokan.net/docs/images/console-chabokan.jpg)

> [مستند رسمی **اجرای Migration** در سرویس **Django**](https://docs.djangoproject.com/en/5.0/topics/migrations/#workflow)

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>