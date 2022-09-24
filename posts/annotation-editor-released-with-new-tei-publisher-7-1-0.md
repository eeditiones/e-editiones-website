---
title: "Annotation editor released with new TEI Publisher 7.1.0"
date: "2021-08-10"
categories: 
  - "tei-publisher"
tags: 
  - "annotations"
  - "release"
  - "tei"
coverImage: "ann-madrid.png"
---

Answering the secret dream of many TEI users, the new TEI Publisher version 7.1.0 incorporates a — beautifully simple to use, yet powerful — way to enrich existing TEI documents. Just select a text passage, click on a button and within seconds — and without a pointy bracket in sight! — mark it as one of many supported annotation types. A place or person? Sure, and with built-in connectors for external authority files, too. Critical apparatus entries? We got you! Dates, corrections, regularizations and even quick fixes for typos in your transcription.

As usual, everything is customizable and extendable, so if you want a particular kind of annotation we do not support out of the box, it's not difficult to add your own or tinker existing ones. Read more in the [documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?odd=docbook.odd&id=web-annotations).

The good news doesn't end there: you can now use the TEI formula element with TeX notation for math. See the component's [demo](https://unpkg.com/@teipublisher/pb-components@1.24.17/dist/api.html#pb-formula.1) page which presents some elaborate formulae or visit Publisher's Demo collection which now sports shiny new examples: _Euler's Algebra_ for a wee help with your quadratic equations or _The Italienische Madrigal_ by Alfred (not Albert!) Einstein, with musical scores encoded with MEI. It is nicely rendered with Verovio library through a dedicated pb-mei component and you can even listen to the piece to cheer up. And you can now set Publisher's interface even to simplified or traditional Chinese.

TEI Publisher 7.1.0 is available as an application package on top of the eXist XML Database. Install it into a recent eXist (5.0.0 or newer) by going to the dashboard and selecting TEI Publisher from the package manager.

For more information refer to the [documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?odd=docbook.odd) or visit the [homepage](https://teipublisher.com/exist/apps/tei-publisher/) to play around with it.

It's not for the first time that our special thanks go to the [Office of the Historian of the United States Department of State](https://history.state.gov/) - this time for funding the major portion of the annotation editor. The Math support has been kindly funded by [Bernoulli-Euler Zentrum](https://bez.unibas.ch/de/) in Basel.
