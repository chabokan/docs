---
title: "اتصال از طریق MC"
icon: "faTerminal"
sidebar_label: "اتصال از طریق MC"
description: "برای اتصال به سرویس ابری Minio روش های زیادی وجود دارد که می توانید به راحتی از آن ها برای عملیات های مختلف در Minio استفاده نماید. ابزار mc دراقع یک برنامه تحت کنسول (ترمینال) است که کمک می کنید عملیات مختلفی را روی سرویس ابری Minio خود انجام دهید."
---

# اتصال از طریق MC
---

برای اتصال به سرویس ابری Minio روش های زیادی وجود دارد که می توانید به راحتی از آن ها برای عملیات های مختلف در Minio استفاده نماید. ابزار mc دراقع یک برنامه تحت کنسول (ترمینال) است که کمک می کنید عملیات مختلفی را روی سرویس ابری Minio خود انجام دهید.

## نصب mc

برای استفاده از ابزار mc ابتدا باید آن را روی سیستم عامل خود نصب نمایید. برای نصب این ابزار می توانید به [صفحه نصب ابزار mc](https://min.io/docs/minio/linux/reference/minio-mc.html#quickstart) با توجه به سیستم عامل خود مراجعه نمایید.

## اتصال به سرویس Minio

بعد از نصب این ابزار می توانید با وارد کردن دستور زیر در کنسول (ترمینال) سیستم عامل خود، فرآیند اتصال به سرویس Minio رو انجام دهید:

```shell
mc alias set myminio https://minioserver.example.net ACCESS_KEY SECRET_KEY
```

سپس برای تست ارتباط موفق از کد زیر استفاده نمایید:

```shell
mc admin info myminio
```

در صورتی که پیامی مانند نمونه زیر مشاهده نمودید به این معنی است که به درستی به minio خود متصل شده اید.

```log
●  minio.chbk.run
   Uptime: 3 hours 
   Version: 2023-04-20T17:56:55Z
   Network: 1/1 OK 
   Drives: 1/1 OK 
   Pool: 1

Pools:
   1st, Erasure sets: 1, Drives per erasure set: 1
```

## استفاده از mc

اگر مراحل گفته شده را به درستی انجام داده باشید، حالا می توانید با استفاده از این ابزار عملیات های مختلفی را روی سرویس Minio خود انجام دهید.

[دستورات قابل استفاده در ابزار mc](https://min.io/docs/minio/linux/reference/minio-mc.html#command-quick-reference)

## تغییر سطح دسترسی bucket

شما میتوانید سطح دسترسی های زیر را برای bucket مد نظر خود اعمال کنید.

```
none - دسترسی ناشناس غیر فعال می شود.

download - فعال کردن دسترسی دانلود.

upload - فعال کردن دسترسی آپلود.

public - فعال کردن دسترسی دانلود و آپلود.
```

سپس با قرار دادن سطح دسترسی مد نظر در کامند زیر، میتوانید دسترسی bucket را تغییر دهید.

```
mc anonymous set public myminio/bucketname
```

## ایجاد لینک دانلود زمان دار

برای ایجاد لینک دانلود فایل، که دارای محدودیت زمانی باشد، می بایست کامند زیر را وارد نمایید.

```
mc share download  myminio/bucketname/file-url
```

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/minio"
img="https://s1.chabokan.net/docs/images/minio-banner.png"
/>
