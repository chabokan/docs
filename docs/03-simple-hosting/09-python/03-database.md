---
title: "آموزش اتصال Python به دیتابیس"
icon: "faDatabase"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه اتصال `Python` به دیتابیس را در هاست پایتون Python به شما آموزش دهیم."
---

# اتصال Python به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `Python` به دیتابیس را در [هاست پایتون Python](https://chabokan.net/cloud-hosting/python/) به شما آموزش دهیم.

برای اتصال دیتابیس MySQL به سرویس پایتون خود بعد از ایجاد سرویس `MySQL` مراحل زیر را برای اتصال دیتابیس طی نمایید.

ابتدا کد زیر را در ترمینال سرویس `Python` خود وارد نمایید.

```bash
sudo pip install mysql-connector-python
```

سپس مانند نمونه ی زیر مشخصات سرویس دیتابیس خود را به برنامه ی `Python` خود معرفی مینمایید.

```python
import mysql.connector

cnx = mysql.connector.connect(
    host='Host-address',
    database='Database-name',
    user='User-name',
    password='Password',
    port=port
)
```

![](https://s1.chabokan.net/docs/images/database_python_1.jpg)

---
<a href="https://hub.chabokan.net/fa/services/create/python" ><img src="https://s1.chabokan.net/docs/images/python-banner.png" /></a>