---
title:  "آموزش اتصال فایل S3 به Laravel"
icon: "faCloudArrowUp"
sidebar_label: "اتصال به سرویس فایل S3"
description: "در این بخش می خواهیم آموزش نحوه اتصال به فایل S3 را در هاست لاراول laravel به شما آموزش دهیم."
---

# اتصال Laravel به فایل S3
---

در این بخش می خواهیم آموزش نحوه اتصال به فایل `S3` را در [هاست لاراول laravel](https://chabokan.net/cloud-hosting/php/laravel/) به شما آموزش دهیم.


برای متصل کردن لاراول به سرویس فایل `S3` باید یکسری تغییرات در پروژه خود اعمال کنید که این تغییرات در این صفحه قدم به قدم خدمت شما شرح داده خواهد شد.

## نصب Amazon S3 Driver

برای استفاده از سرویس فایل `S3` باید ابتدا با استفاده از دستور زیر کتابخانه مربوط به این سرویس را در پروژه خود نصب کنید.

```bash
composer require league/flysystem-aws-s3-v3 "^3.0"
```

## پیکربندی FileSystem

بعد از نصب کتابخانه باید یک `FileSystem Driver` جدید در فایل `config/filesystems.php` ایجاد کنید:

```php
'cloud' => env('FILESYSTEM_CLOUD'),
'minio' => [
    'driver' => 's3',
    'endpoint' => env('ENDPOINT_URL'),
    'use_path_style_endpoint' => true,
    'key' => env('ACCESS_KEY'),
    'secret' => env('SECRET_KEY'),
    'region' => env('DEFAULT_REGION'),
    'bucket' => env('BUCKET_NAME'),
],
```

## تنظیم مشخصات سرویس فایل

حالا که `FileSystem` ایجاد شد باید مشخصات سرویس فایل `S3` خود را با استفاده از `env` ها به لاراول معرفی کنید. که برای اینکار می توانید از فایل `.env` یا قسمت متغیر های محیطی چابکان استفاده کنید.

```bash
# name = value
FILESYSTEM_CLOUD = minio
ENDPOINT_URL = https://minio-url
ACCESS_KEY = <Access Key>
SECRET_KEY = <Secret Key>
DEFAULT_REGION = us-east-1
BUCKET_NAME = <Name of you're bucket>
```

![](https://s1.chabokan.net/docs/images/env-chabokan.jpg)

## نحوه‌ی استفاده

اگر تمام مراحل را به درستی انجام داده باشید، تنظیمات سرویس فایل `S3` به صورت کامل انجام شده است و می توانید به صورت زیر از آن استفاده کنید:

```php
Storage::disk('minio')->put('sample.txt', 'Contents');
```

### آپلود فایل

برای آپلود فایل، میتوانید از نمونه کد زیر استفاده نمایید:

```php
<?php

namespace App\Http\Controllers;
  
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\HttpRequest;
  
class UserAvatarController extends Controller
  {
      public function update(Request $request): string
      {
        $path = Storage::putFile('pictures', $request->file('picture'));
  
          return $path;
      }
}
```

### حذف فایل‌‌های آپلود شده

برای حذف فایل‌‌های آپلود شده، میتوانید از نمونه کد زیر استفاده نمایید:

```bash
use Illuminate\Support\Facades\Storage;

Storage::disk('minio')->delete('folder/text.txt');
```

### دانلود فایل‌

برای دانلود فایل میتوانید از نمونه کد زیر استفاده نمایید:

```bash
use Illuminate\Support\Facades\Storage;

return Storage::download('text.txt');
```

### بازیابی فایل‌ها

برای بازیابی فایل ها میتوانید از نمونه کد زیر استفاده نمایید:

```bash
use Illuminate\Support\Facades\Storage;

$contents = Storage::get('text.txt');
```

### دریافت لیست فایل‌‌های آپلود شده

برای دریافت لیست فایل‌‌های آپلود شده، میتوانید از نمونه کد زیر استفاده نمایید:

```bash
use Illuminate\Support\Facades\Storage;

$files = Storage::allFiles($directory);
```
---
<a href="https://hub.chabokan.net/fa/services/create/laravel" ><img src="https://s1.chabokan.net/docs/images/laravel-banner.png" /></a>