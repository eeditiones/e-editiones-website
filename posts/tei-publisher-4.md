---
title: "TEI Publisher 4.0"
short: TEI Publisher 4
lead:  Version 4.0.0 of TEI Publisher has been released
author: Wolfgang Meier
date: 2018-12-20
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> eXist Solutions are proud to announce the final 4.0 release of TEI
> Publisher. This release is the next big step towards our vision of a
> tool which enables XML-savy scholars and editors to publish materials
> without becoming programmers or forcing them into a one-size-fits-it-all
> framework.

## TEI Publisher goes Web Components

Past projects we realized could prove that the [TEI Processing
Model](http://www.tei-c.org/release/doc/tei-p5-doc/de/html/TD.html#TDPM)
is indeed a truly universal and powerful tool for any kind of XML, not
just TEI. However, creating an online edition requires more than just
text transformation: the text needs to be embedded into an application
context, adding navigation, pagination, search, facsimiles and so on.
Moving towards the emerging web component standard, TEI Publisher 4.0
implements all this functionality as small "lego" blocks to be freely
arranged, recombined and extended.

Earlier versions of TEI Publisher were limited to showing a single text
view by default. Creating more complex layouts required at least basic
XQuery, HTML and CSS skills. As
[showcased](https://tei-publisher.org/exist/apps/tei-publisher/index.html)
by the example documents, the new version allows users to realize custom
views without actually writing code. Users can pick from a toolbox of
ready-made components, including text views based on an ODD
transformation, IIIF-powered image viewers, maps and many more. All
those building blocks come as custom HTML elements, which are easy to
write and configure. Each of them encapsulates a certain functionality
and appearance. Have a look at the
[documentation](https://tei-publisher.org/exist/apps/tei-publisher/doc/documentation.xml?id=webcomponents)
and the web components API to see how to use components.

## Open Source

We strongly believe in Open Source, standards and reusability. TEI
Publisher is a major milestone towards our vision, but there's always
more to be done and we would like to invite the community to contribute
ideas, goals and implementations. Missing a certain functionality or
component? Tell us.

## Get It!

TEI Publisher 4.0 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
eXist (4.x.x series) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://tei-publisher.org/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://tei-publisher.org) to play around with
it.

## Thanks

Our special thanks go to the erabbinica.org project for funding a major
part of the migration to web components.

