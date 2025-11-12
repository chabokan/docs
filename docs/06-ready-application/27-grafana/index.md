---
title: "آموزش راه اندازی Grafana"
icon: "faChartLine"
description: "Grafana یک ابزار متن‌باز برای نمایش و مانیتورینگ داده‌های عملکرد است. این ابزار برای بررسی و تحلیل داده‌ها و نمودارسازی زمانی استفاده می‌شود"
---

# برنامه آماده Grafana
---

[Grafana](https://chabokan.net/services/grafana/) یک ابزار متن‌باز برای نمایش و مانیتورینگ داده‌های عملکرد است. این ابزار برای بررسی و تحلیل داده‌ها و نمودارسازی زمانی استفاده می‌شود. با استفاده از `Grafana`، می‌توانید به سادگی داده‌های مختلف را از منابعی مانند پایگاه دادها، سیستم‌های خوشه‌بندی، سرورهای وب و… بخوانید و آنها را به صورت نمودارهای شیشه‌ای و جذاب نمایش دهید.

## نصب و راه اندازی Grafana

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Grafana` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Grafana` می سازیم.

![نصب و راه‌اندازی Grafana در چابکان](https://s1.chabokan.net/docs/gifs/grafana-install.gif)

![نصب و راه‌اندازی Grafana در چابکان](https://s1.chabokan.net/docs/images/GRAFANA-1.png)

سرویس `Grafana` شما با موفقیت ایجاد شده
برای ورود بر روی نام دامنه پیشفرض سیستم که برای شما ایجاد شده کلیک نمایید تا وارد صفحه ورود `Grafana` شوید

![نصب و راه‌اندازی Grafana در چابکان](https://s1.chabokan.net/docs/images/GRAFANA-2.jpg)

نام کاربری و رمز عبور پیشفرض `Grafana` شما به شرح زیر می باشد

```properties
username = admin
password = admin
```
پس از وارد کردن رمز پیشفرض شما به صفحه تغییر رمز وارد میشوید که پس از تغییر رمز، وارد صفحه زیر می شوید

![نصب و راه‌اندازی Grafana در چابکان](https://s1.chabokan.net/docs/images/GRAFANA-3.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Grafana` وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](https://docs.chabokan.net/features/domains/))

![نصب و راه‌اندازی Grafana در چابکان](https://s1.chabokan.net/docs/images/GRAFANA-4-1.png)

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/grafana"
img="https://s1.chabokan.net/docs/images/grafana-banner.png"
/>
