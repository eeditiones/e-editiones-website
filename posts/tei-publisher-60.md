---
title: "TEI Publisher 6.0.0"
short: TEI Publisher 6
lead:  Version 6.0.0 of TEI Publisher has been released
author: Wolfgang Meier
date: 2020-07-07
tags:
    - announcements
    - tei-publisher
    - release
coverImageCredits: 
---

> This is a major release introducing the refactored and extended TEI
> Publisher component library as well as numerous bugfixes and new
> features.

## Release Highlight: User Interface Components as an Independent Library

Publisher's library of web components is now distributed via
[npm](https://www.npmjs.com/package/@teipublisher/pb-components). Thanks
to the increasing support for the web component standards in modern
browsers, the heavier framework used before (Polymer) could be dropped
and has been replaced by LitElement, which is just a thin wrapper around
native web components. While invisible to users, this redesign greatly
improves modularity of Publisher-based applications.

Thanks to npm releases, updating the user interface for all
Publisher-based apps becomes simply a question of changing a single
variable in the configuration file.

Furthermore, Publisher's library of web components - true to the basic
idea of Web Components Standard - can be included in any HTML webpage.
This means it can be embedded into existing CMS or any other publishing
solution, even if it's not running eXist-db (e.g. the popular
[Hugo](https://teipublisher.onrender.com/post/embedding-publisher/) or
[WordPress](https://e-editiones.org/blog/)). A few lines of HTML is
sufficient to embed a document view anywhere you like:

<iframe scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="" height="480" title="undefinedl" src="https://codepen.io/wolfgangmm/embed/GRJyvNY?height=480&theme-id=dark&default-tab=html,result&editable=true">Loading codepen ...</iframe>

Similarly, if you prefer to write your own application using any of the
popular frameworks like angular, vue or react you can easily import the
pb-components package and use it directly [in your
project](https://github.com/eeditiones/pb-extension-template).

As a final consequence, this change decouples the component library from
the TEI Publisher app. It is now possible to host multiple applications,
which depend on different versions of the component library, without
conflict, within the same eXist-db instance, a point of importance for
institutions with numerous projects.

## Main New Features and Bug Fixes

- Redesigned and simplified CSS styling customization

  Styling properties are now exposed via standard CSS files and theme
  variables. Stylesheets can also be specified within the ODD, as
  previously, or through `pb-view` component configuration attributes.

- Extended internationalization

  - full i18n support for all the labels in HTML templates and within
    web components

  - mechanism for project specific language files extending the default
    Publisher collection

  - a number of new languages added and existing ones updated. Currently
    TEI Publisher is fully translated into Bulgarian, Czech, Dutch,
    French, Georgian, German, Greek, Italian, Norwegian, Polish,
    Portuguese, Romanian, Russian, Slovenian, Spanish, Swedish, Turkish
    and Ukrainian.

- Subcorpora - new TEI Publisher data organization

  Publisher's pre-populated data collection is now split into Playground
  and TEI Publisher demo collection areas which illustrate how this
  mechanism could be used to host multiple subcorpora within single TEI
  Publisher application.

- New and improved web components

  - `pb-select-feature` and `pb-toggle-feature` components have been
    extended to allow for interactive changing of display parameters
    (like switching between regularized or original spelling) which can
    be then processed client or server-side

  - new [API documentation
    app](https://unpkg.com/@teipublisher/pb-components@latest/dist/api.html)
    and web component demo pages

  - [pb-mei](https://unpkg.com/@teipublisher/pb-components@1.0.0/dist/api.html#pb-mei.1)
    component for rendering Music Encoding Initiative documents based on
    Verovio; supports optional MIDI playback using web-midi-player

    ![](/img/mei-demo.png)

- Redesigned ODD editor providing an improved user experience

- Documentation:

  - reorganized and extended TEI Publisher documentation

  - pb-components API documentation and demos

## Get It!

TEI Publisher 6.0.0 is available as an application package on top of the
[eXist XML Database](https://exist-db.org). Install it into a recent
eXist (5.0.0 or newer) by going to the dashboard and selecting TEI
Publisher from the package manager.

For more information refer to the
[documentation](https://teipublisher.com/exist/apps/tei-publisher/doc/documentation.xml)
or visit the [homepage](https://teipublisher.com) to play around with
it.

A 3-part online course on TEI Publisher 6 has been led by Wolfgang Meier
in June 2020. Course material, as well as video recordings of all the
sessions, and a walk-through for the assignments are available for
self-learning. Find all informations on the [workshop
GitHub](https://github.com/eeditiones/workshop#slides) page.

<iframe src="https://www.youtube-nocookie.com/embed/QuWrfAS2SWM" width="100%" height="480px" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen="allowfullscreen"></iframe>

## Thanks

Our thanks go to the Swiss [Nationale Infrastruktur für Editionen -
Infrastructure nationale pour les éditions](https://www.nie-ine.ch/) for
funding a large part of work on the web component refactoring.

Work on components for toggling has been aided by a small grant from ACE
– Austrian Corpora and Editions of the Österreichische Akademie der
Wissenschaften.

We are also grateful for the generous contributions of numerous
individuals who used the [Crowdin
platform](https://crwd.in/tei-publisher) to translate and proofread
Publisher's language files: Boris Lehečka, Øyvind Gjesdal, Sandra Romano
Martin, Antonio Rojas Castro, Isabel Marti, Natalia Kotsyba, Elena
Spadini, Pietro Liuzzo, Karolina Bielenin-Lenczowska, Jaqueline
Pierazzo, Emmanuelle Morlock, Emmanuel Château-Dutier, Clement Plancq,
Eduard Drenth, Wout Dillen, Anna-Maria Sichani, Maria Akritidou, Elli
Mylonas, Matija Ogrin, Cristina Vertan, Dimitar Illiev, Arman
Weidenmann, Leif-Jöran Olsson, Irina Lobzhanidze, Joseph Wicentowski,
Juri Leino, Daniel Stoekl, Yael Netzer, Naoki Kokaze, Kiyonori Nagasaki,
Toma Tasovac, Alexandra von Criegern, Bettina Pandula, Daria Elagina,
and others whom we unfortunately only know by their usernames.

## e-editiones

May of 2020 saw an advent of a new scholarly society:
[e-editiones](https://e-editiones.org). Its goal is to promote open
standards for digital editions and free software based on them with a
focus on TEI Publisher development. All TEI Publisher source
repositories have been moved to the [e-editiones
github](https://github.com/eeditiones).

We encourage you to join the society, through your institution or
individually, and take part in our work and discussions, shaping the
future of the TEI Publisher.



[![](/img/e-editiones-logo-color.svg)](https://e-editiones.org)

