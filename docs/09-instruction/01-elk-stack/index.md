---
title: "استقرار استک ELK"
icon: "faDatabase"
description: "Elk Stack یک پلتفرم کامل برای جمع آوری، ذخیره سازی، تجزیه و تحلیل و نمایش داده های لاگ (Log) و اطلاعات است. این Stack شامل سه برنامه میباشد"
---

# استقرار استک ELK
---

Elk Stack یک پلتفرم کامل برای جمع آوری، ذخیره سازی، تجزیه و تحلیل و نمایش داده های لاگ (Log) و اطلاعات است. این Stack شامل سه برنامه میباشد که در زیر به اختصار در مورد آن ها توضیح داده شده است، برای اطلاعات بیشتر میتوانید بر روی نام آنها کلیک نمایید.

1. [ElasticSearch](https://chabokan.net/services/elasticSearch/): یک موتور جستجوی توزیع شده است که برای ذخیره سازی داده های لاگ و جستجو در آنها استفاده می شود. این موتور بسیار پرقدرت است و قابلیت هایی مانند جستجوی متن ، تحلیل توزیعی و جستجوهای پیشرفته را فراهم می کند.

2. [Logstash](https://chabokan.net/services/logstash/): یک ابزار تجمیع و تجزیه و تحلیل داده هاست که به سادگی می توانید داده ها را از منابع گوناگون جمع آوری کنید، آنها را تبدیل کنید و به موتور جستجوی `ElasticSearch` ارسال کنید.

3. [Kibana](https://chabokan.net/services/kibana/): یک رابط گرافیکی برای تجسم و نمایش داده ها با کمک داده های جمع آوری شده توسط `Logstash` و ذخیره شده در `ElasticSearch` است. این رابط کاربری شامل امکاناتی مانند نمودارها، جداول، نوارهای پیشرفت و پیش نمایشهای دلخواه است که به توسعه دهندگان کمک می کند تا به راحتی داده ها را مورد بررسی قرار دهند و مشکلات را شناسایی کنند.

حال برای ساخت و استفاده از ELK Stack می بایست مراحل زیر را پیش ببریم.


## استقرار ElasticSearch

ابتدا میبایست `ElasticSearch` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-2.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس آدرس زیر را در قسمت آدرس image قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.


```shell
docker.chabokan.net/elasticsearch:8.10.2
```

:::caution توجه
در صورتی که میخواهید از ورژن های دیگر برنامه ها استفاده کنید، ورژن های هر سه برنامه را یکسان انتخاب نمایید.
:::

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-1.jpg)


بعد از اتمام ساخت سرویس به قسمت پورت ها رفته و بر روی ویرایش پورت اصلی کلیک کرده و آنرا به `9200` تغییر میدهیم.

![](https://s1.chabokan.net/docs/images/elasticsearch-port.png)

سپس به قسمت تنظیمات رفته و در بخش  متغیرهای محیطی پلتفرم، متغیر های زیر را ست مینماییم. در این قسمت میتوانید متغیر ها `(env)` مد نظر خود را نیز وارد نمایید.

```properties
# name : value

discovery.type : single-node
xpack.security.enabled : true
ES_JAVA_OPTS : -Xms512m -Xmx512m
cluster_name : your-elk-name
```

:::caution توجه
بعد از تنظیم نمودن متغیر ها بر روی ذخیره تغییرات کلیک نموده و تا سرویس ری استارت شده و تغییرات شما ذخیره شود.
:::

حال میبایست به کنسول رفته و دستور زیر را اجرا نموده تا سرویس برای ما رمز های مورد نیاز را `generate` نماید و رمز های داده شده را میبایست کپی نموده و ذخیره نماییم.


```shell
cd /usr/share/elasticsearch/bin

./elasticsearch-setup-passwords  auto
```

## استقرار Kibana

حال میبایست `Kibana` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-2.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس آدرس زیر را در قسمت آدرس `image` قرار داده و مراحل بعد را تا ساخت سرویس پیش میبریم.

```shell
docker.chabokan.net/kibana:8.10.2
```

:::caution توجه
در صورتی که میخواهید از ورژن های دیگر برنامه ها استفاده کنید، ورژن های هر سه برنامه را یکسان انتخاب نمایید.
:::

![](https://s1.chabokan.net/docs/images/elk-kibana-1.jpg)


بعد از اتمام ساخت سرویس به قسمت پورت ها رفته و بر روی ویرایش پورت اصلی کلیک کرده و آنرا به `5601` تغییر میدهیم.

![](https://s1.chabokan.net/docs/images/kibana-port.jpg)

سپس به قسمت تنظیمات رفته و در بخش  متغیرهای محیطی پلتفرم، متغیر های زیر را ست مینماییم. در این قسمت میتوانید متغیر ها `(env)` مد نظر خود را نیز وارد نمایید.

```properties
# name : value
ELASTICSEARCH_HOSTS : https://ELASTICSEARCH-url # دامنه پیش فرض شما در سرویس elasticsearch
ELASTICSEARCH_USERNAME : kibana_system
ELASTICSEARCH_PASSWORD : kibana_system-password
```

:::caution توجه
بعد از تنظیم نمودن متغیر ها بر روی ذخیره تغییرات کلیک نموده و تا سرویس ری استارت شده و تغییرات شما ذخیره شود.
:::

حال با مراجعه به دامنه پیش فرض سرویس کیبانا، میتوان به پنل کیبانا دسترسی داشت و با استفاده از یوزر `elastic` و پسورد آن وارد پنل شد.

## استقرار Logstash


حال میبایست `Logstash` را در سرویس داکر راه اندازی کنیم. برای اینکار ابتدا به پنل کاربری مراجعه کرده و به قسمت ساخت سرویس جدید > میزبانی آسان > `Docker` میرویم.

![](https://s1.chabokan.net/docs/images/elk-elasticsearch-2.jpg)

سپس در مرحله بعد یعنی پیکربندی سرویس گزینه `Dockerfile` را زده و مانند نمونه زیر داکرفایل خود را ایجاد مینماییم و مراحل بعد را تا ساخت سرویس پیش میبریم.

```dockerfile
FROM docker.chabokan.net/logstash:8.10.2

RUN rm -fr /usr/share/logstash/pipeline/*
RUN rm -fr /usr/share/logstash/config/logstash.yml

COPY ./logstash.conf /usr/share/logstash/pipeline/
COPY ./logstash.yml /usr/share/logstash/config/

CMD ["logstash", "-f", "/usr/share/logstash/pipeline/logstash.conf"]
```

![](https://s1.chabokan.net/docs/images/logstash-dockerfile.jpg)



بعد از اتمام ساخت سرویس به قسمت پورت ها رفته و بر روی ویرایش پورت اصلی کلیک کرده و آنرا به `5044` تغییر میدهیم.

![](https://s1.chabokan.net/docs/images/port-logstash.png)


سپس به بخش مدیریت فایل رفته و فایل های زیر را ایجاد مینماییم:

```shell
logstash.conf
logstash.yml
```
در فایل `logstash.conf` میبایست کانفیگ پایپلاین مد نظر  خود را مانند نمونه وارد نماییم:

```nginx
input {
    beats {
	    port => 5044
    }
}

filter {
}

output {
    elasticsearch {
        index => "logstash-%{+YYYY.MM.dd}"
        hosts=> ["https://elastic-url:443"]
        user=> "elastic"
        password=> "elastic-password"
	}
}
```

در فایل `logstash.yml` نیز مانند نمونه زیر میابیست تنظیمات کلی `logstash` را وارد نماییم:

```properties
http.host: 0.0.0.0
xpack.monitoring.elasticsearch.hosts: https://elasticurl:443
xpack.monitoring.enabled: false
```

سپس به قسمت تنظیمات رفته و در بخش  متغیرهای محیطی پلتفرم میتوانید متغیر ها `(env)` مد نظر خود را وارد نمایید.

:::caution توجه
بعد از تنظیم نمودن متغیر ها بر روی ذخیره تغییرات کلیک نموده و تا سرویس ری استارت شده و تغییرات شما ذخیره شود.
:::

```properties
# name : value
ES_JAVA_OPTS : -Xms512m -Xmx512m
```

---
<a href="https://hub.chabokan.net/fa/services/create/docker" ><img src="https://s1.chabokan.net/docs/images/elkstack-banner.png" /></a>