---
title: "آموزش راه اندازی Matomo"
icon: "faChartPie"
description: "اگر با سرویس گوگل آنالتیکز کار کرده باشید می‌دانید که این ابزار دارای امکانات بسیار زیادی است و به خاطر همین کار کردن با آن پیچیدگی‌های خاص خود را دارد."
---

# آنالیز وبسایت با Matomo
---

اگر با سرویس گوگل آنالتیکز کار کرده باشید می‌دانید که این ابزار دارای امکانات بسیار زیادی است و به خاطر همین کار کردن با آن پیچیدگی‌های خاص خود را دارد. بخصوص که هر از گاهی این سرویس تغییرات ساختاری بزرگی به خود می‌بیند. حال چابکان سرویس [Matomo](https://chabokan.net/services/matomo/) با امکاناتی نظیر گوگل آنالتیکز را در اختیار کاربران عزیز قرار داده است.

## نصب و راه اندازی Matomo

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Matomo` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Matomo` می سازیم.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/gifs/matomo-install.gif)

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo-platform-docs-1.jpg)

بعد از دقایقی برنامه ی شما با موفقیت ساخته می شود و میتوانید با مراجعه به دامنه ی خود در سرویس `Matomo` وارد برنامه شوید.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo-platform-docs-2.jpg)

در این مرحله نصب اولیه ی `Matomo` شروع می شود که در اینجا مراحل مهم را با هم بررسی میکنیم.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo_2.jpg)

در گام `Database Setup` اطلاعات دیتابیس اشتراکی سرویس ساخته شده وارد شده است، در صورتی که از دیتابیس اختصاصی استفاده مینمایید میبایست در اینجا اطلاعات آنرا وارد کنید.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo_4.jpg)

در مرحله ی `Superuser` نیز کاربر ادمین ساخته می شود و اطلاعات دلخواه کاربر ادمین را وارد مینماییم.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo_6.jpg)

در مرحله ی بعد نیز اطلاعات وبسایت مد نظر برای اتصال به سرویس `Matomo` را وارد میکنیم.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo_7.jpg)

سپس `Tracking code` مربوط به سایت وارد شده به نمایش گذاشته می شود و میبایست این کد را در `Header` وبسایت وارد کنیم.

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo_8.jpg)

حال برنامه شما آماده استفاده است و به محض شناسایی `Tracking code` در `Header` وبسایت برنامه شروع به کار مکیند، میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Matomo` وارد برنامه شوید و یا دامنه ی اختصاصی خود را ست نمایید.( [تنظیم دامنه](/features/domains/))

![نصب و راه‌اندازی Matomo در چابکان](https://s1.chabokan.net/docs/images/matomo_9.jpg)

import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="Matomo"
services={[
"mariadb"
]}
/>

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/matomo"
img="https://s1.chabokan.net/docs/images/matomo-docs-banner-1.jpg"
/>
