---
title: "آموزش ایجاد دیسک در Docker"
sidebar_label: "دیسک ها"
description: "در این بخش می خواهیم آموزش نحوه ایجاد دیسک را در هاست داکر Docker به شما آموزش دهیم."
---

# ایجاد دیسک در Docker
---

در این بخش می خواهیم آموزش نحوه ایجاد دیسک را در [هاست داکر Docker](https://chabokan.net/cloud-hosting/docker/) به شما آموزش دهیم.

در سرویس ابری داکر چابکان امکان این فراهم شده است که به راحتی برنامه هایتان را با استفاده از داکرفایل ایجاد کنید و از آن ها استفاده کنید. اطلاعاتی که در سرویس های داکر وجود دارند گذرا هستند و اگر می خواهید اطلاعات به صورت دائمی روی هارد سرویس تان باقی بمانند و از آن ها بکاپ گرفته شود، باید آن مسیر ها را در قالب دیسک به چابکان معرفی بفرمایید.

## ایجاد دیسک جدید

برای ایجاد دیسک جدید ابتدا باید وارد حساب کاربری تان شوید و از منوی بالا روی سرویس ها کلیک کنید و در صفحه سرویس ها، وارد داشبورد سرویس داکر خود را شوید. از منوی راست داشبورد روی دیسک ها کلیک کنید و دکمه افزودن دیسک جدید را بفشارید.

![](https://s1.chabokan.net/docs/images/docker_disk1.jpg)

برای ایجاد دیسک به ۲ مسیر نیاز دارید، مسیر مبدا که در واقع دایرکتوری هست بر روی هارد سرویس شما که می خواهید فایل های کانتینر در آن قرار بگیرد. مسیر مقصد نیز دایرکتوری داخل کانتینر است که می خواید آن را به صورت دائمی نگهداری کنید.

برای نمونه فایل مبدا(فایل سرویس خود در داکر) طبق تصویر زیر مسیر دهی شده و مقصد نیز مسیر داخل داکر کانتینر ما می باشد.

![](https://s1.chabokan.net/docs/images/docker_disk2.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/docker" ><img src="https://s1.chabokan.net/docs/images/docker-banner.png" /></a>