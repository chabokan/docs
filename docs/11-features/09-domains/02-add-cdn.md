---
title: "افزودن دامنه از طریق CDN"
icon: "faCloud"
sidebar_label: "افزودن دامنه از طریق CDN"
description: "برای افزودن دامنه خود به پلتفرم ابری چابکان، در صورتی که دامنه خود را خریداری و یا ثبت نکرده اید، کافیست ابتدا"
---

# افزودن دامنه از طریق CDN
---

> - اتصال از طریق cloudflare:

<video controls width="300">
  <source src="https://s1.chabokan.net/docs/videos/cdn-cloudflare.m4v" />
</video>

> - اتصال از طریق arvancloud:

<video controls width="300">
  <source src="https://s1.chabokan.net/docs/videos/cdn-arvan.mp4" />
</video>

برای افزودن دامنه خود به پلتفرم ابری چابکان، در صورتی که دامنه خود را خریداری و یا ثبت نکرده اید، کافیست ابتدا [دامنه](https://hub.chabokan.net/fa/domains/) خود را در چابکان ثبت نمایید:
- [ثبت دامنه IR](https://docs.chabokan.net/features/domains/register-domain/)
- [ثبت دامنه بین المللی](https://docs.chabokan.net/features/domains/register-international-domain/)

بعد از ثبت دامنه به حساب کاربری > سرویس مد نظر خود وارد شوید و در بخش دامنه ها، بر روی دکمه افزودن دامنه کلیک نمایید.

![](https://s1.chabokan.net/docs/images/domain_2.jpg)

سپس نام دامنه خود و سرویسی که می خواهید به آن متصل شوید را مشخص نمایید.

![](https://s1.chabokan.net/docs/images/domain_3.jpg)

سپس بر روی گزینه تنظیمات کلیک کرده و اتصال دامنه از طریق CDN را انتخاب نمایید. حال میبایست رکورد های نمایش داده در صفحه داشبورد دامنه خود را به صورت کامل در CDN خود وارد نمایید تا اتصال دامنه شما با سرویس انتخابی برقرار شود.(توجه داشته باشید اگر سرویس متصل به دامنه را تغییر دهید، رکورد هایی که باید در CDN تنظیم شود تغییر خواهد کرد و شما باید دوباره آن را تنظیم بفرمایید)

در اتصال دامنه از نوع CDN، ایجاد و مدیریت SSL به عهده CDN می باشد و تنظیمات https برای شما در چابکان نمایش داده نخواهد شد.

![](https://s1.chabokan.net/docs/images/domain_5.jpg)

توجه: در CDN خود اگر از https استفاده می نمایید، پروتکل ارتباط با سرور اصلی را به http تغییر دهید.

در صورتی که مراحل را به درستی انجام داده باشید عبارت متصل شد را در بخش دامنه های خود مشاهده میکنید.

![](https://s1.chabokan.net/docs/images/domain_6.jpg)

## افزودن ساب دامنه

برای افزودن ساب دامنه کافیست در سرویس خود به بخش دامنه ها مراجعه کنید و ساب دامنه مورد نظر را معرفی نمایید.

![](https://s1.chabokan.net/docs/images/add-domains-panel.png)

سپس به تنظیمات دامنه مراجعه کرده و cname های داده شده را در CDN خود تعريف بفرمایید.

![](https://s1.chabokan.net/docs/images/SubDomain_1.jpg)


