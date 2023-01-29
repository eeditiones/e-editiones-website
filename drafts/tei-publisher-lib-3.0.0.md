---
title: "tei-publisher-lib 3.0.0: Print CSS and other new features"
short: tei-publisher-lib 3.0.0
lead: Besides other improvements and bug fixes, version 3.0.0 features a dedicated output mode to better support printing HTML using paged media CSS. It is not fully backwards compatible, so please make sure to read this article before upgrading!
author: Wolfgang Meier
date: 2023-01-27
tags:
    - announcements
    - tei-publisher
    - tei-publisher-lib
    - release
coverImage: 
coverImageCredits: 
---

TEI Publisher 8 will feature a simpler approach for creating print output using the Print CSS and CSS Paged Media standards. This supplements the existing FO and LaTeX output modes. While creating print output using FO or LaTeX requires quite some customization work in the ODD, CSS Paged Media extends the existing HTML view and CSS styles to layout the text on the printed page.

Though it has improved, browser support for CSS Paged Media is still lacking. However, there are tools to fill the gap. The starting point for my recent exploration into this technology was a new edition on the life of a saint. The editors requested a printout, which should resemble the future website as closely as possible. While LaTeX does provide all the fancy features needed (e.g. an aligned parallel layout of transcription and translation), the result would quickly diverge from the web version, thus not being suitable for a review process.

Looking into CSS Paged Media for rescue, I was surprised by what is already possible in the browser. The book has quite a complex layout, using different types of margin notes, text critical apparatus etc. Even though I could not realize every feature just within the browser and had to switch to an external tool, the results were satisfactory and would certainly be sufficient for a slightly simpler edition. We have thus decided to integrate this approach more tightly into TEI Publisher, providing a separate print preview page for some of the sample documents, as well as an API endpoint to retrieve the complete HTML of a document targeted at print.

The new print preview page includes a brilliant javascript library, [paged.js](https://pagedjs.org/), which fills many of the gaps in browsers concerning CSS Print support. Without this library, web browsers would ignore most parts of the page layout and just generate a very basic printout. 

Besides paged.js, which is open source and still under development, there's a variety of other tools you could try, including commercial options like PrinceXML or Antennahouse, offering all the features you expect for professional typesetting. Those are external tools you run on an HTML file or URL. TEI Publisher 8 will provide an API endpoint to which you can point to render a document into print-optimized HTML.

# New Print Output Mode in tei-publisher-lib


# Upgrading

We use ~semantic versioning~ for all TEI Publisher projects: a change in the first digit of the version number indicates a **breaking change**. You should be aware that such releases are not fully backwards compatible and may require adjustments to existing apps.

In previous versions, the output mode `print` was a synonym for `fo`. It generated XML output to be further processed by an XSL/FO engine like Apache fop. This has changed: `print` now refers to the Print CSS mode, which extends the `web` output mode. We thought this is a more natural fit and doesn't break backwards compatibility too much. This means: if you were previously generating output for an XSL/FO engine using the `print` output mode, you should now change this to `fo`.

