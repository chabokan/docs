---
title: "آموزش راه اندازی WordPress"
icon: "faRocket"
sidebar_label: "نصب و راه اندازی"
description: "برای نصب و راه اندازی WordPress کافیست از طریق حساب کاربری خود در چابکان وارد قسمت سرویس ها شوید و از طریق ایجاد سرویس جدید اقدام به ایجاد سرویس وردپرس بفرمایید. بعد از روشن شدن سرویس"
---

# نصب و راه اندازی WordPress
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه `WordPress` را در [هاست WordPress](https://chabokan.net/cloud-hosting/php/wordpress/) به شما آموزش دهیم

## نصب و راه اندازی

برای نصب و راه اندازی WordPress کافیست از طریق حساب کاربری خود در چابکان وارد قسمت سرویس ها شوید و از طریق ایجاد سرویس جدید اقدام به ایجاد سرویس وردپرس بفرمایید. بعد از روشن شدن سرویس (ممکن از ۳ دقیقه طول بکشد) وردپرس شما از طریق ساب دامنه پیش فرض سرویس قابل دسترس می باشد.

توجه داشته باشید که سرویس وردپرس برای راه اندازی نیاز به یک سرویس دیتابیس Mariadb دارد که چابکان به صورت خودکار آن را ایجاد می کند و به سرویس وردپرس شما متصل می نماید.


<video controls width="300">
  <source src="https://s1.chabokan.net/docs/videos/create-wordpress.mp4" />
</video>


import SharedServices from '/docs/_shared-services.mdx';

<SharedServices
platform="Wordpress"
services={[
"mysql",
"mariadb"
]}
/>


import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/wordpress"
img="https://s1.chabokan.net/docs/images/wordpress-docs-banner-1.jpg"
/>
