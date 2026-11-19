---
title: TEI Publisher 11.0.2
lead: Maintenance release with API fixes
author: Wolfgang Meier
date: 2026-11-18
tags:
  - announcements
  - tei-publisher
  - release
coverImage: mel-elias-uLdu-isetZM-unsplash.jpg
coverImageCredits: 'Image by <a href="https://unsplash.com/de/@cuartodeiibra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mel Elías</a> on <a href="https://unsplash.com/de/fotos/roter-feuerloscher-an-der-wand-montiert-uLdu-isetZM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
---

This patch release improves the robustness of several TEI Publisher API endpoints. A well-configured system was not at risk, but we recommend updating.

Please, be aware that frequent application updates are your best bet on longevity and safety of your custom applications. With the Jinks application manager this should be an entirely straightforward task, so we strongly encourage you to schedule application updates in line with the TEI Publisher/Jinks releases.

Also note the following basic rules for running a production system:

1. always make sure the password for the eXist-db `admin` user is set
2. change the password of the TEI Publisher default user `tei`
3. do not expose _jinks_, _dashboard_, _eXide_ or _monex_ to the public
4. run a proxy in front of eXist-db which only exposes your public-facing application

## Applications based on older TP versions

If you are running a custom application generated from TP 8 to 9, you will want to patch it as well. The following branches contain the updated code for each version:

* [8.0.0](https://github.com/eeditiones/tei-publisher-app/tree/8.0.0-patch)
* [9.0.0](https://github.com/eeditiones/tei-publisher-app/tree/9.0.0-patch)
* [9.1.0](https://github.com/eeditiones/tei-publisher-app/tree/9.1.0-patch)
* [9.1.1](https://github.com/eeditiones/tei-publisher-app/tree/9.1.1-patch)

__Note__: these branches are based on the released TEI Publisher app. When comparing with your custom application, ignore the changes to the top level `controller.xql`, `post-install.xql`, `modules/config.xqm`, which duplicate the changes in `templates/basic`.