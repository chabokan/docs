---
title: "نکات آموزشی Laravel"
icon: "faLightbulb"
sidebar_label: "نکات تکمیلی"
description: "در این بخش می خواهیم نکات تکمیلی را در هاست لاراول laravel به شما آموزش دهیم."
---

# نکات تکمیلی Laravel
---

در این بخش می خواهیم نکات تکمیلی را در [هاست لاراول laravel](https://chabokan.net/cloud-hosting/php/laravel/) به شما آموزش دهیم.

## تنظیمات php.ini

برای تغییر در فایل `php.ini` کافیست یک فایل با نام `chabok-php.ini` در ریشه `(root)` فایل های سرویس خود ایجاد کنید و تنظیمات که می خواد در `php.ini` اعمال شود را در آن درج بفرمایید.

مثال:

```ini
upload_max_filesize = "20M"
post_max_size = "25M"
memory_limit = "128M"
max_execution_time = "600"
allow_url_fopen = on
```

بعد از ایجاد این فایل ابتدا باید یکبار سرویس خود را ریستارت نماییید تا تنظیمات انجام شده در این فایل در php.ini شما اعمال شود.

## تنظیمات TrustedProxies

در پلتفرم ابری چابکان تمامی درخواست ها به سرویس شما از طریق [Reverse proxy](https://en.wikipedia.org/wiki/Reverse_proxy) های اختصاصی لوکیشن انتخابی سرویس شما انجام می شود. در سرویس لاراول برای معرفی پروکسی ها کافیست فایل `app/Http/Middleware/TrustProxies.php` را مانند زیر تغییر دهید، تا لاراول شما پروکسی های چابکان را شناسایی نماید.

```php
<?php
namespace App\Http\Middleware;
use Illuminate\Http\Request;
use Fideloper\Proxy\TrustProxies as Middleware;
class TrustProxies extends Middleware
{
    /**
     * The trusted proxies for this application.
     *
     * @var array|string
     */
    protected $proxies = '*';
    /**
     * The headers that should be used to detect proxies.
     *
     * @var int
     */
    protected $headers = Request::HEADER_X_FORWARDED_ALL;
}
```

## نحوه نمایش ارور Laravel

در صورتی که برنامه `Laravel` دچار خطا شده و شما این خطا را نمیتوانید مشاهده کنید با روش زیر میتوانید نمایش ارور را فعال نمایید.

ابتدا فایل `chabok-php.ini` را در روت فایل هاست خود ساخته و سپس مقدار زیر را درون فایل وارد نمایید. سپس سرویس خود را ری استارت نمایید تا تنظیمات در فایل `php.ini` اعمال گردد.

```ini
display_errors = On
```

![](https://s1.chabokan.net/docs/images/laravel-migrate-error-3.jpg)


## تنظیمات Queue ها

برای تنظیمات `Queue` در سرویس ابری لاراول کافیست با استفاده از `Supervisor` دستور زیر را اجرا نمایید تا `Queue` های لاراول به درستی فعال شوند. ([Supervisor چیست و چطور استفاده می شود](/features/etc/supervisor/))

```shell
php /var/www/html/artisan queue:work
```

## راه‌اندازی Laravel octane

برای راه‌اندازی `Laravel octane` با سرور Swoole میتوانید متغییر محیطی `START_COMMAND` را به صورت زیر مقداردهی نمایید و یکبار تنظیمات سرویس را ذخیره کنید. با تنظیم این متغییر مشاهده خواهد کرد که سرویس شما با استفاده از دستور زیر اجرا خواهد شد.

```properties
START_COMMAND=php artisan octane:start --server=swoole --host=0.0.0.0 --port=80
```

درنهایت با اجرای دستور زیر در کنسول سرویس خود می‌توانید وضعیت Laravel octane را بررسی کنید:

```shell
sudo php artisan octane:status
```

برای تنظیمات صف بندی `(queue)` میتوانید [از این مستند](/features/etc/supervisor/) کمک بگیرید.


## اکستنشن های PHP

اکستنشن های `PHP` موجود در سرویس `Laravel` چابکان:

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

## تغییر ورژن Laravel

در صورتی که قصد دارید ورژن php خود را تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن Laravel سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.


import PhpVersions from '/docs/03-simple-hosting/05-php/_versions.md';

<PhpVersions />

![](https://s1.chabokan.net/docs/images/laravel-version1.png)

---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>