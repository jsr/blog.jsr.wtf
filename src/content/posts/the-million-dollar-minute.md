---
title: "The million dollar minute"
slug: "the-million-dollar-minute"
date: "2019-06-18T08:17:13.000Z"
displayDate: "2019-06-18"
modified: "2019-06-19T05:58:23.000Z"
description: "Optimize the first 60 seconds of developers' experience with your product"
tags: ["Developer evangelism","MongoDB"]
image: "/media/a2a533a4af112a81.jpg"
guid: "5d088a962b766b0044758b3f"
draft: false
---

I heard this phrase from a friend at New Relic. "Developers form their opinion about your tool in the first 60 seconds of digging into it" she said. If they like what they see, they'll dig further and may become a successful user of your product. But if they hate it, they're  going to dismiss it forever. Not only will they skip over your product in the future, they'll also push back against colleagues who try to suggest it later. Your future revenue from the projects that developer works on will be decided in those first 60 seconds.

I'm not sure about the scientific accuracy of this claim, or whether 60 seconds is really a hard limit, but the spirit of it is absolutely correct.

If you've ever used New Relic, their attention to this idea is apparent. You can go from landing on their homepage to looking at charts about your applications performance in that first 60 seconds. I remember installing New Relic for the first time around 2010 and thinking it was magic.

We never called it by a cool name like New Relic did, but at MongoDB we tried hard to achieve that kind of experience. It required thinking through the whole deveoper journey; outside the product and in. Anything that's not core to understanding the product and what it does must be stripped away so new users get right to the core of what you do.

Here are some of the rules we followed to do this:

<a id="don-t-gate-downloads"></a>

## Don't gate downloads

Much debate was had between our sales team and our product team about capturing email addresses when people downloaded MongoDB. We never did it. The idea was that if even one user DIDN'T try MongoDB because of that email address form, then we were sacrificing growth and future revenue.

To the new user looking to try MongoDB, information is currency. As a developer looking to try out your product, I don't know you yet. I don't want to tell you my email address or anything else because I'm worried that I'm just signing up to be spammed by your marketing automation tool.

Users abandon their trial because of these forms. At this early stage, they're not sure they even want to use your tool. If you ask them for too much information they're either going to bail and never try your tool, or they're going to give you fake information.

Filling out this form takes time too that takes away from that million dollar minute. The clock is ticking by the time the user's at your form. Would you rather they spend the next 20 seconds learning how to query documents or giving you their hotmail email address they never read?

<a id="all-of-the-installers"></a>

## All of the installers

For the love of god don't make me compile your software from source to try it out. Give me an easy way to install it on whatever platform I'm using. Ideally, fit into some or all of the package management systems I use. If I'm going to need dependencies or scripts to make it work with my init system then provide those too.

The user is going to have some way that they are familiar installing new software and they're going to try that first. If it works, then they move onto the next step in your getting started guide. But if it doesn't work, then they have to do work. Maybe they need to search your website an find some alternate install instructions that work. Or maybe they need to build from source (yikes!). This all takes time tho. How much of your million dollar minute wasted trying to figure out how to instal?

The best experience is to have it work with the first thing they try. At MongoDB we built binaries for every target host OS and maintained the most popular installers in each of those platforms. Nobody should need to copy a binary from "Downloads" to some folder.

<a id="interactive-shell"></a>

## Interactive shell

The mongo shell is a Javascript REPL loop that lets you access the full capabilities of MongoDB. Your first experience is spent writing javascript interactively in this shell. Within a few seconds you could insert documents, run queries, build indexes, etc. And since it was Javascript, you could also write simple loops and programs that interacted with the database right in the shell.

If you're building a developer tool, chances are the primary mode of interaction is a custom program written by the developer. But this is hard to do in 60 seconds. You need to write out a hello world source file, figure out includes, get it to compile, run it. All take way longer than 60 seconds. Leave that kind of more in-depth experience for the second step the user takes, not the first.

<a id="no-knobs-and-sensible-defaults"></a>

## No knobs and sensible defaults

Oracle database has 10,000s of configuration options. Many databases require you to create a config file with a bunch of settings before the database will even start. Whether captured in a configuration file or passed as command line arguments, every one of these options is a stumbling block for the user. They need to read your docs to figure out what to set it to. They might set it wrong and have trouble starting it up.

At MongoDB we worked hard to ensure that you could just start `mongod` without any options and it would work sensibly. This meant that you could download it and start it up without looking at the docs. Of course in real deployments you'd probably need to build a config file and make more choices, but that should be complexity you deal with later, not when you're first trying it out.

We also had a "no knobs" policy. Things like buffer sizes, thread pool sizes, timeouts, etc... were avoided. If you were building a feature that required a knob, a design review was called and you had to try to find a way to remove the knob. Can the system pick a value automatically? Is there a different algorithm that requires less configuration? If the knob absolutely must exist, then can you make it have a sensible default value so users don't need to tweak it?

During the million dollar minute, all of these configuration settings and knobs are noise that distract from trying your tool. Remove them.

<a id="guided-tutorials"></a>

## Guided tutorials

Help the user accomplish something on their first run with your product. Many getting started guides get you through starting up the system, but then they stop dead.

Check out MongoDB's [getting started guide](https://docs.mongodb.com/manual/tutorial/getting-started/?ref=blog.jsr.wtf). It walks you through inserting documents and then different ways of querying those documents. The guide actually inserts sample data so that those queries return real results. You can easily see how a user can get through this guide in less than a minute in the interactive shell. And when they complete the tutorial not only have they installed MongoDB, they've also started to see what it's like to work with a Document database.

<a id="final-thoughts"></a>

## Final thoughts

Take a look at the first 60 second experience users have with your product and eliminate all of the friction. Get rid of that "configuring aws s3 security policies" from your getting started guide. That stuff is useful but it will come after the developer decides they like your tool. Change your getting started guide to a flow that is more self-contained and achievable quickly.

Remember that this first 60 seconds is all about setting an impression of what it's going to be like to use your product. They're not trying to build a full application with this first experience - just get a sense for what your product is. They need to leave with enough experience with your product to be able to recognize good use cases for it in the future.  If you ruin that first experience, they're going to forget about you forever.

Photo by [Veri Ivanova](https://unsplash.com/@veri_ivanova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@veri_ivanova?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
