---
title: "آموزش روش های اتصال به دیتابیس InfluxDB"
icon: "faPlug"
sidebar_label: "روش های اتصال"
description: "در ادامه میخواهیم آموزش نحوه اتصال به InfluxDB در سرویس ابری اینفلاکس دی بی را به شما آموزش دهیم."
---

# روش های اتصال به InfluxDB
---
در ادامه میخواهیم آموزش نحوه اتصال به InfluxDB را در سرویس [دیتابیس اینفلاکس دی بی](https://chabokan.net/services/influxdb/) به شما آموزش دهیم.

برای اتصال به سرویس دیتابیس ابری InfluxDB بر روی نام دامنه که در بالای داشبورد سرویستان است کلیک کرده تا به صفحه ورود InfluxDB مانند قسمت چپ تصویر زیر ریدایرکت می شوید سپس می توانید با وارد کردن اطلاعات مورد نظر وارد شوید.

![](https://s1.chabokan.net/docs/images/Connect_influxdb_3.jpg)

```properties
Username:نام کاربری
Password:رمز عبور
```

## مدیریت توکن ها

از طریق منو Load Data بخش API Tokens میتوانید توکن های جدیدی ایجاد کنید. همچنین می‌ توانید توکن ها را نام ‌گذاری و مجوزها را تعیین کنید.

![](https://s1.chabokan.net/docs/images/token_influxdb_11.jpg)

## اتصال از طریق پایتون


برای نصب influxdb کافیست تا بعد از ایجاد سرویس قطعه کد زیر را اجرا کنید. ([کتابخانه ی influxdb](https://influxdb-client.readthedocs.io/en/latest/))

```python
from datetime import datetime

from influxdb_client import Point, InfluxDBClient
from influxdb_client.client.write_api import SYNCHRONOUS

"""
Configure credentials
"""
influx_cloud_url = 'https://influxdb-epe2fg.chbk.run'
influx_cloud_token = 'edNDMki1GZygFSj9'
bucket = 'my-bucket'
org = 'my-org'

client = InfluxDBClient(url=influx_cloud_url, token=influx_cloud_token)
try:
    kind = 'temperature'
    host = 'host1'
    device = 'opt-123'

    """
    Write data by Point structure
    """
    point = Point(kind).tag('host', host).tag('device', device).field('value', 25.3).time(time=datetime.utcnow())

    print(f'Writing to InfluxDB cloud: {point.to_line_protocol()} ...')

    write_api = client.write_api(write_options=SYNCHRONOUS)
    write_api.write(bucket=bucket, org=org, record=point)

    print()
    print('success')
    print()
    print()

    """
    Query written data
    """
    query = f'from(bucket: "{bucket}") |> range(start: -1d) |> filter(fn: (r) => r._measurement == "{kind}")'
    print(f'Querying from InfluxDB cloud: "{query}" ...')
    print()

    query_api = client.query_api()
    tables = query_api.query(query=query, org=org)

    for table in tables:
        for row in table.records:
            print(f'{row.values["_time"]}: host={row.values["host"]},device={row.values["device"]} '
                  f'{row.values["_value"]} °C')

    print()
    print('success')

except Exception as e:
    print(e)
finally:
    client.close()
```

---
<a href="https://hub.chabokan.net/fa/services/create/influxdb" ><img src="https://s1.chabokan.net/docs/images/influxdb-banner.png" /></a>