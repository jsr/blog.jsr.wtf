---
title: "k-Factor analysis of Developer Communities"
slug: "k-factor"
date: "2019-07-09T15:50:29.000Z"
displayDate: "2019-07-09"
modified: "2019-07-09T21:26:50.000Z"
description: "What we can learn from social media to grow a developer community?"
tags: ["Developer evangelism"]
image: "/media/31e2b92d87d429ba.jpg"
guid: "5d2432ce25065b00387ea0fa"
draft: false
---

[K-Factor](https://en.wikipedia.org/wiki/K-factor_\(marketing\)?ref=blog.jsr.wtf) is a technique used by social media applications to model the growth rate. In this post we'll look at how we can use K-Factor to reason about developer community growth and develop strategies that optimize that growth.

<a id="what-is-k-factor"></a>

# What is K-Factor

If you're not familiar with K-Factor, it has its origins in epidemiology and is used to describe the spread of a virus through a community. Formally, K-Factor is described as

`K = I*c`

Where

`I = the number of people a host comes in contact with while still infectious`  
`c = the probability that someone becomes infected on contact with a infected person`

There are three interesting conditions of K-Factor.

1.  If K-Factor is greater than 1, then the population is growing exponentially
2.  If K-Factor equals 1, then the population is neither growing nor shrinking
3.  If K-Factor is less than 1, then the population is shrinking exponentially

Here's a visual representation of those 3 conditions:

<figure class="kg-card kg-image-card"><img src="/media/bfea5c010d06d878.png" class="kg-image" alt="" loading="lazy"></figure>

Achieving a K-Factor greater than 1 is the key to growth. Whether you're trying to grow your user base or infect the world with a disease, the higher your K-Factor, the faster you're going to achieve your goal.

<a id="k-factor-in-social-media-marketing"></a>

# K-Factor in social media marketing

In a social media application, we can use K-Factor to model the growth of our user base. For example, let's say we're making an online photo sharing app. Our viral growth loop is powered by a "Share" feature in the app. A user can share photos with their friends, some of whom are not currently users of the app. We can set `I` to be the number of people a user shares a photo with and `c` to be the percentage of those users who click on that share and become a user of the app themselves.

Let's say we have a scenario where each new user sends 10 invites to friends and those invites have a 20% conversion rate.

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/media/31e97e18c1726a09.png" class="kg-image" alt="" loading="lazy"><figcaption>We're gonna be rich!</figcaption></figure>

But what if our conversion rate is worse than we thought, just 9% instead of 20%.

<figure class="kg-card kg-image-card kg-card-hascaption"><img src="/media/1deda89c7cea5f70.png" class="kg-image" alt="" loading="lazy"><figcaption>Time to find a new job</figcaption></figure>

When K=2, our app achieves exponential growth. New users invite more users who become users themselves. But when K-0.9, the model is not sustainable. Users invite their friends, but their friends don't start using the site and never send invites themselves. Eventually the network runs out of steam and everybody leaves.

Small differences in K have a dramatic outcome on growth. Let's compare 3 scenarios, where we have K-Factors of 1.1, 1.2 and 1.3

<figure class="kg-card kg-image-card"><img src="/media/8fd44ad5b08649a4.png" class="kg-image" alt="" loading="lazy"></figure>

A 20% change in K, leads to 6.8x more users after 10 time periods! Exponentials are great!

If you want to read more about K-Factor in social media, i recommend checking out some of these posts.

*   [Basic Overview of K Factor in Viral Growth Models for your Startup](https://medium.com/@adjblog/basic-overview-of-k-factor-in-viral-growth-models-for-your-startup-2ee641b04bfb?ref=blog.jsr.wtf) by Alexander Jarvis
*   [Lessons learned - Viral Marketing](https://www.forentrepreneurs.com/lessons-learnt-viral-marketing/?ref=blog.jsr.wtf) by David Skok

<a id="k-factor-in-developer-communities"></a>

# K-Factor in developer communities

Developer communities also have a K-Factor.

Our population is the set of people that are active members of the community. By "active member", we mean someone that is not just listening to others and using the software, but actually contributing back to the community. There are typically be far more "passive members" of the community that benefit from the project but don't actually contribute back.

`I` measures the number of contributions that occur by active members of the community. This includes things like code contributions, talks at conferences, people answering questions on line, mentions in blogs and social media, and conversations between co-workers.

`c` measures the probability that someone exposed to one of these interactions themselves becomes an active member of the community. Remember our strict definition of "active member" here means that we're not just interested in people becoming users of our project, we're interested in those that actively contribute back to the community.

Unlike social media applications, `I` and `c` are only partially observable. In our social media app, we can directly measure the invites that users send out. But in a developer community we don't get to keep track of all of the interactions that happen. We might not know about every conference talk, or how many people were in the audience. Similarly our conversion rate is not directly measurable. It's really hard to pinpoint the exact moment where someone becomes an "active member".

Developer communities also differ in the magnitude of these numbers. When a user gives a talk to 1000 audience members, that's a lot more interactions than sending 10 invites in a photo sharing app. And conversion is much lower; it takes only a small investment to sign up for the photo sharing app, but becoming an active contributor in a developer community requires much more effort and thus happens way less frequently. Furthermore the cycle time of the viral loop is much longer; the act of converting a passive member to an active member may take years instead of hours or days for a social media app.

As a hypothetical example, let's focus on conference talks. Assume that an Active Member of your community does 4 conference talks and that each of those talks is attended by an average of 300 users who are not already active members. This gives us `I = 1200`. Let's furthermore assume that of that audience for their talks, 0.1% of those users go on to join the community and become an active contributor.

`K-factor = 1200 * 0.1% = 1.2`

<figure class="kg-card kg-image-card"><img src="/media/9737f1b5f0f94129.png" class="kg-image" alt="" loading="lazy"></figure>

This is obviously a pretty simplistic example. There are lots of factors involved in someone becoming an active member of the community beyond seeing a talk. But undoubtedly, the talks and active members of the community influence whether people even WANT to become part of your community.

In the next section, we'll talk about why K-Factor provides a useful framework for strategically growing a developer community.

<a id="increase-the-number-of-interactions-in-your-community"></a>

# Increase the number of interactions in your community

You can boost the `I` component of your communities K-Factor by creating more opportunities for interactions. More conferences. More speakers. More talks. Larger audiences. These all increase I and thus raise your K-Factor.

In the case of a social media application, growth teams often focus on creating more viral loops. Can you get users to share 20 times instead of 10? You just doubled your K-Factor. In addition to sharing, you might add a "like" feature and a "comment" feature that generates further interactions between users.

In the case of a developer community you can break down `I` into different channels and then focus on optimizing each of those channels.

*   **Conference talks** - How many talks are happening about your software? Can you get talks into more conferences? Can you get more speakers to give more talks? Can you drive more attendees to these events?
*   **Contributors** - How many people are submitted pull requests to your project? Can you get more contributors? Can you get them to contribute more code?
*   **Social media** - How many tweets and blogs are created mentioning your software? Can you get more people talking about you? Can you get those posts in front of more eyeballs?
*   **Question & Answer** - How many questions about your software are asked and answered? Can you get more people to ask questions? Can you get more people answering questions? Can you help people find answers that have already been written?

<a id="increase-the-conversion-rate-to-active-members"></a>

# Increase the conversion rate to active members

You can boost the `c` component of your K-Factor by increasing the conversion rate to active members. Becoming an active member is a big investment on the part of your users, so you're going to need to make some real investments here to pull this number away from 0.

*   **Speaker recruiting** - Are you getting more of your users to talk about what they're doing? You should be scouting your user base for people with interesting stories to tell and actively booking them speaking gigs at available venues. I wrote about this previously in [Make them famous](/make-them-famous/).
*   **Quality control** \- Are you ensuring that the speakers out there in your community are of the highest quality? Most developers have a pretty low tolerance for bullshit. If your talks are just corporate shills hocking their products or lack interesting technical details then listeners are going to leave and go somewhere else
*   **New contributor experience** - Are you welcoming to new contributors? Do you help them get started, showing them easy first issues to try to tackle and providing them documentation and support throughout the process? The lower the bar you can make for contribution, the more people will try it out. The Kubernetes communtiy has a dedicated "[Contributor Experience SIG](https://github.com/kubernetes/community/tree/master/sig-contributor-experience?ref=blog.jsr.wtf)" that's focused on this.
*   **Perks** - What incentives do you create for becoming an active member of the community? Do you have swag? Do you have special programs that are for contributors only? Kubernetes' [contributor summit](https://github.com/kubernetes/community/tree/master/events/2018/12-contributor-summit?ref=blog.jsr.wtf), [MongoDB Masters](https://www.mongodb.com/community/masters?ref=blog.jsr.wtf), and [Microsoft's MVP program](https://mvp.microsoft.com/en-us/overview?ref=blog.jsr.wtf) are great examples of special perks for active members.

<a id="measuring-k-factor-in-developer-communities"></a>

# Measuring K-Factor in developer communities

Measuring K-Factor for developer communities is much harder than in a social media application. The viral loops happen outside of your product in the real world. But that doesn't mean it's not measurable.

You can build an Interactions dashboard that keeps track of various metrics about what's going on in your community. You definitely know what talks are happening at your own conferences and you probably have a pretty good idea of what talks are happening at external conferences. You can probably also figure out how many people were at those events and how many attended each of those talks. Some interactions like contributions to your code, Q&As, blog posts, tweets are directly measurable. You care both about how many of each of these kinds of interactions is happening as well as what the audience size is for each of them. It's useful to track all of these metrics on a dashboard and if you get really fancy you might try to derive some composite approximation of `I` based on them.

While you don't get to measure direct conversions, you probably have a pretty good idea of how many active community members you have and how many you had last quarter, allowing you to calculate growth. When you combine this with the audience you measured in your Interactions dashboard you can get a rough calculation of your conversion rate.  

<a id="final-thoughts"></a>

# Final thoughts

I talk to a lot of teams trying to build a developer community and many of them struggle to think strategically about this goal. You see lots of teams just blindly trying to "create content" without thinking much about what the highest impact efforts might be.

Developer communities are social systems and follow a lot of the same underlying mathematical rules as a social network. Viral marketing techniques popularized in social media applications provides an interesting lens to think strategically about your community, its health and growth. Social media application teams have provided a wealth of knowledge about these techniques and many of these playbooks can be applied or adapted to developer communities.

Just as viral marketing disrupted traditional marketing techniques for online applications, community is a fundamental disruption of enterprise software marketing. Driving high K-Factor in a community is a sure path to exponential growth of your community which leads to lower cost of customer acquisition and much more deeply engaged users.

While it can be difficult to directly measure K-Factor and optimize it to the degree that a social media application can, you can get a long way by simply being aware of K-Factor and consciously trying to do things that bump up the `I` and `c` coefficients.

Photo by [William Iven](https://unsplash.com/@firmbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@firmbee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
