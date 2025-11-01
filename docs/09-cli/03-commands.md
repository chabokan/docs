---
title: "کامند CLI"
icon: "faList"
sidebar_label: "کامند CLI"
---

## کامندهای CLI


### راهنمای کامند ها

برای استفاده از راهنمای کامند های مختلف میتوانید از کامند زیر استفاده نمایید تا دسترسی ها و کامند های موجود به شما نمایش داده شود.

```bash
chabok -h

chabok service -h

chabok account -h
```

### کامند های اصلی

در این بخش میتوانید کامند های قابل استفاده در CLI را مشاهده نمایید.

```bash
TOPICS

 chabok account  # display commands for working with accounts
        chabok account list    # show accounts list
        chabok account remove  # remove account from list
        chabok account use     # switch your default user between logged in users

  chabok service # display commands for working with services
        chabok service list    # show account services list
        chabok service logs    # read latest logs from service
        chabok service resize  # resize a service
        chabok service restart # restart a service
        chabok service start   # start a service
        chabok service stop    # stop a service

COMMANDS
  chabok autocomplete  # display autocomplete installation instructions
  chabok deploy        # this command help you build and deploy your service to chabokan in easy way.
  chabok help          # Display help for chabok.
  chabok login         # login to hub.chabokan.net account
  chabok version       # version of chabok CLI
```
