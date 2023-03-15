---
title: "TEI Publisher 7.0.0 RC"
short: TEI Publisher 7.0.0 RC
lead:  Version 7.0.0 RC of TEI Publisher has been released
author: Wolfgang Meier
date: 2020-10-26
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> We're happy to announce the availability of version 7 of TEI Publisher
> as a release candidate.

## Release Highlight: Open API

Version 7 represents the logical next step on our mission to improve
interoperability, sustainability and long-term maintenance of editions
created with TEI Publisher. While version 6 addressed the client side by
extracting all webcomponents into a separate package, version 7 applies
a similar redesign to the server side:

1.  It exposes a well-defined, clear [API specification](../../api.html)
    following the Open API standard. Understanding how exactly TEI
    Publisher routes requests through the various layers was often
    challenging. With the new API we have a single, well-documented
    entry point to which you can also add your own functionality.

2.  Updating becomes much easier due to defined API versions, clear
    configuration and separation of concerns

3.  The API can be easily accessed by other software outside TEI
    Publisher or its webcomponents, say, for example, Python or R
    scripts

![](/img/api-spec.png)

The basis of this redesign is the new OAS-Router library, which reads a
service specification following the Open API standard and maps incoming
requests to the XQuery library implementing the actual functionality. By
using Open API we can benefit from a wide choice of tools and utilities
available for many programming languages.

Users can extend or modify the API by adding their own endpoints to
`custom-api.json`. Open API allows you to describe all the details of an
API call (i.e. parameters, response codes etc.), so your XQuery code can
concentrate on implementing the actual functionality without having to
bother with parameter or response types.

Furthermore, every API operation is independently tested against the
specification, to assure that e.g. parameter and response types
correspond exactly to the definition. For this our main Git repositories
now use a sophisticated setup for running automated tests.

## Other Improvements

The webcomponent library saw a number of important bug fixes and
improvements. Despite the API changes, the library is fully backwards
compatible: it first checks which version of TEI Publisher is running on
the server and adjusts accordingly.

Among other things we improved the component handling file uploads,
introduced a way to navigate back to the parent collection of a document
being viewed, fixed bugs in the visual ODD editor, the search component
and many others.

## Upgrading

While version 7 tries to ensure that future updates will become much
smoother, upgrading to 7 does still require a few manual steps, which
are described in the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?id=update6-7).

## Get It!

TEI Publisher 7.0.0 RC is available as an application package on top of
the [eXist XML Database](https://exist-db.org). Install it into a recent
eXist (5.0.0 or newer) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://teipublisher.com) to play around with
it.

## Thanks

Again our special thanks go to the [Swiss Nationale Infrastruktur für
Editionen - Infrastructure nationale pour les
éditions](https://www.nie-ine.ch/) for funding most of the redesign!

[
![](https://static.wixstatic.com/media/1b2bb4_a4d1727a7b92487cab792795839cfd5a~mv2_d_2362_2362_s_2.jpg/v1/crop/x_0,y_629,w_2362,h_964/fill/w_152,h_60,al_c,q_80,usm_0.66_1.00_0.01/1b2bb4_a4d1727a7b92487cab792795839cfd5a~mv2_d_2362_2362_s_2.webp)
](https://www.nie-ine.ch/)

The Open API implementation was inspired by earlier work funded by
[Early Chinese Periodicals Online](https://uni-heidelberg.de/ecpo)
(ECPO). A lot of bug fixes were supported by the [Sammlung
Schweizerischer Rechtsquellen](https://www.ssrq-sds-fds.ch/home/).

