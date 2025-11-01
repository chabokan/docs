---
title:  "آموزش اتصال celery به Django "
icon: "faTasks"
sidebar_label: "افزودن Celery"
description: "در این بخش می خواهیم آموزش افزودن Celery به Django هاست جنگو به شما آموزش دهیم"
---

# افزودن Celery به Django
---

در این بخش می خواهیم افزودن `Celery` به `Django` را در [هاست جنگو](https://chabokan.net/cloud-hosting/python/django/) به شما آموزش دهیم.

برای استفاده از `Celery` در برنامه ی `Django` خود ابتدا باید آنرا به برنامه خود معرفی نمایید. مراحل زیر به صورت کامل تا اتصال `Celery` به برنامه ی شما آماده شده است.

ابتدا در ترمینال سرویس `Celery` را با کامند زیر نصب نمایید:

```shell
sudo pip install celery
```

سپس در مسیر `/app/app` می بایست فایلی به نام `celery.py` ایجاد نمایید.

```shell
/app/app/celery.py
```

داخل فایل `celery.py `قطعه کد زیر را قرار دهید تا `Celery` را به `Django` معرفی نمایید.

```python
import os

from celery import Celery

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'app.settings')

app = Celery('app')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.broker_url = 'redis://:<your_password>@<your_host>:<your_port>/<database_number>'

# Load task modules from all registered Django apps.
app.autodiscover_tasks()


@app.task(bind=True, ignore_result=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
```

سپس میبایست به فایل `__init__.py` در این مسیر `/app/app` بروید.

```shell
/app/app/__init__.py
```

و قطعه کد زیر را به `__init__.py` اضافه نمایید:

```python
from .celery import app as celery_app

__all__ = ('celery_app',)
```

سپس مشخصات Redis خود را فایل settings.py خود وارد نمایید.

```python
BROKER_URL = 'redis://:<your_password>@<your_host>:<your_port>/<database_number>'
CELERY_RESULT_BACKEND = 'redis://:<your_password>@<your_host>:<your_port>/<database_number>'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'Asia/Tehran'
```

حالا میتوانید task های مد نظر خود را در app معرفی نمایید.

```shell
app/
    > - tasks.py
    >
    > - models.py
```

در آخر نیز میبایست در root پروژه supervisor.conf را مانند نمونه زیر ایجاد نموده و سپس سرویس را ری استارت نمایید.

```ini
[program:celery]
process_name=%(program_name)s_%(process_num)02d
directory=/app
command=celery -A app worker -l INFO
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
user=root
redirect_stderr=true
stdout_logfile=/app-worker.log
```

برای آشنایی بیشتر با Supervisor می‌توانید این [مستند](https://docs.chabokan.net/features/etc/supervisor/) را مطالعه کنید.

> [مستند رسمی **افزودن Celery** در سرویس **Django**](https://docs.celeryq.dev/en/stable/django/first-steps-with-django.html)

---
<a href="https://hub.chabokan.net/fa/services/create/django" ><img src="https://s1.chabokan.net/docs/images/django-banner.png" /></a>