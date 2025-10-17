---
title: "آموزش استفاده از Docker Hub"
sidebar_label: "استفاده از Docker Hub"
description: "در این بخش می خواهیم آموزش نحوه استفاده از `Docker Hub` را در هاست داکر Docker به شما آموزش دهیم."
---

# استفاده از Docker Hub
---

در این بخش می خواهیم آموزش نحوه استفاده از `Docker Hub` را در [هاست داکر Docker](https://chabokan.net/cloud-hosting/docker/) به شما آموزش دهیم.

گاهی اوقات نیاز هست تا از یک `Image` در داکر هاب استفاده نمایید و برنامه خود را از طریق این `Image` در چابکان استقرار دهید. برای استفاده از `Image` های داکرهاب و یا داکر ریجیستری شخصی می توانید یک فایل با نام `Dockerfile` از طریق مدیریت فایل های سرویس (فایل منیجر) ایجاد کنید و مانند نمونه زیر مقدار دهی نمایید:

```dockerfile
FROM nginx:latest
```

با واردن کردن تنها یک خط در `Dockerfile` و ریستارت کردن سرویس، داکرفایل شما شروع به بیلد شدن خواهد کرد.

---
<a href="https://hub.chabokan.net/fa/services/create/docker" ><img src="https://s1.chabokan.net/docs/images/docker-banner.png" /></a>