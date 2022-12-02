---
title: Generating a high voltage site by going static
---

Sometimes you don't need a fully dynamic website with sophisticated search and navigation, but rather a simple service, which is fast, cheap and easy to maintain. This is where static site generators provide a perfect alternative to a dynamic, database-driven architecture like TEI Publisher. In this article we'll learn how to marry the two concepts to combine the best of both worlds.

A static website is generated once during build time and does not change afterwards. All content is prepared in advance and the output is essentially just a directory of files. The only job left for a server is to respond to requests by returning the prepared content. It does not need to process anything. This has a number of advantages:

* the site will be as fast as it can possibly be
* hosting is cheap: you can mostly get it for free
* you'll get an entirely self-sufficient snapshot of your content: ideal for archiving purposes
* static content is perfect for mobile applications, which should continue to work when offline

For sure there are also some downsides: since everything is pre-generated, you have to know in advance what users might request. Dynamic functions like search are thus necessarily limited.

In the context of digital editions, there are nevertheless many use cases where a static site might be a viable option:

* the edition is rather small, i.e. concentrates on a single or a small collection of works
* users are more interested in reading and browsing than searching
* you want to ensure that the content can stay online for a long time with no or low maintenance

The last point is addressing a problem we all face sooner or later: we created a fancy, TEI Publisher-powered website, but then the funding period ends and the university library tells us: sorry, we can only archive static content, not applications requiring a database. So having a – maybe slightly stripped down – static snapshot will at least allow potential users to dig up your site and look at it long after you switched jobs or retired.

A number of frameworks are available to help you create a static website. The e-editiones homepage is an example for this approach: it is based on a static website generator called [11ty](https://www.11ty.dev/). Articles are written using markdown syntax and the generator takes care to transform each article and wrap it into the site's HTML templates. It works great and – thanks to github – the hosting is for free.

Unfortunately digital editions are rarely based on markdown. Can we integrate TEI or other XML content as well? Sure, some might say: we can always write an XSLT to generate HTML and add this to our static site. But this means we'd loose most of the nice features a system like TEI Publisher provides and have to reimplement them. Is there an easier way?

At this point you may want to browse to a (currently) [hidden page](/pages/tei-publisher/documentation) on the e-editiones website. What we see there is: a static version of the latest TEI Publisher documentation! And we all know that the documentation is written in Docbook XML. So how did it get there? The mystery will be revealed in a minute...

If you investigate the [source code](https://github.com/eeditiones/e-editiones-website/blob/main/pages/tei-publisher/documentation.njk) for this page, you'll notice that it appears to be more or less like any HTML template in TEI Publisher. We see all the familiar webcomponents like `<pb-document>`, `<pb-navigation>` etc. The main `<pb-view>` which displays the body of the content reads as follows:

```html
<pb-view id="view1" src="document1" append-footnotes="append-footnotes" subscribe="transcription" emit="transcription"
    static="" no-scroll>
</pb-view>
```

The only noticable difference is the additional attribute `static=""` – and this is where the magic happens! Obviously this attribute tells `<pb-view>` that - instead of connecting to its usual home base, i.e. a TEI Publisher instance – it should load the content from local, static files.

The unique selling point of this approach is: we can just continue to use nearly all of TEI Publisher's webcomponents! They will work as before on a dynamic site, which means we have page-by-page or division-by-division navigation out of the box, we can add facsimiles via `<pb-facsimile>`, switch between diplomatic or reading views via `<pb-toggle>`, and so on.

But can we also create a snapshot of an entire website we developed with TEI Publisher? Head over to our copy of the [TEI P5 guidelines](https://guidelines.teipublisher.com). This app was first developed as a dynamic TEI Publisher application and then transformed into a static version. 