---
title: "آموزش روش های اتصال به دیتابیس Neo4J"
icon: "faPlug"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به Neo4J در سرویس دیتابیس ابری چابکان را به شما آموزش دهیم."
---

# روش های اتصال به Neo4J
---
در ادامه میخواهیم آموزش نحوه اتصال به Neo4J را در سرویس [دیتابیس Neo4J](https://chabokan.net/products/database/neo4j/) به شما آموزش دهیم.

برای اتصال به سرویس دیتابیس ابری Neo4J بر روی نام دامنه که در بالای داشبورد سرویستان است کلیک کنید.

![اتصال به سرویس دیتابیس Neo4J چابکان](https://s1.chabokan.net/docs/images/neo4j-install-1.jpg)

سپس وارد قسمت داشبورد `Neo4j` می شوید که در این قسمت میبایست مشخصات داده شده در تصویر بالا (داشبورد سرویس) را به صورت زیر وارد نمایید. پس از وارد شدن به دیتابیس، از شما درخواست رمز عبور جدید می شود که میتوانید رمز عبور دلخواه خود را وارد نموده و یا از `generator` استفاده بفرمایید. برای امنیت دیتابیس از رمز عبور های پیش فرض استفاده نفرمایید.


```properties
Connect URL: bolt://server:port bolt
AuthenticationType: Username / Password
Username: neo4j
Password: neo4j
```
![اتصال به سرویس دیتابیس Neo4J چابکان](https://s1.chabokan.net/docs/images/neo4j-install-2.jpg)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/neo4j"
img="https://s1.chabokan.net/docs/images/neo4j-banner.png"
/>
