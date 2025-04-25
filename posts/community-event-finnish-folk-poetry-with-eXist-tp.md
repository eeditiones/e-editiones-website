---
title: "Rebuilding and modernizing a large, 20-year-old database of Finnish folk poetry with eXist-db and TEI Publisher"
short: "Rebuilding and modernizing a large, 20-year-old database of Finnish folk poetry"
lead: "Folk poetry is closely tied with the Finnish national awakening in the 19th century"
date: 2025-05-06
author: "Maria Niku, Ph.D/B.Sc., digital editions specialist, The Finnish Literature Society "
room: https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjRiNTIwN2QtMzlkNS00MzY0LWE0OGItNGQxNDkxYmQ2N2Vj%40thread.v2/0?context=%7b%22Tid%22%3a%22bd21f2e9-9af5-42a1-8caf-eb264278467f%22%2c%22Oid%22%3a%227e4db3d1-dfdc-46a5-b4f2-aaea8a156edb%22%7d
tags:
  - events
  - meetups
  - tei-publisher
  - eXist-db
coverImage: skvr_volumes.jpg
coverImageCredits: Printed SKVR-series staples, image by the Finnish Literature Society
---

Community meetup on [May 06, 2025 at 17:00 CET](https://www.timeanddate.com/worldclock/fixedtime.html?msg=e-editiones+community+meetup&iso=20250506T17&p1=1425&ah=1).

Folk poetry is closely tied with the Finnish national awakening in the 19th century. The publication of the Finnish national epic, Elias Lönnrot’s Kalevala, in 1835 awakened a national idealism, inspiring a large number of university students to follow in Lönnrot’s footsteps to collect folk poetry. The majority of the original folk poetry thus collected was published by the [Finnish Literature Society](https://www.finlit.fi/en) in the first half of the 20th century in in 33 printed volumes, containing some 89 000 Kalevala-metre texts in total. Some 20 years ago, this series, called Suomen Kansan Vanhat Runot, or SKVR in short (The Ancient Songs of the Finnish People), was made into an SQL-based database.


The SKVR collection is of major importance folklore studies and other fields of Humanities scholarships as well as to individuals in non-academic fields, such as folk musicians and authors seeking inspiration for their work. However, by 2024 the old database was in dire need of modernization, with improved features to better serve the needs of researchers. We’d successfully used eXist-db and TEI Publisher for some years for smaller digital editions, the largest one up to then containing images of c. 10 000 archival index cards with transcriptions, so they felt like the best tools for our modernization project. One of the major benefits of eXist-db and TEI Publisher, for us, is that as open source software they allow us to control the entire process ourselves, from design to building work to possible changes and improvements based on user feedback.


The new database would contain not only the original c. 89 000 texts but also a new collection of c. 84 000 texts which had not been included in the original printed series for various reasons. In our project we had quite specific requirements for features: e.g. a complicated, three- or four-level genre categorization; multi-selection within facets; enabling users to select which collection to query; fielded queries. Performance was a major concern, especially with regard to the catalogue views with facets. We could split the original SKVR and the new dataset of unsorted poems into two separate catalogue views, but nearly 90 000 TEI documents per dataset is still a lot to load into a HTML view with facets. One way to (further) improve performance would have been to limit the facet listings to show e.g. the first 50 entries initially, but felt it wasn’t a solution in this case: with this kind of data, the facets themselves offer a wealth of information on the genres, collectors, collection regions, places and years of the poems – information that is updated in real time when the users makes facet selections. If a user wants to know, say, where and when a specific person collected poetry or which regions yielded epic poems, the facets reveal that information immediately.


The rebuilding and modernization project has been a learning experience in many ways, and challenging too, not the least because of the expectations of various existing user groups with different needs. It has shown us concretely that eXist-db and TEI Publisher indeed work well with large datasets. The experiences gained during the project will be used and hopefully improved upon in forthcoming large-scale publishing projects.

The SKVR database can be accessed at: https://skvr.fi

<img src="/img/skvr_volumes.jpg" alt="Printed SKVR-series staples, image by the Finnish Literature Society" width="100%"/>