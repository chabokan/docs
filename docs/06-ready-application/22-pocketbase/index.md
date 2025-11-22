---
title: "آموزش راه اندازی Pocketbase"
icon: "faBox"
description: "PocketBase یک پلتفرم مدیریت پایگاه داده وب و موبایل است که برنامه‌نویسان را قادر می‌سازد تا به سرعت و به‌صورت ساده بانک‌های اطلاعاتی وب و موبایل را پیاده‌سازی و مدیریت کنند."
---

# پیاده سازی و مدیریت پایگاه داده Pocketbase
---

[PocketBase](https://chabokan.net/services/pocketbase/) یک پلتفرم مدیریت پایگاه داده وب و موبایل است که برنامه‌نویسان را قادر می‌سازد تا به سرعت و به‌صورت ساده بانک‌های اطلاعاتی وب و موبایل را پیاده‌سازی و مدیریت کنند.

## نصب و راه اندازی Pocketbase

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Pocketbase` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Pocketbase` می سازیم.

![نصب و راه‌اندازی Pocketbase در چابکان](https://s1.chabokan.net/docs/gifs/pocketbase-install.gif)

![نصب و راه‌اندازی Pocketbase در چابکان](https://s1.chabokan.net/docs/images/pocketbase-platform-docs-1.jpg)

سپس برای ساخت حساب `superuser` به قسمت لاگ‌های سرویس بروید. و لینک مشخص‌شده را در مرورگر باز کنید.

![نصب و راه‌اندازی Pocketbase در چابکان](https://s1.chabokan.net/docs/images/pcketbase-platform-docs-03.png)


:::tip نکته

دقت کنید که مقدار `http://0.0.0.0:8090` را با دامنه سرویس خود جایگزین کنید. دامنه سرویس را می‌توانید در بخش داشبورد مشاهده کنید.

:::

دامنه سرویس در بخش داشبورد:

![نصب و راه‌اندازی Pocketbase در چابکان](https://s1.chabokan.net/docs/images/pocketbase-platform-docs-2.jpg)

:::caution توجه

لینک تولیدشده دارای تاریخ انقضاء می‌باشد و شما فقط **۳۰ دقیقه** مهلت ساخت حساب کاربری `suepradmin` را دارید. اگر این زمان سپری شود و شما حساب ایجاد نکرده باشید، می‌بایست سرویس را ری‌استارت کنید تا لینک جدید برای شما صادر شود.

:::

وارد لینک شوید. در این صفحه اطلاعات حساب کاربری `superuser` را وارد کنید تا حساب ایجاد شود.

![نصب و راه‌اندازی Pocketbase در چابکان](https://s1.chabokan.net/docs/images/packet_2.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس `Pocketbase` وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](/features/domains/))

![نصب و راه‌اندازی Pocketbase در چابکان](https://s1.chabokan.net/docs/images/packet_3.jpg)

import Features from '/docs/13-features/_features.md';

<Features />

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/pocketbase"
img="https://s1.chabokan.net/docs/images/pocketbase-banner.png"
/>
