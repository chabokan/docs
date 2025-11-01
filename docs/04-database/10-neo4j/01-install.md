---
title: "آموزش نصب و راه اندازی دیتابیس Neo4j"
icon: "faRocket"
sidebar_label: "نصب و راه اندازی"
description: "در این بخش می خواهیم آموزش نحوه نصب و راه اندازی دیتابیس Neo4j را در سرویس ابری نئو فور جی به شما آموزش دهیم."
---

# نصب و راه اندازی Neo4j
---

در این بخش می خواهیم آموزش نحوه نصب و راه اندازی دیتابیس `Neo4j` را در سرویس [دیتابیس نئو فور جی](https://chabokan.net/services/neo4j/) به شما آموزش دهیم.
همانطور که در گیف زیر مشاهده میکنید، ابتدا سرویس `Neo4j` را از طریق قسمت ساخت سرویس جدید > دیتابیس ابری > `Neo4j` می سازیم.

![](https://s1.chabokan.net/docs/gifs/neo4j-install.gif)

سرویس های ابری چابکان امکان راه اندازی با نسخه های مختلف را نیز دارند که شما می توانید نسخه موردنظر خود را انتخاب کنید.

![](https://s1.chabokan.net/docs/images/neo4j-start.png)

## اتصال به دیتابیس

برای اتصال به سرویس خود، ابتدا بر روی دامنه پیش فرض کلیک نمایید.

![](https://s1.chabokan.net/docs/images/neo4j-install-1.jpg)

سپس وارد قسمت داشبورد `Neo4j` می شوید که در این قسمت میبایست مشخصات داده شده در تصویر بالا (داشبورد سرویس) را به صورت زیر وارد نمایید. پس از وارد شدن به دیتابیس، از شما درخواست رمز عبور جدید می شود که میتوانید رمز عبور دلخواه خود را وارد نموده و یا از `generator` استفاده بفرمایید. برای امنیت دیتابیس از رمز عبور های پیش فرض استفاده نفرمایید.


```
Connect URL: bolt://server:port bolt
Authentication type: Username / Password
Username: neo4j
Password: neo4j
```
![](https://s1.chabokan.net/docs/images/neo4j-install-2.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/neo4j" ><img src="https://s1.chabokan.net/docs/images/neo4j-banner.png" /></a>