---
title: "آموزش راه اندازی Gitlabrunner"
icon: "faPersonRunning"
description: "GitLab Runner، یک سرویس اجرا کننده است که توسط GitLab ارائه می‌شود. این سرویس امکان اجرای فرآیندهای CI/CD طراحی شده بر روی پلتفرم GitLab را فراهم می‌کند."
---

# برنامه GitLabrunner
---

[GitLabrunner](https://chabokan.net/services/gitlab-runner/)، یک سرویس اجرا کننده است که توسط GitLab ارائه می‌شود. این سرویس امکان اجرای فرآیندهای CI/CD طراحی شده بر روی پلتفرم GitLab را فراهم می‌کند. GitLab Runner عملکرد مشابه GitHub Actions است، هدف آن ایجاد یک بستر برای ایجاد، آزمایش و استقرار به‌صورت خودکار نرم‌افزار است.

## نصب و راه اندازی Gitlabrunner


### ساخت توکن

ابتدا به پروژه ی `Gitlab` خود مراجعه کرده و از قسمت `Settings` به `CI/CD` مراجعه کنید و تب `Runners` را باز کنید و از قسمت `Project runners` در کنار دکمه ی `New project runner` بر روی سه نقطه کلیک کرده و `Registration token` را کپی کنید.

![](https://s1.chabokan.net/docs/images/gitlabrunner_20.jpg)

### ساخت سرویس

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Gitlabrunner` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Gitlabrunner` می سازیم.

![](https://s1.chabokan.net/docs/gifs/gitlabrunner-install.gif)

![](https://s1.chabokan.net/docs/images/gitlabrunner-platform-docs-1.jpg)

در مرحله پیکربندی سرویس نیاز است `Registration token` را که کپی کرده اید در قسمت توکن `Gitlab Runner` جای گذاری نمایید.

![](https://s1.chabokan.net/docs/images/gitlabrunner_2.jpg)

برنامه ی شما آماده ی کار می باشد و میتوانید `Runner` ساخته شده را در قسمت `Runners` پنل کاربری `Gitlab` خود مشاهده نمایید.

![](https://s1.chabokan.net/docs/images/gitlabrunner_3.jpg)

## استفاده از گیت لب چابکان

در صورتی که از `gitlab` چابکان و یا از سرور دیگری به جز سرور اصلی `gitlab` استفاده مینمایید، میبایست آدرس سرور را به شکل زیر در قسمت تنظیمات سرویس و متغییر های محیطی معرفی نمایید:

```properties
# name : value

URL : https://your_gitlab_server_URL
```

![](https://s1.chabokan.net/docs/images/gitlab-env.jpg)

import Features from '/docs/13-features/_features.md';

<Features />

---
<a href="https://hub.chabokan.net/fa/services/create/gitlabrunner" ><img src="https://s1.chabokan.net/docs/images/gitlabrunner-banner.png" /></a>