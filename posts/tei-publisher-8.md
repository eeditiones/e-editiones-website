---
title: TEI Publisher 8.0.0
date: 2023-03-28
short: TEI Publisher 8.0.0
lead: "Version 8: central URL registry, print CSS, named entity recognition and more"
author: Wolfgang Meier
tags:
  - draft
  - announcements
  - tei-publisher
  - release
coverImage: publisher8.jpg
coverImageCredits: null
---
> TEI Publisher 8 introduces a central URL registry, print CSS, named entity recognition, and more. 

![](/img/publisher8-big.jpg)

## Browser history, bookmarkable URLs

The newest release of TEI Publisher involved major redesigns in the libraries used. Perhaps the biggest change – though not immediately visible – took place in web components: from the start we tried to create each component as independent, monadic entity, communicating with other components only through signals. This results in great flexibility as you can recombine and reuse components all over the place, but it also turns pages into a beehive, without a central coordination center. This is in particular problematic when we look at the navigation aspect: to put it simply, users expect that

1. bookmarking a page and reloading it later will result in the same display
2. using the browser history back and forth navigation properly restores previous state

Previously each component would handle its own state, sometimes reacting to parameters and browser history events, sometimes not. The new 2.x.x series of components introduces a central state management, which each component uses as single source of information about the current state. Combined with the  flexibility of server-side URL handling via the Open API, this ﻿solution gives us more informative and bookmarkable URLs. 

Please note that we follow a semantic versioning scheme: an i﻿ncrease in the major version number indicates a breaking c﻿hange, i.e. not backwards compatible version. While m﻿ajority of web components will work as before, some may need special attention (in particular `pb-facs-link` in combination with `pb-facsimile`, see below).

## Paged Media CSS

Breaking changes also occurred in TEI Publisher's core library, `tei-publisher-lib`. The main reason being the added support for Print CSS as a new output mode. Print CSS – officially called *Paged Media CSS* – represents an option to generate good looking printouts using just HTML and CSS. While browser support is still incomplete, there are tools to fill the gap, making it possible to produce high-quality print output. TEI Publisher 8 provides out-of-the-box interfaces for these tools. Details have already been covered in a community meetup, so please refer to the e-editiones blog for [detailed information](https://www.e-editiones.org/posts/print-css/).

<figure>
    <img src="/img/tei-publisher-docs-printcss.png">
    <figcaption>Two pages from the TEI Publisher documentation rendered with paged.js</figcaption>
</figure>

`tei-publisher-lib` 3.0.0 also introduces two new extensions to the processing model, namely *processing modes* and *parameter setting*. Read more about this in the [separate announcement](https://www.e-editiones.org/posts/tei-publisher-lib-3/).

## Named entity recognition

Thanks to another new library we created, TEI Publisher's web annotation editor now also includes experimental support for *detecting and tagging named entities in texts*. Even better, training your own model is tightly integrated with TEI Publisher: it will directly generate training data from already annotated TEI texts.

![NER in action](/img/wikipedia.gif)

Please note that this feature requires an external service. If you would like to give it a try, please consult the [corresponding article](https://www.e-editiones.org/posts/names-sell-named-entity-recognition-in-tei-publisher/).

## Redesigned start page

The TEI Publisher application itself shows a bunch of new examples and a redesigned start page, which blurs the boundary between browsing and search. The HTML behind the page got more modular, allowing editions to better mix and match features in the way which best fits the material presented.

![New start page with integrated search](/img/publisher8-start.jpg)

## JATS as first class citizen

Finally, JATS (the Journal Publishing Tag Library) joins TEI and Docbook as a fully supported XML format. This means you may not only view JATS documents, but also browse and search them.

## Compatibility and Upgrading

Due to the breaking changes in associated libraries, updating a custom edition generated with TEI Publisher 7 to 8 requires several manual steps. While the list may look rather long, they are not very complex and can be applied quickly if you follow the [instructions](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml#upgrade7-8).

Other particular changes to pay attention to:

* The behaviour of the `pb-facsimile` and `pb-facs-link` webcomponents has changed: `pb-facs-link` must now emit to the event channel `pb-facsimile` is listening to. Previously emitting to the default channel was enough. You should thus change all `pb-facs-link` elements generated by your ODD to include an `@emit` attribute targetting the correct channel.
* `tei-publisher-lib` 3.x.x reassigns the `print` output mode to generate HTML output targeted at print. In older version `print` was defined as an alias for `fo`. You may therefore have to change your ODDs if you used the fo mode. A more elaborate explanation of the changes is presented in this [e-editiones article](https://www.e-editiones.org/posts/tei-publisher-lib-3/).