---
title: "آموزش روش های اتصال به دیتابیس PostgreSQL"
icon: "faPlug"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به PostgreSQL در سرویس ابری پوستگر اس کیو ال را به شما آموزش دهیم."
---

# روش های اتصال به PostgreSQL
---

در ادامه میخواهیم آموزش نحوه اتصال به PostgreSQL را در سرویس [دیتابیس پوستگر اس کیو ال](https://chabokan.net/services/postgresql/) به شما آموزش دهیم.

برای اتصال به سرویس دیتابیس ابری Postgresql می توانید به انتخاب خود یکی از روش های زیر را استفاده نمایید تا به راحتی دیتا های خود را مدیریت نمایید.

![](https://s1.chabokan.net/docs/images/posgresql_conect-01.jpg)

## اتصال از طریق **PGAdmin**

برای اتصال از طریق PGAdmin کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن PGAdmin** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی PGAdmin در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

سپس می توانید با کلیک بر روی، مشاهده pgadmin وارد شده و اطلاعات مورد نظر را مانند تصویر زیر وارد نمایید.

برای اطلاعات بیشتر در مورد  **PGAdmin**  می توانید به قسمت  **[PGAdmin](/ready-application/pgadmin/)**  در مستندات مراجعه نمایید.

![](https://s1.chabokan.net/docs/images/pgadmin_login_connect_2-edited-scaled-1.png)

:::tip توجه

عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.

:::

## اتصال از طریق Adminer

برای اتصال از طریق adminer کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن Adminer** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی Adminer در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

![](https://s1.chabokan.net/docs/images/adminer_001-1.jpg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی adminer نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::

![](https://s1.chabokan.net/docs/images/my_sql_connect_5-edited.jpg)

برای اطلاعات بیشتر در مورد  **Adminer**  می توانید به قسمت  **[**Adminer**](/ready-application/adminer/)**  در مستندات مراجعه نمایید.

## اتصال از طریق Postgresql CLI

همواره شما می توانید از طریق ترمینال یا کنسول نیز با این سرویس ارتباط برقرار نماید. برای این کار ابتدا باید postgresql-client را بر روی سیستم عامل خود نصب نمایید و با استفاده از دستور زیر به دیتابیس ابری Postgresql متصل شوید.

```shell
psql -h DB_HOST -p DB_PORT -U DB_USERNAME -W DB_NAME
```

---
<a href="https://hub.chabokan.net/fa/services/create/postgresql" ><img src="https://s1.chabokan.net/docs/images/postgresql-banner.png" /></a>