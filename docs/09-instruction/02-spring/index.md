---
id: "spring"
title: "آموزش استقرار Spring (java)"
icon: "faLeaf"
description: "Spring یک فریمورک (framework) جاوا است که برای توسعه برنامه‌های نرم‌افزاری وب استفاده می‌شود."
parentId: "docker"
---

# استقرار Spring (java)
---

[Spring](https://chabokan.net/services/spring/) یک فریمورک (framework) جاوا است که برای توسعه برنامه‌های نرم‌افزاری وب استفاده می‌شود. این فریمورک توسط `Pivotal Software` توسعه داده شده است و برای تسهیل توسعه، پیاده‌سازی و مدیریت برنامه‌های جاوا استفاده می‌شود.


## استقرار Spring


ابتدا میبایست `Spring` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.

![استقرار Spring در چابکان](https://s1.chabokan.net/docs/images/elk-elasticsearch-2.jpg)

حال مراحل ایجاد سرویس را تا انتها پیش میبریم ( درقسمت پیکربندی سرویس گزینه ای را وارد ننمایید).

بعد از ایجاد شدن سرویس به قسمت مدیریت فایل سرویس خود رفته و فایل `Dockerfile` را ویرایش میکنیم و قطعه کد زیر را در آن قرار میدهیم. در قسمت `FROM` میتوانیم نسخه مد نظر خود را وارد کنیم تا سرویس با همان نسخه دیپلوی شود، نسخه های موجود را در همین قسمت میتوانید مشاهده نمایید.

:::tip ورژن ها

java 17: FROM eclipse-temurin:17-jdk-alpine

java 11: FROM adoptopenjdk:11-jre-hotspot

:::

```dockerfile
FROM eclipse-temurin:17-jdk-alpine
ARG JAR_FILE=/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","${JAVA_OPTS}","-jar","/app.jar"]
```

![استقرار Spring در چابکان](https://s1.chabokan.net/docs/images/spring-inst-1.png)

سپس فایل `.jar` برنامه خود را در قسمت اصلی مدیریت فایل خود آپلود مینماییم، سپس به قسمت تنظیمات رفته و یکبار بر روی ذخیره تغییرات کلیک میکنیم تا سروریس ساخته شود.

![استقرار Spring در چابکان](https://s1.chabokan.net/docs/images/spring-inst-2.png)

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/docker"
img="https://s1.chabokan.net/docs/images/spring-banner.png"
/>
