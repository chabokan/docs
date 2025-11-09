---
title: "اتصال از طریق S3Browser"
icon: "faExternalLinkAlt"
sidebar_label: "اتصال از طریق S3Browser"
description: "شما می توانید با استفاده از نرم افزار S3Browser به راحتی به فضای ذخیره سازی minio خود متصل شوید و شروع به مدیریت فضای سرویس ذخیره سازی minio شوید. "
---

# اتصال از طریق S3Browser
---

شما می توانید با استفاده از نرم افزار S3Browser به راحتی به فضای ذخیره سازی minio خود متصل شوید و شروع به مدیریت فضای سرویس ذخیره سازی minio شوید.

## نصب نرم افزار S3Browser

در ابتدا باید این نرم افزار را از طریق [صفحه دانلود S3Browser](https://s3browser.com/download.aspx) دانلود نمایید و روی سیستم عامل خود نصب کنید. دقت کنید که در حال حاضر این نرم افزار فقط روی سیستم عامل ویندوز قابل نصب می باشد و برای سیستم عامل های دیگر مثل Mac و Linux می توانید از نرم افزار Cyberdock استفاده کنید.

## اتصال به فضای ذخیره سازی minio

پس از نصب این برنامه و برای استفاده از آن، باید تنظیمات اولیه‌ی آن‌را‌ انجام دهید. به این منظور، S3Browser را اجرا کرده و از بخش Accounts گزینه Add New Account را انتخاب کنید تا صفحه‌ای مشابه صفحه‌ی زیر برای شما نمایش داده شود.

![](https://s1.chabokan.net/docs/images/add-s3-compatible-storage.png)

یک نام برای Account خود وارد کرده و در قسمت Account Type، گزینه‌ی S3 Compatible Storage را انتخاب کنید. اطلاعات مربوط به بخش‌های Access Key ID ،Secret Access Key را با استفاده از اطلاعات سرویس minio خود که در بخش داشبورد اصلی سرویس نمایش داده شده است وارد کنید و در قسمت REST Endpoint آدرس دامنه خود را وارد نمایید. سپس روی گزینه add new account کلیک کنید.

پس از انجام این تنظیمات می‌توان به‌سادگی Bucketها را مدیریت و فایل های مورد نیاز را با استفاده از S3Browser آپلود و یا دانلود کنید.

---
<a href="https://hub.chabokan.net/fa/services/create/minio" ><img src="https://s1.chabokan.net/docs/images/minio-banner.png" /></a>