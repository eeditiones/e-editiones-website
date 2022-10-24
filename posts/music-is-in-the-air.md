---
title: "Music is in the air - MEI and TEI Publisher"
short: "Music is in the air"
lead: "MEI and TEI Publisher"
author: "Magdalena Turska"
date: "2020-07-23"
tags: 
  - "events"
  - "meetups"
coverImage: "marius-masalar-rPOmLGwai2w-unsplash.jpg"
---

On Wednesday, July 8th we had the opportunity to join another e-editiones online event, this time a session dedicated to MEI (Music Encoding Initiative). Giuliano Di Bacco and Dennis Ried introduced us to MEI and challenges of publishing MEI and MEI-in-TEI collections on the web ([see slides](https://e-editiones.org/wp-content/uploads/2020/07/MEI_4_GDB_DR.pdf)). Wolfgang Meier presented early results of his work on integration of MEI into the TEI Publisher.

![Photo by <a href="https://unsplash.com/@marius?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Marius Masalar</a> on <a href="https://unsplash.com/s/photos/music?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Unsplash</a>](/img/marius-masalar-rPOmLGwai2w-unsplash.jpg)
  
As we learned from Giuliano's and Dennis' introduction _MEI, like the TEI, is an umbrella term which simultaneously describes an organization, a research community, and a markup language_ ([music-encoding.org](https://music-encoding.org/about/)). It's almost 20 years since the first public presentation of the XML schema created by Perry Roland (Univ. of Virginia) for the representation of music notation. Now it has become a thriving community of around 400 members worldwide, specialists from various music research groups, including technologists, librarians, historians, and theorists.

This open-source effort to define guidelines for encoding musical documents in a machine-readable structure draws in many aspects on TEI: using an ODD metalanguage to define both the schema and encoding guidelines, dividing the document into metadata, facsimile and text parts, recording logical and structural divisions of the document (albeit named differently) or "borrowing" a number of element names from TEI to deal with metadata, textual content, critical apparatus, linking etc.

Nevertheless, MEI was designed to specialize in the encoding of music documents, therefore MEI data is predominantly about the meaning of the music notation: notes, rests, chords, measures. That said MEI allows for multiple additional layers of annotations:

- about the visual aspects of the notation, and/or of the features of a physical copy of a score
- metadata
- editorial markup

While MEI encoding allows for sophisticated analysis of various features of the musical piece, rendering of MEI documents often poses a substantial challenge. We need to consider that music notation is a very complex system; actually, many systems were developed since the medieval times, and MEI strives to give a sophisticated representation not only of the symbols but of their meaning and of the logic that brings them together in pieces of music of all ages. However, it is still difficult, if not impossible, to render graphically all the nuances of the encoding.

Major breakthrough in this respect has been the creation of the [Verovio](https://www.verovio.org) music engraving library which is considered the most advanced solution in the field to generate score visualisations in SVG.

Verovio is quite helpful to render the notation for the most common use cases for MEI:

- to create transcriptions/editions of music pieces
- to produce bibliographies and catalogs

Difficulties arise when we need to deal with mixed textual and musical content: from music treatises ([see Thesaurus Musicarum Latinarum](http://www.chmtl.indiana.edu/tml)), composers’ letters quoting musical phrases, to opera librettos and listening guides, papers including snippets of music notation (e.g. music textbooks)... Such situations often require the simultaneous use of both TEI and MEI (and for instance a MEI file can be referenced in a TEI document using the \`\` element). Giuliano and Dennis walked us through a number of different approaches employed in various projects, where tools specialized just for a single vocabulary do not meet their ideal criteria for broad application:

- ease of setting up
- TEI and MEI support
- facsimile integration

Following this cue, Wolfgang has demonstrated his new [pb-mei](https://unpkg.com/@teipublisher/pb-components@1.0.0/dist/api.html#pb-mei.0) web component which uses Verovio under the hood to generate SVG representation of the score. For TEI documents applying \`\` element to include a pointer to a MEI encoding of a music notation it is very straightforward to adjust the ODD to transform this pointer to a pb-mei component, as demonstrated in the [pb-mei](https://unpkg.com/@teipublisher/pb-components@1.0.0/dist/api.html#pb-mei.1) demo.

![Demo page of the pb-mei component](/img/mei-demo-1024x523.png)

This proved to be a very pleasant surprise and a convincing argument that TEI Publisher could be adapted to fit the needs of MEI community. A short discussion followed ranging from detailed questions on MEI encoding, through workflows on creating MEI sources [cf. Verovio editor](https://editor.verovio.org) to information important for preparing an ODD and customization modules for supporting MEI in TEI Publisher. We agreed to work with Giuliano and Dennis on including MEI-in-TEI and pure MEI examples in the next minor version of the TEI Publisher to demonstrate fully its capability.

We were happy to see that this event gathered the audience of around 17 participants and are looking forward to establishing a monthly meetup online to provide an arena for lively discussions on subjects of interest to the community. Please get in touch if you'd like to discuss a particular topic.
