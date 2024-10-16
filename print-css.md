---
layout: "layouts/content.njk"
title: "Generating CSS for print"
short: "Generating CSS for print"
lead: TEI Publisher 8 will support creating print output using CSS Paged Media. This supplements the existing FO and LaTeX output modes.
author: Wolfgang Meier
date: 2023-02-12
tags:
    - announcements
    - tei-publisher
coverImage: bank-phrom-Tzm3Oyu_6sk-unsplash.jpg
coverImageCredits: Cover photo by <a href="https://unsplash.com/@bank_phrom?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bank Phrom</a> on <a href="https://unsplash.com/s/photos/printing-press?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> 
---

> TEI Publisher 8 will support creating print output using CSS Paged Media. This feature supplements the existing FO and LaTeX output modes. While FO and LaTeX require quite some customization in the ODD, Print CSS extends the existing HTML view and CSS styles to layout the text on the printed page.

Though it has improved, browser support for CSS Paged Media (often also called *Print CSS*) is still insufficient. However, there are tools to fill the gap. The starting point for my recent exploration into this technology was an edition of medieval hagiography. The editors requested a printout, which should ideally resemble the future website as closely as possible, so corrections could be done on paper. While LaTeX does provide all the fancy features needed (e.g. an aligned parallel layout of transcription and translation using the powerful reledpar package), the result would quickly diverge from the web version, hence would not be suitable for the review process.

Looking into CSS Paged Media as an alternative, I was surprised by what is possible by now in the browser. The book had quite a complex layout, using different types of marginal notes, text critical apparatus etc. Even though I could not realize every feature just within the browser and had to switch to an external utility (see below), the results were satisfactory and would certainly be sufficient for a slightly simpler edition.

## A print preview for TEI Publisher

<figure class="right-margin">
    <img src="/img/serafin-print.png">
    <figcaption>Page from the TP demo with margin notes and running head rendered with paged.js</figcaption>
</figure>

We have therefore decided to integrate this approach more tightly into TEI Publisher, providing a separate print preview page for those sample documents for which it makes sense, as well as an API endpoint to retrieve the complete HTML of a document targeted at print.

The new feature will become available with the TEI Publisher 8 release. If you would like to experiment with it right now, feel free to use one of the [docker images](https://github.com/eeditiones/tei-publisher-app/pkgs/container/tei-publisher-app%2Fteipublisher) - which always reflect the current state of development - or build TEI Publisher yourself.

The new print preview page includes a brilliant javascript library, [paged.js](https://pagedjs.org/), which fills many of the gaps in browsers concerning CSS Print support. Without this library, web browsers would ignore most parts of the page layout and just generate a very basic printout. With paged.js though, you can use the browser's default print dialog to get a pretty fancy printed version.

paged.js is open source and still under development, so there are limitations (see below). For linear documents like the TEI Publisher documentation it does produce very good results though. 

## New print output mode in tei-publisher-lib

Obviously not everything you can do on a screen will work on paper. For example, the `alternate` behaviour defined in the TEI guidelines will by default generate a popup if you use the `web` output mode in TEI Publisher. We can't do that on paper. Therefore we need a way to distinguish between HTML targeted at the screen and HTML for print by using a different output mode in the ODD. This requires a change in the underlying core library of TEI Publisher, called `tei-publisher-lib`. 

The newly released `tei-publisher-lib` version 3.0.0 reassigns the `print` output mode to generate HTML for print. `print` extends `web`, overwriting the two behaviours, which would fail on paper: `note` and `alternate`. Both involve popups. `print` just outputs them as plain HTML to be processed by print CSS styles.

You'll need to [update](/posts/tei-publisher-lib-3) `tei-publisher-lib` to benefit from the newly added features. `print` was previously defined as a synonym for `fo` and generated XML output to be further processed by an XSL/FO engine like Apache fop. Reassigning it constitutes a breaking change (hence the major 3.0.0 version, which indicates: not backwards compatible), though the `fo` mode will still work as before. Please keep this in mind when you decide to upgrade and read the [instructions](/posts/tei-publisher-lib-3).

## Adding CSS for print

TEI Publisher 8 will include a default CSS stylesheet for print, residing in `resources/css/print.css`. The API endpoint, which generates HTML for print, automatically injects this. The default stylesheet sets the paper size to 'A4', adds margins for recto and verso pages, page numbers in the respective bottom corners, and most important: a footnote area at the bottom. HTML elements with class *footnote* will be output there.

You can extend this by adding your own print styles as follows: if you have not done that yet, create an empty CSS file next to the location in which your ODD is stored (`odd` in TEI Publisher or `resources/odd` in a generated app). Associate this with your ODD by adding a corresponding `<rendition>` element to the `<teiHeader>`:

```xml
<encodingDesc>
    <tagsDecl>
        <rendition source="shakespeare.css"/>
    </tagsDecl>
</encodingDesc>
```

Note that you need to recompile your ODD whenever you change the associated CSS. This is needed as TEI Publisher combines the stylesheet with any `<outputRendition>` styles defined in the ODD. 

## Writing CSS

All CSS rules targeted at print should go into a `@media print` section. To start with, we could add a running head to the left and right pages:

```css
@media print {

    @page:left {
        margin-left: 1cm;
        margin-right: 1cm;

        @top-left {
            content: string(runningHead);
            font-family: var(--pb-heading-font-family);
        }

        @bottom-left-corner {
            content: counter(page);
            font-family: var(--pb-heading-font-family);
        }
    }

    @page:right {
        margin-left: 1cm;
        margin-right: 1cm;

        @top-right {
            content: string(runningHead);
            font-family: var(--pb-heading-font-family);
        }

        @bottom-right-corner {
            content: counter(page);
            font-family: var(--pb-heading-font-family);
        }
    }
}
```

Key here are the added `@top-left` and `@top-right` sections, which take their content from a - so called - *named string*, in this case: `runningHead`. We'll set this *named string* using the content of each `<h1>` heading output by our ODD transformation:

```css
@media print {
    ...
    h1 {
        string-set: runningHead content(text);
        break-before: page;
    }
}
```

We also request that a page break is inserted before every title. As you have full control over the ODD which generates the HTML, you could also decide to use a different element or a given class name. You can even combine multiple named strings into one running head (as demonstrated by the TEI Publisher documentation).

The chapter on [generated content and margin boxes](https://pagedjs.org/documentation/7-generated-content-in-margin-boxes/) in the *paged.js* documentation explains the concepts very well, so please refer there for further information.

Another feature working nicely with the *paged.js* library behind TEI Publisher's print preview page is a multi-column layout. To enable two columns, simply add `columns: 2` to the enclosing parent element. You can also specify that headings should span across both columns as shown before:

```css
@media print {
    ...
    section {
        columns: 2;
    }

    h1, h2, h3 {
        column-span: all;
        text-align: center;
    }
}
```

## Limitations and alternatives

<figure class="right-margin">
    <img src="/img/serafin-prince.png">
    <figcaption>Parallel display of transcription and translation rendered via Prince XML</figcaption>
</figure>

The *paged.js* library is still under development and has its limitations. For example, I have not been able to create a two column layout with aligned transcription and translation, though I tried various approaches. Using a table worked as long as both parallel paragraphs would fit on the page, but longer paragraphs were separated.

Fortunately there are several tools which run outside the browser and provide better coverage for Print CSS, though the majority of them is commercial. A list can be found on [print-css.rocks](https://www.print-css.rocks/tools).

<figure class="left">
    <img src="/img/print-preview-copy.png" height="196px">
    <figcaption>Toolbar</figcaption>
</figure>

Most of those tools operate on the command line and expect an HTML file as input. To simplify this task we created an API endpoint in TEI Publisher, which retrieves the print optimized HTML for an entire document and injects the necessary stylesheets. You can copy the endpoint URL for a given document by using the corresponding button in the print preview interface. 

For example, using Prince XML on windows, one can paste this URL directly into the application's dialog. The endpoint URL has the following structure:

`/api/document/test%2Forlik_to_serafin.xml/print?odd=serafin.odd
&base=%2Fexist%2Fapps%2Ftei-publisher%2Ftest%2F
&style=resources%2Ffonts%2Ffont.css
&style=resources%2Fcss%2Fprint.css`

Here `odd` defines the ODD to use for the transformation, `base` is the base URI from which additional stylesheets or images are loaded, and `style` lists one or more additional CSS stylesheets.

## Conclusion

While I have many years of experience with FO and worked on some LaTeX-based projects, I did not really look into Paged Media CSS until recently. Though browser support is still lacking, a library like paged.js definitely fills the gap, at least for documents not requiring parallel layout or huge tables (see the TEI Publisher documentation for example). For complex layouts, commercial software like [Antennahouse](https://www.antennahouse.com/) or [PrinceXML](https://www.princexml.com/) (to just name two) can provide high quality print.

<figure>
    <img src="/img/tei-publisher-docs-printcss.png">
    <figcaption>Two pages from the TEI Publisher documentation rendered with paged.js</figcaption>
</figure>

The one great advantage of using Print CSS instead of FO or LaTeX is that you can work on the web and the print version at the same time and generate both from the same ODD, distinguishing the output mode in a few places only. This allows for rapid prototyping and quick review cycles. 

We'd like to ask the community to support us in this area by contributing further examples. Help us push the limits of what can be done.
