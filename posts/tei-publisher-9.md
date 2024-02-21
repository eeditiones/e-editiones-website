---
title: TEI Publisher 9.0.0
date: 2024-02-05
short: "TEI Publisher 9.0.0"
lead: "Redesigned annotation editor, local authority registers, IIIF presentation manifests ..."
author: Wolfgang Meier
tags:
  - announcements
  - tei-publisher
  - release
coverImage: nine-3095449_640.jpg
coverImageCredits: Photo by <a href="https://pixabay.com/users/mabelamber-1377835">Mabel Amber</a> from <a href="https://pixabay.com">Pixabay</a>
---
> Version 9 has seen a major rework of the annotation facilities and introduces local authority registers for people, places and organizations. There have been small but powerful improvements to facets, extensions to client-side URL routing, numerous minor fixes and – last but not least – added support for IIIF manifests.

![Redesigned annotation editor with local register](/img/publisher-9-annotations.png)

# IIIF manifests

As showcased in the [Shakespeare sample](https://tei-publisher.com/exist/apps/tei-publisher/test/F-rom.xml) and app, TEI Publisher now supports generating IIIF presentation manifests and displaying them alongside the text. A presentation manifest combines a set of images together with metadata, so instead of displaying single facsimiles via the IIIF image service, we have a standardized description of all the images associated with a resource. While there are external tools for creating IIIF manifests, we can easily auto-generate them from the TEI header and page beginnings as long as those have `@facs` attributes from which the image service links can be determined. This is demonstrated in the Shakespeare sample but should work with any other TEI meeting the requirements.

![IIIF presentation manifest viewer](/img/publisher-9-iiif.png)

The manifest viewer provided by TEI Publisher components is based on the excellent [tify](https://tify.rocks/) project and is integrated into Publisher's chain of events. This way, text and image view communicate to each other, which means that if you navigate to the next page/image in either of the two, the other reacts accordingly.

# Client-side URL routing

The URL routing features introduced with version 8 have been substantially improved, introducing configurable URL templates also on the client side. This means you can construct URLs which are really completely independent of the underlying data organisation, while making sure the user always sees the page in a consistent state. Previously you still needed to have the path to the document somewhere in the URL. This is no longer required. For example, the documentation app now uses an URL of the form `/documentation/{chapter-id}`. And if you look at one of the projects realized with TEI Publisher recently, the travel diaries of [Johann Conrad Fischer](https://johannconradfischer.com/de/), you'll see that the page URLs consists of `/{language}/{year-of-diary}/{chapter-number}`. To make this possible, we have to make sure server and client are "on the same page" all the time.

# Base ODD refactoring

This version also brings the demise of the `teiSimplePrint` ODD, previously the source ODD from which  `teipublisher` ODD inherits. Models from SimplePrint, after thorough review, have been merged into the default TEI Publisher ODD. This is a first step on the road for the extended and rationalized base ODD, a project inspired by the TEI Vanilla meetups of yore and now undertaken by e-editiones in cooperation with the TEI consortium.

# Redesigned annotation editor

The new [annotation editor](https://tei-publisher.com/exist/apps/tei-publisher/documentation/web-annotations) boasts a new, more user friendly and ergonomic layout with additional capacity to add or edit registry entries from within the editor. Furthermore, a function to find potential matches in other documents for the current annotation and review them on the spot is a long awaited feature, which promises to speed up the editing process without compromising quality or consistency.

![Search and review occurrences of entity in other documents](/img/publisher-9-occurrences.png)

A default set up for local registers of places, people and organizations allows editors to curate these resources under the same roof and at the same time as they annotate the sources. Local registers can extend the configured external authority: editors can either add information to an entity copied from the external authority, or provide information about entities not described elsewhere.

A number of default input forms is provided for people, organizations and places. They are based on a forms framework called [fore](https://jinntec.github.io/fore-docs/), which takes the best parts from the former XForms standard to plain HTML. This means you can modify and extend the provided forms in a purely declarative manner. All you need to do is to change the TEI/XML templates and add controls to the HTML.

![Edit a place entity](/img/publisher-9-annotation-edit.png)

# Selecting facets

![](/img/publisher-9-facets.png){.right width=220 style=margin-left:1rem}

Now it became easier to select less frequent facets when browsing or searching: previously only the most frequent facets were shown by default and you had to browse through a potentially long list if you wanted to find a not so common one. Now you can easily configure the facets to display a combo box in addition to the list, allowing users to type in a query and see all the matching facets.

# Thanks

Special thanks for contributing funding to the development of this version go to the [Office of the Historian at the US Department of State](https://history.state.gov), the project [Editionstools für eine Digitale Epigraphik](https://www.hadw-bw.de/forschung/forschungsstelle/editionstools-fuer-eine-digitale-epigraphik-edep), the [Institute of History at the Polish Academy of Science](https://ihpan.edu.pl/en/), the [Karl Barth Gesamtausgabe](https://kbga.karl-barth.ch/texts/), the project [https://www.hadw-bw.de/forschung/forschungsstelle/buddhistische-steininschriften-nordchina](Buddhistische Steininschriften in Nordchina), and last but not least: [e-editiones](https://e-editiones.org) and [Jinntec GmbH](https://jinntec.de).

Apart from institutional support, we are grateful to all members of e-editiones community who helped us to translate the user interface via [Crowdin](https://crowdin.com/project/tei-publisher) and keep the discussion alive on the Slack channel, often assisting each other in solving problems.

# Try it ...

As usual you can try the latest version on the [TEI Publisher homepage](https://tei-publisher.com). Note that **write access is limited** on this server. To get the full experience, we suggest to install TEI Publisher locally. The easiest way is probably to use our [docker images](https://tei-publisher.com/exist/apps/tei-publisher/documentation/docker).