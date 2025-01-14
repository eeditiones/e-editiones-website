---
title: "Extending (and reorganizing?) the TEI Processing Model"
short: "Extending (and reorganizing?) the TEI Processing Model"
lead: "The TEI Processing Model (PM) is a TEI facility that can be used to give a declarative description of the expected behaviour associated with TEI XML elements."
date: 2025-01-21
room: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDI3NTMzNDEtODk4NC00NDExLWI0MWUtODk2ODhmOWM5ZDM1%40thread.v2/0?context=%7b%22Tid%22%3a%22bd21f2e9-9af5-42a1-8caf-eb264278467f%22%2c%22Oid%22%3a%227e4db3d1-dfdc-46a5-b4f2-aaea8a156edb%22%7d"
author: Peter Boot
tags:
  - events
  - meetups
coverImage: eeditiones-ce-20250121-small.png 
coverImageCredits: Image by Lars Windauer

---

Upcoming community meetup on [January 21, 2025 at 17:00 CET](https://www.timeanddate.com/worldclock/fixedtime.html?msg=e-editiones+community+meetup&iso=20250121T17&p1=1425&ah=1).


The TEI Processing Model (PM) is a TEI facility that can be used to give a declarative description of the expected behaviour associated with TEI XML elements. As such it can become an important ingredient for a fully declarative specification of TEI output, even though a declarative output specification would need much more than the PM (such as page layout specifications, search specifications, specification of interaction). However, there are a number of limitations that one runs into when trying to define output using the TEI PM. For some of these, TEI publisher has already implemented extensions to the model.


In my talk I will focus on two aspects of this. First I will discuss situations where we need to associate multiple, nested, behaviours with one element (such as an image that should also be a link or a text section that should have a generated header). Second, I will look at the way the processing model is now specified at element level within the TEI schema specification. I will argue that from the perspective of reusability this is an unfortunate choice, and that we should be able to define named rule blocks containing TEI PM elements. It should be possible to call these rule blocks from the interface definition. In the situation where an edition consists of multiple components, it should also be possible for a rule block from one component to activate a rule block in another component.


I have implemented some of these ideas in proof-of-concept coding. In the talk I will show how this could work and, as this is very much work in progress, I look forward to suggestions and ideas from the audience.

