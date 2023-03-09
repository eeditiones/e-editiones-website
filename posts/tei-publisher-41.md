---
title: "TEI Publisher 4.1.0"
short: TEI Publisher 4.1.0
lead:  Version 4.1.0 of TEI Publisher has been released
author: Wolfgang Meier
date: 2019-02-21
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> This is mainly a bug fix release based on user feedback, but also
> includes various enhancements and features new demos.

## Release Highlights: Dynamic Layout and Custom Translation Alignment

Many users were interested in the correspondence examples, in particular
the Serafin and Cortés letters showing transcription and translation
side by side. We have focused on enhancing those use cases and close
some gaps in functionality. One problem arising in many TEI projects is
how to align two or more texts, e.g. a transcription and a translation.
In the simplest case, the texts may be aligned on the level of divisions
or page breaks. Unfortunately things are not always as simple as that.
TEI allows a wide variety of alignment mechanisms, some more complex
than others. TEI Publisher 4.1.0 thus implements a generic mechanism to
define a [mapping function](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml?id=alignment) written
in XQuery. This is a simple, yet powerful approach. The letter from
[Cortés to Dantiscus
(Mexico)](https://teipublisher.com/exist/apps/tei-publisher/test/cortes_to_dantiscus_Mexico.xml) showcases a rather
complex mapping.

## Van Gogh: Dynamic, Multi Column Example

![](/img/VanGogh.png)

The [Van Gogh edition](http://vangoghletters.org/vg/) is often
considered a model example for correspondence and several users
expressed their wish to create something similar with TEI Publisher.
With recent release of XML sources for all the letters we've decided to
use one letter from [Van Gogh to Gauguin](../../test/let695.xml) and try
to reproduce the dynamic, user configurable, multi column display of the
original Van Gogh website using the webcomponents provided by TEI
Publisher. The corresponding webcomponents (`<pb-grid>/<pb-panel>`) have been
reworked to make this possible.

## Other New Features and Bug Fixes

- Sort and filter documents by title, author or file name

- Autocomplete suggestions are now displayed for all search boxes

- Allow arbitrary footnote labels to be passed via the @n parameter of
  the note behaviour

- Support plain images to be displayed by `<pb-facsimile>` - if a IIIF
  server is not needed or available

- Fix uploads of files containing spaces in their names

## Get It!

TEI Publisher 4.1.0 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
eXist (4.x.x series) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://teipublisher.com) to play around with
it.

