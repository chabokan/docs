---
title: "آموزش استقرار Opensearch"
description: " "
---

# استقرار Opensearch
---

`OpenSearch` یک پروژه متن باز توسط امازون (AWS) است که امکان درک بهتر و کنترل بیشتر زیرساخت جستجو را می دهد. این پروژه از نمایه سازی، جستجو و تحلیل داده ها در مقیاس های بزرگ پشتیبانی میکند.

## استقرار Opensearch


ابتدا میبایست `Opensearch` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-2.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس آدرس زیر را در قسمت آدرس `image` قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.


```bash
docker.chabokan.net/opensearchproject/opensearch:2.11.0
```

:::tip ورژن ها
2.11.0, 2.9.0, 2.8.0, 1.3.13
:::

![](https://s1.chabokan.net/docs/images/opensearch-docs-4.png)

بعد از اتمام ساخت سرویس، به قسمت دیسک ها رفته و دیسک خود را مانند نمونه زیر تعریف میکنیم:

```bash
# مبدا
data

# مقصد
/usr/share/opensearch/data
```

![](https://s1.chabokan.net/docs/images/opensearch-docs-2.png)

حال به قسمت پورت ها رفته و بر روی ویرایش پورت اصلی کلیک کرده و آنرا به `9200` تغییر میدهیم.

![](https://s1.chabokan.net/docs/images/opensearch-docs-1.png)

سپس به قسمت تنظیمات رفته و در بخش  متغیرهای محیطی پلتفرم، متغیر های زیر را ست مینماییم. در این قسمت میتوانید متغیر ها `(env)` مد نظر خود را نیز وارد نمایید.

```bash
# name : value

discovery.type : single-node
OPENSEARCH_JAVA_OPTS : -Xms512m -Xmx512m
DISABLE_SECURITY_PLUGIN : true
```

:::caution توجه
بعد از تنظیم نمودن متغیر ها بر روی ذخیره تغییرات کلیک نموده و تا سرویس ری استارت شده و تغییرات شما ذخیره شود.
:::

![](https://s1.chabokan.net/docs/images/opensearch-docs-3.png)


## استقرار Opensearch Dashboard

حال میبایست `Opensearch Dashboard` را در سرویس داکر راه اندازی کنیم. برای اینکار به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-2.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس آدرس زیر را در قسمت آدرس `image` قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.


```bash
docker.chabokan.net/opensearchproject/opensearch-dashboards:2.11.0
```

:::tip ورژن ها
2.11.0, 2.9.0, 2.8.0, 1.3.13
:::

![](https://s1.chabokan.net/docs/images/opensearch-dashboard-docs-2.png)

حال به قسمت پورت ها رفته و بر روی ویرایش پورت اصلی کلیک کرده و آنرا به `5601` تغییر میدهیم.

![](https://s1.chabokan.net/docs/images/opensearch-dashboard-docs-1.png)

سپس به قسمت تنظیمات رفته و در بخش  متغیرهای محیطی پلتفرم، متغیر های زیر را ست مینماییم. در این قسمت میتوانید متغیر ها `(env)` مد نظر خود را نیز وارد نمایید.

```bash
# name : value

OPENSEARCH_HOSTS : https://opensearch-URL
DISABLE_SECURITY_DASHBOARDS_PLUGIN : true
```

:::caution توجه
بعد از تنظیم نمودن متغیر ها بر روی ذخیره تغییرات کلیک نموده و تا سرویس ری استارت شده و تغییرات شما ذخیره شود.
:::

![](https://s1.chabokan.net/docs/images/elk-env.jpg)

حال برنامه شما آماده استفاده است و میتوانید با مراجعه به دامنه ی خود در داشبورد سرویس وارد برنامه شوید و یا دامنه ی اختصاصی خود را بر روی برنامه ست نمایید.( [تنظیم دامنه](https://docs.chabokan.net/domains/))

---
<a href="https://hub.chabokan.net/fa/services/create/docker" ><img src="https://s1.chabokan.net/docs/images/opensearch-banner.png" /></a>