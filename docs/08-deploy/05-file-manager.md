---
title: "آموزش کار با File Manager"
sidebar_label: "File Manager"
description: "سرویس های ابری چابکان این امکان را دارند که از طریق فایل منیجر (مدیریت فایل ها) نیز استقرار داده شوند. برای استقرار از طریق فایل منیجر ابتدا باید وارد حساب کاربری تان شوید و از قسمت سرویس ها، روی مشاهده جزئیتات سرویس موردنظر تان کلیک کنید تا به داشبورد سرویس خود انتقال داده شوید."
---

# استقرار از طریق فایل منیجر
---

سرویس های ابری چابکان این امکان را دارند که از طریق فایل منیجر (مدیریت فایل ها) نیز استقرار داده شوند. در این مستند، نحوه استقرار و قرار دادن پروژه خود را در سرویس با استفاده از FTP بررسی میکنیم. برای استقرار از طریق فایل منیجر ابتدا باید وارد حساب کاربری تان شوید و از قسمت سرویس ها، روی مشاهده جزئیتات سرویس موردنظر تان کلیک کنید تا به داشبورد سرویس خود انتقال داده شوید.

برای دسترسی به فایل منیجر یا مدیریت فایل های سرویس خود باید از منوی سمت راست سرویس روی مدیریت فایل ها کلیک کنید. در این قسمت می توانید به صورت کامل به فایل های سرویس خود دسترسی داشته باشید و تمام عملیات حذف، ایجاد، ویرایش و نمایش قابل اجرا می باشد.

<video controls width="300">
  <source src="https://s1.chabokan.net/docs/videos/deploy-filemanager.mp4" />
</video>


## دایرکتوری پیشفرض

در قسمت مدیریت فایل ها یا فایل منیجر چابکان یک دایرکتوری پیشفرض تعریف شده که اغلب به نام **app** می باشد که تمام فایل هایی که می خواید در سرویس شما نمایش داده شوند در داخل این دایرکتوری قرار می گیرند در واقع این دایرکتوری، دایرکتوری اصلی سرویس شماست و با دیپلوی کردن از طریق CLI نیز فایل های شما داخل این دایرکتوری قرار خواهد گرفت.

## قدم اول: آماده سازی

اگر برای بار اول می خواهید پروژه تان را از طریق فایل منیجر استقرار دهید، ابتدا باید فایل های پروژه پیش فرض چابکان را به صورت کامل حذف نماید. برای این کار کافیست از طریق مدیریت فایل ها داخل دایرکتوری پیش فرض که اغلب با نام app می باشد را حذف کنید.

## قدم دوم: بارگذاری پروژه

برای بارگذاری پروژه از طریق فایل منیجر ابتدا باید از طریق مدیریت فایل های سرویس، در دایرکتوری پیشفرض سرویس فایل های پروژه خود را آپلود نماید.

توجه کنید که چابکان به صورت خودکار پروژه شما را بیلد می کند و نیازی نیست که فایل های کتابخانه سرویس خود (node\_modules, vendor و ...) را آپلود نمایید.

اگر فایل هایی که در سرویس خود آپلود نموده اید به صورت فایل فشرده شده باشند باید با استفاده از منوی بالا فایل منیجر فایل خود را Extract نمایید.

## قدم سوم: اتمام دیپلوی

در نهایت برای کامل کردن دیپلوی نیاز است که یکبار سرویس خود را ریستارت نمایید تا چابکان به صورت خودکار پیکربندی پروژه شما را انجام دهد. (نصب پکیج ها، تغییر سطح های دسترسی و ….)

:::caution توجه

در صورتی که حجم کل فایل های مد نظر بیش از 100 مگابایت باشند، میبایست از [روش FTP](https://docs.chabokan.net/deploy/ftp/) استفاده نمایید.

:::
