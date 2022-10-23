---
title: "New Visual Studio Code extension for TEI Publisher"
author: "Wolfgang Meier"
date: "2020-12-09"
categories: 
  - "tei-publisher"
tags: 
  - "news"
  - "semantic-encoding"
  - "tei"
  - "vscode"
coverImage: "word.png"
---

Enhancing TEI documents with semantic markup, i.e. encode places, people or terms, can be a time consuming and tedious task. For the Karl Barth edition project, we have thus created a new extension for Visual Studio Code (vscode) and published it as Open Source.

## Where it all started: a Word plugin

Within the Karl Barth edition, texts to be published in new volumes are encoded in Microsoft Word and transformed to TEI using TEI Publisher's powerful [docx2TEI conversion](https://teipublisher.com/exist/apps/tei-publisher/test/test.docx.xml) feature based on the TEI processing model.

To simplify semantic encoding, eXist Solutions created a **Word plugin** for the project, which allows editors to easily encode entities occurring within the text: select a string representing an entity, click a button and the plugin will run a query against the database of the Karl Barth Gesamtausgabe, showing potential matches for each possible category.

With another click, the selected entity is inserted into the Word document, including a reference to the entity in the database. This proved to be a huge timesaver: what took minutes before - switching to a different window, doing a search and copying the ID - is now done in seconds. A screenshot of the Word plugin is shown below:

![MS Word screenshot](/img/word.png)

The plugin also allows editors to get a preview of how the current text would look like in TEI and how it would be rendered to HTML by TEI Publisher's ODD-based transformations. The preview feature sends the underlying Word XML to a TEI Publisher instance, which transforms it first to TEI, and then - if requested - to HTML. Editors can thus see the text as it would later appear on the website.

## Porting it to Visual Studio Code

However, the Word-workflow only covers the new volumes: we still have 54 already published volumes in TEI, which need to be extended. Parts of this is done automatically (via entity detection), but there's still a lot of manual editing involved. Thus the question arised if the Word plugin could be ported to an XML editor.

For sure, oXygen would have been the obvious choice, but since the Word Plugin was already written in javascript/typescript, we decided to give Visual Studio Code a try. It turned out to be rather straightforward and the first usable version was done within one evening. Thrilled by the success, we invested two more days to make the plugin more generic, in particular, add connectors for other authority databases. Beyond the Karl Barth Gesamtausgabe, we now have connectors for the German GND, metagrid, Geonames and Google places.

![Enity lookup screencast](/img/screen-entity.gif)

The TEI snippet to be inserted for each of the entity types can be configured in the settings. For example, you could replace `<persName>` with `<name type="person">` if you like.

## Previews

The HTML preview feature has been ported as well: pressing a keyboard shortcut or clicking the toolbar icon will present you with a list of ODDs available for transformations, and then open a new editor panel showing the transformation result in HTML. All you need is a TEI Publisher 7 instance which has a matching ODD installed. The plugin uses the general API introduced with TEI Publisher 7, which will also be exposed automatically by any application generated from it.

![HTML preview screencast](/img/screen-preview.gif)

## Snippets

Finally, it is rather straightforward to create reusable snippets in vscode. To start with, we implemented the one shortcut we use most in oXygen and miss everywhere else: wrap the current selection with an element (the Scholarly XML extension described below also has this, but it doesn't hurt to have it twice in case you're not using that).

And since we have to encode a lot of foreign texts, we also added one for `<foreign>`. Doing more would be easy: maybe you have some suggestions? Just write them into our [github issues](https://github.com/eeditiones/tei-publisher-vscode/issues).

## Combine with other extensions

If you combine this with other extensions available on the vscode marketplace, you get rather decent XML editing support - not as sophisticated as with oXygen, but good enough for some serious work.

For schema-based validation and context sensitive suggestions one can choose between two extensions: [Scholary XML](https://marketplace.visualstudio.com/items?itemName=raffazizzi.sxml) is lightweight and provides nice suggestions with documentation. It only understands relax-ng though and does not support catalogs, which means you need to reference the schema via a processing instruction in every TEI file. The second option, [XML Language Support by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml), supports XML schema and catalogs, which you can use to associate the TEI namespace with a schema once and for all. On the downside, it uses more system resources as it starts a background Java process.

To set up a catalog, just create a file `catalog.xml` somewhere with e.g. the following content and change the vscode configuration property `xml.catalogs` to point to it:

```xml
<catalog xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
  <uri
      name="http://www.tei-c.org/ns/1.0"
      uri="https://tei-c.org/Vault/P5/current/xml/tei/custom/schema/xsd/tei_all.xsd" />
</catalog>
```

Finally, if you use TEI Publisher as a basis for your own editions, you definitely want to install the [Language Server and Client for XQuery/eXistdb](https://marketplace.visualstudio.com/items?itemName=eXist-db.existdb-vscode). It supports working on XQuery files, syncing your local changes with the database, installing XAR files and more.

## Get it

The extension is available from Microsoft's [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=e-editiones.tei-publisher-vscode). To install it in your own Visual Studio Code, just open the _Extensions_ tab and search for `tei-publisher-vscode`.

All source code is available on the [e-editiones github](https://github.com/eeditiones/tei-publisher-vscode) and we would like to invite others to further extend it, e.g. by adding connectors to other authority APIs. Connectors are simple javascript/typescript classes with just two methods. See the [existing connectors](https://github.com/eeditiones/tei-publisher-vscode/tree/master/src/connectors) for inspiration.

If you have questions, suggestions or would like to discuss further extensions: you'll find us in the [e-editiones slack](https://e-editiones.org/get-in-touch/) rooms.
