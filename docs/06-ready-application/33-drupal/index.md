---
title: "آموزش راه اندازی Drupal"
icon: "faDroplet"
description: "Drupal یک سامانه مدیریت محتوا (CMS) متن‌باز است که برای ایجاد و مدیریت وبسایت‌ها و برنامه‌های کاربردی وب استفاده می‌شود."
---

# برنامه آماده Drupal
---

[Drupal](https://chabokan.net/services/drupal/) یک سامانه مدیریت محتوا (CMS) متن‌باز است که برای ایجاد و مدیریت وبسایت‌ها و برنامه‌های کاربردی وب استفاده می‌شود. در واقع، Drupal یک فریمورک توسعه وب بوده و ابزارها و قابلیت‌ها برای ساخت وبسایت‌های پیچیده و دسترسی به پایگاه‌داده، مدیریت کاربران، مدیریت محتوا و بسیاری از قابلیت‌های دیگر را فراهم می‌کند.

## نصب و راه اندازی Drupal

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Drupal` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Drupal` می سازیم.

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/gifs/drupal-install.gif)

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/images/drupal-1.png)

بر روی نام دامنه پیشفرض سیستم که برای شما ایجاد شده کلیک نمایید تا وارد صفحه ورود `Drupal` شوید

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/images/drupal-2.png)

با اولین ورود شما با صفحه آغاز `Drupal` روبری میشوید

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/images/drupal-3.png)

در این مرحله شما باید دیتابیس اشتراکی سرویس خود را فعال کنید یا میتوانید یک دیتابیس اختصاصی تهیه نمایید که برای این امر میتوانید از لینک های زیر کمک بگیرید. برای فعال کردن دیتابیس اشتراکی وارد سرویس خود شده و مانند تصویر یکی از دیتابیس ها را ایجاد نمایید.

([تبدیل دیتابیس اشتراکی به اختصاصی](/general-tips/db-converting/))

([نحوه ساخت سرویس MariaDB](/database/mariadb/))

([نحوه ساخت سرویس Mysql](/database/mysql/))

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/images/drupal-4.png)

در این مرحله از تنظیمات اولیه `Drupal` شما باید ارتباط دیتابیس خود را با `Drupal` برقرار نمایید

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/images/drupal-5.png)

حال سایت شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Drupal` وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](/features/domains/))

![نصب و راه‌اندازی Drupal در چابکان](https://s1.chabokan.net/docs/images/drupal-6-1.png)

## سرویس های اشتراکی

سرویس های اشتراکی قابل ایجاد در هاست Drupal به صورت زیر میباشند:(همینطور شما میتوانید تفاوت سرویس های اشتراکی و اختصاصی را در [این مستند](/general-tips/share-db-vs-dedicated-db/) مشاهده بفرمایید)

- Mysql
- Mariadb

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/drupal"
img="https://s1.chabokan.net/docs/images/drupal-banner.png"
/>
