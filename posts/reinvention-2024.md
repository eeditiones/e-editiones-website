---
title: "Reinvention, Responsibility & Resurrection: how to future-proof an edition"
short: "Reinvention, Responsibility & Resurrection"
lead: "As the time passes, many of the digital editorial projects struggle to remain available to the public..."
date: 2024-08-09
author: Magdalena Turska, Helena Bermudez Sabel
tags:  
  - conference
  - DH2024
  - tei-publisher
  - e-editiones
coverImage: /img/dh2024-poster-future-proof-preview.png
coverImageCredits: Juri Leino


---

## Problem

As the time passes, many of the digital editorial projects struggle to remain available to the public. Unmaintained servers break down, sometimes they are intentionally switched off because they pose an unacceptable security or legal threat, sometimes the funding for hosting runs dry. The IT department often feels unfit, unwilling or, despite the best of efforts, unable to update the old system to assure its continued operation. Whatever the reason, these situations are never easy - not on the users and certainly not on those responsible for reviving the old systems.

The user reaction is not difficult to imagine when one day a resource they came to rely upon goes (and remains) down. Sometimes there are alternatives, like a print version, tedious to consult, and expensive to buy, but at least still available somewhere. Often, the thing is just gone without a trace. In both cases, a stream of polite (or desperate) enquiries ensues, triggering an emergency meeting at the institution originally hosting the project. 

This is the moment for the assessment of the situation and, often, a wake up call. In the worst case, the old system is irreparably broken and there is no one available anymore who is familiar with its workflows and technical solutions. It may rarely get quite as dramatic for popular resources, but what does happen often is that documentation is scarce or virtually nonexistent, while the majority of the editorial and technical staff has moved on to pastures new, retired or passed away. 

## Challenges

In our line of work, as consultants and software developers, we find ourselves frequently called in as a last resort - to resurrect a project that already went dark or is tottering on the verge of collapse. If we're lucky, we can obtain a copy of the data in a reasonably processable form. Sometimes even there we need to jump through extra hoops: scraping old servers and databases or reconstructing the original sources from what remains available on the website. It can, of course, get even worse if the data is stored in obscure, proprietary formats. The first challenge, and a determining factor for success of restoring the project to its former glory, is therefore retrieving and subsequently converting the sources to a modern standard, a task usually involving readjusting the data model[<sup>1</sup>](#1) and its organisation.

Once the question of data is resolved, things do start to look brighter but we're not yet out of the woods. Where we can consult the predecessor to determine the original functionalities, or have a usable documentation, we can create a draft specification for the new system. But uncritically reconstructing the old solution is rarely a good idea. Obviously, our users are consulting online resources in a variety of ways on different devices, therefore UX and accessibility questions, rarely pondered in older days, need to be taken into account. Secondly, modern systems allow us often to provide a much broader set of functionalities than original. Not to forget that many countries set certain standards for public websites, which must be legally met. Therefore, a reevaluation of the requirements is a critical second step resulting in an updated specification for the thus reinvented system.

One implicit but major responsibility in any such update is future-proofing the project and this concern gains prominence proportionally to the pains of the remake. From what has been said above, it should be clear that relying on standards for the encoding, good data organisation, as well as clear documentation, are critically important in this regard.

## Case studies

In our presentation we would like to discuss challenges and solutions employed in very different projects which underwent such a reconstruction/reinvention process: *Alfred Escher-Briefedition*[<sup>2</sup>](#2) (Zürich, Switzerland), *Lexicon of Greek Personal Names*[<sup>3</sup>](#3) (Oxford, UK), *Register of Older Slovenian Manuscripts*[<sup>4</sup>](#4) (Ljubljana, Slovenia) and *Neolatina*[<sup>5</sup>](#5) (Kraków, Poland) and a few others. We will also analyze examples for which it remains so far impossible: *Bogactwa Mowy Polskiej*[<sup>6</sup>](#6) (Warsaw, Poland) and *EBBE*[<sup>7</sup>](#7) (Kraków, Poland). 

## Solutions

All these projects had their original data in very different formats (relational databases, custom XML, HTML, some in TEI) but all ended up using TEI and TEI Processing Model in their remake. Despite huge differences between these resources, for all of them we were able to design a new publication system based on the TEI Publisher's open source framework. While not imposing any arbitrary constraints on the encoding style or presentational aspects, thanks to a modular, customizable design founded on acknowledged and widely adopted standards (e.g. TEI, DocBook, JATS, web components, JSON, IIIF and OpenApi) we can accomodate virtually any, even radically heterogeneous, text-based scholarly publications, under one roof and assure they will stay safe for the future upgrades and maintenance in an interoperable environment.


Building on our own experiences, but also supported by a growing number of editions and other scholarly publications embracing our approach, we are confident to present a viable future-proof solution for a standards-based, sustainable, interoperable and open publication model.  At the time of writing there are already infrastructural endeavours at national and institutional level, such as Sources Online[<sup>8</sup>](#8) in Switzerland and Jagiellonian Digital Platform[<sup>9</sup>](#9) in Poland, which assume conformance with this publication model as a sine qua non requirement in accepting projects for long-term hosting on their respective platforms. We believe that we have created a sound conceptual foundation for the digital scholarly publications which has also been thoroughly battle-tested in practice. 


The emerging community of practice which stays in touch through monthly online meetings under the banner of e-editiones[<sup>10</sup>](#10) and daily Slack communications with about 350 members of the community channel, is a clear proof that these efforts are much appreciated. Yet, more importantly, it gives us both the responsibility to keep the project running, as well as hope that together we can indeed make it happen.

## Footnotes
1. <spand id="1"/>Cf. the critical role of modelling in scholarly editing (Pierazzo, 2014, p.11)</span>
1. <spand id="2"/>Jung Joseph (Hrsg.), Digitale Briefedition Alfred Escher, Relaunch Januar 2022, Zürich, cf. https://briefedition.alfred-escher.ch
1. <spand id="3"/>Nine published volumes ot the Lexicon and two in preparation, cf. https://www.lgpn.ox.ac.uk/volumes
1. <spand id="4"/>Published by the Institute of Slovenian Literature and Literary Studies, cf. https://rrss.manuscripta.zrc-sazu.si/
1. <spand id="5"/>Biblioteka Literatury Staropolskiej i Nowołacińskiej, cf. http://neolatina.bj.uj.edu.pl/neolatina/
1. <spand id="6"/>E. Rudnicka et al, Bogactwa Mowy Polskiej. Laboratorium Leksykograficzne ks. Alojzego Osińskiego, Warsaw 2012, no longer available online
2. <spand id="7"/>W. Walecki et al, Elektroniczna Baza Bibliografii Estreichera, Kraków, 2003, cf. https://www.estreicher.uj.edu.pl/
3. <spand id="8"/>Sources Online, cf. https://sources-online.org
4. <spand id="9"/>Digital Humanities Lab: Jagiellonian Digital Platform. In preparation, cf. https://dhlab.id.uj.edu.pl
5. <spand id="10"/>e-editiones, is a non-profit scholarly society registered in Switzerland and dedicated to coordinating developments in open source software for digital editions and ensuring their long-term availability, cf. e-editiones.org


## References 
1. Turska, M. (2021). [Digital editions survival kit. Reconstructing an edition](https://www.e-editiones.org/posts/digital-editions-survival-kit). 
2. Turska, M., Cummings, J. and Rahtz, S. (2016). [Challenging the Myth of Presentation in Digital Editions](https://journals.openedition.org/jtei/1453). In Journal of the Text Encoding Initiative, Issue 9.  
3. Meier, W. [Shaping the future](https://www.e-editiones.org/resources/Community1022-1.pdf). In e-editiones community meeting presentation
4. Pierazzo, E. (2014). [Digital Scholarly Editing: Theories, Models and Methods](https://hal.univ-grenoble-alpes.fr/hal-01182162).
5. TEI Consortium (2023). [Processing Models](https://tei-c.org/release/doc/tei-p5-doc/en/html/TD.html#TDPM). In TEI P5: Guidelines for Electronic Text Encoding and Interchange.
6. Turska, M. and Cummings, J. (2016). [A Lesson in Applied Minimalism: Adopting the TEI Processing Model](https://dh2016.adho.org/abstracts/88). In Digital Humanities 2016: Conference Abstracts. Jagiellonian University & Pedagogical University, Kraków, pp. 698–9.
7. Wicentowski, J. C. and Meier, W. (2015). [Publishing TEI Documents with TEI Simple: A Case Study at the U.S. Department of State’s Office of the Historian](https://www.balisage.net/Proceedings/vol15/html/Wicentowski01/BalisageVol15-Wicentowski01.html). In Balisage: The Markup Conference 2015. Washington, DC. 10.4242/BalisageVol15.Wicentowski01.