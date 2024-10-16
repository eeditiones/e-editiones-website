---
title: "TEI Publisher 7.1.0"
short: TEI Publisher 7.1.0
lead:  Version 7.1.0 of TEI Publisher has been released
author: Wolfgang Meier
date: 2021-08-10
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> Version 7.1.0 of the TEI Publisher boasting in-browser annotations
> support along other features and bugfixes.

## Release Highlight: Annotations

Answering the secret dream of many TEI users this new TEI Publisher
version 7.1.0 incorporates a — beautifully simple to use, yet powerful —
way to enrich existing TEI documents. Users can just select a text
passage, click on a button and within seconds — and without a pointy
bracket in sight! — mark it as one of many supported annotation types. A
place or person? Sure, and with built-in connectors for external
authority files, too. Critical apparatus entries? We got you! Dates,
corrections, regularizations and even quick fixes for typos in your
transcription.

As usual, everything is customizable and extendable, so if you want a
particular kind of annotation we do not support out of the box, it's not
difficult to add your own or tinker existing ones. Read more in the
[documentation](https://tei-publisher.org/exist/apps/tei-publisher/doc/documentation.xml?id=web-annotations)

![](/img/ann-madrid.png)

## Release Highlight: support for mathematical formulae

You can now use the TEI formula element with TeX notation for
mathematical formulae, so something like

```xml
<formula notation="TeX">\frac{24}{20 - x}</formula>
```

can be nicely rendered in HTML thanks to the new `pb-formula` component.
See the component's [demo
page](https://unpkg.com/@teipublisher/pb-components@1.24.17/dist/api.html#pb-formula.1)
which presents some elaborate formulae.

![](/img/ann-euler.png)

## Other Improvements

The Demo collection has several new examples, most notably a Music
Encoding Initiative (MEI) example _The Italienische Madrigal_ by Alfred
(not Albert!) Einstein, with musical scores encoded with MEI music
notation. It is nicely rendered with Verovio library through a dedicated
`pb-mei` component and you can even listen to it. Other point of interest
is the Euler's Algebra with mathematic formulas rendered via `pb-formula`
component.

Publisher 7.1.0 is available in 21 languages, now proudly boasting both
simplified and traditional Chinese. We'll be happy to collaborate on
extending the coverage for other, especially non-European languages.

## Upgrading

Version 7.1.0 is fully compatible with 7 except for some minor changes
which are described in the
[documentation](https://tei-publisher.org/exist/apps/tei-publisher/doc/documentation.xml?id=upgrade7).

## Get It!

TEI Publisher 7.1.0 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
eXist (5.0.0 or newer) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://tei-publisher.org/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://tei-publisher.org) to play around with
it.

## Thanks

It's not for the first time that our special thanks go to the [Office of
the Historian of the United States Department of
State](https://history.state.gov/) - this time for spearheading and
funding the efforts which resulted in the annotation editor.

The Math support has been kindly funded by [Bernoulli-Euler Zentrum in
Basel](https://bez.unibas.ch/de/).

