---
title: "نکات آموزشی PHP"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست php به شما آموزش دهیم."
---

# نکات تکمیلی PHP
---

در این بخش می خواهیم نکات تکمیلی را در [هاست php](https://chabokan.net/cloud-hosting/php/) به شما آموزش دهیم.

## تنظیمات php.ini

برای تغییر در فایل `php.ini` کافیست یک فایل با نام `chabok-php.ini` در ریشه `(root)` فایل های سرویس خود ایجاد کنید و تنظیمات که می خواهد در `php.ini` اعمال شود را در آن درج بفرمایید.

مثال:

```ini
upload_max_filesize = "20M"
post_max_size = "25M"
memory_limit = "128M"
max_execution_time = "600"
allow_url_fopen = on
```

:::caution توجه

بعد از ایجاد این فایل ابتدا باید یکبار سرویس خود را ری استارت نماییید تا تنظیمات انجام شده در این فایل در php.ini شما اعمال شود.

:::

### غیر فعال کردن Function های خطرناک در php.ini

در فایل `php.ini`، شما می‌توانید از دستور `disable_functions` استفاده کنید تا توابع خاصی در `PHP` غیرفعال شوند. این دستور به شما امکان می‌دهد که کنترل دقیق‌تری بر روی عملکرد `PHP` در سطح سرور خود داشته باشید.

وقتی از این دستور استفاده می‌کنید، می‌توانید توابعی را که برای اجرای کد `PHP` شما غیرضروری یا امن نمی‌باشند، غیرفعال کنید. این کار می‌تواند به شما در امنیت و جلوگیری از استفاده ناخواسته از توابع خطرناک کمک کند.
به طور پیشفرض در چابکان توابع زیر فعال می باشد. برای این که تابع مد نظر خود را اضافه یا حذف نمایید کافیست یک فایل با نام `chabok-php.ini` در ریشه (root) فایل های سرویس خود ایجاد کنید و کد زیر را اضافه کنید و تغییرات مد نظر را اعمال نمایید.

```ini
disable_functions =exec,system,passthru,shell_exec,proc_close,proc_open,dl,popen,show_source,posix_kill,posix_mkfifo,posix_getpwuid,posix_setpgid,posix_setsid,posix_setuid,posix_setgid,posix_seteuid,posix_setegid,posix_uname,mail
```

## تنظیمات اختصاصی htaccess

شما می‌توانید تنظیمات مورد نیاز وب‌سرور خود را در فایل‌های .htaccess قرار دهید. برای مثال میخواهید صفحه ی 404 دلخواه خود را معرفی کنید کافیست یک فایل htaccess. به ریشه برنامه‌ی‌تان اضافه کنید و سپس مقادیر زیر را در آن قرار دهید.

```apacheconf
ErrorDocument 404 /error.php?q=404
```

## ارور های مربوط به فایل .htaccess

در صورتی که وبسایت شما با ارور هایی مانند ERR_TOO_MANY_REDIRECTS و INTERNAL ERROR برخورد کرد، میبایست فایل .htaccess را بررسی نمایید.

![](https://s1.chabokan.net/docs/images/htaccess-error-1.jpg)

برای اینکار میتوانید به مدیریت فایل سرویس مراجعه نموده و فایل .htaccess را انتخاب کرده و سپس گزینه Edit را فشار دهید. حال تنظیماتی مانند دستورات Redirect، تنظیمات مربوط به HTTPS و همچنین دستورات مرتبط با PHP را از این فایل کات نموده و در سیستم خود به صورت بک آپ نگه دارید. حال که فایل .htaccess شما از موارد بالا حذف شده است، سرویس را یکبار ری استارت کرده و به دامنه خود مراجعه نمایید.

![](https://s1.chabokan.net/docs/images/htaccess-error-4-1.jpg)

برای مثال در نمونه تصویر زیر تنظیمات https تعریف شده است و با مراجعه به دامنه ما با ارور ERR_TOO_MANY_REDIRECTS روبه رو می شویم که بعد از حذف این تنظیمات ارور مربوطه رفع می شود.

![](https://s1.chabokan.net/docs/images/htaccess-error-3.jpg)

## کار با Queue ها

گاهی اوقات نیاز است که یک برنامه یا اسکریپت به صورت تمام وقت در سرویس اجرا باشد و حتی اگر سرویس ریستارت شد آن برنامه دوباره اجرا شود. برای این کار در چابکان از Supervisor استفاده می شود تا اسکریپت شما به صورت تمام وقت در سرویس استقرار داده شده اجرا باشد.  
Supervisor در سرویس PHP چابکان نصب شده و راهنمای کامل آن را نیز میتوانید از طریق مستند زیر دنبال فرمایید.  
[فعال سازی Supervisor](/features/etc/supervisor/)

## خطای CORS در پی اچ پی

در صورتی که با خطای CORS مواجه شدید، میتوانید کد زیر را به فایل‌ htaccess پروژه‌ی خود اضافه کنید.

```apacheconf
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

## اکستنشن های سرویس PHP

اکستنشن های موجود در سرویس PHP چابکان:

```text
[PHP Modules]
apcu
bcmath
bz2
calendar
Core
ctype
curl
date
dom
exif
FFI
fileinfo
filter
ftp
gd
geoip
gettext
gmp
hash
iconv
igbinary
imagick
imap
intl
ionCube Loader
json
ldap
libxml
mbstring
memcached
mongodb
msgpack
mysqli
mysqlnd
openssl
pcntl
pcre
PDO
pdo_mysql
pdo_pgsql
pdo_sqlite
pgsql
Phar
posix
pspell
rdkafka
readline
redis
Reflection
session
shmop
SimpleXML
snmp
soap
sockets
sodium
SourceGuardian
SPL
sqlite3
standard
swoole
sysvmsg
sysvsem
sysvshm
tidy
tokenizer
uuid
xml
xmlreader
xmlrpc
xmlwriter
xsl
yaml
Zend OPcache
zip
zlib

[Zend Modules]
SourceGuardian
Zend OPcache
the ionCube PHP Loader + ionCube24
```

## تغییر ورژن PHP

در صورتی که قصد دارید ورژن PHP خود را تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن PHP سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.

```text
php versions:

- php 7.1         - php fpm 7.1
- php 7.2         - php fpm 7.2
- php 7.3         - php fpm 7.3
- php 7.4         - php fpm 7.4
- php 8.0         - php fpm 8.0
- php 8.1         - php fpm 8.1
- php 8.2         - php fpm 8.2
- php 8.3         - php fpm 8.3
```

![](https://s1.chabokan.net/docs/images/php-version.png)

---
<a href="https://hub.chabokan.net/fa/services/create/php" ><img src="https://s1.chabokan.net/docs/images/php-banner.png" /></a>