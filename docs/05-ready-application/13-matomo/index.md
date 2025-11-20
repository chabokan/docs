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

![](https://s1.chabokan.net/docs/gifs/matomo-install.gif)

![](https://s1.chabokan.net/docs/images/matomo-platform-docs-1.jpg)

بعد از دقایقی برنامه ی شما با موفقیت ساخته می شود و میتوانید با مراجعه به دامنه ی خود در سرویس `Matomo` وارد برنامه شوید.

![](https://s1.chabokan.net/docs/images/matomo-platform-docs-2.jpg)

در این مرحله نصب اولیه ی `Matomo` شروع می شود که در اینجا مراحل مهم را با هم بررسی میکنیم.

![](https://s1.chabokan.net/docs/images/matomo_2.jpg)

در گام `Database Setup` اطلاعات دیتابیس اشتراکی سرویس ساخته شده وارد شده است، در صورتی که از دیتابیس اختصاصی استفاده مینمایید میبایست در اینجا اطلاعات آنرا وارد کنید.

![](https://s1.chabokan.net/docs/images/matomo_4.jpg)

در مرحله ی `Superuser` نیز کاربر ادمین ساخته می شود و اطلاعات دلخواه کاربر ادمین را وارد مینماییم.

![](https://s1.chabokan.net/docs/images/matomo_6.jpg)

در مرحله ی بعد نیز اطلاعات وبسایت مد نظر برای اتصال به سرویس `Matomo` را وارد میکنیم.

![](https://s1.chabokan.net/docs/images/matomo_7.jpg)

سپس `Tracking code` مربوط به سایت وارد شده به نمایش گذاشته می شود و میبایست این کد را در `Header` وبسایت وارد کنیم.

![](https://s1.chabokan.net/docs/images/matomo_8.jpg)

حال برنامه شما آماده استفاده است و به محض شناسایی `Tracking code` در `Header` وبسایت برنامه شروع به کار مکیند، میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Matomo` وارد برنامه شوید و یا دامنه ی اختصاصی خود را ست نمایید.( [تنظیم دامنه](/features/domains/))

![](https://s1.chabokan.net/docs/images/matomo_9.jpg)

## سرویس اشتراکی

سرویس اشتراکی قابل ایجاد در هاست Matomo به صورت زیر میباشد:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mariadb

import Features from '/docs/11-features/_features.md';

<Features />

---
<a href="https://hub.chabokan.net/fa/services/create/matomo" ><img src="https://s1.chabokan.net/docs/images/matomo-docs-banner-1.jpg" /></a>