---
title: "آموزش روش های اتصال به دیتابیس Cassandra"
icon: "faPlug"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به Cassandra در سرویس ابری کاساندرا را به شما آموزش دهیم."
---

# روش های اتصال به Cassandra
---
در ادامه میخواهیم آموزش نحوه اتصال به Cassandra را در سرویس [دیتابیس کاساندرا](https://chabokan.net/services/cassandra/) به شما آموزش دهیم.

برای اتصال با استفاده از زبان CQL (Cassandra Query Language) به دیتابیس خود ابتدا به داشبورد سرویس خود مراجعه نمایید و مشخصات سرویس را در کامند زیر وارد نمایید.

```shell
cqlsh server port -u username -p password
```

![اتصال به سرویس دیتابیس Cassandra چابکان](https://s1.chabokan.net/docs/images/cassandra_6.jpg)

سپس به کنسول سرویس خود رفته و کامند کامل شده ی بالا با مشخصات سرویس خود را وارد نمایید تا به دیتابیس خود متصل شوید.

![اتصال به سرویس دیتابیس Cassandra چابکان](https://s1.chabokan.net/docs/images/cassandra_4.jpg)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/cassandra"
img="https://s1.chabokan.net/docs/images/cassandra-banner.png"
/>
