---
title: Why Jinks?
short: 
lead: Jinks or TEI Publisher 10? How do I make my edition in 2025?
author: Magdalena Turska
date: 2025-09-13
tags:
    - release
    - tei
    - publishing
    
coverImage: Image to be used as cover, located in img folder
coverImageCredits: 
---

## Introduction

It's been a while since history supposedly ended, XML was hot, TEI wanted to rule the digital humanities and the world seemed generally a better place. Many things have changed but other remain pretty much the same, and among the latter we have the constant battle of scholars trying to tame the current technology. Luckily, they do not fight alone, with devs, analysts and standards organizations guarding the flanks and sending recon parties to scout what lies ahead.

Enough with the military lingo, where do we stand in 2025? With the 25th annual conference of TEI (and well past TEI-C's 40th birthday) and a decade after the first workshop on the TEI Processing Model and TEI Publisher in Lyon?

On the surface, this is a wonderful moment for humanities computing, where so much more is within our relatively easy reach than even just a decade ago and these opportunities are widely embraced in our community. On the other hand, it's even more unattainable than ever that scholars would have a solid overview of the ever fluctuating technological landscape around us, but, as always, they are still ultimately responsible for designing and orchestrating complex, collaborative workflows and have to directly face the short- and long-term consequences of their decisions.

TEI and e-editiones share not only generous community spirit, but also a belief that scholars need guidance and support in their endeavours without being forced into a singular, rigid style or method. TEI's success and decades of (sometimes painful) experiences in creating scholarly publications on its basis eventually led to the incorporation of the TEI Processing Model into the TEI Guidelines and birth of the TEI Publisher. Every subsequent incarnation of the TEI Publisher drew upon previous experiences and tried to abstract, generalize and modularize elements necessary to create, curate and publish scholarly material in a sustainable manner. This was only possible thanks to the dialogue and cooperation between developers, scholars and members of the community, who trusted the idea enough to give it a try, evaluate and improve the models in practice.

Already TEI Processing Model authors emphasized the 80/20 rule and insisted on "standardize when you can, customize when you must" approach. With TEI Publisher editions counting into the hundreds (probably small hundreds, but still) we can well notice the overlap. We can also easily observe the emerging consensus in how digital scholarly publications are presented to their readers - to the point that it's not always easy to guess the framework from the look and feel of the edition. Greater availability of encoding examples (where TEI Publisher's Demo collection and e-editiones acting as a hub for communities of practice play a not insignificant role) leads to the emergence of shared usus also in terms of TEI flavours and encoding tactics. With the growing number of publications based on the TEI Publisher framework we had a corpus of use cases and custom solutions to more and more editorial requests, many ported back to the Publisher's "core" but others not generalized enough to do so, therefore only serving as an inspiration, not an easy to copy blueprint for all. Assemblage and maintenance of a custom edition still involved not only critical evaluation of the subject matter and encoding, but significant technical fluency.

## Jinks application manager

Quite early on the "obvious" concept of having some sort of *ground control* or management center for publications created on the basis of the TEI Publisher framework emerged. Simple and obvious ideas can be very elusive to implement, nevertheless the concept never disappeared from our radars, and in many ways, all developments mentioned above were slowly bringing us closer to the position where we could finally bring the idea to life. The *Lego block* approach, manifested through modularization of various layers of the application framework for scholarly publications led us to a *mise en place* moment. And now we could really start cooking!

It was clear that Publisher's application generator needs to grow into the application *manager*, a tool where users can decide which of the reusable elements of the edition they actually need, generate their custom application, play around and then come back to the manager and further adjust their choices. In time, the manager should allow to upgrade the custom application to the new version of the framework. Obviously, users would still need to customize their "special" 20%, so the system must allow for this.

Solution that emerged (and was refined multiple times in the course of the exercise) was a system called **Jinks** built around the so called "**base**", **features**, **blueprints** and **themes**. *Base* is self-explanatory, it's the shared core, needed by all projects. It involves default versions or configurations across all the orchestration layers: shared API, basic ODD, web templates and programmatic modules. The *theme* is the visual styling layer for the application, controlling the colour palette, font selection, backgrounds and elements of visual identification.

![](/img/jinks.jpg)

## Features

The "*trick*", or real potential, is in the **features**. They are the ultimate high-level Lego blocks to quickly assemble the custom edition or publication from. High-level, because unlike single web components or API endpoints on the low-level, they provide and **orchestrate** the elements required **across all layers** of the technological stack. Therefore editors assembling an edition don't need to worry about making consistent adjustments in the XQuery, HTML, or API specification, but can just click a feature - timeline, registers or IIIF support - to be added, and relevant parts of the underlying code will be automagically included.

Some (indeed many) features may seem small, for example the *Upload* which allows users to add documents to an edition through the upload widget. Under the surface this is not necessarily trivial, as the widget in question is a specialized web component, allowing for drag-and-drop or browse-and-select use case scenarios. This component communicates with a dedicated API endpoint whose implementation allows for uploading various XML files, and, depending on their type, not only stores them in appropriate locations, respecting custom application configuration, but also runs on-the-fly conversion e.g. between Word's DOCX format to TEI. Quite a lot behind a small button!

## Configuration properties

From the user perspective, the internal workings of individual features are not that interesting, but what opens up exciting possibilities is the potential for extensive customization without even looking into the code. 

Returning to the *Upload*, we mentioned it respects "*custom application configuration*". When clicking together an edition with Jinks we are effectively creating a configuration file, which stores all the information relevant for generating the application. Upload of a new documents is directly connected to, and must respect, the settings for data collection, defining where in the database all our data is located, and which of the subdirectories should be treated as our main collection. These properties are stored in the Jinks configuration file, `config.json` as follows. As a result, if we upload a "regular" XML file, it will land in `data-default`, i.e. `/db/apps/naborowski-data/data/letters`, while uploading an ODD will place it where ODDs are expected to live.

```json
"defaults": {
    "data": "/db/apps/naborowski-data/data",
    "data-default": "letters",
    "address-by-id": false,
    "odd": "naborowski.odd"
  }
```

Most of the features come with a set of their configuration properties. For example: for the visual theme, you change the colors selecting one of the predefined color palettes (or add and use your own); for navigation between documents you can decide if you want just a single next/previous route between elements of the edition, or if you want to allow for navigation across subcorpora, e.g. letters between a pair of correspondents. Similarly, thanks to this configuration you can determine the number of columns for the person and place indexes or decide which facsimile viewer you want to use in your project and never worry about including correct JavaScript files or changing the source code of page templates.

Configuration file also includes options to customize the base features, e.g. to determine sorting and full-text search options, elements of the navigation menu, presence or absence of the log-in, language switch and the selection of language choices, and so on.

We already tested Jinks on a number of projects, trying to reach a point where many of the edition's needs could be fulfilled through features and their properties. The "final" customization for the project is then limited to adjusting the (usually few) models in the ODD, touching up the CSS styles, swapping elements of visual identification, and deciding on what goes on the landing page.

Such a configuration file, tailored to the need of a particular type of edition through pre-configured features and perhaps accompanied by the ODD and related styles can serve as a *blueprint*, shared by similar projects. In Jinks, one of the blueprints we have already created is called *Workbench*. It creates an app where users can upload and edit TEI documents with either *JinnTap* or *Annotation editor*, two editing tools provided as Jinks features. You can use it for education purposes, teaching students TEI encoding, but it might be a good fit for other applications too. And when it turns out it's missing something, you can easily click and add a feature or two.

## Encoding conventions

Last but not least, we must remember all features "feed" on data. Query, navigation, indexing and other algorithms necessarily make certain assumptions about the availability, encoding style and location of the data. For a practical example: there will be no timeline if we don't have dating, no search and facets without appropriate index configurations and no navigation between documents without that information in place. 

Jinks (as TEI Publisher) comes with defaults already in place and encoding samples to consult. These recommendations are not set in stone, but following a different model will require making changes to the configuration, or even, in case of significantly different approach, to the implementation of the programmatic modules. Luckily, these considerations are in practice limited to specific metadata information and highest level structural elements, effectively requiring nested divisions using `div` over numbered `div1`, `div2` etc.

## Closing remarks

As a closing remark, Jinks emerged through the interdisciplinary coalition of developers, software architects, TEI experts and scholars. All these perspectives needed to be taken into account and weighed to create a new model of a scholarly publication. Open source, modular, firmly rooted in standards and agnostic about the particulars of scholarly methodology or source material, but allowing for flexible, unconstrained, thorough and explicit scholarship and encoding paired with powerful, customizable and multi-faceted, yet fast to create, sustainable and interoperable digital publication.

Jinks is still, and rapidly, growing and evolving. It has been already battle tested with a variety of projects, from Chinese codes of Law, through numerous correspondence editions, to the editing environments set with the annotation editor and JinnTap features. Going forward, we are hoping for the community feedback and involvement in the design and implementation of new features and blueprints for communities of practice. This new framework is shaping up to be a game changer for large institutions and small projects, scholars and technical editors alike.

This is a pre-release introductory article, accompanying our workshop presented in Kraków during the New Territories, the 25th annual conference of the TEI. You can find workshop material with a walk-through of some of the Jinks features and configuration options [here](https://github.com/eeditiones/workshop/blob/master/2025-09-krakow.md). We expect the release of Jinks later in the autumn.