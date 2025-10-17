---
title: "نکات آموزشی Wordpress"
sidebar_label: "نکات تکمیلی"
description: "نکات تکمیلی"
---

# نکات تکمیلی Wordpress
---

در این بخش می خواهیم نکات تکمیلی `WordPress` را در [هاست WordPress](https://chabokan.net/cloud-hosting/php/wordpress/) به شما آموزش دهیم.

## ارور ERR_TOO_MANY_REDIRECTS

در صورتی که با ارور ERR_TOO_MANY_REDIRECTS مواجه شدید، قطعه کد زیر را در wp-config.php اضافه نمایید. در صورتی که مورد رفع نشد از راهنمایی زیر مربوط به فایل .htaccess استفاده نمایید.

```php
$_SERVER['HTTPS'] = 'on';
```

## ارور های مربوط به فایل .htaccess

در صورتی که وبسایت شما با ارور هایی مانند ERR_TOO_MANY_REDIRECTS و INTERNAL ERROR برخورد کرد، میبایست فایل .htaccess را بررسی نمایید.

![](https://s1.chabokan.net/docs/images/htaccess-error-1.jpg)

برای اینکار میتوانید به مدیریت فایل سرویس مراجعه نموده و فایل .htaccess را انتخاب کرده و سپس گزینه Edit را فشار دهید. حال تنظیماتی مانند دستورات Redirect، تنظیمات مربوط به HTTPS و همچنین دستورات مرتبط با PHP را از این فایل کات نموده و در سیستم خود به صورت بک آپ نگه دارید. حال که فایل .htaccess شما از موارد بالا حذف شده است، سرویس را یکبار ری استارت کرده و به دامنه خود مراجعه نمایید.

![](https://s1.chabokan.net/docs/images/htaccess-error-4.jpg)

برای مثال در نمونه تصویر زیر تنظیمات https تعریف شده است و با مراجعه به دامنه ما با ارور ERR_TOO_MANY_REDIRECTS روبه رو می شویم که بعد از حذف این تنظیمات ارور مربوطه رفع می شود.

![](https://s1.chabokan.net/docs/images/htaccess-error-3.jpg)

##  خط فرمان وردپرس (wp cli)

خط فرمان وردپرس (wp cli) به صورت پیشفرض روی سرویس وردپرس نصب است و میتوانید از طریق کنسول سرویس دستور را اجرا بفرمایید.
شروع دستور به شرح زیر میباشد:

```shell
 wp cli --allow-root
```
برای آشنایی با این دستورات وارید [این لینک](https://developer.wordpress.org/cli/commands) شوید.

## اتصال وردپرس به minio

ابتدا نرم افزار MINIO CLIENT را دانلود و بر روی سیستم خود نصب نمایید.

سپس وارد سرویس مینو خود در چابکان شده و مقادیر ACCESS KEY و SECRET KEY موجود در مشخصات سرویس خود را کپی نموده و مقادیر مورد نظر را در نرم افزار MINIO CLIENT خود مطابق تصویر وارد نمایید.

سپس به سراغ پیکر بندی WP Offload Media میرویم.

ابتدا ACCESS KEY و SECRET KEY سرویس Minio را برای تعریف AS3CF_SETTINGS در فایل wp-config.php سایت خود استفاده نمایید.

```php

define( 'AS3CF_SETTINGS', serialize( array(
    'provider' => 'aws',
    'access-key-id' => 'مقدار ACCESS KEY',
    'secret-access-key' => 'مقدار SECRET KEY',
) ) );

```
حال وقت آن رسیده که افزونه Tweaks که در قسمت مشخصات سرویس قرار دارد دانلود و در وردپرس خود فعال نمایید و مقادیر آدرس Endpoint را در آن وارد نمایید.

```php

function minio_s3_client_args( $args ) {
    // Example changes endpoint to connect to a local MinIO server configured to use port 54321 (the default MinIO port is 9000).
    $args['endpoint'] = 'آدرس Endpoint';

    // Example forces SDK to use endpoint URLs with bucket name in path rather than domain name as required by MinIO.
    $args['use_path_style_endpoint'] = true;

    return $args;
}

```
کد زیر برای ارتباط WP Offload Media با url سرویس Minio شما میباشد و برسی میکند که فقط این ارتباط با سرویس شما صورت گیرد.

```php
// Added to __construct()
add_filter( 'as3cf_aws_get_regions', array( $this, 'minio_get_regions' ) );

// Added to Amazon_S3_and_CloudFront_Tweaks
function minio_get_regions( $regions ) {
    $regions = array(
        'us-east-1' => 'Default',
    );

    return $regions;
}
```

در پیشخوان وردپرس وارد Settings -> Offload Media وارد WP Offload Media شده. سپس باید به صورت مستقیم وارد صفحه Select Bucket شوید. روی گزینه Browse existing buckets کلیک نموده تا مطمئن شوید WP Offload Media می تواند بدون هیچ خطایی به سرویس MinIO دسترسی داشته باشد.

## انتخاب ورژن PHP در وردپرس

در صورتی که قصد دارید ورژن PHP خود را در سرویس وردپرس تغییر دهید، می‌توانید در قسمت تنظیمات سرویس خود، ورژن PHP سرویس خود را تغییر دهید. بعد از انتخاب ورژن بر روی ذخیره ی تغییرات کلیک نمایید.

![](https://s1.chabokan.net/docs/images/wordpress_21.jpg)

ورژن های موجود:

| fpm-5.6 	 | 5.6 	 |
|-----------|-------|
| fpm-7.1 	 | 7.1 	 |
| fpm-7.2 	 | 7.2 	 |
| fpm-7.3 	 | 7.3 	 |
| fpm-7.4 	 | 7.4 	 |
| fpm-8.0 	 | 8.0 	 |
| fpm-8.1 	 | 8.1 	 |
| fpm-8.2 	 | 8.2 	 |
| fpm-8.2 	 | 8.2 	 |
| fpm-8.3 	 | 8.3 	 |
| fpm-8.4 	 | 8.4 	 |

---
<a href="https://hub.chabokan.net/fa/services/create/wordpress" ><img src="https://s1.chabokan.net/docs/images/wordpress-docs-banner-1.jpg" /></a>