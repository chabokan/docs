---
title: "آموزش اتصال Wordpress به پارتیشن Minio"
sidebar_label: "اتصال به پارتیشن Minio"
description: "برای اتصال وردپرس به minio ابتدا سرویس minio خود را در چابکان ایجاد نمایید آموزش ایجاد سرویس minio و از طریق نرم افزار S3Browser به سرویس "
---

# اتصال Wordpress به پارتیشن Minio
---

\برای اتصال وردپرس به minio ابتدا سرویس minio خود را در چابکان ایجاد نمایید ([آموزش ایجاد سرویس minio](https://docs.chabokan.net/storage/minio/install/)) و از طریق نرم افزار S3Browser به سرویس minio خود متصل شوید.([راهنمای اتصال به s3browser](https://docs.chabokan.net/storage/minio/connect-with-s3browser/))

سپس یک باکت ایجاد نمایید که این باکت برای اتصال به وردپرس استفاده می شود و دیتای وردپرس در این باکت قرار میگیرد.([نحوه ایجاد باکت](https://docs.chabokan.net/storage/minio/bucket/))

حال می بایست دسترسی باکت ساخته شده را public نمایید. برای اینکار میتوانید از طریق ابزار mc اقدام نمایید.([راهنمای تغییر سطح دسترسی باکت سرویس minio](https://docs.chabokan.net/storage/minio/connect-with-mc/))

:::caution توجه

در صورتی که اقدام به پابلیک کردن باکت خود نفرمایید، در سایت وردپرس خود فایل های داخل باکت را مشاهده نمی نمایید کاربران نیز نمیتوانند آنها را مشاهد کنند.

:::

## افزونه Media Cloud for Amazon S3

حال به سراغ داشبورد ادمین وردپرس رفته و افزونه (Media Cloud for Amazon S3, Cloudflare R2, Google Cloud Storage, DigitalOcean Spaces and more) را از قسمت افزونه ها دانلود و نصب کنید. بعد از نصب پلاگین به صفحه مربوط به setup wizard منتقل می شوید که میبایست صفحه را بسته و به پنل ادمین سایت خود دوباره مراجعه نمایید.

![](https://s1.chabokan.net/docs/images/wordpress-minio.jpg)

سپس از پنل سمت راستی وردپرس خود Media cloud را انتخاب نموده و به قسمت settings مراجعه نمایید. حال طبق تصاویر زیر اطلاعات سرویس minio خود را وارد نموده تا اتصال شما به minio برقرار شود.( بر روی setup wizard کلیک نفرمایید)

```bash
Enable Cloud Storage: enable
Storage Provider: Minio
Access Key: ACCESS KEY
Secret: SECRET KEY
Bucket: bucket name
Region: Automatic
Custom Endpoint: آدرس Endpoint
```

![](https://s1.chabokan.net/docs/images/wordpress-minio-2.jpg)

![](https://s1.chabokan.net/docs/images/wordpress-minio-3.jpg)

سپس روی گزینه ذخیره تغییرات کلیک نمایید تا اتصال شما برقرار گردد. حال در صورتی که در بخش رسانه خود فایلی آپلود نمایید به باکت شما متصل شده و در آن آپلود می شود.

## افزونه WP Offload Media 

برای اتصال minio از طریق افزونه wp offload media میبایست مانند [این مستند](https://deliciousbrains.com/s3-compatible-storage-provider-minio/)، تنظیمات را انجام داده تا سرویس به minio متصل شود.

---
<a href="https://hub.chabokan.net/fa/services/create/wordpress" ><img src="https://s1.chabokan.net/docs/images/wordpress-docs-banner-1.jpg" /></a>