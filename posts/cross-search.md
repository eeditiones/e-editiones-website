---
title: "Cross search"
lead: "Search service which can run queries across multiple editions at the same time"
author: "Magdalena Turska"
date: "2020-12-23"
tags: 
  - announcements
  - "interoperability"
  - "osa20"
  - "tei"
  - "tei-publisher"
coverImage: "alina-grubnyak-ZiQkhI7417A-unsplash.jpg"
coverImageCredits: Tile photo by <a href="https://unsplash.com/@alinnnaaaa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Alina Grubnyak</a> on <a href="https://unsplash.com/s/photos/connection?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Unsplash</a>
---

With a growing number of editions realized with the TEI Publisher it is a logical next step to wish for a search service which can run queries across multiple corpora at the same time.

Usually the problem to solve would be the great diversity of encoding across projects, even if they all use TEI as a vocabulary of choice. Even commonly represented information, like the language of the source document, can be stored in various locations in a TEI document. Lucene-based fields and facets, introduced in eXist-db 5.0 provide a mechanism to smoothly abstract away these encoding differences - we can just define, say, a _language_ facet and it's the collection index configuration's role to take care of specifying where exactly to grab data from.

The next potential issue would be actually running the queries across corpora, particularly with the decentralized infrastructure where editions are hosted on diverse servers. The answer here is to define an API which individual editions need to expose, so that the aggregate search engine can just poll all its registered 'members', regardless of their location or how they implement the search internally.

![Cross-search results page](/img/cross-results-1024x914.png)

The [cross-search](https://tei-publisher.org/exist/apps/cross-search/index.html) prototype is exactly such a search engine. With a simple configuration one can register all 'member' editions. Only requirement for the editions themselves is that they expose the `api/search/document` API endpoint, which is a matter of simple customization for all TEI Publisher 7 applications which support Open API specifications out of the box. The `api/search/document` endpoint must accept a number of parameters defined in the specification. For this prototype the title, author and lang(uage) fields as well as genre, language and corpus facets were assumed.

We are very happy to report that our prototype works really well as a proof of concept with the eclectic collection of documents from TEI Publisher demo apps, all originating with vastly different projects with diverse encoding styles. Next, we intend to extend this idea into a general portal for archives and libraries and we would welcome collaboration from such institutions.

Our sincere thanks go to the [Bibliothek für Bildungsgeschichtliche Forschung des DIPF / Research Library for the History of Education at DIPF](http://https://bbf.dipf.de/en) for supporting this project.