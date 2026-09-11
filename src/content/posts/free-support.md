---
title: "Community support - how to help a growing community"
slug: "free-support"
date: "2019-06-24T08:30:00.000Z"
displayDate: "2019-06-24"
modified: "2019-06-24T16:40:47.000Z"
description: "How to provide technical support to a growing community of developers trying to use your platform."
tags: ["MongoDB","Developer evangelism","Open source strategy"]
image: "/media/d87502582127ca88.jpg"
guid: "5d034b8b2b766b0044758960"
draft: false
---

When MongoDB was getting started, there were lots of people trying to use our database and running into questions or problems. As discussed in my [previous post about getting apps to mission critical](/mission-critical-apps-make-successful-open-source-platforms), it was super important to us that these users got good quality answers to their questions.

We could have said: "read the docs" or "buy support from us", but that wouldn't have worked. None of those users were ready to buy anything from MongoDB (then 10gen). If we left them to solve their problems themselves, then it would take them longer to be successful. They might even give up on MongoDB and go back to another database.

We made the strategic decision to give away a ton of "free support" to help grow these initial users. The thought process was that the more people adopted MongoDB, the larger a market for our paid products we could create. If we had withheld support, we would have sacrificed growth in overall adoption, or slowed the growth over a longer time period. A trend you'll see in these stories about MongoDB is that over and over again we made the decision to open the flood gates on adoption and foster as large an install base as possible.

Besides helping users be successful, this free support was invaluable to the product development team because every engineer gained first hand experience dealing user problems. The feedback loop went straight into the engineering team rather than getting absorbed by a support organization or filtered by a product management team (we didn't even have a PM team until 4-5 years later).

Many OSS vendors today talk about their "community forum" as the place to get support for the free tier of the product. Let's talk about what we did to give free support to early adopters of MongoDB.

<a id="public-mongodb-user-google-group"></a>

## Public mongodb-user google group

The mongodb-user group has [10's of thousands of members today](https://groups.google.com/forum/?ref=blog.jsr.wtf#!aboutgroup/mongodb-user). In the early days of MongoDB, our entire company ruthlessly responded to every question that was asked on this group. This wasn't a dedicated support team; it was the core database engineering team answering the questions.

If you asked a question on the group, you could expect a response in minutes. Most of the responses came from Eliot Horowitz himself. Eliot (Co-counder & CTO of MongoDB) lead by example here. We ran a few competitions at the company where if someone could answer more questions than Eliot during a time period they'd win an iPad. I believe we gave out zero iPads.

The groups were fantastic because not only could we rapidly answer whatever questions our users were facing, but also the whole group was indexed and showed up in search engine results. Over time, as users ran into issues they were more and more likely to find an existing answer to their question in the groups. This meant when a user got some arcane error message like "[DR102 too much data written uncommitted](https://www.google.com/search?q=DR102+too+much+data+written+uncommitted&ref=blog.jsr.wtf)", they were more likely than not going to find a response with a detailed description about what that error meant.

<a id="-mongodb-irc-channel"></a>

## #mongodb IRC channel

My experience with this was 2010-2014 so it was years before Slack would come on the scene and IRC was the predominant way of doing real time chat. At any given time of day you could find at least a couple MongoDB engineers hanging out on our IRC channel. Anybody could show up and ask a question and chat live with our engineers.

This definitely didn't scale, but there were definitely a huge number of users who would come there to ask questions.

<a id="community-support-automation"></a>

## Community  support automation

As the volume of questions rose and the number of people responding to questions grew, we found that we needed to organize the question load. We were already using Jira for our commercial support practice, so we created a new community support Jira and wrote a crawler that automatically created issues for every question asked on the group. We re-used the issue routing system that our support teams used to assign community questions to engineers.

Before we implemented thi system, we would have lots of situations where multiple people would see a question on the google group and spend a lot of time crafting a response. They'd both post their response around the same time. At best this was a waste of time, since one of those people could have done something else while they were writing that response. At worst, the two responses might suggest conflicting courses of action and we'd have to spend time undoing it. When we moved to Jira it put clear responsibility for answers.

This system also let us capture more information about the SLA that we were delivering on the group. We could keep track of how many questions were asked, how long it took to respond, how the support load was spread across engineers.

We set goals internally to ensure that whenever someone asked a question they got a quality response within an hour. One hour. That's better than most enterprise vendors top tier of support. We did it for free. Of course we never advertised this, and as fast and correct as the responses were, our commercial support was even better.

<a id="crawl-stack-overflow-and-quora-for-questions"></a>

## Crawl Stack Overflow and Quora for questions

Once we had the issue tracking system, we extended it to include questions asked on Stack Overflow. Now when a SO question appeared, it was automatically put into our community support queue and assigned to an engineer to respond. We also crawled questions on Quora, but there were way fewer of them.

If you look through all of these forums it would appear that MongoDB had massive support organization watching for questions and answering them. The reality was that this was handled basically from the core database team along with some helpful tools and automations that made it more manageable.

In NO WAY was this scalable. In fact during the first few years, engineers complained at every team meeting about support load. As we ramped up a dedicated support team, they started offloading some of this work from the core engineering team, but it took years before our support support team could handle the bulk of commercial and community support load.

<a id="the-community-serves-itself"></a>

## The community serves itself

Over time, we found that more and more community members would respond to questions with answers. Sometimes these answers were great. Other times, not so much. As a MongoDB engineer assigned a groups question, you'd sometimes find that someone else from the community had answered it first. In this case, we would read through the response and make sure that they gave the right answer.

MongoDB's team started to become more like  quality control for answers. Around this time we put in place a sort of "code review" process for support issues. Across both communtiy and commercial support channels, we would assign engineers to read the thread of responses with a customer and score it. This helped both ensure that the quailty of answers that users got was good, as well as that our own support engineers were learning about how to do their job better.

This is a great place to be, and a real sign that you're building a successful community. If your community can answer its own questions without you doing it youreslf, then it frees you up to write more code.

<a id="with-community-comes-jerks"></a>

## With community comes "Jerks"

There were plenty of regulars across mongodb-user and #mongodb and most of them were awesome, smart and helpful people. But there were also some bad eggs.

For example, there was one person who would hang out on the group and IRC and would berate people asking questions; telling them that they were idiots or their questions were stupid. We would ban this person from the group, kick him from the irc, but he would show up with a different user name.

We reached out to him in person to talk to him constructively about different ways of treating people but he responded with vitriol. This was really tough to deal with, but it was important to fix because it ruined the experience for everybody else. I'm sure there are large numbers of would-be MongoDB users who ran into this person when they tried to get some help and it sent them running to another community (and another database).

Get rid of the Jerks.

<a id="our-own-biggest-competitor"></a>

## Our own biggest competitor

Our VP of Sales was fond of saying that MongoDB's greatest competitor was its own free support. Combined with a great product that was get getting better every release, our "free support" was too good and so why would anybody buy a Subscription whose primary value was support?

He wasn't wrong. I'm sure there were more than a few customers we decided that they didn't need to buy a Subscription from us because they got perfectly good support in the community.

But for every potential customer that didn't buy, we probably enabled 100s of other users to create new applications which resulted in dozens of new customers in later years. In a previous article I discussed how [mission critical apps make successful enterprise platforms](/mission-critical-apps-make-successful-open-source-platforms), and free support helped ensure that more applications were successful with MongoDB in less time, leading ultimately to more revenue for the company.

<a id="final-thoughts"></a>

## Final thoughts

Even though it was in [no way scalable](http://paulgraham.com/ds.html?ref=blog.jsr.wtf) , giving away great free support made a ton of sense. A whole generation of early adopters of MongoDB figured out how to be successful with an immature product by getting direct help from our engineering team. If we hadn't done this, far fewer of those users would have found success and the growth of the database would have been much slower. Our goal was to ensure that our users became experts as quickly as possible so they could create the next generation of mission critical applications on our database.

I left MongoDB more than 4 years ago, and I'm pretty sure the company makes nowhere near the level of investment in communtiy support that it once did. But with improvements in the product, more education out there, and a vibrant and helpful community in place, it's unlikely that such an investment is even required any more.

While we probably lost some early revenue opportunities, we ended up building a much larger install base and community that paid dividends in the future.
