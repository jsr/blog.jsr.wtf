---
title: "Land and expand - How to make money selling to developers"
slug: "land-and-expand"
date: "2019-07-18T05:49:38.000Z"
displayDate: "2019-07-17"
modified: "2019-07-18T19:55:38.000Z"
description: "As a platform vendor, you really want your customers to build all of their apps on your platform. You want to be the “enterprise standard”; the default choice for any new app that is well supported by the organization. You sign the big ELAs every year, drive a sensible color"
tags: ["MongoDB","Open source strategy"]
image: "/media/9a9791e610808e90.jpg"
guid: "5d300340ccf7af0038e5051d"
draft: false
---

As a platform vendor, you really want your customers to build all of their apps on your platform. You want to be the “enterprise standard”; the default choice for any new app that is well supported by the organization. You sign the big ELAs every year, drive a sensible color Tesla S and are going to Tahoe this weekend. Congratulations! You've won your very own magic quadrant!

  
So, how did we get here?  

  
Developer platforms don’t just go from zero to “enterprise standard”. You need to take your customer’s on a journey before they adopt it as a standard and there are many very costly failure modes along the way. What does this journey look like and how can you structure your product and business to be more efficient at reaching the status of “enterprise standard”?  

<a id="3-steps-to-enterprise-standard"></a>

# 3 steps to enterprise standard

The first step is that some first application team decides to use your platform in their new project. If they’re really successful with your platform, then other teams are going to try to copy that first team’s success. And then if multiple teams are able to repeat success with your platform, that’s when the business starts to turn things into “enterprise standards”.  

<figure class="kg-card kg-image-card"><img src="/media/cd431bfc96c202bc.png" class="kg-image" alt="" loading="lazy"></figure>

  
But if that first team fails with your platform, then no other team is going to touch it for a long time. The next time a team proposes using your platform, the people that worked on the first application are going to talk about how it’s a bad choice. This will be a dramatic drag on your product in the account.  

When multiple teams are adopting your platform, if they aren’t able to reproduce the success of the first team, then it will never become a standard. You’ll have a mix of promoters and detractors in the enterprise and those detractors are often sufficient to stop a platform from making it big time. You need to prove that the initial success wasn’t a “one-off”, and that you can find many use cases for the platform.

<a id="first-application"></a>

# First application

During initial development of a new application, that app isn’t generating any value for the business and so their budget for your platform isn’t very high (for more on this, read [mission critical apps make mission critical platforms](/mission-critical-apps-make-successful-open-source-platforms/)). The easier you can make it for the team to try your platform, the more first apps you’ll find.  

What you want to do at this phase is focus on ensuring they’re successful with your platform. Give them education, support and advice. Create documentation, guides, reference architectures, design patterns, solutions or whatever else will help that team building the first app figure out how to best use your platform. Have mailing lists, issue tracking, chat rooms, office hours, meetups all publicly available and well promoted (see [Community support](/free-support/) for more on this). Send out developer evangelists and solution architects to meet with teams, answer their questions and give them advice about what they’re trying to do.  

Do this all for free. If you were to try to close a deal during the development phase, you’re going to face lots of obstacles. The team doesn’t have budget. They’re not sure if they’re going to make your platform work. They’re not sure if the app they’re trying to build is even going to be successful.  

Only when the application starts to go into production should you start talking about selling them something. At this point the customer is getting nervous about production. Wondering if everything is going to work as planned. You’ve been such a help to them along the way that you’ve built a great relationship and trust. Now’s the time to partner with the customers to help them take their application to the next level. You may sell them a small subscription at a big discount to get them started. You’ll send in some experts to help them get through their launch preparation and execution.  

When I was at MongoDB I met a small team of ambitious developers from a startup called Orchestra building a new app called [Mailbox](https://en.wikipedia.org/wiki/Mailbox_\(application\)?ref=blog.jsr.wtf) (later acquired by Dropbox). They were just beginning what’s been called “[the greatest online product launch since gmail](https://www.rohitbhargava.com/2013/02/inside-the-greatest-online-product-launch-since-gmail.html?ref=blog.jsr.wtf)." But they had never launched a product on MongoDB before and they had a queue of users waiting in line to get access to their app. They had to figure out how to ramp up the scale of their platform from 0 to 100m messages per day in 1 month.  

I ended up spending a few hours a week with them for the next several months. I reviewed their schema design, queries, indexing, deployment design, backup deign, etc.. looking for all of the places where they might be missing something or doing something that wasn’t going to scale. I worked with them to create tested operational playbooks for how to scale up, backup/restore, and diagnose problems. For more about this feat, check out [David Barshow's talk from 2014 at MongoDB world](https://www.mongodb.com/presentations/mongodb-mailbox?ref=blog.jsr.wtf) about what they went through on that journey (also checkout [Make them famous](/make-them-famous/) for more on why talks like this were so powerful.

They did end up buying a subscription from MongoDB after Mailbox app took off. We ended up creating a new consulting product called “Launch control” based on our experience at Mailbox. It was a fixed price consulting style product where we had a formula for preparing for and executing a launch event on MongoDB. This was one of our most popular consulting products and often one of the first purchases a customer would make from MongoDB

<a id="multiple-applications"></a>

# Multiple applications

After that first application is successful within an enterprise, you’ll (hopefully) find other teams try to re-create that success. Your first team is your ally here because at this point hopefully you’ve built up some good trust with them and they’re going to let you know about these other teams that are popping up. You get an inside intro to that team and can send in your evangelists and solution architects to help those teams just as you helped the first one.  

At this stage what’s interesting is that you have a number of teams inside of the enterprise using your platform, but probably exists no central team sharing knowledge and best practices about your platform. During that stage YOU are that central organization. You’re the ones who are able to connect all of those internal teams. When a team tells you that they’re trying to figure out their backup strategy, you’re the one that shares how the previous team did it, what issues they ran into, and how to do it better the second time.  

Most companies at this phase would start to buy subscriptions from MongoDB. Our account reps could help pool all of the purchasing together across the teams in order to get better and better discounts for the enterprise. Our solution architects become experts in all of the different teams and use cases of our platform across the enterprise. They would organize tech talks with speakers from teams across the enterprise as well as MongoDB speakers. We would organize the community of users within that enterprise.  

At this phase you’re also starting to develop relationships with the executives of the application and operations departments since you’re involved in so many of their applications. You should be sharing back to these executives how your platform is being used, point out the successes and the growth.  

I remember a day I spent at a big financial services institution in NYC. In the morning we met with a team build a risk analytics platform. They proudly showed us a janitor’s closet that had a small rack of servers running MongoDB and explained that they had gone guerrilla and were running their app on MongoDB even tho it technically wasn’t supported. Later that day we met with the CIO of the company. He confidently declared that there was absolutely no MongoDB being used at his company. We shared with him story of the team we met this morning as well as about a dozen other teams that had figured out ways to adopt MongoDB. We closed a big deal that year.  

That CIO wasn’t some imbecile. He was actually a smart guy trying to do the right thing. But he was accustomed to enterprise vendors that sell top down. Oracle would show up there and call on him first. They’d try to get him to buy into a huge ELA so all of his teams could use Oracle. He would decide that Oracle seemed like a good choice and then buy it for his team. There was no way for his teams to start using Oracle without him signing a big check.  

But MongoDB was adopted bottom up. Nobody ever went to the CIO to sell him on MongoDB before his teams started using it. By the time we met with him, we didn’t need to convince him that MongoDB was good because we could point to multiple teams that were already successfully using it. We skipped past the “is this a good solution” discussion and jumped right into the “how do we make you more successful than you’ve already been?”

<a id="enterprise-standard"></a>

# Enterprise standard

At some point there’s so much use of your platform within an enterprise that it becomes chaotic. Each deployment is a snowflake, uniquely designed. One team figured out a really good backup / restore system. Another team figured out a slick integration with your identity infrastructure. But these innovations weren’t shared across teams. This is the point at which you centralize the platform.  

When central IT takes over, they can standardize how the platform is used. You create standard reference architectures, you build really great well tested backup strategies, monitoring systems, and operational playbooks to bring repeatability to new applications. You create a center of excellence that can help the rest of the organization be more productive. This is a big investment for the IT organization. But it’s generally worth its because you can accelerate future application projects by incorporating all of the lessons that  the previous teams have learned.  

At MongoDB we would help organizations create these centers of excellence. We’d train their central teams and provide technical account managers that were dedicated to support the customer. We’d help them implement MongoDB as a service with automated backup, monitoring and operations support tools. We’d assign customer success managers that would work to understand the customer’s goals with MongoDB and ensure that those goals were getting met.  

<a id="final-thoughts"></a>

# Final thoughts

Very few platforms will become enterprise standards. Entrenched enterprise vendors can sell top down to the CIO, but a startup or new platform is going to face an uphill battle trying to make this sale. Instead you can focus on bottoms up adoption, getting individual application teams to adopt your platform without any central IT support. By helping that team be successful and then encouraging other teams to repeat that success, you can work you way into the position of enterprise standard. By the time you meet with the CIO, the organization has already adopted your platform and you’re ready for a productive partnership discussion.  

To achieve this, you need to structure your customer engagement around this process. Think about what phase your customer is in and how you can best engage with them at that phase. Don't try to sell them the big central IT platform before they're ready.  
  
Photo by [Maryna Bohucharska](https://unsplash.com/@bohucharska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/sprouts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
