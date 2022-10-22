---
title: "Newsletter 22/1"
lead: "Annual newsletter for 2021"
date: "2022-04-05"
categories: 
  - "general"
coverImage: "jon-tyson-XmMsdtiGSfo-unsplash.jpg"
---

## e-editiones as a Society

A highlight of the past year was e-editiones being awarded the [2021 TEI Community Prize](https://tei-c.org/activities/rahtz-prize-for-tei-ingenuity/). The jury offered us these kind words:

> «The awards panel was especially impressed by the way e-editiones has managed to gather a non-profit community of those creating scholarly digital editions and made the process of doing so easier through the coordination of ongoing development of the TEI Publisher software. The awards panel also noted the provision of training opportunities and open availability of the workshop materials for those wishing to (re)learn the software in their own time.»

![Photo by <a href="https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Jon Tyson</a> on <a href="https://unsplash.com/s/photos/newsletter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Unsplash</a>](/img/jon-tyson-XmMsdtiGSfo-unsplash.jpg)

2021 has fortunately seen an increase in membership. Today there are 12 institutional and 30 individual members. However, it remains our goal to attract new members who will continuously support the association.

One of e-editiones' strategic goals is to ensure the long-term availability of digital editions. To this end e-editiones supports hosting offers that also include the continuous maintenance of digital editions (software updates). This year Archives Online has set up such an offer with «Sources Online». Some of the editions associated with e-editiones already use the Sources Online servers.

In February 2021, e-editiones received a grant by the Ernst Göhner Stiftung. The joint proposal was backed by a number of members and their institutions. Together with the additional generous contributions made by participating projects, this grant supported a larger part of the development work past year.

With the Escher correspondence, a prominent Swiss edition has been migrated to TEI Publisher. This step has been necessary since maintenance and hosting with the previous setup became too expensive in the long term. With TEI Publisher application hosted by Sources Online, the annual costs are reduced to a third.

## More Information

- [Current list of members](https://e-editiones.org/members/ "Current list of members")
- [Statutes](https://e-editiones.org/statuten-des-vereins-e-editiones-german/ "Statutes") (in German)
- How to [become a member](https://e-editiones.org/how-to-become-a-member/ "become a member")

## Events

### Community Meetings

e-editiones was able to hold 7 community meetings and thus contribute to the exchange of expertise. Many of the meetings were extremely well received. However, the number of participants varied greatly.

- 2021-10-05 An introduction to the Distributed Text Services (DTS)
- 2021-09-07: TEI Publisher 7.1 – configuring web annotations
- 2021-07-06: Contributing to TEI Publisher – a gentle introduction
- 2021-06-15: For(e) humanists – Metadata, Forms and more
- 2021-06-01: FairCopy
- 2021-05-04: Open access scholarly digital editions at the Finnish Literature Society: experiences with TEI Publisher
- 2021-04-06: Workflow from Word files or Transkribus to TEI Publisher

## Workshops

Among the workshops, special mention should be made of the 5-part introductory workshop by Anne Diekjobst and Claudia Sutter, which received very good feedback.

- 2021-08-2021 Manuscript Mondays – Einführung in das digitale Edieren handschriftlicher Quellen (5-teilig)
- 2021-03-30, 17.00 CEST Versioning and Archiving Data: TEI2Zenodo
- 2021-03-08 Beginners Workshop (Git, Editing Workflows)

A big thank you to all who actively participated in the meetings and workshops.

## More Information

- [e-editiones-YouTube-Channel](https://www.youtube.com/channel/UCAPhSZdBwFRCEFWNNYOC4Ww "e-editiones-YouTube-Channel") (3 neue Videos)
- [e-editiones blog](https://e-editiones.org/blog/ "e-editiones blog")

# Communication

On Slack, we had 218 active members at the end of 2021; on average, there were 16 active members daily, with 3 to 4 members posting a total of about 8 messages daily. On Twitter, we post 4 to 5 tweets per month. 2021 brought us 172 new followers.

Our mailing list, on the other hand, is not very actively used. We are happy to receive suggestions and ideas on how to proceed with it.

![](/img/wordcloud-eeditiones-2021.png)

# TEI Publisher Developments

In February 2021 e-editiones successfully applied for a grant by the Ernst Göhner Stiftung, from which we received 30000 SFR for further TEI Publisher development. The joint proposal was backed by a number of members and their institutions and included features like:

- support for web annotations
- versioning and long term availability
- persistent URLs
- accessibility
- showing and navigating events in a timeline
- display of mathematical formulas

Obviously the budget did not suffice to cover everything planned, but thanks to the additional contributions provided by the member institutions, we could address the main topics and even go beyond in some areas.

## Web Annotations

The most visible feature is the editor for web-based annotations, released in version 7.1.0. The development team had been contemplating this feature already for a couple years and thanks to additional generous funding by the Office of the Historian at the US Department of State, it finally became reality. Being able to annotate TEI documents via a graphic, web based interface eases the burden of enhancing a transcription with semantic, analytic or text-critical markup. Users work in a user-friendly environment in which XML code is neatly hidden from sight. The integration of external authority databases saves a lot of time, improves consistency and opens possibilities for data exchange and interoperability. At the same time, the annotation editor is fully configurable, allowing complex, nested markup where necessary. Several member institutions are actively using the editor in their daily work and continue to contribute to its development.

The annotation editor marks the first milestone in our endeavour to extend TEI Publisher to support the entire editing workflow rather than just publishing the end result. Further steps are already in planning, e.g. form-based editing of the TEI header, which will offer the same level of customizability and extensibility.

## Web Components

Several new web components have been released during the past year: most notable, a new timeline component allows users to visualise dates and events in an interactive, graphical display. The component can be used to directly select a date or date range, or it can be connected to a facetted search to drill down into a collection of items. Development was supported by the Staatsarchiv Zürich. This component is prominently featured in the remake of the Alfred Escher correspondence edition (to be announced soon).

The Bernoulli edition in Basel financed a component to display mathematical formulas embedded in the TEI text, using either MathML or TeX notation. Other new components include a grid element for viewing tabular data, and a "split list", which comes handy when browsing lists of places, people or abbreviations. The latter was again financed by the Staatsarchiv Zürich and first appeared in the Escher correspondence.

As usual, many other components have seen major improvements needed by concrete projects. For example, the map component is now able to display a large number of places at once by clustering the markers.

## TEI Publisher 8

The next major release of TEI Publisher is currently being finalized. It will include a few breaking changes, mainly in the libraries used, but as usual we're aiming to remain as backwards compatible as possible. One reason for the breaking changes is to better support persistent, bookmarkable URLs as well as browsing the navigation history. The goal is to make the URL structure as seen by the end-user completely independent of the underlying organization of documents and collections. This involves both a server- and client-side part.

The main remaining task on the way to the release is to extensively document the possibilities and approaches enabled by those changes.

## Other Software Packages

In line with our modular development policy, a number of software packages which should be considered part of Publisher 8 are published in separate repositories:

- [tuttle - a Git Integration for eXist-db](https://github.com/eeditiones/tuttle) (stable): allows synchronizing a data collection directly from a github or gitlab repository to the database. It can deal with multiple repositories as well as incremental updates. Thanks to the Karl Barth Gesamtausgabe for contributing funding.
- [TEI Publisher Named Entity Recognition API](https://github.com/eeditiones/tei-publisher-ner) (beta): adds named entity recognition to the web-based annotation editor. Use it to identify places, people and other entities while annotating a document. The package also provides scripts to train your own model based on already annotated documents via machine learning. Training data is automatically extracted from the annotated document by TEI Publisher, so there's no need to go through the tedious task of compiling suitable data by hand.
- [Static Site Generator for TEI Publisher](https://github.com/eeditiones/tei-publisher-static) (beta): transform a website based on TEI Publisher into a static version, which no longer requires TEI Publisher nor eXist-db. The feature intends to provide a low cost option for small editions whose main purpose is to allow users to browse through a collection of texts without demanding sophisticated search or navigation facilities. Generated files can be easily hosted on free services like GitHub pages. To see it in action, visit [our viewer for the TEI Guidelines](https://guidelines.teipublisher.com/), which we used as a testbed.
- [Docker Compose Configuration](https://github.com/eeditiones/teipublisher-docker-compose) (beta): a configuration to help users install a TEI Publisher-based application on a docker-enabled host. It handles the more difficult tasks of installing a reverse proxy in front of Publisher as well as registering an SSL certificate. Hosting via docker compose can be a viable option for smaller projects with limited budget and users who lack the server administration skills necessary to set up a dedicated hosting service.
- [Fore](https://github.com/jinntec/fore): an XForms-inspired library for building complex forms with web components. While this is not an integral part of TEI Publisher yet, it will become the fundament for many of the future, workflow-related features we have in mind (see below).

# The Future

The e-editiones board will prepare a new joint funding proposal soon. To be successfull we'll again need projects or institutions to express interest and signal readiness to make a contribution (in whatever way). If you are working with TEI Publisher and wish for a certain feature, please do not hesitate to contact us, so we can add it to the list of topics.

A main area we currently have in mind is to further enhance TEI Publisher with respect to supporting the editorial workflow:

- integrate general metadata - i.e. TEI header - editing facilities based on customizable forms
- add an interface to manage local authorities within the annotation framework
- support other annotation types, e.g. empty elements and stand-off annotations which are not inlined
- named entitiy recognition: automatically connect detected entities with matching authority entries
- allow batch processing of entire documents via named entity recognition
- support multi-user workflows with support for a annotate/review/merge process

Other areas might be:

- a form-based interface to customize basic settings and CSS variables
- direct integration with Transkribus and other HTR/OCR software
- support for other input formats (Excel, CSV)
- remove the dependency on Google Material Design to make all visual aspects configurable
- port the core TEI processing model implementation to be usable without eXist (e.g. directly within oXygen)
- drop the somewhat arbitrary distinction between browsing and searching currently imposed by publisher and refactor the search API to be more easily customizable
- enhance and speed up search result display (KWIC)

If any of this rings a bell, please consider if you could support it by taking part in the joint funding proposal. Obviously we'll also be more than happy to pick up suggestions not yet on the list.
