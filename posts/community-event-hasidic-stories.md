---
title: "The Hasidic Stories Browser – an alternative frontend to a TEI-Publisher corpus"
short: "The Hasidic Stories Browser"
lead: "An alternative frontend to a TEI-Publisher corpus."
date: 2025-10-07
room: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_Y2ZmMzAzM2QtNjQ4NS00YTQ2LWJhYjUtYmU3M2JkYTM0YjMw%40thread.v2/0?context=%7b%22Tid%22%3a%22bd21f2e9-9af5-42a1-8caf-eb264278467f%22%2c%22Oid%22%3a%227e4db3d1-dfdc-46a5-b4f2-aaea8a156edb%22%7d"
author: Gil Shalit (DH-Dev.com)
tags:
  - events
  - meetups
coverImage: hasidic-stories-browser.png
coverImageCredits: Image by Gil Shalit

---

Community meetup on [October 07, 2025 at 17:00 CEST](https://www.timeanddate.com/worldclock/fixedtime.html?msg=e-editiones+community+event&iso=20251007T17&p1=268&ah=1).

A team led by Prof Gadi Sagiv at the open university of Israel is building an annotated collection of [Hasidic stories](https://www.hasidic-stories.org/) published between 1814 to 1914. The stories have been OCR-ed and annotated (in the TEI-Publisher v7 annotator) for people, places and themes, resulting in an extensive TEI-XML corpus which is still expanding. To enable both close and distant reading of the corpus, a browser was built using standard programming frameworks and techniques (.Net Blazor, served from Azure) enabling a flexible and specialized UI and Ux, with complex and multilevel faceting. The browser incorporates TEI-Publisher HTML5 components to display the editions (facsimile and text) as well as the individual stories with additional information. Custom endpoints built with the TEI-Publisher infrastructure use XQuery to extract the relevant information from the corpus as a whole and from individual documents. It is hoped that this approach will enable additional non-standard displays of TEI-Publisher corpora when appropriate.

https://www.hasidic-stories.org/

<img src="/img/hasidic-stories-browser.png" alt="Hasidic stories browser" style="width:700px;height:auto;" />

