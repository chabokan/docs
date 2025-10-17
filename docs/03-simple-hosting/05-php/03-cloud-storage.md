---
title: "اتصال PHP به فایل S3"
sidebar_label: "اتصال به S3"
description: "در این بخش می خواهیم آموزش نحوه اتصال `PHP` به فایل `S3` را در هاست php به شما آموزش دهیم."
---

# اتصال PHP به فایل S3
---

در این بخش می خواهیم آموزش نحوه اتصال `PHP` به فایل `S3` را در [هاست php](https://chabokan.net/cloud-hosting/php/) به شما آموزش دهیم. برای متصل کردن `php` به سرویس فایل `S3` باید یکسری تغییرات در پروژه خود اعمال کنید که این تغییرات در این صفحه قدم به قدم خدمت شما شرح داده خواهد شد.

## نصب Amazon S3 Driver

برای استفاده از سرویس فایل `S3`  ابتدا با استفاده از دستور زیر [پکیج aws-sdk](https://packagist.org/packages/aws/aws-sdk-php) را در پروژه خود نصب کنید.

```shell
composer require aws/aws-sdk-php
```

## مشخصات سرویس S3

حالا که کتابخانه مربوط نصب شد، باید مشخصات سرویس فایل `S3` خود را با استفاده از متغیر ها به `PHP` معرفی کنید. که برای اینکار می توانید از فایل قسمت متغیر های محیطی چابکان استفاده کنید.

```properties
# name : value

ENDPOINT : <Bucket Endpoint>
BUCKET_NAME : <Bucket Name>
ACCESS_KEY : <Access Key>
SECRET_KEY : <Secret Key>
```

## نحوه‌ی استفاده

در این بخش نمونه کد های نحوه استفاده از فضای ذخیره سازی در PHP توضیح داده شده است.

### لیست باکت ها

برای دریافت لیست باکت ها ایجاد شده میتوانید مانند نمونه کد زیر اقدام نمایید:

```php
<?php
require 'vendor/autoload.php';

use AwsS3S3Client;

$client = new S3Client([
    'region' => 'us-east-1',
    'version' => '2006-03-01',
    'endpoint' => CHABOK_ENDPOINT,
    'credentials' => [
        'key' => CHABOK_ACCESS_KEY
        'secret' => CHABOK_SECRET_KEY
    ],
]);

$listResponse = $client->listBuckets();

print_r($listResponse);
```

### آپلود فایل در باکت

برای آپلود فایل در باکت ایجاد شده میتوانید مانند نمونه کد زیر اقدام نمایید:


```php
<?php

namespace AppController;

class DotEnvEnvironment
{
   public function load($path): void
   {
       $lines = file($path . '/.env');
       foreach ($lines as $line) {
           [$key, $value] = explode('=', $line, 2);
           $key = trim($key);
           $value = trim($value);

           putenv(sprintf('%s=%s', $key, $value));
           $_ENV[$key] = $value;
           $_SERVER[$key] = $value;
       }
   }
}

require 'vendor/autoload.php';
use AwsS3S3Client;
use AwsExceptionAwsException;

(new DotEnvEnvironment)->load(__DIR__);

$endpoint   = getenv("ENDPOINT");
$accessKey  = getenv("ACCESS_KEY");
$secretKey  = getenv("SECRET_KEY");
$bucketName = getenv("BUCKET_NAME");

$s3 = new S3Client([
    'version' => 'latest',
    'region'  => 'us-east-1',
    'endpoint' => $endpoint,
    'credentials' => [
        'key'    => $accessKey,
        'secret' => $secretKey,
    ],
]);

try {
    $fileName = 'test.txt';
    $result = $s3->putObject([
        'Bucket' => $bucketName,
        'Key'    => $fileName,
        'Body'   => file_get_contents($fileName),
        'ACL'    => 'public-read',
    ]);

    echo "File uploaded successfully.";
} catch (AwsException $e) {
    echo $e->getMessage() . "";
}
```

> [نمونه های بیشتر از نحوه **اتصال به S3** در سرویس **PHP**](https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.S3.S3Client.html)

---
<a href="https://hub.chabokan.net/fa/services/create/php" ><img src="https://s1.chabokan.net/docs/images/php-banner.png" /></a>