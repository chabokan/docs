---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## Internal Server Error

![](https://s1.chabokan.net/docs/images/next-cloud-error-1.jpg)

در صورت بر خورد با ارور `Internal Server Error` در هنگام بازکردن دامنه سرویس `Nextcloud` خود کافیست در قسمت کنسول سرویس، دستور زیر را اجرا کرده و یکبار سرویس خود را ری استارت نمایید تا برنامه به درستی اجرا شود.

```bash
chown -R www-data:www-data /var/www/html/
```

![](https://s1.chabokan.net/docs/images/next-cloud-error-2.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/nextcloud" ><img src="https://s1.chabokan.net/docs/images/nextcloud-banner.png" /></a>