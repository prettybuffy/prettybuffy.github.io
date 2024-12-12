---
layout: page
title: Typing Indicators
description: Increasing Social Presence in Messaging
importance: 1
category: code
related_publications: true
---

Read full paper at {% cite iftikhar2023together%}! The code is [open source](https://npmjs.com/package/live-typing) and available as an [npm package](https://npmjs.com/package/live-typing)!

> Imagine being able to see the words appear as someone types, giving you a sense of where the conversation is heading and reducing the uncertainty that often comes with messaging.

### The Limitations of Messaging

Have you ever found yourself anxiously waiting for a response, unsure of what the other person is typing? The absence of immediate feedback, tone, facial expressions, and other non-verbal cues can sometimes hinder effective text-based communication. Hence, despite the convenient nature of messaging platforms, there has been a rising anxiousness around the <em> `...` </em> or <em> Zainab is typing </em>. This anxiousness can be attributed to the low richness associated with messaging.

In the 1980s, Daft and Lengel posed a Media Richness Theory stating that the effectiveness of communication is influenced by the richness of the medium used since different mediums vary in their ability to convey information, and certain media, such as face to face, are more effective for conveying complex messages. To compensate for the leanness of the text, people use multiple approaches. For instance, repetitive letters can convey emphasis <em>(sooooooo?)</em>, while punctuation can show excitement or anger <em>(no way!!!!!!)</em>. These approaches are known as paralinguistic cues. Apart from that, there's a rise in emojis and stickers for emotional disclosure. However, such approaches still lack social presence, calling for system-driven approaches like typing indicators and awareness mechanisms. Effective as they may be, awareness mechanisms lack synchronous communication and can often miss the "in-between" during message composition.

<hr>

### Research & Development

To enhance users’ perceived social presence, is-typing indicator was introduced in instant messaging (IM) applications to support awareness of co-presence in real-time. The indicator, which shows three moving dots (…) or displays the message Person A is typing was implemented for CMC systems to facilitate awareness by providing cues that the other person is typing. However, users can feel stresses and anxious while waiting for a message response and seeing three dots (…) for an extended period of time!

In this research project, we design a new interface that displays message as the user is writing it. That is, all messages would be shown [in real time]!! Real-time text (RTT) is text transmitted instantly as it is typed or created. Recipients can immediately read the message while it is being written, without waiting. RTT, or real-time text, sends text messages immediately as you type them, without requiring users to hit send.


<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://github-production-user-asset-6210df.s3.amazonaws.com/23429685/251516669-db1e3784-f4bf-4277-8443-c80a458a6df5.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241212T162447Z&X-Amz-Expires=300&X-Amz-Signature=ed37f25b14b7a46fd1ed892d6b4d2bc6d26764b5ff91c238cd2b772989fdc351&X-Amz-SignedHeaders=host" allowfullscreen></iframe>

<hr>

### User Study

The findings of the user study (N=24) showed that more expressive typing indicators were perceived as "rich in communication" by users. The visibility of text being typed in real-time allowed for a closer connection between individuals. By seeing the words form as they were being written, users could anticipate the direction of the conversation, making the interaction more engaging and meaningful. These indicators acted as a bridge to fill the void created by the absence of non-verbal cues, enabling users to establish a stronger connection with their conversation partners. Wouldn't it be reassuring to have a glimpse into the other person's thoughts and intentions while you're both engaged in a messaging conversation?

Another notable outcome of the study was the impact of rich typing indicators on users' perceived co-presence. Co-presence refers to the sense of being together with someone, even in a digital environment. The heightened co-presence of these typing indicators was reflective in multiple themes associated with real-time text visibility: for instance, the indicator was validating, encouraged active listening, and was highly communicative, fostering connection. Imagine feeling as if you were physically present with the other person, despite the physical distance.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Can typing indicators in messaging really improve communication? 📲👥 Our latest research suggests YES! 🙌🏼 We found that more expressive typing indicators help people communicate better, resulting in closer connections and increased perceived co-presence. 💬💕 <a href="https://twitter.com/hashtag/chi2023?src=hash&amp;ref_src=twsrc%5Etfw">#chi2023</a> <a href="https://t.co/220lvcDtjg">pic.twitter.com/220lvcDtjg</a></p>&mdash; Zainab Iftikhar (@ziftikha) <a href="https://twitter.com/ziftikha/status/1644528149970194433?ref_src=twsrc%5Etfw">April 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Participants stated that the heightened co-presence of the indicator would have been helpful in times when they felt **lonely** and **needed to connect for help**. These components are highly effective for therapeutic sessions, and there might be room for richer indicators to be embedded in text-based therapeutic communication. Our study is composed of a problem-solving scenario that can be reflective of a problem-solving therapeutic setting like CBT, where users are geared to think of negative events in a problem-solving way.