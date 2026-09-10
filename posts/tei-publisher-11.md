---
title: TEI Publisher 11
lead: (optional) Descriptive short summary
author: Wolfgang Meier
date: 2026-10-09
tags:
  - announcements
  - tei-publisher
  - release
  - draft
---

# TEI Publisher 11

Version 11 of TEI Publisher puts the focus on numerous bug fixes and workflow improvements across the entire suite of tools and applications. We decided that it deserves a major version bump, even though it does not really include breaking changes. 

## Notable Changes

* __Search engine optimizations__: due to the dynamic nature of TEI Publisher, not all search engine robots would properly index the content. TP 11 now pre-renders the main content fragment of each page on the server. Web components notice this and won't load the content twice (_client-side hydration_). In combination with the **sitemap** profile, all pages get unique titles and canonical URLs, which should overall result in better search engine rankings.
* __DTS 1.0__: TP 11 regains support for the Distributed Text Services API, now in the final version 1.0. This is a complete rewrite of the experimental DTS support available in earlier versions and aims at full compliance with the specification. See the *DTS Demo* blueprint for an example of how you can use DTS with TEI Publisher.
* __JATS__ becomes a first class format. While TP 10 could already render JATS via ODD, the format is now also supported by the *web based annotation editor* as well as *Jinntap*.
* __JinnTap__ got a major facelift, [documentation](https://jinnelements.github.io/jinn-tap/), many bug fixes and general improvements. It now supports XML formats beyond TEI, namely JATS and Docbook.
* __New modern theme__: to demonstrate how to add your own theme, we created an additional design with a modern, more minimalistic look and feel. See the Serafin correspondence blueprint for a showcase combining the theme with cleaner typography, parchment backgrounds and nice color scheme.
* A set of __skills and instructions__ is now included into every generated application. This helps coding agents like Claude, GPT, Cursor and similar to properly understand the general workflow and – most important – observe best practice recommendations. The skills are mostly of the "don't do this stupid thing, look elsewhere instead" variety. They were extensively tested and should result in a much more pleasant and smoother conversation with your agent of choice.
* Powerful __command line__: the [`jinks-cli`](https://eeditiones.github.io/jinks-cli/) command line tool has been extended and now provides all commands and switches to keep the file system copy of your application in sync with the database. Coding agents love it.
* __DOCX output mode__: `tei-publisher-lib` got a new output mode for generating DOCX files. While we do not consider Word a proper match for a digital scholarly edition, a DOCX export can be useful, e.g. for editors to do a content review or to pass it on to manual typesetting.
* the web-based __annotation editor__ received a lot of bug fixes based on user feedback from various real-world edition projects. Most important, delays in refreshing the UI resulted in applied annotations suddenly disappearing if users were too quick etc. 