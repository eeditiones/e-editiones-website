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

It's been a while since history supposedly ended, XML was hot, TEI wanted to rule the digital humanities and the world seemed generally a better place. Many things have changed but other remain pretty much the same, and among the latter we have the constant battle of scholars trying to tame the current technology. Luckily, they do not fight alone, with devs, analysts and standards organizations guarding the flanks and sending recon parties to scout what lies ahead.

Enough with the military lingo, where do we stand in 2025? On the eve of the 25th annual conference of TEI (and well past its 40th birthday) and a decade after the first workshop on the TEI Processing Model and TEI Publisher?

On the surface, this is a wonderful moment for humanities computing, where so much more is within our relatively easy reach than even just a decade ago and these opportunities are widely embraced in our community. On the other hand, it's even more unattainable than ever that scholars would have a solid overview of the ever fluctuating technological landscape around us, but, as always, they are still ultimately responsible for designing and orchestrating complex, collaborative workflows and have to directly face the short- and long-term consequences of their decisions.

TEI and e-editiones share not only generous community spirit, but also a belief that scholars need guidance and support in their endeavours without being forced into a singular, rigid style or method. TEI's success and decades of (sometimes painful) experiences in creating scholarly publications on its basis eventually led to the incorporation of the TEI Processing Model into the TEI Guidelines and birth of the TEI Publisher. Every subsequent incarnation of the TEI Publisher drew upon previous experiences and tried to abstract, generalize and modularize elements necessary to create, curate and publish scholarly material in a sustainable manner. This was only possible thanks to the dialogue and cooperation between developers, scholars and members of the community, who trusted the idea enough to give it a try, evaluate and improve the models in practice.

Quite early on the "obvious" concept of having some sort of *ground control* or management center for publications created on the basis of the TEI Publisher framework emerged. Simple and obvious ideas can be very elusive to implement, nevertheless the concept never disappeared from our radars, and in many ways, all developments meanwhile were slowly bringing us closer to the position where we can finally bring the idea to life. The *Lego block* approach, manifested through modularization of various layers of the application framework for scholarly publications led us to a *mise en place* moment. And now we can really start cooking!

Already TEI Processing Model authors emphasized the 80/20 rule and insisted on "standardize when you can, customize when you must" approach. With TEI Publisher editions counting into the hundreds (probably small hundreds, but still) we can well notice the overlap. We can also easily observe the emerging consensus in how digital scholarly publications are presented to their readers - to the point that it's not always easy to guess the framework from the look and feel of the edition [FOOTNOTE]. Greater availability of encoding examples (where TEI Publisher's Demo collection and e-editiones acting as a hub for communities of practice play a not insignificant role) leads to the emergence of shared usus also in terms of TEI flavours and encoding tactics.

This is how elements of our puzzle looked like out of the box: 

- typical encoding schemes with a body of TEI encoded source material available on open licenses,
- corresponding body of ODDs with Processing Model specifications for publication
- published editions to analyze recurring needs, challenges and solutions
- list of open issues and feature requests from the user community
- TEI Processing Model library for transformations of XML fragments into a variety of output formats (XML, HTML, PDF, LaTeX, Markdown, ePub, FO)
- TEI Publisher's library of functional UI elements
- TEI Publisher's standard API for data retrieval and manipulation
- TEI Publisher's query and navigation modules
- eXist-db's Lucene based indexes, allowing for efficient queries but also to compensate for the differences in encoding flavours
- eXist-db's templating system
- TEI Publisher's application generator

It was clear that the application generator needs to grow into the application *manager*, a tool where users can decide which of the reusable elements of the edition they actually need, generate their custom application, play around and then come back to the manager and further adjust their choices. In time, the manager should allow to upgrade the custom application to the new version of the framework. Obviously, users would still need to customize their "special" 20%, so the system must allow for this.

Solution that emerged (and was refined multiple times in the course of the exercise) was a system called **Jinks** built around the so called "**base**", **features**, **profiles** and **themes**. *Base* is self-explanatory, it's the shared core, needed by all projects. It involves default versions or configurations across all the orchestration layers: shared API, basic ODD, web templates and programmatic modules. The *theme* is the visual styling layer for the application, controlling the colour palette, font selection, backgrounds and elements of visual identification.

The devil is in the **features**. They are the ultimate high-level Lego blocks to quickly assemble the custom edition or publication from. High-level, because unlike single web components or API endpoints on the low-level, they provide and **orchestrate** the required elements **across all layers** of the technological stack. 

For example, the timeline feature gives us the ability to see the documents visually represented on a timeline as well as make a selection according to temporal criteria. It does not operate without context - queries made with the timeline control must respect other criteria, set by facets or full-text search controls.
Therefore the feature must provide the relevant API endpoints, programmatic modules that implement them, parametrized HTML templates to be injected into position on the page, CSS styles to control the visual side and match it to the application theme and so on. We also can't forget that it's impossible to create the timeline without the temporal data provided in the TEI sources and appropriate database indexes configured to efficiently query our dataset.

[TODO discuss another example REGISTERS]

Identification and implementation of various features as independent, "atomic" elements to assemble the edition from remains an open challenge. They must be complete, but should remain indivisible. They must be generic enough to be of interest for various application but customizable through well defined parameters to remain adequate for specific projects. They must accomplish a specific task, but not result in conflict and interoperate seamlessly with other features. So far we prepared a set of features focusing on the most commonly needed but expect the library of features to grow in time, with community feedback an collaboration.

*Profiles* are natural consequence of the significant overlaps between certain types of projects. We can safely assume that most correspondence editions will need the timeline, registers, a landing page and a bunch of other features. It might be that a certain specialized scholarly centre prepares a dedicated profile, where the features will be pre-selected and pre-configured to match their common use case, institutional branding, provide required localization labels et caetera. Creating a new edition of the type covered by the profile is then as smooth as can possibly be and editors can focus on their work without further ado.

At this stage, Jinks is still, and quite rapidly, evolving. Nevertheless, over the past year it has been already battle tested with a variety of projects, from Chinese codes of Law, through numerous correspondence editions, to the editing environments set with the annotation editor and JinnTap features. Going forward, we are hoping for the community feedback and involvement in the design, implementation and documentation of other features and new profiles for communities of practice. Work is well advanced on the profile for EpiDoc and a DTS feature. We would appreciate pooling resources to maintain and further develop this new framework which is shaping up to be a game changer for large institutions and small projects alike.

Last but not least, profiles and features "feed" on the data. Query, navigation, indexing and other algorithms necessarily make certain assumptions about the availability, format and location of the data. These are not set in stone, but working with data following a different model will require making changes to the configuration, or even, in case of significantly differing encoding, to the implementation of the programmatic modules. Our assumptions were made based on our experiences with a large corpus of existing TEI editions, therefore we are convinced they are representative, or at least adequate, for the substantial majority of the TEI corpora. It is up to the projects to decide whether their modeling choices, where taking a divergent path, should be converted to a more standard TEI flavour or accommodated as they are by providing a feature or set of features to support them.

As a closing remark, Jinks emerged through the interdisciplinary coalition of developers, software architects, TEI experts and scholars. All these perspectives needed to be taken into account and weighed to create a new model of a scholarly publication. Open source, modular, firmly rooted in standards and agnostic about the particulars of scholarly methodology or source material, but allowing for flexible, unconstrained, thorough and explicit encoding paired with powerful, customizable and multi-faceted, yet fast to create, sustainable and interoperable digital publication.

Content using [markdown syntax](https://commonmark.org/help/). It should not repeat the title, which will be inserted automatically.