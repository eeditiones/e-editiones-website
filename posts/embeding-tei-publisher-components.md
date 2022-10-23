---
title: "TEI Publisher Components in Wordpress"
lead: "How to embed TEI content into a Wordpress website"
author: "Andreas Kränzle"
date: "2019-09-07"
categories: 
  - "tei-publisher"
tags: 
  - "hugo"
  - "pb-component"
  - "wordpress"
coverImage: "tolga-ahmetler-TrEpkuxu72I-unsplash.jpg"
---

This is a short rewrite of Wolfgang’s post on [Embedding TEI Publisher Components](https://teipublisher.onrender.com/post/embedding-publisher/) in [Hugo](https://gohugo.io/) . For Wordpress you can do the same thing very easily. I used the example of Wolfgang’s post; just make sure that your site is whitelisted.

Just install the [Code Embed Plugin](https://de.wordpress.org/plugins/simple-embed-code/) and create a [custom field](https://wordpress.org/support/article/custom-fields/) [1](#fn:1) with the name "CODEpbembed" and the value:

```
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/webcomponents-loader.js"></script><script type="module" src="https://unpkg.com/@teipublisher/pb-components@latest/dist/pb-components-bundle.js"></script>
```

Then add another custom field with the name "CODEpbkant" and the value:

```
<pb-page endpoint="https://teipublisher.com/exist/apps/tei-publisher" emit="kant" class="embedded"><pb-document id="kant" path="test/kant_rvernunft_1781.TEI-P5.xml" odd="dta"></pb-document><pb-navigation direction="forward" keyboard="right" emit="kant" subscribe="kant"><paper-fab icon="icons:chevron-right"></paper-fab></pb-navigation><pb-navigation direction="backward" keyboard="left" emit="kant" subscribe="kant"><paper-fab icon="icons:chevron-left"></paper-fab></pb-navigation><pb-view src="kant" xpath="//teiHeader/fileDesc/titleStmt/title" emit="kant" subscribe="kant"><pb-param name="header" value="short"></pb-param></pb-view><pb-view class="transcription" src="kant" view="page" emit="kant" subscribe="kant" append-footnotes="" animation=""></pb-view></pb-page>
```

We add a third custom field with some CSS:

```
pb-page {
    position: relative;
    padding-top: 10px;
    border-top: 1px solid #e0e0e0;
}

.embedded pb-navigation {
    position: absolute;
    top: 45%;
}

.embedded pb-navigation[direction="forward"] {
    right: 0;
}

.nav {
    height: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
}
pb-view {
    margin-left: auto;
    margin-right: auto;
}
.transcription {
    overflow: auto;
    display: flex;
    justify-content: center;
    height: 400px;
}
pb-navigation[direction="forward"] {
    float: right;
}
```

Use the Custom Field like this (without the whitespace between the brackets):

```
{ {CODECss}}
{ {CODEpbembed}}
{ {CODEpbkant}}
```

{{CODECss}} {{CODEpbembed}} {{CODEpbkant}}

For the facsimilie we use the `pb-facsimile` Component to integrate a IIIF viewer:

```
<pb-facsimile base-uri="https://apps.existsolutions.com/cantaloupe/iiif/2/" facsimiles="["15929_000_IDL5772_BOss12034_IIIp79.jpg", "15929_000_IDL5772_BOss12034_IIIp80.jpg", "15929_000_IDL5772_BOss12034_IIIp81.jpg", "15929_000_IDL5772_BOss12034_IIIp82.jpg"]" default-zoom-level="0" show-navigator="show-navigator" show-navigation-control="show-navigation-control"></pb-facsimile>
```

{{CODEpbfacsimile}}

* * *

1. Custom fields are hidden by default on most WordPress sites. To make them visible, select the Screen Options tab at the top of any WordPress editor page, and choose Custom Fields [↩](#fnref1:1)

Tile photo by <a href="https://unsplash.com/@t_ahmetler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Tolga Ahmetler</a> on <a href="https://unsplash.com/s/photos/pack?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="unsplash">Unsplash</a>