---
title: "Newsletter 2021/1"
date: "2021-02-02"
categories: 
  - "general"
  - "tei-publisher"
tags: 
  - "news"
  - "tei"
---

![](/img/wordcloud-eeditiones-2021.png) We're happy to send our first newsletter covering the past year of activities and developments within e-editiones and would like to encourage institutions or individuals who are not yet members to [join forces](https://e-editiones.org/how-to-become-a-member/).

## e-editiones as a Society

The e-editiones society was founded on 4 May 2020 by more than 20 international partners. Our institutional members are academies, archives and libraries, edition projects and their sponsors, as well as companies. Among individual members we are proud to count archivists, librarians, editors, researchers from the (digital) humanities, and software developers. After our first attempt to obtain a non-profit association status from the St. Gallen tax office failed, e-editiones was recognized as a non-profit association with tax exemption, following an amendment to the statutes (5th November 2020). A huge thanks to the Karl Barth Foundation for generously sponsoring the necessary legal advice. Building on these foundations and developments and events listed below, our still young society is off to a great start. We hope to broaden the community and increase our membership in 2021.

### More Information

- [Current list of members](https://e-editiones.org/members/)
- [Statutes (in German)](https://e-editiones.org/statuten-des-vereins-e-editiones-german/)
- [How to become a member](https://e-editiones.org/how-to-become-a-member/)

## 2020 Events

e-editiones organized various meetings and workshops in 2020 for members and the wider community to get to know each other and exchange ideas.

_Meetings_

- 04.05.2020: Virtual foundation of e-editions and first community event for members
- 18.05.2020: First Public Community Event: Presentation of e-editiones by Andreas Kränzle with a short introduction to TEI Publisher for digital editions by Wolfgang Meier, discussion moderated by Joe Wicentowski [Video](https://youtu.be/LNbuyeh-vew)
- 20.10.2020: TEI «Vanilla» by Magdalena Turska [Report](https://e-editiones.org/tei-vanilla-meeting-summary/)

_Workshops_

- Three-part online Course: [Learn TEI Publisher by Wolfgang Meier](https://e-editiones.org/getting-started/)
    - Learn TEI Publisher 1: «Stay Home Learn TEI Publisher From Scratch» , 8th Jun 2020 [Video](https://www.youtube.com/watch?v=5qu94bhftpk)
    - Learn TEI Publisher 2, 15th Jun 2020 [Video](https://www.youtube.com/watch?v=5qu94bhftpk)
    - Learn TEI Publisher 3, 22nd Jun 2020 [Video](https://www.youtube.com/watch?v=FS36nYFlTbE)
- Music is in the air – MEI and TEI Publisher by Giuliano Di Bacco and Dennis Ried, 8th Jul 2020 [Video](https://e-editiones.org/wp-content/uploads/2020/07/MEI_4_GDB_DR.pdf)
- Common eXist-db/TEI Publisher. Deployment Scenarios by Olaf Schreck and Lars Windauer covers different deployment scenarios of eXist-db and TEI Publisher, 9th Sep 2020 [Video](https://youtu.be/sA7H2f6zKmI)
- Open Source Advent: Presentation of a number of open source developments, 11th – 31st Dec 2020 [Link](https://e-editiones.org/osa20/)

### More Information

- [e-editiones-YouTube-Channel](https://www.youtube.com/channel/UCAPhSZdBwFRCEFWNNYOC4Ww)
- [e-editiones blog](https://e-editiones.org/blog/)

## Communication

The association immediately set up communication facilities for its members and the community. For technical questions about TEI Publisher, the central communication channel is [Slack](https://e-editiones.slack.com/shared_invite/zt-e19jc03q-OFaVni~_lh6emSHen6pswg#/). Recurring issues and questions are incorporated into the new [FAQ](https://faq.teipublisher.com/) page. For announcements and important messages, we use [Twitter](https://twitter.com/EEditiones). Follow us!

### More Information

- [e-editiones workspace on Slack](https://e-editiones.slack.com/shared_invite/zt-e19jc03q-OFaVni~_lh6emSHen6pswg#/)
- [TEI Publisher FAQ](https://faq.teipublisher.com/)
- [e-editiones.org on Twitter](https://twitter.com/EEditiones)
- Up-to-date list of [e-editiones communication channels](https://e-editiones.org/get-in-touch/)

## TEI Publisher Developments: Versions 6 and 7

In 2020 two major versions of TEI Publisher were released: versions 6 and 7. The plan for these versions was born during a meeting in Basel in November 2019, when several Swiss edition projects using TEI Publisher came together to discuss how the software could be developed into an even more sustainable platform. A number of them later became founding members of e-editiones. Their primary goal was to enable institutions to manage and maintain a larger number of editions, either on the same or several servers. To reduce maintenance costs, keeping editions up to date with newer TEI Publisher versions needed to be as simple as possible. Editions relying on different versions needed to be able to run alongside each other.

Two areas had to be addressed to achieve these goals:

1. On the **client side** TEI Publisher was already a collection of small, modular web components, which together formed the user interface. These components had to be extracted into a separate library, so projects could benefit from bug fixes and new components without having to update the rest of the edition's application.
2. On the **server side** TEI Publisher needed a well defined API. Such an API would provide a standardized communication channel, through which the web components on the client could talk to the server. To accommodate future updates and support backwards compatibility, the API would need to be versioned, ensuring that both sides could speak the same language.

Fortunately the _Swiss Nationale Infrastruktur für Editionen – Infrastructure nationale pour les éditions_ agreed to support the outlined ideas, funding a substantial part of the work.

With the release of TEI Publisher 7, both areas mentioned above have been addressed and the goal has been fully reached.

Contributions also came from member institutions: the Collection of Swiss Law Sources Online and the St. Galler Missiven were built on an early version of TEI Publisher 4. Both funded a major update of their code to version 7. A number of regressions and new bugs were encountered during the migration, and appropriate fixes were contributed back into the TEI Publisher code base.

The Karl Barth Gesamtausgabe likewise served as a test bed during TEI Publisher 7 development. Furthermore, the Karl Barth project financed the Microsoft Word to TEI transformation, which is now part of TEI Publisher.

The source code of TEI Publisher and its related repositories have been moved under the roof of e-editiones and are hosted within [its GitHub organization](https://github.com/eeditiones).

## Other Software Packages

Beyond TEI Publisher itself, e-editiones released a number of other software packages:

- The Open API routing library at the heart of TEI Publisher 7, called [Roaster](https://e-editiones.org/roaster-an-open-api-router-for-exist/), proved to be useful even outside the humanities and has already been adopted by a project in the medical realm.
- Born out of the Karl Barth Gesamtausgabe, e-editiones published an [extension for the Visual Studio Code editor](https://e-editiones.org/vscode/) to help editors work on TEI. This includes an entity explorer to help with the markup of entities in a text by querying external authority databases from within the XML editor.
- The [Cross Search](https://e-editiones.org/cross-search/) package provides a blueprint for a portal incorporating multiple editions, supporting cross-edition search facilities. This will become the basis for future hosting services.

## Community Contributions

Last but not least, we would like to point out the many contributions we received with respect to translations: TEI Publisher has now been translated to more than 20 languages!

We hope to see similar interest in other areas, e.g., the newly established [FAQ website](https://faq.teipublisher.com). We would like to encourage everyone to add entries and turn this into a knowledge base for all users. It already hosts questions and answers concerning encoding, workflows, or best practice recommendations.

## The Future

Continuing our cooperative development model, the following new components and features are scheduled to appear in the forthcoming minor version of TEI Publisher:

- A component for displaying mathematical formulae, sponsored by the Bernoulli project (Uni Basel).
- A feature to automatically register persistent DOI identifiers with every resource uploaded to TEI Publisher (financed by the DIPF).

e-editiones is actively apply for funding: a first proposal has been sent to a Swiss foundation, and we're waiting for feedback. The features we hope to obtain sponsorship for include:

- Better navigation within an edition by allowing arbitrary identification schemes for resources.
- Speaking and bookmarkable URLs.
- Improved accessibility.
- A timeline component.
- Components to improve the editorial workflow:
    - Git integration into the user interface for synchronization.
    - An annotation feature allowing editions to perform semantic markup tasks directly on the rendered text.

If you have other features on your list, please do not hesitate to propose them. We can achieve more at lower costs if we all work together. If you need a certain feature and plan to apply for funding, why not ask other projects which may have similar requirements? e-editiones is a welcoming umbrella under which your project can come together with other projects from different academic disciplines, coordinate needs, and potentially convince funding agencies to look beyond the perspective of a single project.
