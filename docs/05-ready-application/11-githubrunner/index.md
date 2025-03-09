---
title: "آموزش راه اندازی Githubrunner"
description: "Githubrunner یک سرویس برنامه نویسی مشترک است که توسط GitHub ارائه می‌شود. به وسیله این سرویس، شما می‌توانید تسریع در فرآیند توسعه و اجرای برنامه‌های خود در مخزن‌ها و مخزن‌های خصوصی Github بدست آورید."
---

# برنامه Githubrunner
---

[Githubrunner](https://chabokan.net/services/github-runner/) یک سرویس برنامه نویسی مشترک است که توسط GitHub ارائه می‌شود. به وسیله این سرویس، شما می‌توانید تسریع در فرآیند توسعه و اجرای برنامه‌های خود در مخزن‌ها و مخزن‌های خصوصی Github بدست آورید.

## نصب و راه اندازی Githubrunner

### ساخت توکن

ابتدا به پروژه ی `Github` خود مراجعه کرده و از قسمت `Settings` به قسمت `General` و سپس به تب `Actions` مراجعه کنید و تب `Runners` را باز کنید و بر روی قسمت `New self-hosted runner` کلیک نمایید.

![](https://s1.chabokan.net/docs/images/githubrunner_1.jpg)

سپس در صفحه باز شده به قسمت `Configure` رفته و `URL` و `Token` داده شده را کپی کنید و نزد خود نگه دارید.

![](https://s1.chabokan.net/docs/images/githubrunner_2.jpg)

### ساخت سرویس

همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Githubrunner` را از طریق قسمت ساخت سرویس جدید > برنامه های آماده > `Githubrunner` می سازیم.

![](https://s1.chabokan.net/docs/gifs/githubrunner-install.gif)

![](https://s1.chabokan.net/docs/images/githubrunner-platform-docs-1.jpg)

در مرحله ی پیکربندی سرویس نیاز است `TOKEN` و `URL` را که کپی کرده اید را در قسمت های مربوطه جای گذاری نمایید. و مراحل را تا ساخت سرویس ادامه دهید.

![](https://s1.chabokan.net/docs/images/githubrunner_3.jpg)

برنامه ی شما آماده ی کار می باشد و میتوانید `Runner` ساخته شده را در قسمت `Runners` پنل کاربری `Github` خود مشاهده نمایید.

![](https://s1.chabokan.net/docs/images/githubrunner_4.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/githubrunner" ><img src="https://s1.chabokan.net/docs/images/githubrunner-banner.png" /></a>