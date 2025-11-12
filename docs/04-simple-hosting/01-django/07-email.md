---
title: "آموزش افزودن ایمیل در Django"
icon: "faEnvelopeOpen"
sidebar_label: "تنظیمات ایمیل"
description: "در این بخش می خواهیم تنظیمات ایمیل Django  را در هاست جنگو به شما آموزش دهیم"
---

# تنظیمات ایمیل در Django
---

در این بخش می خواهیم تنظیمات ایمیل `Django`  را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم. ابتدا به سرویس خود مراجعه کنید و در بخش ایمیل ها بر روی افزودن ایمیل کلیک نمایید.([افزودن ایمیل](https://docs.chabokan.net/features/email/add-email/))

سپس مراحل زیر را به ترتیب طی کنید تا به راحتی بتوانید از برنامه خود ایمیل ارسال نمایید.

## تنظیمات متغییر های محیطی (env)

در ابتدا باید اطلاعات ایمیل را در قسمت متغیر های محیطی پلتفرم مانند نمونه های زیر اضافه نمایید.

```properties
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=mail.chabokan.net
EMAIL_PORT=587
EMAIL_HOST_USER=info@example.net
EMAIL_HOST_PASSWORD=vfjbih34w9fr8
EMAIL_USE_TLS=True
```

در نهایت می‌توانید در پروژه‌ی خود مانند مثال زیر عمل کرده و با استفاده از دسترسی ایمیل سرویس چابکان به‌صورت امن اقدام به ارسال ایمیل‌های تراکنشی نمایید:

```python
from django.core.mail import send_mail
send_mail('Subject here', 'Here is the message.', 'from@example.com', ['to@example.com'], fail_silently=False)
```

> [مستند رسمی **تنظیمات ایمیل** در سرویس **Django**](https://docs.djangoproject.com/en/5.0/topics/email/)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/django"
img="https://s1.chabokan.net/docs/images/django-banner.png"
/>