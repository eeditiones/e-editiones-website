---
title: "When the Wall Came Down – how the world watched German reunification"
short: "When the Wall Came Down"
lead: "How the world watched German reunification. A playful take on a serious subject. Relaunched with TEI Publisher 11"
author: Wolfgang Meier, Lars Windauer, Magdalena Turska
date: 2026-10-02
tags:
  - announcements
  - e-editiones
coverImage: wall-logo.svg
coverImageCredits: screenshot by Lars Windauer
---

Exactly 36 years ago today, on 2 October 1990, the German Democratic Republic saw its last day. On the 3rd of October, Germany celebrates the Day of German Unity. Between the opening of the Wall on 9 November 1989 and the day of reunification, diplomats all over the world tried to make sense of events that were moving faster than anyone had expected. None of them knew how the story would unfold.

<a href="https://teipublisher.org/exist/apps/wall-came-down">
    <figure class="right-margin">
        <img src="/img/when-the-wall-came-down-1.png">
        <figcaption>When the wall came down - click to open the edition</figcaption>
    </figure>
</a>

To mark the anniversary, we are relaunching *When the Wall Came Down*, a selection of diplomatic documents from 1989–1990. This showcase edition is based on the printed volume *When the Wall Came Down. The Perception of German Reunification in International Diplomatic Documents 1989–1990* (Quaderni di Dodis 12), edited by Marc Dierikx and Sacha Zala and published in 2019 by [Diplomatic Documents of Switzerland (Dodis)](https://www.dodis.ch/), Bern, and the [Leibniz Institute for Contemporary History](https://www.ifz-muenchen.de/en/), Munich–Berlin. The original publication is available [online](https://www.dodis.ch/en/q12) on Dodis. 


Thanks to the fact that the volume was released under a CC BY licence, we were able to repeatedly use it for demonstration purposes and teaching over the past years. With the new **TEI Publisher 11**, released in mid-September, we wanted to revisit this edition, and see how we could creatively enhance the scholarly output with our own ideas for its presentation. 


The new affordances of the TEI Publisher/Jinks framework, complemented with possibility to employ LLMs to carry out some of the tedious tasks – like re-encoding the data to be able to offer alternative visualizations – allowed us to get playful and see quick results without too much elbow grease.


We three are old enough to have our own memories and impressions of these days – even if in '89 we were living on the opposite sides of the Iron Curtain. Therefore we are thrilled at the opportunity to reinterpret and reshape the edition despite the fact we are engineers, not historians. 

In the face of a rising culture of hatred, fear and exclusion, we feel it is important to remember the legacy of those, who 36 years ago fought for a free, democratic and open society. With this perspective, we think the edition should now best speak for itself.

<a href="https://teipublisher.org/exist/apps/wall-came-down">
    <figure class="center">
        <img src="/img/wall-logo.svg"  style="border: 0px;">
        <figcaption>click to open the edition</figcaption>
    </figure>
</a>


For the curious, we do have a [brief technical overview](#built-with-tei-publisher-11), and, for the young, a bit of context on the [documents and events](#reading-the-documents-against-the-events) they describe.


### How the world watched

<a href="https://teipublisher.org/exist/apps/wall-came-down/wall-index.html#about">
    <figure class="right-margin">
        <img src="/img/when-the-wall-came-down-2.png">
        <figcaption>Birgit Kinder, »Test the Best«, East Side Gallery, Berlin.</figcaption>
    </figure>
</a>
The documents were written between 14 September 1989 and 11 November 1990, from the refugee crisis before the Wall opened to the weeks after German unity. They come from embassies in Bonn and East Berlin, from other missions in Berlin, from posts as far afield as Warsaw, Paris and Tel Aviv, and from ministries and offices in the capitals. Telegrams, memos, minutes and letters show how events were perceived at the time, often before anyone knew how things would turn out.


The 63 documents come from eleven countries: Austria, Canada, Germany, Israel, the Netherlands, Poland, Russia, Switzerland, Turkey, the United Kingdom and the United States. They are written in eight languages. German, English and French documents appear in the original, all others in English translation.

### Reading the documents against the events
<a href="https://teipublisher.org/exist/apps/wall-came-down/chronicle.html">
    <figure class="right-margin">
        <img src="/img/when-the-wall-came-down-3.png">
        <figcaption>Chronicle filtered by country.</figcaption>
    </figure>
</a>
The heart of the edition is the [chronicle](https://teipublisher.org/exist/apps/wall-came-down/chronicle.html). It places every document on a timeline next to key events, such as Kohl's Ten-Point Plan, the first free elections in the GDR, the Two-plus-Four Treaty and reunification itself. The busiest week is, of course, the one right after 9 November 1989. 


You can filter by country, document type or place, putting focus where *you* want it.


Looking across countries makes the national concerns clear:

* The Dutch ambassador in Bonn criticises the "false note" of Kohl's reunification claim in the celebrations.
* Poland makes its support conditional on the recognition of its western border.
* The Soviet Union accepts German unity but rejects NATO membership.
* Canada worries about being squeezed out of the Two-plus-Four talks.
* Israel weighs establishing diplomatic relations with the GDR on the eve of unification.

### "Adieu, DDR!"
<a href="https://teipublisher.org/exist/apps/wall-came-down/documents/49561.xml?view=single&odd=wall">
    <figure class="right-margin">
        <img src="/img/when-the-wall-came-down-4.png">
        <figcaption>Franz Birrer, political report no. 16, East Berlin, 2 October 1990. Dodis document 49561.</figcaption>
    </figure>
</a>

A political report by Franz Birrer, Switzerland's ambassador in East Berlin is almost last in the collection. Dated 2 October 1990, exactly 36 years ago, it opens with the sentence: "Today the history of the state of the GDR comes to an end."

Birrer looks back on three years in East Berlin. When he arrived, nothing suggested that this state would disappear so quickly and so completely. He describes how the exodus through embassies and the Hungarian border and the mass demonstrations brought down the SED leadership within weeks. How exactly the Wall came to open on 9 November, he notes, was still unclear.

About the road to unity he is critical, yet the report is not one-sided. From a European standpoint, Birrer writes, German unity is undoubtedly to be welcomed: the division of Europe, Germany and Berlin was always artificial, even absurd, and the new Germany is federal, democratic, averse to militarism and integrated into the EC and NATO.

### Built with TEI Publisher 11 

The new edition was created on top of TEI Publisher 11. The design brief was rather simple, to put focus on the chronological development of events and create an attractive presentation.

During the implementation, a longer conversation with Claude Code proved very successful. Thanks to the skill set now shipping with TEI Publisher apps – it applied styling suggestions in the correct files and observed our best practice recommendations. We also used the LLM to refactor some of the TEI, which was originally targeting a printed book, not an online presentation. For example, we asked it to compile a people register out of the footnotes – and as far as we could see, it did this quite thoroughly. Occasional spelling errors we spotted turned out to be already present in the original source.

The resulting edition is a standard TEI Publisher application. It comes with its own ODDs, an API, and it can be downloaded as a .xar package. It can be upgraded and maintained in the future with Jinks application manager.

### Explore

* [Edition](https://teipublisher.org/exist/apps/wall-came-down)
* [About the edition](https://teipublisher.org/exist/apps/wall-came-down/wall-index.html#about)
* [Chronicle](https://teipublisher.org/exist/apps/wall-came-down/chronicle.html)
* ["Adieu, DDR!"](https://teipublisher.org/exist/apps/wall-came-down/documents/49561.xml?view=single&odd=wall)
* [TEI Publisher 11](https://www.e-editiones.org/posts/tei-publisher-11/)
* [Getting started with TEI Publisher](https://www.e-editiones.org/pages/getting-started/)
  