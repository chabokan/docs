---
title: "آموزش روش های اتصال به دیتابیس Mongodb"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به Mongodb در سرویس ابری مونگو دی بی را به شما آموزش دهیم."
---

# روش های اتصال به Mongodb
---

در ادامه میخواهیم آموزش نحوه اتصال به Mongodb را در سرویس [دیتابیس مونگو دی بی](https://chabokan.net/services/mongodb/) به شما آموزش دهیم.


برای اتصال به سرویس دیتابیس ابری Mongodb می توانید به انتخاب خود یکی از روش های زیر را استفاده نمایید تا به راحتی دیتا های خود را مدیریت نمایید.

## اتصال از طریق کنسول سرویس

برای اتصال از طریق کنسول سرویس خود ابتدا وارد داشبورد سرویس شده و قسمت کنسول را انتخاب می نمایید، با استفاده از دستور زیر وارد mongo shell می شویم (بجای USERNAME و PASSWORD مشخصات سرویس در داشبورد سرویس خود را وارد کنید):

```bash
mongo -u USERNAME -p PASSWORD
```

در MongoDB ورژن 6 دستور mongo غیرفعال شده و می توانید از دستور زیر استفاده نمایید:

```bash
mongosh -u USERNAME -p PASSWORD
```

## اتصال از طریق Mongo Express

برای اتصال از طریق Mongo Express کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن mongo-express** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی Mongo Express در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

![](https://s1.chabokan.net/docs/images/mongodb_1-1.jpg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی Mongo Express نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::

![](https://s1.chabokan.net/docs/images/mongodb_3.jpg)

## اتصال از طریق Adminer

برای اتصال از طریق adminer کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن Adminer** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی Adminer در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

![](https://s1.chabokan.net/docs/images/mongodb_2-1.jpg)

:::caution توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی adminer نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::

![](https://s1.chabokan.net/docs/images/adminer_001-1.jpg)

## اتصال از طریق Mongo CLI

همواره شما می توانید از طریق ترمینال یا کنسول نیز با این سرویس ارتباط برقرار نماید. برای این کار ابتدا باید mongo را بر روی سیستم عامل خود نصب نمایید و با استفاده از دستور زیر به دیتابیس ابری Mongodb متصل شوید.

```bash
mongo -u DB_USERNAME -p DB_PASSWORD --host DB_HOST --port DB_PORT --authenticationDatabase admin
```

## اتصال با استفاده از Connection String

برای اتصال به دیتابیس MongoDB از طریق Connection String می توانید مانند نمونه زیر Connection String خود را ایجاد نمایید:

```bash
mongodb://USERNASME:PASSWORD@MONGO_SERVER_URL:MONGO_PORT/?authSource=admin
```

---
<a href="https://hub.chabokan.net/fa/services/create/mongodb" ><img src="https://s1.chabokan.net/docs/images/mongodb-banner.png" /></a>