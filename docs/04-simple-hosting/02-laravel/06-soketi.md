---
title: "آموزش اتصال از طریق Laravel به Soketi"
icon: "faComments"
sidebar_label: "اتصال به Soketi"
description: "برای اتصال Laravel به Soketi میبایست ابتدا سرئیس Soketi را ساخته و سپس مراحل زیر را اجرا نمایید تا سرویس شما با موفقیت متصل شود:"
---

# اتصال به Soketi از طریق Laravel
---

برای اتصال `Laravel` به `Soketi` میبایست ابتدا سرویس `Soketi` را ساخته و سپس مراحل زیر را اجرا نمایید تا سرویس شما با موفقیت متصل شود:

ابتدا در سرویس لاراول خود از طریق مدیریت فایل ها به مسیر `/config` مراجعه کرده و در فایل `app.php` کد زیر را از حالت کامنت خارج نمایید.

```php
App\Providers\BroadcastServiceProvider::class
```

سپس در همین مسیر `/config` فایل `broadcasting.php`را ادیت کرده و مشخصات مشخص شده زیر را از سرویس `Soketi` خود کپی کرده و در این بخش قرار دهید.


```php
'pusher' => [
'driver' => 'pusher',
'key' => env('SOKETI_DEFAULT_APP_KEY'), // مطابق مشخصات سرویس سوکتی
'secret' => env('SOKETI_DEFAULT_APP_SECRET'), // مطابق مشخصات سرویس سوکتی
'app_id' => env('SOKETI_DEFAULT_APP_ID'), // مطابق مشخصات سرویس سوکتی
'options' => [
    'host' => 'soketi.chbk.run', // دامنه سرویس سوکتی
    'port' => 443,
    'scheme' => 'https'
    ],
],
```

![](https://s1.chabokan.net/docs/images/soketi-docs-1.jpg)

سپس میتوانید با استفاده از کد زیر در فرانت سرویس لاراول خود به سرویس `Soketi` متصل شوید:

```php
import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'app-key',
  forceTLS: true,
  wsHost: 'soketi.chbk.run', // دامنه سرویس سوکتی
  wsPort: 443,
  cluster: 'eu',
  enableStats: false,
});
```

> [مستند رسمی **اتصال به Soketi** در سرویس **Laravel**](https://docs.soketi.app/getting-started/backend-configuration/laravel-broadcasting)

---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>