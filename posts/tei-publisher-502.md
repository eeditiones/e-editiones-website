---
title: "TEI Publisher 5.0.2"
short: TEI Publisher 5.0.2
lead:  Version 5.0.2 of TEI Publisher has been released
author: Wolfgang Meier
date: 2020-01-25
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> This is a minor release introducing primarily new features of Word
> document import along some bugfixes.

## Release Highlights: Word document import

Docx module introduced in 5.0.0 allows for importing documents in docx
format, preserving their textual content, structure and basic semantics
of the text. TEI Publisher preserves document's structural divisions and
headings, lists, tables, embedded images, foot- and endnotes, as well as
recognizes styles whose names start with tei: as TEI elements with the
same name, e.g *Johann Wolfgang Goethe* styled with `tei:persName` style
will be converted to `<persName>Johann Wolfgang Goethe</persName>`.

This release introduces a default convention for encoding additional
attributes: text in angle brackets will be interpreted as a list of
attribute-value pairs. Multiple items can be separated with a “;”. For
example, to set a `@rend` and provide a `@ref` for a `placeName`, you can
write `Frankfurt<rend=smallcaps;ref=Frankfurt am Main>`. This notation
can be modified by extending the ODD with additional rules for
project-specific workflow. For example, if persName does always need a
`@ref` attribute in your edition, you could have a simplified rule which
parses: `Friedrich Dürrenmatt<118527908>`.

Further conventions have been introduced to distinguish between
different kinds of notes (e.g. editor's commentary, source annotations,
and text-critical notes). Footnotes marked with a custom mark (to be
found under *Format* \> *Custom Mark* in Word's *Footnote Dialog*) are
converted into note `n="custom mark" type="original"`.

Yet another mechanism, based on Word comments, can be leveraged to mark
arbitrary spans of text. Word comments insert a start and end marker,
which can be easily converted to TEI using `anchor` and `note` element
combination and output accordingly later.

Please refer to the sample Word conversion document for detailed
discussion of the import features and conventions.

## Historical dictionary example: Bogactwa mowy polskiej

On a mission to provide a rich spectrum of examples showcasing different
uses of TEI we're adding a small sample for a genre so far unrepresented
in TEI Publisher - a 19th century manuscript collocative dictionary of
Polish _Bogactwa mowy polskiej_ (_Riches of the Polish tongue_) by Alojzy
Osiński, edited by Ewa Rudnicka.

This example features a transcription and facsimile parallel view with
regions of interest highlighted in the facsimile panel thanks to the use
of `pb-facs-link` component.

![](/img/osinski.jpg)

## Main New Features and Bug Fixes

- DOCX (Word) document format import

- Examples: Word import sample and historical dictionary sample

- Fixes related to user login

- `pb-popover`: fix spacing

- `pb-view`: scroll to target element if an id is given in the URLs hash

## Get It!

TEI Publisher 5.0.2 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
eXist (5.0.0 or newer) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://teipublisher.com) to play around with
it.

