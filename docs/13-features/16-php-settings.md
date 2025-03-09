---
title: "تنظیمات php (php.ini)"
sidebar_label: "تنظیمات php (php.ini)"
description: "برای تغییر در فایل php.ini کافیست یک فایل با نام chabok-php.ini در ریشه (root) فایل های سرویس خود ایجاد "
---

# تنظیمات php (php.ini)
---

برای تغییر در فایل `php.ini` کافیست یک فایل با نام `chabok-php.ini` در ریشه (root) فایل های سرویس خود ایجاد کنید و تنظیمات که می خواهید در `php.ini` اعمال شود را در آن درج نمایید.

مثال:

```bash
upload_max_filesize = "20M"
post_max_size = "25M"
memory_limit = "128M"
max_execution_time = "600"
allow_url_fopen = on
```

بعد از ایجاد این فایل ابتدا باید یکبار سرویس خود را ریستارت نماییید تا تنظیمات انجام شده در این فایل در `php.ini` شما اعمال شود.


## غیر فعال کردن Function های خطرناک در php.ini

در فایل `php.ini`، شما می‌توانید از دستور `disable_functions` استفاده کنید تا توابع خاصی در `PHP` غیرفعال شوند. این دستور به شما امکان می‌دهد که کنترل دقیق‌تری بر روی عملکرد `PHP` در سطح سرور خود داشته باشید.

وقتی از این دستور استفاده می‌کنید، می‌توانید توابعی را که برای اجرای کد `PHP` شما غیرضروری یا امن نمی‌باشند، غیرفعال کنید. این کار می‌تواند به شما در امنیت و جلوگیری از استفاده ناخواسته از توابع خطرناک کمک کند.
به طور پیشفرض در چابکان توابع زیر فعال می باشد. برای این که تابع مد نظر خود را اضافه یا حذف نمایید کافیست یک فایل با نام `chabok-php.ini` در ریشه (root) فایل های سرویس خود ایجاد کنید و کد زیر را اضافه کنید و تغییرات مد نظر را اعمال نمایید.

```bash
disable_functions =exec,system,passthru,shell_exec,proc_close,proc_open,dl,popen,show_source,posix_kill,posix_mkfifo,posix_getpwuid,posix_setpgid,posix_setsid,posix_setuid,posix_setgid,posix_seteuid,posix_setegid,posix_uname,mail
```

بعد از ایجاد این فایل ابتدا باید یکبار سرویس خود را ریستارت نماییید تا تنظیمات انجام شده در این فایل در `php.ini` شما اعمال شود.