---
title: TEI Publisher 11
lead: Major workflow enhancements, smarter tools, and significant new features alongside comprehensive bug fixes.
author: Wolfgang Meier
date: 2026-09-15
tags:
  - announcements
  - tei-publisher
  - release
coverImage: mel-elias-uLdu-isetZM-unsplash.jpg
coverImageCredits: 'Image by <a href="https://unsplash.com/de/@cuartodeiibra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mel Elías</a> on <a href="https://unsplash.com/de/fotos/roter-feuerloscher-an-der-wand-montiert-uLdu-isetZM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
---

Version 11 of TEI Publisher puts the focus on numerous bug fixes and workflow improvements across the entire suite of tools and applications. That said, several new features also made the cut.

Despite a major version bump, it can be smoothly updated from TP 10 with Jinks. 

## Notable Changes

* __Search engine optimizations__: due to the dynamic nature of TEI Publisher, not all search engine robots would properly index the content. TP 11 now pre-renders the main content fragment of each page on the server. Web components can cope with this and won't load the content twice (_client-side hydration_). In combination with the **sitemap** profile, all pages get unique titles and canonical URLs, which should overall result in better search engine rankings ([read more](https://teipublisher.org/doc/documentation.xml?id=seo#seo)).
* __DTS 1.0__: TP 11 regains support for the [Distributed Text Services API](https://dtsapi.org/specifications/), now in the released 1.0 version. This is a complete rewrite of the experimental DTS support available in earlier versions, fully compliant with the specification. See the *DTS Demo* blueprint for an example of how you can use DTS with TEI Publisher.
* __JATS__ becomes a first class citizen. While TP 10 could already render JATS via ODD, the format is now also supported by the *web based annotation editor* as well as *Jinntap*.
* __JinnTap__ got a major facelift, [documentation](https://jinnelements.github.io/jinn-tap/), many bug fixes and general improvements. It now supports XML formats beyond TEI, namely JATS and Docbook.
* __New modern theme__: to demonstrate how to add your own theme, we created an additional design with a modern, more minimalistic look and feel. See the [Serafin correspondence blueprint](https://teipublisher.org/exist/apps/tp-serafin/browse-custom.html) for a showcase combining the theme with cleaner typography, parchment backgrounds and nice color scheme.
* A set of __skills and instructions__ is now included into every generated application. This helps coding agents like Claude, ChatGPT, Cursor and similar to properly understand the general workflow and – most important – observe best practice recommendations. The skills are mostly of the "don't do this stupid thing, look elsewhere instead" variety. They were extensively tested and should result in a much more pleasant and smoother conversation with your agent of choice – and fewer resources used ([read more](https://teipublisher.org/doc/documentation.xml?id=development-workflow-agents#development-workflow-agents)).
* Powerful __command line__: the [`jinks-cli`](https://eeditiones.github.io/jinks-cli/) command line tool has been extended and now provides all commands and switches to keep the file system copy of your application in sync with the database. Devs (and coding agents) love it ([read more](https://teipublisher.org/doc/documentation.xml?id=development-workflow-local#development-workflow-local)).
* __DOCX output mode__: `tei-publisher-lib` got a new output mode for generating DOCX files. While Word is obviously not a  match for TEI in scholarly work, a DOCX export can be useful, e.g. for editors to do a content review or to pass it on to manual typesetting.
* The web-based __annotation editor__ received a lot of bug fixes based on user feedback from various real-world edition projects. Most importantly, a serious problem with disappearing annotations caused by refresh delays was solved.
* __Default ODD__: `teipublisher.odd` was extented and revised for cross-compatibility with [Open Processing Model](https://opm.e-editiones.org/), and to provide better out-of-the-box experience for `epub` and `web`.
* __Pre-rendering__ for faster content load: the [Open Processing Model](https://opm.e-editiones.org/) command-line tool can pre-render a static version of your content. TEI Publisher is ready to use it and only falls back to dynamic rendering if no static copy is found ([read more](http://opm.e-editiones.org/guide/tei-publisher/)).
* [__ODDity__](https://open-vsx.org/extension/e-editiones/oddity): a new extension for Visual Studio Code-based IDEs (Cursor, Antigravity, Windsurf, Kiro …), providing a graphical editor for ODDs – similar to the web-based editor in TEI Publisher.

## Upgrading

Upgrades from TEI Publisher 10 should be smooth: just install the new jinks version via the dashboard. Before upgrading your app, make sure you stored a copy locally (download the .xar if your app is not in git). Then select and update your app by clicking `Apply` and check if any conflicts are reported that you may need to address.

**Note**: the presentation of demo apps like Serafin may look weird, which is caused by the base ODDs having changed. Running the `Fix ODDs` action once should fix this.
