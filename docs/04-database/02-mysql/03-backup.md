---
title: "آموزش Backup از دیتابیس Mysql"
sidebar_label: "نحوه ‌Backup و Restore"
description: "در ادامه میخواهیم آموزش نحوه ‌Backup و Restore در سرویس ابری مای اس کیو ال را به شما آموزش دهیم."
---

# نحوه ‌Backup و Restore در Mysql
---

در ادامه میخواهیم آموزش نحوه ‌Backup و Restore را در سرویس [دیتابیس مای اس کیو ال](https://chabokan.net/services/mysql/) به شما آموزش دهیم.

برای تهیه Backup از دیتابیس Mysql خود میتوانید به دلخواه یکی از روش های زیر استفاده نمایید و برای بازگردانی Backup نیز اقدام فرمایید.

## بکاپ پنل چابکان

برای بکاپ و بازگردانی دیتابیس در **سرویس چابکان** میتوانید از این روش استفاده نموده تا از دیتای خود بکاپ گرفته و یا دیتای تایم مد نظر خود را بازگردانی نمایید.

### ایجاد بکاپ از دیتابیس
برای گرفتن بک آپ از سرویس Mysql میتوانید در داشبورد سرویس Mysql خود به قسمت بکاپ ها مراجعه کرده و بر روی گزینه ی ایجاد بک آپ کلیک نمایید تا عملیات بک آپ سرویس شما توسط چابکان انجام شود.

![](https://s1.chabokan.net/docs/images/database_backup_2.jpg)

### بازگردانی
همانطور که مشاهده میکنید امکان دانلود و بازگردانی بک آپ برای شما فراهم گردیده است که میتوانید بک آپ سرویس خود را دانلود فرمایید و یا بک آپ تاریخ موجود سرویس را از طریق دکمه ی بازگردانی Restore کنید که سرویس به آن تاریخ Restore می شود.

## بکاپ پنل سرویس Phpmyadmin

ابتدا سرویس جانبی phpmyadmin را از داشبورد سرویس دیتابیس خود فعال نمایید و سپس وارد آن شوید.

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

### ایجاد بکاپ از دیتابیس
سپس به دیتابیس مراجعه کرده و از پنل بالایی phpmyadmin قسمت Export را انتخاب کنید.

ابتدا گزینه ی Export method را بر روی Custom قرار داده و سپس تمام گزینه های مربوط به یک آپ برای شما به نمایش در می آید. سپس تنظیمات را تغییر نداده و فقط بخش compression را بر روی gzipped قرار دهید تا حجم فایل بک آپ کاهش پیدا کند و سپس export را زده تا فایل بک آپ شما آماده ی دانلود شود.

![](https://s1.chabokan.net/docs/images/mysql_backup_3.jpg)

### بازگردانی
برای بازگردانی فایل بک آپ تهیه شده از phpmyadmin بعد از ورود به پنل phpmyadmin از پنل بالایی قسمت import را انتخاب کنید.

سپس از قسمت Choose File فایل بک آپ موجود را انتخاب کرده و گزینه ی import را فشار دهید. مدتی عملیات بازگردانی طول می کشد و بعد از اتمام گزینه ی تائید بازگردانی به شما نشان داده می شود.

:::caution توجه

لطفا تا بازگردانی کامل، صفحه را refresh نفرمایید تا تنظیمات اعمال شود.

:::

![](https://s1.chabokan.net/docs/images/mysql_backup_4.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/mysql" ><img src="https://s1.chabokan.net/docs/images/mysql-banner.png" /></a>