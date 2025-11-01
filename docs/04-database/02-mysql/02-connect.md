---
title: "آموزش روش های اتصال به دیتابیس Mysql"
icon: "faPlug"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به Mysql در سرویس ابری مای اس کیو ال را به شما آموزش دهیم."
---

# روش های اتصال به Mysql
---

در ادامه میخواهیم آموزش نحوه اتصال به Mysql را در سرویس [دیتابیس مای اس کیو ال](https://chabokan.net/services/mysql/) به شما آموزش دهیم.

برای اتصال به سرویس دیتابیس ابری Mysql می توانید به انتخاب خود یکی از روش های زیر را استفاده نمایید تا به راحتی دیتا های خود را مدیریت نمایید.

## اتصال از طریق phpmyadmin

برای اتصال از طریق phpmyadmin کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن phpmyadmin** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی phpmyadmin در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

![](https://s1.chabokan.net/docs/images/my_sql_connect_1.jpg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی phpmyadmin نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::

![](https://s1.chabokan.net/docs/images/my_sql_connect_2.jpg)

بعد از وارد کردن نام کاربری و رمز عبور به phpmyadmin متصل می شوید.

![](https://s1.chabokan.net/docs/images/my_sql_connect_3.png)

## اتصال از طریق Adminer

برای اتصال از طریق adminer کافیست در داشبورد سرویس از قسمت سرویس های جانبی، روی دکمه **فعال کردن Adminer** کلیک نمایید. با کلیک کردن بر روی این دکمه سرویس جانبی Adminer در کمتر از ۱ دقیقه آماده استفاده می شود و شما می توانید از آن استفاده نماید.

![](https://s1.chabokan.net/docs/images/adminer_001.jpg)

:::caution توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی adminer نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::

![](https://s1.chabokan.net/docs/images/my_sql_connect_5-edited.jpg)


## اتصال از طریق Mysql Workbench

برای اتصال از طریق نرم افزار Mysql Workbench کافیست مشخصات سرویس دیتابیس خود را در قسمت MySQL Connections به ترتیب تصاویر و توضیحات زیر وارد نمایید .

![](https://s1.chabokan.net/docs/images/1.png)

به ترتیب تصویر زیر مشخصات سرویس خود را از طریق پنل چابکان وارد نمایید :

![](https://s1.chabokan.net/docs/images/mysql_backup_7.jpg)

```properties
Hostname = سرور
Port = پورت mysql
Username = نام کاربری
Connection Name = نام مورد نظر
```

در نهایت بر روی OK کلیک نمایید و رمز عبور خود را وارد کرده و از سرویس مورد نظر استفاده نمایید.

## اتصال از طریق MySQL CLI

همواره شما می توانید از طریق ترمینال یا کنسول نیز با این سرویس ارتباط برقرار نماید. برای این کار ابتدا باید mysql-client را بر روی سیستم عامل خود نصب نمایید و با استفاده از دستور زیر به دیتابیس ابری Mysql متصل شوید.

```shell
mysql -u DB_USER -p'DB_PASSWORD' --host DB_HOST --port DB_PORT
```

![](https://s1.chabokan.net/docs/images/my_sql_connect_4.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/mysql" ><img src="https://s1.chabokan.net/docs/images/mysql-banner.png" /></a>