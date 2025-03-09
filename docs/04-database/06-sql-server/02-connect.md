---
title: "آموزش روش های اتصال به دیتابیس SQL Server"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به SQL Server در سرویس ابری اس کیو ال سرور را به شما آموزش دهیم."
---

# روش های اتصال به SQL Server
---

در ادامه میخواهیم آموزش نحوه اتصال به SQL Server را در سرویس [دیتابیس اس کیو ال سرور](https://chabokan.net/services/mssql/) به شما آموزش دهیم.

برای اتصال به سرویس دیتابیس ابری SQL Server می توانید به انتخاب خود یکی از روش های زیر را استفاده نمایید تا به راحتی دیتا های خود را مدیریت نمایید.

## اتصال از طریق SSMS

ابتدا نرم افزار SSMS(SQL Server Management Studio) را در سیستم خود نصب کرده و وارد آن می شوید. سپس مشخصات سرویس mssql خود را درون نرم افزار به این ترتیب وارد میکنید:

```
Server Type: Database Engine
Server name: Server,Port
Authentication: SQL Server Authentication
Login: sa
Password: Pass
```

توجه داشته باشید در قسمت Server name بعد از وارد کردن آدرس سرور حتما از  **,** استفاده کنید و بعد پورت را وارد کنید.

![](https://s1.chabokan.net/docs/images/SQL_SERVER_1.jpg)

## اتصال از طریق ‌A‌D‌S‌ (برای سیستم عامل مک)

برای سیستم عامل مک پیشنهاد می شود از نرم افزار  **Azure Data Studio**  استفاده شود، ابتدا نرم افزار  **Azure Data Studio**  را در سیستم خود نصب کرده و وارد آن می شوید. سپس مشخصات سرویس mssql خود را درون نرم افزار به این ترتیب وارد میکنید:

```
Connection type: Microsoft SQL Server
Input type: Parameters
Server: Server,Port
Authentication type: SQL Login
User name: sa
Password: Pass
```

![](https://s1.chabokan.net/docs/images/mssql-connect-azure.jpg)

## اتصال از طریق Table Plus

ابتدا نرم افزار table plus را نصب کرده، وارد نرم افزار می شوید و سپس روی علامت مثبت کلیک کرده و قسمت Microsoft SQL Server را انتخاب میکنید. مشخضات سرویس خود را مانند نمونه ی زیر وارد نرم افزار کرده و سپس connect را فشار میدهید.

```
name: your sql name(optional)
Host: Server address
Port: port
User: sa
Password: Pass
```

![](https://s1.chabokan.net/docs/images/sql_server_2.jpg)

## اتصال از طریق SQL CMD

همواره شما می توانید از طریق ترمینال یا کنسول نیز با این سرویس ارتباط برقرار نماید. برای این کار ابتدا باید sqlcmd utility را بر روی سیستم عامل خود نصب نمایید و با استفاده از دستور زیر به دیتابیس ابری SQL Server متصل شوید.

```
$ sqlcmd -S DB_URL,DB_PORT -Usa -P DB_PASSWORD
```

---
<a href="https://hub.chabokan.net/fa/services/create/redis" ><img src="https://s1.chabokan.net/docs/images/sqlserver-banner.png" /></a>