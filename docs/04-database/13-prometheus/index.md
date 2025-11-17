---
title: "آموزش راه اندازی Prometheus"
icon: "faChartLine"
description: "پرومتئوس (Prometheus) یک سیستم متن باز و منبع باز برای مانیتورینگ و ساماندهی داده‌ها است. این سیستم معمولاً برای جمع آوری، ذخیره سازی و نمایش داده‌ها در زمان واقعی به کار می‌رود."
---

# نصب و راه اندازی Prometheus
---

[Prometheus](https://chabokan.net/services/prometheus/) یک سیستم متن باز و منبع باز برای مانیتورینگ و ساماندهی داده‌ها است. این سیستم معمولاً برای جمع آوری، ذخیره سازی و نمایش داده‌ها در زمان واقعی به کار می‌رود.

ابتدا سرویس `Prometheus` را از طریق قسمت ایجاد سرویس جدید > برنامه های آماده > `Prometheus` می سازیم.

![](https://s1.chabokan.net/docs/images/prometheus-setup-1.jpg)

بعد از دقایقی برنامه ی شما با موفقیت ساخته می شود و میتوانید با مراجعه به دامنه ی خود در سرویس `Prometheus` وارد برنامه شوید.

![](https://s1.chabokan.net/docs/images/prometheus-setup-2.jpg)

حال برنامه شما آماده استفاده است و پیشنهاد میشود حتما دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](/features/domains/))

:::danger توجه

برای امنیت بالا و عدم دسترسی کاربران غیر مجاز به برنامه، ابتدا دامنه خود را از طریق [اتصال DNS](/features/domains/add-dns/) به سرویس متصل نموده و سپس از طریق قسمت [محدودیت دسترسی دامنه](/features/domains/authentication/) خود، برای دسترسی به سرویس نام کاربری و رمز عبور ایجاد نمایید.

:::

![](https://s1.chabokan.net/docs/images/prometheus-setup-3.jpg)

import Features from '/docs/11-features/_features.md';

<Features />

---
:::info [مستندات رسمی Prometheus](https://prometheus.io/docs)
:::
