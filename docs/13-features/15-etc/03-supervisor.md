---
title: "آموزش نحوه کار با Supervisor"
icon: "faCogs"
sidebar_label: "Supervisor"
description: "گاهی اوقات نیاز است که یک برنامه یا اسکریپت به صورت تمام وقت در سرویس اجرا باشد و حتی اگر سرویس ریستارت "
---

# Supervisor
---

گاهی اوقات نیاز است که یک برنامه یا اسکریپت به صورت تمام وقت در سرویس اجرا باشد و حتی اگر سرویس ریستارت شد آن برنامه دوباره اجرا شود. برای این کار در چابکان از `Supervisor` استفاده می شود تا اسکریپت شما به صورت تمام وقت در سرویس استقرار داده شده اجرا باشد.

برای فعال سازی `Supervisor` در سرویس خود کافیست یک فایل با نام `supervisor.conf` در ریشه (root) فایل های سرویس خود ایجاد کنید و باتوجه به `syntax` اصولی `Supervisor` تنظیمات خود را اعمال نمایید.

بعد از ایجاد فایل و اعمال کردن تنظیمات در ریشه برنامه خود کافیست **یکبار سرویس خود را ریستارت نمایید** تا `Supervisor` سرویس شما فعال شود.

مثال:

```ini
[program:app-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /var/www/html/artisan queue:work
directory=/var/www/html
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
numprocs=1
user=root
redirect_stderr=true
stdout_logfile=/app-worker.log
```

## چک کردن supervisor

برای چک کردن اجرا صحیح `supervisor` میتوانید لاگ های آن را در قسمت مشخص شده  `stdout_logfile` بررسی نمایید و یا در کنسول با استفاده از دستور زیر وضعیت اجرایی `supervisor` را بررسی نمایید.

```shell
sudo supervisorctl status
```

## کار با چندین Supervisor

گاهی اوقات نیاز است چندین `supervisor` را با توجه به نیاز خود در یک سرویس استفاده نمایید، برای این کار کافی است یک فولد به نام `supervisor_conf` ایجاد کرده و به ترتیب `supervisor` های خود را درون آن قرار دهید. نام `supervisor` های داخل فایل `supervisor_conf` میتواند هر چیزی باشد اما پسوند آنها باید `.conf` باشد. برای مثال: `supervisor1.conf` , `supervisor2.conf`

```text
supervisor_conf  # فولدر اصلی
│
├── supervisor1.conf
│
├── supervisor2.conf
│
├── ...
```