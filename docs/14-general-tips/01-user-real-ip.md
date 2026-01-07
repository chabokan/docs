---
title: "IP واقعی کاربر"
icon: "faUserSecret"
sidebar_label: "IP واقعی کاربر "
description: "برای دریافت آی پی واقعی کاربر میتوانید از روش زیر استفاده نمایید، به دلایل امنیتی و استفاده از `Reverse Proxy` "
---

# IP واقعی کاربر 
---

برای دریافت آی پی واقعی کاربر میتوانید از روش زیر استفاده نمایید، به دلایل امنیتی و استفاده از `Reverse Proxy` در چابکان، تمامی درخواست رسیده به سرور های اصلی وب‌سایت به ظاهر از IPهای چابکان آمده است. به‌منظور اطلاع یافتن از آدرس `IP` واقعی کاربر، میتوانید آنرا در هدر `HTTP` در فیلد مشخصی پیدا نمایید. با توجه به برنامه خود میتوانید آی پی واقعی کاربر را با استفاده از کد های زیر استخراج نمایید:

## IP واقعی کاربر در Nodejs

برای فعال کردن دریافت IP واقعی کاربر از طریق پراکسی در سرویس های Node.js که از Express.js استفاده می‌کنند، میتوانید از روش زیر استفاده نمایید.

ابتدا میبایست از طریق instance که از express ایجاد نموده اید گزینه `trust proxy` را روی `true` تنظیم کنید. این کار به `Express` اعلام میکند که به IP های ارسال شده توسط اعتماد کند.

```javascript
const app = express();

app.set('trust proxy', true);
```

سپس در قسمت هایی که نیاز به ip کاربر دارید از طریق req.ips آیپی کاربر را دریافت نمایید.

```javascript
req.ips.length ? req.ips[0] : req.ip
```

## IP واقعی کاربر در Laravel

برای مشاهده `IP` واقعی کاربر در برنامه `Laravel`،‌ میبایست به مسیر زیر رفته:

```shell
/app/Http/Middleware
```

سپس فایل `TrustProxies.php` را ادیت کرده و در بخش `protected $proxies` مقدار `*` را اضافه نمایید:

```php

...
{
    /**
     * The trusted proxies for this application.
     *
     * @var array<int, string>|string|null
     */
    protected $proxies = '*';

    ...
}

```


## IP واقعی کاربر در ASP.Net

برای گرفتن `IP` اصلی کاربر در `ASP.Net` از تکه کد زیر استفاده می‌کنیم: 

```csharp
Public string function get_real_ip_add (){

if (!IsEmpty(Request.ServerVariables["REAL_IP"])) 

return Request.ServerVariables["REAL_IP"];

else if (!IsEmpty(Request.ServerVariables["REMOTE_ADDR"])) 

return Request.ServerVariables["REMOTE_ADDR"] 

{ 

String ip = get_real_ip_add();
```


## IP واقعی کاربر در PHP

برای گرفتن `IP` اصلی کاربر در `PHP` از تکه کد زیر استفاده می‌کنیم: 

```php
function get_real_ip_addr(){

if (!empty($_SERVER['REAL_IP'])){

$ip = $_SERVER['REAL_IP'];

{

}  elseif(!empty($_SERVER['REMOTE_ADDR']))

$ip = $_SERVER['REMOTE_ADDR'];

{

return $ip;

{

$ip = get_real_ip_addr()
```

## IP واقعی کاربر در Python

برای گرفتن `IP` اصلی کاربر در `Python` از تکه کد زیر استفاده می‌کنیم: 

```python
import socket

def get_real_ip_addr(request):

real_ip = request.META.get('REAL_IP')

remote_addr = request.META.get('REMOTE_ADDR')

if real_ip:

ip = real_ip 

elif remote_addr:

ip = remote_addr 

else:

ip = request.META.get('REAL_IP')

return ip

ip = get_real_ip_addr(request)
```
