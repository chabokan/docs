---
title: "استقرار اولیه"
icon: "faRocket"
description: "در این بخش می خواهیم آموزش نحوه استقرار اولیه هاست Streamlit را به شما آموزش دهیم"
---

# استقرار اولیه Streamlit
---

در این بخش می خواهیم آموزش نحوه استقرار اولیه Streamlit را به شما آموزش دهیم. همانطور که در گیف زیر مشاهده میکنید، ابتدا
میبایست `Streamlit` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس
جدید > میزبانی آسان > `Docker` میرویم.

![استقرار Streamlit در چابکان](https://s1.chabokan.net/docs/gifs/deno-docker-install.gif)

![استقرار Streamlit در چابکان](https://s1.chabokan.net/docs/images/docker-install.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس محتوای `Dockerfile` را قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.

```dockerfile title="Dockerfile"
FROM python:3.10.19-slim
WORKDIR /app
RUN git clone https://github.com/streamlit/streamlit-example.git .
RUN pip3 install -r requirements.txt
ENTRYPOINT ["streamlit", "run", "streamlit_app.py", "--server.port=8501", "--server.address=0.0.0.0"]
```

پس از چند دقیقه، سرویس شما با موفقیت ساخته می‌شود. حال می‌توانید به توسعه اپلیکیشن خود با `Streamlit` بپردازید.

:::tip نکته
دقت کنید که `Dockerfile` این سرویس در قسمت مدیریت فایل‌ها موجود است و در صورت نیاز می‌توانید آن را ویرایش کنید.
:::

در این مثال از دستور زیر برای اجرای برنامه استفاده کردیم:

```shell
streamlit run streamlit_app.py --server.port=8501 --server.address=0.0.0.0
```

از آنجا که وب سرور Streamlit را روی پورت `8501` فعال کردیم باید آن را در قسمت پورت‌ها مشخص کنیم تا برنامه در دسترس
قرار بگیرد.

![استقرار Streamlit در چابکان](https://s1.chabokan.net/docs/images/streamlit-port.png)

در این مثال با استفاده از `git` سرویس `Streamlit` را راه‌اندازی کردیم. شما می‌توانید از روش‌های دیگری که در ادامه به
آنها اشاره شده است نیز بهره ببرید:

import Deploy from '/docs/10-deploy/_deploy.md';

<Deploy />

import Features from '/docs/13-features/_features.md';

<Features />
