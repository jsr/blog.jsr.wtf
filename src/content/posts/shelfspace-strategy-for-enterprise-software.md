---
title: "Shelf space strategy for marketing developer tools"
slug: "shelfspace-strategy-for-enterprise-software"
date: "2019-06-09T08:06:48.000Z"
displayDate: "2019-06-09"
modified: "2019-06-21T02:43:46.000Z"
description: "How to get developers to find and use your open source developer tools"
tags: ["Open source strategy","MongoDB","Developer evangelism"]
image: "/media/a5185599e1f63151.jpg"
guid: "5cfcbc8c0cbb420038b93b75"
draft: false
---

When you build a new developer tool (a database, an AI/ML framework, a devops tool, etc...), you have to figure out how to make developers aware of it and start using it in their project. Traditional marketing techniques don’t really help. Literally zero developers saw your billboard on 101 during their commute or your keynote talk at Oracle open world and thought “I’ll use that distributed database in my thing at work”. But developers aren’t going to find your great new Thing on their own. You need to put it in front of their face somehow.    

At MongoDB, one of the techniques we used to market our software was based on what we called the “shelf space strategy”: any place software developers were building new applications, we wanted MongoDB to be there in front of them.  In this post I'll explain what this means and how we used it to market a new database to developers.

<a id="why-shelf-space"></a>

## **Why shelf space?**

"Shelf space" refers to the practice of retailers placing products on shelves in their stores. Imagine you run a supermarket and you’re designing the breakfast cereal aisle. Which cereals do you put on the shelf? How many of each kind? Which ones are at eye level vs bottom shelf?

There are many ways that retailers decide how to layout the shelves, but if you’re a cereal vendor, you care a lot about where your cereal sits on those shelves. To be a successful cereal vendor, you can’t just sit around and hope everybody carries your product; you need to wage an influence campaign and get your products placed.

<a id="your-software-is-the-cereal"></a>

## **Your software is the cereal**

As a software vendor, you’re the cereal maker. And the retailers are all of the places developer to go learn about building software today. If I’m a Spring developer developer building enterprise apps, does your software product show up anywhere in my day to day work? If it’s there, is it at eye level or is it buried in the basement. Your product isn’t going to be popular in the Spring community unless you're prominently placed there.  

At MongoDB we broke the “places” up into a few segments. First, there were communities and ecosystems aligned around languages. There is a Java community, a Python community, a Ruby community, etc.. Second, we looked at OS platforms like RHEL, Ubuntu, clouds like AWS and Azure or Kubernetes.  In each of those communities, we wanted MongoDB to be at eye level.

<a id="investment-1-have-really-great-language-bindings-for-your-software"></a>

## **Investment 1: Have really great language bindings for your software**

At MongoDB, this meant building really great drivers for each language we wanted to support. We couldn’t hope to be relevant in the Java community if we didn’t have a great Java SDK.  

Other NoSQL vendors were doing things like publishing a REST API specification and telling the developer to write or generate their own client. This wasn’t a good experience for the developer because there are often layers necessary on top of the REST API in order to use the system correctly and the developer would have to create those themselves. Others tried to hide their APIs behind some abstraction like JDBC or SQL or custom new data languages that would be secondary languages embedded inside the application's primary language.  

Actually writing an idiomatic Java driver was way better for Java developers. You could present the right abstractions. The driver had to be regularly maintained, have [great documentation](https://mongodb.github.io/mongo-java-driver?ref=blog.jsr.wtf), examples and tutorials, and be easy to integrate into a code base, including things like unit and integration tests.

<a id="investment-2-actually-integrate-those-language-bindings-with-the-platform-you-want-to-support"></a>

## **Investment 2 - Actually integrate those language bindings with the platform you want to support**

We couldn't just have a driver, you also need to integrate that driver into all of the ecosystem. In Java, could you use our driver with Jackson? With JBoss/Hibernate? With Spring? In each of these cases we invested in great integrations with those frameworks.  

Sometimes these were things that we’d maintain ourselves at MongoDB, others were built and maintained by the community. The important thing is that we can’t expect developers to need to create these integrations themselves. If I’m an enterprise developer building a new app, am I going to spend the time to build a new ORM for MongoDB for my new project, or am I just going to use an existing ORM on Postgres or MySQL? Even if you love MongoDB, it’s just not a rational choice to build the integration yourself. Chances are, that developer decided they were going to use JBoss before they knew about you, and they’re not going to drop JBoss just for your new, unproven database.    

In the case of Spring, we actively partnered with Springsource and worked with them to develop the first [Spring Data extensions for MongoDB](https://github.com/spring-projects/spring-data-mongodb?ref=blog.jsr.wtf). The end result is a well integrated driver for MongoDB built into Spring and described in Spring’s documentation. We had many such alliances at MongoDB.

<a id="investment-3-documentation-tutorials-and-communities"></a>

## **Investment 3 - Documentation, tutorials, and communities**

Investments 1 & 2 were all about making sure that what we had was actually "Cereal". The last thing you want to do is show up with a sack of ground beef on the Cereal shelf. In the open source community, this anti-pattern often manifests as a product pitch given by a marketing person at a developer conference, or going to a community of developers expecting an API and showing them a GUI driven tool instead.

Once you've got an idiomatic Java driver, and good quality integrations with each of the java frameworks, you need to get it to get it on the shelves.

It starts with our own documentation. Each language driver had great documentation that was versioned with the code. But in order to meet the developers where they are, we needed to get into other projects documentation. If you were at the Spring documentation site, we wanted you to see a section for how to use Spring with MongoDB.    

For many Spring developers, this is the way they discovered MongoDB. They weren’t looking for a new database, [but stumbled across it in the docs](https://spring.io/projects/spring-data-mongodb?ref=blog.jsr.wtf) and got interested enough to take it for a spin. Inclusion in the Spring documentation validates MongoDB and our integration with Spring. Imagine that you are trying to figure out if Spring and MongoDB work together so you start googling. In one scenario, you find some random website with lots of pop up ads that claims to have integrated Spring and MongoDB. In another option, you find that both Spring and MongoDB reference each other in their docs and provide help on how to get the integration working. Which would make you more likely to try out MongoDB?    

In addition to the docs, you need tons of "How to do _X_ with MongoDB" style content out in the world. Some we'd write in house, some we paid community members to write, and some were created by the community.

<a id="investment-4-amplify-the-market"></a>

## **Investment 4 - Amplify the market**

Once you've got your drivers, your integrations into a segment, documentation and how-to style content out there, you need to amplify it to get lots of people to see it. We did this by participating in the community.  

We went to all of the existing developer conferences. (Fun fact: I got hired at MongoDB largely as a result of my talk at RubyConf in 2010 about [how to use MongoDB to do event analytics](https://www.slideshare.net/jrosoff/scalable-event-analytics-with-mongodb-ruby-on-rails/45-Resultsbr_Version_1_of_our?ref=blog.jsr.wtf)). At events like pycon, and java one, you could expect to find representatives of MongoDB.  

We also created our own community event - MongoDB Days. MongoDB Days were 1 day events done all over the world that would be for local audiences (MongoDB day SF, Boston, London, etc..). At these events we'd invite community members to come speak. From these events, we were able to cultivate cohorts of compelling community personalities. We'd send the best speakers from those events to outside events like Pycon, or Java One, ensuring that the broader community was always seeing the best parts of the MongoDB community.  

We promoted these talks. We recorded them and put hundreds of them online. Beyond the MongoDB days, we sponsored hundreds of local Meetups, providing logistics, promotion and speakers. All of this served to drive more attention to the great developer centric content that was being created across our community.

<a id="shelf-space-for-developer-tools"></a>

## **Shelf space for developer tools**

All of these practices served to increase the shelf presence of MongoDB at these existing developer communities. Whether you were building in Java, C#, Python, PHP or any of the many supported languages, you would see MongoDB everywhere. You'd see it in the docs of all of the tools you were using, in the blogs about the platforms you were using, in the conferences that you attended.    

I meet a lot of developers tools startups who seem to think that having this shelf space presence is something that just happens because you wrote great software. You need to invest in it. I've described how we approached it at MongoDB, and your software or service may be very different; but I believe the core tenants are the same - you must build SDKs, integrations, documentation and community that are targeted at the market segments you hope to capture, and you need to measure the creation and use of that content to gauge whether you're making progress.  

This was a sizable investment at MongoDB. In the early years, as much as 50% of the engineering organization was focused on SDKs and integrations. We had dedicated evangelists, docs writers, alliance managers and community managers who worked together to drive all of this forward.  

It’s easy to look now and see MongoDB support mentioned prominently in all of the major platforms and software development frameworks. But this didn’t just happen on its own, we invested heavily in making it happen.  

What are you doing to grow the shelf space position of your developer tool?

Photo by [Franki Chamaki](https://unsplash.com/@franki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/cereal-shelf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
