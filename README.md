# Homepage for e-editiones

New homepage for e-editiones.

## Install and run locally

1. check out this repository
2. run `npm install` once
3. run `npm start` to launch development server (running on port 8081)

## Edit files

* Blog articles, news, announcements etc. are stored in `posts`
* Static pages (i.e. everything which is not a post) are found in `pages`
* geodata for the TEI Publisher map is kept in `_data/geodata.json`

## Contributing articles

Articles should use CommonMark markdown syntax and start with a header separated by `---`. The following fields can be present in the header:

```yaml
---
title: full title of the article
short: (optional) short title
lead: (optional) descriptive short summary
author: author of the article
date: 2022-10-04
tags:
    - events
    - meetups
coverImage: image to be used as cover, located in img folder
coverImageCredits: any credits to be shown for the image
---
```

Every article should use at least one of the following tags. Nested tags below should be used in combination with the corresponding parent tag.

* events
  * workshop
  * meetups
  * conference
* announcements
  * call
  * e-editiones
  * tei-publisher
  * ... other tags referring to a particular software package, working group etc.
* tutorial
  * beginner
  * intermediate
  * pro
* faq
* report
  * projects
  * best practice
* teaching