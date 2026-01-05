---
title: "آموزش اتصال Java به دیتابیس"
icon: "faDatabase"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه اتصال `Java` به دیتابیس را در هاست جاوا Java به شما آموزش دهیم."
---

# اتصال Java به دیتابیس
---

در این بخش می‌خواهیم آموزش نحوه اتصال `Java` به دیتابیس را در هاست جاوا به شما آموزش دهیم. برای اتصال دیتابیس `MySQL` به
سرویس جاوا خود بعد از ایجاد سرویس `MySQL` مراحل زیر را برای اتصال دیتابیس طی نمایید. ابتدا کتابخانه اتصال به `MySQL` را
باید به پروژه خود اضافه کنید. در این مثال پروژه `maven` را در نظر می‌گیریم و این
کتابخانه
را در قسمت `dependencies` فایل `pom.xml` اضافه می‌کنیم:

```xml

<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.33</version><!--حتما از نسخه سازگار با سرویس دیتابیس استفاده کنید-->
</dependency>
```

سپس مانند نمونه ی زیر مشخصات سرویس دیتابیس خود را به برنامه ی `Java` خود معرفی می‌نمایید.

```java
try(Connection con = DriverManager.getConnection("jdbc:mysql://url:port/dbName", "username", "password")){
    // queries
}
```

در داشبورد سرویس `MySQL` می‌توانید مشخصات اتصال به دیتابیس را مشاهده کنید. این مشخصات را به جای مقادیر زیر جایگزین کنید:

```properties
url=سرور
port=پورت mysql
dbName=نام دیتابیس
username=نام کاربری
password=رمز عبور
```

![آموزش اتصال به دیتایس در سرویس Java چابکان](https://s1.chabokan.net/docs/images/mysql-connection-info-.png)

:::tip ترفند
همچنین می‌توانید برای انعطاف بیشتر، این مقادیر را به صورت [متغیرهای محیطی (env)](/features/settings/env/) تعریف کنید و
در برنامه با استفاده از دستور زیر متغیرها را استفاده کنید:

```java
var url = System.getenv("db_url");
var port = System.getenv("db_port");
var dbName = System.getenv("db_name");
var username = System.getenv("db_username");
var password = System.getenv("db_password");
```
:::

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/docker"
img="https://s1.chabokan.net/docs/images/docker-banner.png"
/>
