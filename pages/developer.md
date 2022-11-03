---
title: "Developers"
date: "2022-10-23"
eleventyNavigation:
    parent: Community
    key: For developers
sidebar: false
---
If you are a developer working with humanities scholars or in publishing, the following situation may be too familiar: you inherit an edition project, which has been running for years. Looking at the code, you are confronted with thousands of lines implementing TEI2HTML or TEI2PDF transformations. You need a week just to get a rough overview of the code repository and the various servers, services and libraries it seems to pull in.

![Photo by <a href="https://unsplash.com/@christinhumephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christin Hume</a> on <a href="https://unsplash.com/@christinhumephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>](/img/christin-hume-Hcfwew744z4-unsplash.jpg)

> why reinvent the wheel?

e-editiones was co-funded by developers who have been in this exact situation countless times. Rooted in ideas and standards which were born in the TEI community, we set out to create a flexible and sustainable ecosystem, which helps to establish coherence based on standards and best practices without limiting your freedom.

Editions created with our toolbox may look very different on the outside, but behind the scenes, the fundamental building blocks are always the same, allowing developers to jump between a dozen projects without getting lost. Today we may work with Chinese inscriptions, tomorrow we do a Greek dictionary. Some of the standards making this possible are:

* the **TEI Processing Model**: part of the TEI guidelines, the processing model implements a media-independent transformation language, all written in TEI. Replace a thousand lines of handwritten code with a hundred lines of TEI! And since it's all standardardised, it's meant to last.
* **Open API**: handles all the client-server communication through well-defined APIs, which you can easily extend
* **Web Components**: built into all modern web browsers, components work like small, monadic Lego blocks, which can be freely rearranged and moved around.

As a developer you may use the entire toolbox or just pick one of those parts while sticking to your preferred framework. It's up to you!

And while we love the TEI, our tools are not limited to it: they will work with any XML.