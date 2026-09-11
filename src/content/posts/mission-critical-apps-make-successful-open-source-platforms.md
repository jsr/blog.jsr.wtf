---
title: "Mission critical apps make successful open source platforms"
slug: "mission-critical-apps-make-successful-open-source-platforms"
date: "2019-06-12T23:58:11.000Z"
displayDate: "2019-06-12"
modified: "2019-06-18T14:01:00.000Z"
description: "How to optimize go to market for open source software platforms."
tags: ["MongoDB","Open source strategy"]
image: "/media/143b6dce1b01b793.jpg"
guid: "5d015d4c0cbb420038b93bd7"
draft: false
---

Who pays for free software? You hear lots of answer to this: “big companies”, “financial services companies”, “people without the expertise to do it themselves”. They're all wrong.  

At MongoDB, understanding the answer to this question was life or death to our business. There was massive adoption of MongoDB, but it was really hard to predict which users were going to become customers and which users were never going to pay for anything. If we got this question wrong then we would die. Monetization rates for open source software can be really low. For every 1000 users of an open source project, you might convert only 1 of them to a paid customer. If you waste your time trying to sell to the other 999 then you’re never going to build a business.  

After a few years of collecting sales data we did a “propensity to buy” analysis of our sales data. It turned out that propensity to buy had nothing to do with customer size (both startups and huge enterprises would pay for MongoDB), nothing to do with industry verticals (finance, tech, telecom, retail all bought MongoDB), and nothing to do with the use case (front office, back office, system of record, systems of engagement, etc. were all paid use cases) The real answer was pretty obvious in retrospect, but nobody had even hypothesized the right answer before we started.  

Users pay for mission critical applications!  

When an enterprise starts building a new piece of software, it doesn’t yet generate any value to the business (after all, at the very beginning it’s not even deployed yet!). Even after it launches, it may be quite a while before it starts to generate significant value. But once it’s generating value (revenue, cost savings, etc...) for the business, it hurts to lose it. This is true across all businesses and all phases of maturity.  

When an application becomes mission critical, [everything it depends on becomes mission critical](https://twitter.com/mitchellh/status/1052239234361253888?ref=blog.jsr.wtf). Not just the application, but the OS it runs on, the database it uses, its load balancer, ... everything. The more value that application generates, the more important all of those dependencies become. If your platform generates lots of mission critical workloads for customers you’ll have lots of paying customers. If not, you’ll have lots of free users.  

Intuitively this makes sense. And it implies some rules about the business of open source software.

<a id="if-your-users-apps-aren-t-mission-critical-then-neither-are-you"></a>

## If your users' apps aren’t mission critical, then neither are you

Look at the applications that users build on top of your platform. If those applications aren’t mission critical to your users then you don’t have a viable open source business. In the early NoSQL market, there were a number of datastores that were really good at things like log collection and time series data. The problem with these use cases is that in a high portion of use cases they don’t generate a lot of value.

A time series database might store operational metrics for a datacenter full of servers. If this system goes down, it can be very inconvenient, but the data center is still running and generating revenue from it apps. On the other hand, if your operational database is used by the application itself running in that datacenter, then if your database goes down, the whole business stops. The operational database gets used in more mission critical use cases than the time series database.

There are obviously big exceptions to this; financial services companies build high frequency trading apps on time series databases, and those are definitely mission critical. But in the general case, these apps just aren’t as valuable.  

In the NoSQL market you can apply this lens to growth companies in the operational database market (MongoDB, Elastic) and the data warehouse market (Cloudera, Hortonworks, MapR). Over the past few years MongoDB and Elastic have grown to [$9b](https://finance.yahoo.com/quote/MDB?ref=blog.jsr.wtf) and [$6b](https://finance.yahoo.com/quote/ESTC?ref=blog.jsr.wtf) businesses. Meanwhile Cloudera and Hortonworks have merged are [valued at a mere $1.5b](https://finance.yahoo.com/quote/CLDR?ref=blog.jsr.wtf) and [MapR recently went through major layoffs](https://www.sfchronicle.com/business/article/Software-company-MapR-once-worth-more-than-1-13904888.php?ref=blog.jsr.wtf). This isn’t just good vs. bad execution: the material difference between operational databases and data warehouses is that operational database generate more mission critical applications than data warehouses.  

<a id="a-growth-framework-for-software-platforms"></a>

## A growth framework for software platforms

Your job as a software vendor is to increase the number of applications built on your software that become mission critical and reduce the time it takes them to become mission critical. There’s a conversion funnel here  

<figure class="kg-card kg-image-card"><img src="/media/f6eee7ff59cc5b95.jpg" class="kg-image" alt="" loading="lazy"></figure>

  

There are three key metrics I look at when evaluating an open source business  

1.  How many applications are built on this project?
2.  What is the % of these applications that end up as mission critical to the user?
3.  How long does it take for these applications to get from “new” to “mission critical”?  
    

If you want to build your open source business you should do everything in your power to improve these 3 metrics.  

Increasing adoption of your platform is pretty obvious, and every business does lots of activities to promote this (see [Shelf Space Strategy](/shelfspace-strategy-for-enterprise-software/) for one example of an effective approach to this). Open source itself is a strategy to open up the top of the funnel (making it free and easy to adopt helps increase the number of new apps on your platform by reducing barriers to adoption).  

But what are you doing to increase the conversation rate and reduce the time to mission critical? If you map out the adoption process of your platform, you can identify a lot of friction points a user may go through at each stage. Is it easy to get access to your platform? How hard is it to build an app on your platform? Can they figure out how to scale it, secure it, protect its data? Will they be able to upgrade it and service it without taking it down?

At MongoDB we made significant investments in community support to help new applications get to production. At this early phase, the application doesn’t generate much value to the business so it’s hard to sell them anything. But if you withhold support from these users they may never reach deployment or mission critical status in a useful amount of time. By essentially “giving away” free support, we helped ensure that new applications were more likely to drive down the funnel.  

As customers got to production, we had support subscriptions and professional services products that aligned with application lifecycle. One of our most popular consulting products was called “launch control” and was a fixed price consulting product that helped ensure applications were ready to go into production.  

These activities not only increased the probability that an application would become mission critical, but also accelerated the timeline towards this goal. A customer might spend 6 months scaling their deployment on their own. But if we could help them do that in 3 months, then we probably just pulled in our next sale by one quarter.  

<a id="align-sales-process-to-application-maturity"></a>

## Align sales process to application maturity

There’s no point showing up with a full scale enterprise sales motion when a customer is in the “new application” phase. Their application isn’t generating any value for the business yet and they’re not going to spend a lot of money. In the early phases of application development, your job is just to help them along. Your sale will come later when their application becomes successful.

  
As applications go from development into production, all of a sudden their needs shift. They’re not longer asking developer questions about how to use your product, now they’re asking how to secure it, scale it, make it available, performance test it, etc. At this stage, you have more to offer. This is where you can start to sell small subscription and services products to help them through this transition. But you’re still not closing big deals at this point because the app is still too early in the cycle.  

Once your customer is generating significant value from an application you have an opportunity to close your big deal. The stakes are higher here. If the application goes down then your customers business is adversely impacted. The dependencies of the application have value up to the value generated for the business. Your customer will happily work with you to ensure that there is no disruption to this business.

<a id="final-thoughts"></a>

## Final thoughts

There is much debate about open source business models (subscription, open core, saas services, ..) as well as new and clever licenses that try to prohibit use cases to maximize monetization opportunities for the open source vendor. I don’t think there’s one right answer to business model, and I don’t think these licenses help much.

This isn't to say that business model or license is unimportant. It's just that if you don't get your customers to mission critical, then none of these other things will matter. The real driver of value for your open source platform is the number of mission critical applications that depend on it. If you create a lot of those then you can build a successful business. If you don’t generate mission critical applications on your platform then no business model or license will succeed.

Photo by [Patryk Grądys](https://unsplash.com/@patrykgradyscom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/control-room?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
