---
title: "مشکلات احتمالی"
icon: "faTriangleExclamation"
sidebar_label: "مشکلات احتمالی"
description: "در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم."
---

# مشکلات احتمالی
---

در این قسمت مشکلات احتمالی که ممکن است با آن برخورد کنیم را بررسی کرده و راه حل آن را نیز مشاهده میکنیم.

## خطای CORS در فلسک

در صورت برخورد با ارور CORS No Allow Credentials و یا CORS Missing Allow Header میتوانید از راه حل زیر استفاده نمایید.

برای حل این خطا میتوانید از [این پکیج](https://pypi.org/project/Flask-Cors/) به صورت زیر استفاده نمایید :

```python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"
```

---
import ServiceBanner from '@site/src/components/ServiceBanner';

<ServiceBanner
buyLink="https://hub.chabokan.net/fa/services/create/flask"
img="https://s1.chabokan.net/docs/images/flask-banner.png"
/>