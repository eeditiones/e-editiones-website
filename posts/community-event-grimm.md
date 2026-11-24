---
title: "Grimm Tradalign – an alignment tool for multilingual corpora"
short: "Grimm Tradalign"
lead: "An alignment tool for multilingual corpora"
date: 2026-12-01
room: "https://teams.microsoft.com/meet/3329780233713608?p=OcYb82UfeFYn7gJLcU"
tags:
  - events
  - meetups
coverImage: Grimm_tradalign.png

---

Community meetup on [December 01, 2026 at 17:00 CET](https://www.timeanddate.com/worldclock/fixedtime.html?msg=e-editiones+community+event&iso=20261201T17&p1=1425&ah=1).


The [“Grimm Tradalign”](https://grimm.unil.ch/) ACR (Alliance Campus Rhodanien) project is a French-Swiss multidisciplinary venture involving scholars from Grenoble-Alpes University (UGA, France) and the University of Lausanne (UNIL, Switzerland). It aims at developing an alignment tool which leads to the online publication and detailed analysis of a multilingual corpus. The said corpus consists of tales by the Brothers Grimm and their nineteenth and twentieth century translations into French and English This tool is designed to be used with all corpora which require multi-alignment (cases where more than two languages are aligned).

The German-language Grimm tales corpus is highly suitable for developing and using alignment methods – especially as seven successive editions of the collection were published between 1812 and 1857, the date of the final version containing 201 texts. Most texts underwent significant changes (amplification, rewriting and so forth) through this process, besides being added into or cut from subsequent editions. The collection was translated into French eight times in the nineteenth century – with each translation offering a selection of tales – and was translated into English at least as many times during the same period. The ACR project focuses on the ten tales which were most translated into French during the nineteenth century and which are the most representative of the collection. Subsequently, the website will continue adding tales. It will also include English translations, as well as translations into other languages.

In this community meeting, we will present the genesis and development of the project. We will focus on our workflow. We first developed a processing pipeline to convert the verified transcriptions of the texts in docx format into TEI XML, with metadata used to populate the TEI headers imported from an xlsx spreadsheet. In a second step, for each document, we performed pairwise alignments with a pivot version. The alignment was carried out using AIlign, an alignment tool based on multilingual embeddings — in this case, the LaBSE model — to identify semantic similarities between sentences or groups of sentences. Finally, we designed a multi-parallel corpus query interface, [Grimm Tradalign](https://grimm.unil.ch/), implemented using the [TEI Publisher](https://teipublisher.org) framework. In parallel, we developed a web interface to manage the import of collections and documents, and to launch the processing pipelines for individual documents with parallel versions. This interface, called Parataxe, also allows users, in its current version, to explore aligned texts through a multi-column display.

[Grimm Tradalign](https://grimm.unil.ch/) is still an active project. All contributions, advice, and collaboration are warmly welcome, whether regarding the Grimm corpus or concerning the implementation for other corpora.