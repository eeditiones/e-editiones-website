---
title: TEI Publisher 9.1.0
date: 2024-10-16
short: "TEI Publisher 9.1.0"
lead: "A bug fix release, mainly addressing failures on Windows, but also some other small, but annoying bugs"
author: Wolfgang Meier
tags:
  - announcements
  - tei-publisher
  - release
coverImage: susan-q-yin-wlYn3-FshLA-unsplash.jpg
coverImageCredits: Photo by <a href="https://unsplash.com/@syinq?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Susan Q Yin</a> on <a href="https://unsplash.com/photos/blue-and-white-number-9-wall-decor-wlYn3-FshLA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

---
> A bug fix release, mainly addressing failures on Windows, but also some other small, but annoying bugs.

We're working hard on TEI Publisher 10, which will bring a major redesign, but it's still a few weeks away. We therefore decided to roll out version 9.1.0, incorporating a few important fixes.

## TEI Publisher on Windows

`tei-publisher-lib` 4.0.0 introduced a new, useful feature: within the ODD one could access variables and functions defined in TEI Publisher's main configuration module, `config.xqm` using the `global:` namespace. For example, to get the path to the application's data root collection one could use `$global:data-root`.

Unfortunately this feature causes failures on Windows (but only there as far as we know). The issue appears when you try to recompile an ODD or install a generated application. Users either got an unclear error message or the process silently failed.

The cause for this lies in the complexity of `config.xqm`, which itself imports a larger number of other files. On Windows, eXist-db (currently) fails to resolve those imports.

Instead of always importing the entire `config.xqm`, we decided to make it configurable: by default, TEI Publisher 9.1 will now import a dedicated configuration module, `odd-global.xqm`. You may either add the information you need within your ODD there, or create your own module and configure it in the global ODD configuration file, `configuration.xml`. See the updating section of the [documentation](https://teipublisher.org/exist/apps/tei-publisher/documentation/upgrade-910) for more information.

## Access to HTTP request parameters

In some cases, trying to access HTTP request parameters from within an HTML template would fail. This happend at more or less random times. We added a workaround to avoid this.

## Annotations

The release includes an important [fix](https://github.com/eeditiones/tei-publisher-app/pull/232) contributed by Boris Lehečka: when adding a note via the web annotation editor, it was inserted *before* the selected element. This is clearly not what you would expect for footnotes!

A revision panel was added to the editor, allowing users to describe the changes made before saving. Within the TEI header, this creates a `change` entry in the `revisionDesc` section, including username and timestamp.

![Revision panel in annotation editor](/img/annotations-revision.png){width=50%}

Finally, we fixed the annoying issue that the preview panels were not scrollable, therefore making it impossible to see and check all the changes or the full XML.

# Try it ...

As usual you can try the latest version on the [TEI Publisher homepage](https://tei-publisher.org). Note that **write access is limited** on this server. To get the full experience, we suggest to install TEI Publisher locally. The easiest way is probably to use our [docker images](https://tei-publisher.org/exist/apps/tei-publisher/documentation/docker).

Updating from 9.0 to 9.1 requires only little changes. The procedure is described in the [documentation](https://teipublisher.org/exist/apps/tei-publisher/documentation/upgrade-910). The good news: with TEI Publisher 10 updating will become **a lot easier**, hopefully working mostly automatic. 