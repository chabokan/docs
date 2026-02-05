---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Seq را به شما آموزش دهیم"
---

# استقرار اولیه Seq
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Seq را به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا
میبایست `Seq` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس
جدید > میزبانی آسان > `Docker` میرویم.
![استقرار Seq در چابکان](https://s1.chabokan.net/docs/gifs/docker-install.gif)

![استقرار Seq در چابکان](https://s1.chabokan.net/docs/images/docker-install.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس محتوای `Dockerfile` را قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.

```dockerfile
FROM datalust/seq:latest
```

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید به تنظیم `Seq` بپردازید.

:::tip نکته
دقت کنید که `Dockerfile` این سرویس در قسمت مدیریت فایل‌ها موجود است و در صورت نیاز می‌توانید آن را ویرایش کنید.
:::

دقت کنید که برای اجرای اولیه `Seq` می‌بایست مقادیر زیر را در قسمت متغیرهای محیطی سرویس تنظیم کنید:

```properties
ACCEPT_EULA=Y
# رمز اولیه کاربر ادمین
SEQ_FIRSTRUN_ADMINPASSWORD=password
```

دقت کنید که برنامه `Seq` روی پورت `80` فعال می‌شود و باید آن را در قسمت پورت‌ها مشخص کنیم تا برنامه در دسترس قرار بگیرد.

:::tip نکته
سرویس‌های `Docker` در چابکان به صورت پیشفرض روی پورت `80` باز هستند.
:::

![استقرار Seq در چابکان](https://s1.chabokan.net/docs/images/seq-port.png)

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

بعد از اتمام ساخت سرویس، به قسمت دیسک‌ها رفته و دیسک خود را مانند نمونه زیر تعریف میکنیم:

```shell
# مبدا
/data

# مقصد
/data
```

![استقرار Seq در چابکان](https://s1.chabokan.net/docs/images/seq-disk.png)

پس از راه‌اندازی اولیه سرویس می‌توانید با مراجعه به دامنه‌ی خود در داشبورد سرویس، خروجی را مشاهده کنید و یا دامنه‌ی
اختصاصی خود را بر روی سرویس تنظیم نمایید.([تنظیم دامنه](/features/domains/))

:::caution دقت کنید

دقت کنید در اولین اقدام به ورود می‌بایست با نام کاربری `admin` و رمز عبوری که در مقدار متغیر محیطی
`SEQ_FIRSTRUN_ADMINPASSWORD` تنظیم کرده‌اید وارد حساب کاربری `Seq` شوید و در این مرحله می‌بایست رمز عبور اولیه را تغییر
دهید.

:::

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/docker"
img="https://s1.chabokan.net/docs/images/docker-banner.png"
/>