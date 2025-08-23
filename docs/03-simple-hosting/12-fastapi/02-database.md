---
title: "اتصال Fast API به دیتابیس"
sidebar_label: "اتصال به دیتابیس"
description: "در این بخش می خواهیم آموزش نحوه اتصال `Fast API` به دیتابیس را در هاست FastAPI به شما آموزش دهیم."
---
# اتصال Fast API به دیتابیس
---

در این بخش می خواهیم آموزش نحوه اتصال `Fast API` به دیتابیس را در [هاست FastAPI](https://chabokan.net/products/cloud-hosting/fastapi/) به شما آموزش دهیم.

برای اتصال به دیتابیس در سرویس `FastAPI` کافیست ابتدا از طریق حساب کاربری خود یک دیتابیس ایجاد کنید و سپس با استفاده از دستورعمل زیر دیتابیس را به سرویس خود متصل کنید.

## اتصال به دیتابیس PostgreSQL

بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `FastAPI` معرفی کنید. برای این کار کافیست هاست، نام کاربری، رمزعبور، پورت و نوع دیتابیس ایجاد شده را با استفاده از متغیر های چابکان که در قسمت تنظیمات سرویس قرار دارد به `FastAPI` معرفی کنید.

```bash
DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/NAME
```

سپس داخل برنامه `FastAPI` خود با استفاده از دستور زیر می توانید به `DATABASE_URL` دسترسی داشته باشید (ماژول `os` باید `import` شود)

```python
os.getenv('DATABASE_URL')
```

## اتصال به دیتابیس MySQL

بعد از ایجاد دیتابیس در حساب کاربری خود، باید اطلاعات دیتابیس ایجاد شده را به `FastAPI` معرفی کنید. برای این کار کافیست هاست، نام کاربری، رمزعبور، پورت و نوع دیتابیس ایجاد شده را با استفاده از متغیر های چابکان که در قسمت تنظیمات سرویس قرار دارد به `FastAPI` معرفی کنید.

```bash
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/NAME
```

سپس داخل برنامه `FastAPI` خود با استفاده از دستور زیر می توانید به `DATABASE_URL` دسترسی داشته باشید (ماژول `os` باید `import` شود)

```python
os.getenv('DATABASE_URL')
```

---
<a href="https://hub.chabokan.net/fa/services/create/fastapi" ><img src="https://s1.chabokan.net/docs/images/fastapi-banner.png" /></a>