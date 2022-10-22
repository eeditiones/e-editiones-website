---
title: "TEI Publisher 6"
lead: "New features and redesigned web components"
date: "2020-07-10"
categories: 
  - "tei-publisher"
tags: 
  - "mei"
  - "pb-component"
  - "release"
coverImage: "clem-onojeghuo-H-82Nbe8m7o-unsplash.jpg"
---

Today the new TEI Publisher 6.0.0 is finally out. This is a major release introducing the refactored and extended component library as well as numerous bugfixes and new features.

![Photo by <a href="https://unsplash.com/@clemono?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Clem Onojeghuo</a> on <a href="https://unsplash.com/s/photos/six?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Unsplash</a>](/img/clem-onojeghuo-H-82Nbe8m7o-unsplash.jpg)
All Publisher's web components are now available as a LitElement library distributed via npm. While invisible to users, this redesign greatly improves modularity and simplifies updates of Publisher-based applications. It also facilitates embedding of Publisher custom components into CMS systems (e.g. Hugo or WordPress) and other application frameworks (like angular, vue or react).

This version also brings extended internationalization and full localization into 19 languages, simplified styling, support for data organization based on subcollections, several new and enhanced components (including one for [notated music](https://unpkg.com/@teipublisher/pb-components@1.0.0/dist/api.html#pb-mei.1 "notated music") encoded in MEI), improved ODD editor and major extension and revision of the documentation.

![Demo page of the pb-mei component](/img/mei-demo-1024x523.png)

More information about this release can be found on the [TEI Publisher blog.](https://teipublisher.com/exist/apps/tei-publisher/doc/blog/tei-publisher-60.xml " TEI Publisher blog.")

A 3-part online course on TEI Publisher 6 has been led by Wolfgang Meier in June 2020. Video recordings of all the sessions, and a walk-through for the assignments are available for [self-study](https://github.com/eeditiones/workshop "self-study").

Our special thanks for supporting this release go to:

- Numerous community members who helped to translate and proofread language files via [Crowdin](https://crwd.in/tei-publisher "Crowdin")
- Swiss Nationale Infrastruktur für Editionen - Infrastructure nationale pour les éditions for funding a large part of work on the web component refactoring.
- ACE – Austrian Corpora and Editions of the Österreichische Akademie der Wissenschaften for a small grant to enhance toggling mechanisms
