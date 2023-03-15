---
title: "TEI Publisher 5.0.0"
short: TEI Publisher 5.0.0
lead:  Version 5.0.0 of TEI Publisher has been released
author: Wolfgang Meier
date: 2019-08-02
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> This is major release building on the faceting feature added in eXist-db
> 5.0.0 RC8 and introducing Word document import and draft coverage of DTS
> API.

## Release Highlights: Facets

Facets allow users to quickly navigate through a result set by selecting
from the list of predefined categories. This way, users can drill down
into the set, reducing the number of displayed items with every step. As
the user chooses a facet, the set necessarily becomes smaller, so
non-matching entries will disappear from sight.

Facets are a new feature in eXist 5.0.0. They are *super fast* because
eXist will create them when indexing the document. No extra computation
is needed when the user clicks on a facet to drill down into a displayed
set: all information is already available in the index. By default TEI
Publisher configures two facets: *Genre* and *Language* while [Van Gogh
demo](https://teipublisher.com/exist/apps/vangogh/index.html) presents a
more elaborate example of facets in action.

## Van Gogh demo

![](/img/VanGoghFacets.png)

The [Van Gogh edition](http://vangoghletters.org/vg/) is often
considered a model example for correspondence. Following the recent
release of XML sources for all the letters we've decided to use this
excellent resource to showcase the new faceting feature of eXist 5.0.0
as well as the dynamic, user configurable, multi column display of the
original Van Gogh website using the webcomponents provided by TEI
Publisher in a playful styling.

## DOCX import

New docx module based on custom ODD for docx to TEI transformation is
available to allow for importing documents in docx format, preserving
their textual content, structure and basic semantics of the text. Due to
the particularities of docx, reconstructing logical document structure
can be only based on certain heuristics but TEI Publisher preserves
basic document divisions and headings, lists, tables, embedded images,
foot- and endnotes, as well as recognizing styles whose names start with
`tei:` as TEI elements with the same name, e.g *Johann Wolfgang Goethe*
styled with `tei:persName` style will be converted to `<persName>Johann
Wolfgang Goethe</persName>`.

## DTS API

TEI Publisher now implements a [Distributed Text
Services](https://distributed-text-services.github.io/specifications/)
client and exposes core endpoints of DTS API. Custom `<dts-client>`
component allows for browsing remote DTS server collections and
documents which are rendered via TEI Publisher's ODD.

![](/img/dts.png)

## Main New Features and Bug Fixes

- Facets based document filtering

- DOCX (Word) document format import

- Draft implementation of the DTS API

- New pb-toggle-feature UI component for switching between two states of
  a parameter passed to ODD, e.g. normalized and diplomatic view

- Coverage for embedding TEI Publisher output components in other
  websites (e.g. WordPress)

- Remove dependency on monex and calls to deprecated map functions

- i18n: Performance improvements, support for multiple catalogue files
  for a single language, Dutch translation

- Fix DocBook support for generated apps

- Simplify login configuration

- Use new field definitions for metadata in index config

- Support page breaks in non-TEI vocabularies

## Get It!

TEI Publisher 5.0.0 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
eXist (5.0.0 RC8 or newer) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://teipublisher.com) to play around with
it.

## Thanks

Our thanks go to [Office of the Historian of the United States
Department of State](https://history.state.gov) for funding a large part
of work on the faceting feature for eXist-db.

We are also grateful to the Van Gogh Museum & Huygens ING for releasing
[XML source files of Vincent Van Gogh
letters](http://vangoghletters.org/vg/about_6.html#intro.VI.6.4.) under
an open licence which allowed us to use this data as our demo samples.
Same goes for [EEBO-TCP](https://github.com/textcreationpartnership) and
[Bodleian First Folio](https://firstfolio.bodleian.ox.ac.uk), already
protagonists of TEI Publisher demos for a longer time.

