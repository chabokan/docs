---
title: "تبدیل دیتابیس اشتراکی به اختصاصی"
icon: "faExchangeAlt"
sidebar_label: "تبدیل دیتابیس اشتراکی به اختصاصی"
description: "در ابتدا باید از دیتابیس اشتراکی خود بکاپ بگیرید. برای گرفتن بکاپ به داشبورد سرویس مد نظرتون رفته و مراحل زیر را اجرا نمایید."
---

# تبدیل دیتابیس اشتراکی به اختصاصی
---
در ابتدا باید از دیتابیس اشتراکی خود بکاپ بگیرید. برای گرفتن بکاپ به داشبورد سرویس مد نظرتون رفته و مراحل زیر را اجرا نمایید.

## ایجاد بکاپ از دیتابیس

### PhpMyAdmin

ابتدا سرویس جانبی phpMyAdmin را از داشبورد سرویس خود فعال نمایید و سپس وارد آن شوید.

![](https://s1.chabokan.net/docs/images/my_sql_connect_1.jpg)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution توجه
<Tabs>
  <TabItem value="عمر سرویس" label="عمر سرویس">عمر سرویس های جانبی فقط 40 دقیقه می باشد و بعد از گذشت 40 دقیقه به صورت خودکار حذف می شوند.</TabItem>
  <TabItem value="امنیت سرویس" label="امنیت سرویس">برای امنیت بیشتر بر روی سرویس جانبی phpmyadmin نام کاربری و رمزعبور تعیین شده است. (مشخصات ورود در صفحه داشبورد، قسمت سرویس جانبی نمایش داده می شود.)</TabItem>
</Tabs>
:::
![](https://s1.chabokan.net/docs/images/my_sql_connect_2-edited.jpg)

سپس به دیتابیس مراجعه کرده و از پنل بالایی phpmyadmin قسمت Export را انتخاب کنید.

ابتدا گزینه ی Export method را بر روی Custom قرار داده و سپس تمام گزینه های مربوط به یک آپ برای شما به نمایش در می آید. سپس تنظیمات را تغییر نداده و فقط بخش compression را بر روی gzipped قرار دهید تا حجم فایل بک آپ کاهش پیدا کند و سپس export را زده تا فایل بک آپ شما آماده ی دانلود شود.

![](https://s1.chabokan.net/docs/images/mysql_backup_3.jpg)

شما باید بر اساس نیاز های خودتون نوع دیتابیس اختصاصی خود را از لینک های زیر انتخاب و تهیه نمایید.

**[خرید دیتابیس MariaDB](https://chabokan.net/services/mariadb/)**

**[خرید دیتابیس MongoDB](https://chabokan.net/services/mongodb/)**

## بازگردانی
برای بازگردانی فایل بک آپ تهیه شده از phpmyadmin بعد از ورود به پنل Phpmyadmin از در داشبورد دیتابیس اختصاصی خود(همانند مرحله بالا Phpmyadmin را فعال نمایید) و به بخش import مراجعه نمایید.

سپس از قسمت Choose File فایل بک آپ موجود را انتخاب کرده و گزینه ی import را فشار دهید. مدتی عملیات بازگردانی طول می کشد و بعد از اتمام گزینه ی تائید بازگردانی به شما نشان داده می شود.

لطفا تا بازگردانی کامل، صفحه را refresh نفرمایید تا تنظیمات اعمال شود.

![](https://s1.chabokan.net/docs/images/mysql_backup_4.jpg)

توجه داشته باشید که بعد از انجام عملیات بالا باید اطلاعات دیتایس اختصاصی خود را در سرویس مد نظر اعمال نمایید تا اتصال برقرار شود.

## مطالب مرتبط:

[اتصال سرویس دیتابیس به WordPress](https://docs.chabokan.net/ready-application/wordpress/connect/)

[روش های اتصال در MongoDB](https://docs.chabokan.net/database/mongodb/connect/)

[روش های اتصال در MariaDB](https://docs.chabokan.net/database/mariadb/connect/)
