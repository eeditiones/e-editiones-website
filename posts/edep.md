---
title: "EDEp – Editing Tools for Digital Epigraphy"
lead: "New possibilities for complex form-based editing in TEI Publisher. Not only for epigraphers."
date: 2024-06-18
author: Wolfgang Meier
tags:
  - report
  - epidoc
  - fore
coverImage: /img/edep.png

---

The [EDEp](https://www.hadw-bw.de/forschung/forschungsstelle/editionstools-fuer-eine-digitale-epigraphik-edep) project, funded by the DFG from 2022 to 2024, researches the possibilities and demands of digital epigraphy and develops corresponding editing tools. Rather than aiming at yet another project-specific solution, the goal was to create a versatile toolbox, designed for customizability and extensibility.

In a nutshell, EDEp adds a convenient editor for epigraphic material encoded in [EpiDoc](https://epidoc.stoa.org/) to TEI Publisher. But it’s more than that: it’s a collection of tools and technologies, which can be used to support editors in creating any kind of metadata in TEI. In this respect it is following TEI Publisher’s concept of providing a box of modular “Lego” blocks rather than a monolithic one-size-fits-all framework. The EDEp toolbox includes

* a declarative forms framework in modern HTML, which operates directly on the actual TEI XML: no data mapping or conversion required
* web components for transcribing inscriptions using Leiden markup
* components allowing assisted XML editing of specific micro-environments

The project demonstrates how these components can be assembled to support a complex editing workflow. Combined with TEI Publisher’s ODD-based transformations for the presentation part, these features mark another important step forward towards a complete edition creation workflow within a single application.

## EpiDoc

As a customization of TEI, [EpiDoc](https://epidoc.stoa.org/) is not a rigid standard in the sense that there’s only one way to encode things. Epigraphic projects cover a wide range of fields and will necessarily differ in the details to be encoded. Furthermore, EpiDoc documents feature a mix of structured and unstructured data, posing challenges for conventional data modeling, such as that required by relational databases.

EDEp operates directly on the EpiDoc TEI, therefore avoiding the need to establish and maintain a data mapping between user input, database and the resulting XML. Adding a feature then simply becomes a matter of extending the EpiDoc XML template and binding a form control to the new nodes to allow editing. For sure this still requires certain skills and a good understanding of the EpiDocTEI, basic HTML and XPath, but no actual programming.

## The Application

To see the [EDEp application](https://edep.adw.uni-heidelberg.de/index.html) in action, log in as user “edep” with password “edep”. To get to the editor, click on the pencil icon below the document title. Full instructions concerning installation and customization are available on GitHub.

![Start page](https://raw.githubusercontent.com/eeditiones/edep/master/doc/edep-start.png)

The current state of the application itself should be considered an early beta, i.e. fully usable, but still under development. For sure the visual aspects of the form could be improved, but our focus so far was on functionality, not design, and most of the development time went into preparing the foundations upon which others can hopefully build in the future.

## The Forms
All forms were authored in a declarative way: they are just modern HTML – no script coding, building or bundling required. As a result, modifying or extending the forms to fit your own requirements can be done without programming. And, most important: all form controls operate directly on the real EpiDoc TEI loaded into the browser in the background! No need to define a complex data mapping: each form field targets the XML it binds to via an XPath expression. As you edit any of the fields, the EpiDoc TEI is constantly updated within the browser’s memory to reflect the changes and can be saved on request.

![EDEp editor](/img/edep-screenshot2.png)

The forms framework, [Fore](https://github.com/Jinntec/Fore), was developed independently by Jinntec, but EDEp served as the most complex test case so far and required the development team to address various technical and conceptual issues. Also thanks to EDEp, Fore has advanced into a production ready tool.

To give you a quick impression, a form field in the HTML of the editor will look like this (in slightly simplified form):

```html
<fx-control ref="physDesc/objectDesc/supportDesc/condition" update-event="input">
    <label>Preservation</label>
    <select class="widget">
        <option value="">unknown</option>
        <option>complete</option>
        <option>fragmentary</option>
    </select>
</fx-control>
```

As you can see, this wraps a standard HTML `select` with a `label` into an `fx-control`. Elements starting with `fx-` are custom web components, which come with Fore. All modern web browsers know how to deal with these web components as the technology has been part of the HTML5 standard for a while now.

![The preservation field as shown on the screen](/img/edep-screenshot3.png)

The `fx-control` connects the form controls with the underlying EpiDoc document. The `@ref` attribute binds the control to the `condition` element in the `teiHeader` via the given XPath expression (relative to the elements selected by parent controls). Whenever the user changes the preservation field, the `condition` element in the `teiHeader` will change accordingly.

# The Transcription
While the transcription is stored as TEI/XML within the EpiDoc, epigraphers would normally use the *Leiden convention* for encoding it. Leiden provides a fast way to capture details, which would otherwise require rather verbose TEI markup. Drawing some inspiration (and code) from the Patrimonium project, we decided to implement an editor component, which allows users to switch between Leiden and TEI, converting on the fly between the two. The typical workflow would be to first transcribe using Leiden and then – if needed – fine tune the XML with additional information not supported by Leiden, e.g. references to places or people.

Leiden comes in different variants. While the editor also supports EDH and Petrae, we suggest *Leiden+* as the preferred syntax. The main reasons: it allows grammar-based validation, error reporting and a clean roundtrip from Leiden+ to XML and back.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/Bcr0a-obD8I?si=QLF55FoOB5NuG2AR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The video above shows the transcription using Leiden on top and the generated TEI at the bottom. The editor detects incorrect Leiden+ and provides some utilities to correct e.g. the line numbering. Editing the Leiden+ will immediately change the TEI, but as soon as the user edits the XML, the Leiden+ editor is hidden to indicate that the XML is considered the canonical version. One can reopen the Leiden+ editor as long as the XML stays compatible with Leiden+.

The editor is fully customizable with code snippets, toolbar buttons and keyboard shortcuts.

# Inline Markup: XML Editors

When encoding the translation, commentary or apparatus, users would obviously like to include rich markup, e.g. for bibliographic references, semantic annotations etc., so a plain text editor would not be sufficient. In fact, users quickly expressed the wish to be able to use inline markup for basically all free text inputs.

EDEp therefore adds a powerful XML editing component, providing a micro-environment for specific subparts of the EpiDoc. The editor features context-sensitive suggestions: if a user edits, for example, a note attached to a bibliographic entry, the editor “knows” the tags which may appear in this exact context and displays corresponding suggestions when the user types.

Toolbar buttons, code snippets and a selection of keyboard shortcuts, e.g. to wrap the current selection with an element, complement the editor. All this is fully configurable in the HTML. The Leiden+ and XML editors were released as separate, independently usable components.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/AA5RjIUxC7U?si=9qDQjzYdiaMpMDH3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Outlook

Beyond the specialized field of epigraphy, EDEp provides a foundation for building more complex editing environments, using a mix of form-based entry, XML micro editors and plain text markup conventions like Leiden. It should be easy to see how this concept could be expanded to many other use cases. For sure some rough edges still need to be smoothed out, but thanks to EDEp, we consider the underlying components to be close to production-ready state.

Many parts of EDEp already found their way into TEI Publisher 9: the custom entity editing forms in the web-based annotation editor are based on Fore, also featuring the context-sensitive XML editor component for entering notes.

Extending EDEp, we would also like to see a well-documented, more generic – i.e. less focused on epigraphy – `teiHeader` editing environment in TEI Publisher to serve as a blueprint for other projects, allowing users to copy and paste the bits and pieces they need to support their particular workflow. But as always we would need to find some funding for this.

This would well fit into our plans for TEI Publisher 10, which will introduce the concept of “application profiles”, i.e. a collection of modular templates covering typical features of an edition project. This would include ready-to-use blueprints for specific edition types like correspondence, monography, dictionaries etc., but also workflow modules, which can be imported, e.g. the annotation editor. The goal is that users will be able to click together a digital edition in a Fore-based interface, choosing from the available blueprints, templates and modules without having to dive into the source code. An EDEp-like `teiHeader` editor would make a perfect new component, which can be customized to match the type of edition that is being created.

# Links

* [EDEp project description](https://www.hadw-bw.de/forschung/forschungsstelle/editionstools-fuer-eine-digitale-epigraphik-edep)
* [EDEp editor](https://edep.adw.uni-heidelberg.de/index.html)
* [Application code](https://github.com/eeditiones/edep) with installation instructions
* [XML and Leiden editors](https://github.com/JinnElements/jinn-codemirror)
* [Fore declarative forms](https://github.com/Jinntec/Fore)