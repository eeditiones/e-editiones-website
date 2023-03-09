---
title: "TEI Publisher 7.0.0"
short: TEI Publisher 7.0.0
lead:  Version 7.0.0 of TEI Publisher has been released
author: Wolfgang Meier
date: 2020-12-18
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> Version 7 of the TEI Publisher released with Open API and Markdown
> support along numerous other features and bugfixes.

## Release Highlight: Open API

Version 7 represents the logical next step on our mission to improve
interoperability, sustainability and long-term maintenance of editions
created with TEI Publisher. A major redesign to the server side allowed
us to expose a well-defined, clear [API specification](https://teipublisher.com/exist/apps/tei-publisher/api.html)
following the Open API standard. Integrated Swagger UI allows you to
visualize and interact with the API’s resources. Read more in [7.0.0
Release Candidate notice](tei-publisher-70).

The API can be easily extended to cover project-specific functionality.

![](../api-spec.png)

## Release Highlight: Markdown support

In addition to various XML vocabularies, like TEI or DocBook, you can
now use Markdown format. Markdown documents with `.md` extension will be
correctly rendered via [marked](https://marked.js.org/) library. This
feature is particularly useful for static content, like introductory
material or project news.

## Release Highlight: Flexible collection configuration

Previous versions of TEI Publisher allowed the view configuration to be
specified either on the app level, through default odd, template and
related variables in `modules/config.xqm`, or on the document level via
processing instructions. Current version extends the application
configuration mechanism in the `$config:collection-config` allowing for
specifying view parameters per collection or document with arbitrary
filtering expression (e.g. only documents in a certain language or of a
particular type) without the need to change documents themselves.

## Other Improvements

The webcomponent library saw a number of important bug fixes and
improvements. Despite the API changes, the library is fully backwards
compatible: it first checks which version of TEI Publisher is running on
the server and adjusts accordingly.

Among other things we improved the component handling file uploads,
introduced a way to navigate back to the parent collection of a document
being viewed, switched to xml:id based navigation where available, fixed
bugs in the visual ODD editor, the search component and many others.

Furthermore we have fixed some issues with DocBook configuration,
introduced more sensible defaults for indexing and sorting and
streamlined naming conventions of commonly customized modules. Support
for nested footnotes has been improved.

Publisher 7 is available in 20 languages and we'll be happy to
collaborate on extending the coverage for other, especially non-European
languages. Extended FAQ section has been moved to an [external
site](https://faq.teipublisher.com/), automatically generated from
markdown files stored in
[tei-publisher-faq](https://github.com/eeditiones/tei-publisher-faq/tree/master/content)
repository. Quick edits are possible via GitHub, all contributions are
welcome.

## Upgrading

While version 7 tries to ensure that future updates will become much
smoother, upgrading to 7 does still require a few manual steps, which
are described in the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?id=update6-7).

## Get It!

TEI Publisher 7.0.0 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
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

