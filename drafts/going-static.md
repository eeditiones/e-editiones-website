---
title: Generating a high voltage site by going static
---

Sometimes you don't need a fully dynamic website with sophisticated search and navigation, but rather a simple service, which is fast, cheap and easy to maintain. This is where static site generators provide a perfect alternative to a dynamic, database-driven architecture like TEI Publisher. In this article we'll learn how to marry the two concepts to combine the best of both worlds.

A static website is generated once during build time and does not change afterwards. All content is prepared in advance and the output is essentially just a directory of files. The only job left for a server is to respond to requests by returning the prepared content. It does not need to process anything. This has a number of advantages:

* the site will be as fast as it can possibly be
* hosting is cheap: you can mostly get it for free
* you'll get an entirely self-sufficient, frozen snapshot of your content: ideal for archiving purposes
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

If you investigate the [source code](https://github.com/eeditiones/e-editiones-website/blob/main/pages/tei-publisher/documentation.njk) for this page, you'll notice that it appears to be more or less like any HTML template in TEI Publisher (apart from the fact that it uses a different templating system to pull in the e-editiones header, menu etc.). We see all the familiar webcomponents like `<pb-document>`, `<pb-navigation>` etc. The main `<pb-view>` which displays the body of the content reads as follows:

```html
<pb-view id="view1" src="document1" append-footnotes="append-footnotes" subscribe="transcription" emit="transcription"
    static="" no-scroll>
</pb-view>
```

The only noticable difference is the additional attribute `static=""` – and this is where the magic happens! Obviously this attribute tells `<pb-view>` that - instead of connecting to its usual home base, i.e. a TEI Publisher instance – it should load the content from local, static files. We'll discuss later how this is done.

The unique selling point of this approach is: we can just continue to use nearly all of TEI Publisher's webcomponents! They will **work as before** on a dynamic site, which means we have page-by-page or division-by-division navigation out of the box, we can add facsimiles via `<pb-facsimile>`, switch between diplomatic or reading views via `<pb-toggle>`, and so on. At the same time, you can see that the components integrate nicely with the look and feel of the e-editiones website, which – unlike TEI Publisher – uses Bootstrap for basic styling.

But can we also create a snapshot of an entire website we developed with TEI Publisher? Head over to our copy of the [TEI P5 guidelines](https://guidelines.teipublisher.com). This app was first developed as a dynamic TEI Publisher application and then transformed into a static version. Besides browsing through the chapters of the guidelines, the app also includes all the reference pages. There's even some dynamic functionality: you can jump to a reference page for an element or class by typing into the corresponding search box and there will be an autocomplete popping up. There's also a simple search facility! We'll talk about that later.

Also worth mentioning: the static version of the TEI guidelines app is a so-called **progressive web app**, which means you can install it as a standalone application. This is most useful on a phone or tablet as visited pages will be cached for offline use. I'm actually using the guidelines app on the phone quite often, e.g. if I have to look up something while travelling. What is cached or preloaded for offline use is fully configurable in the generator, so you could even preload all content and be fully independent of a network connection.

## How does it work?

During the past year we actually implemented two different approaches for generating static content out of TEI Publisher. The first project, which I started last winter, is written in Python. It is fully functional, providing the same features as the second approach. However, I ended up coding all those features myself, basically creating our own static site generator. This works fine as long as your goal is to create a static snapshot of a dynamic publisher-based site.

A few months later, we decided to redo the e-editiones homepage and settled on [11ty](https://www.11ty.dev/) as static site generator. The beauty of 11ty lies in its simplicity: it does one job and does it well. It does not impose a particular structure or choice of libraries, and it's easy to extend the functionality via plugins. For e-editiones we started with a plain, empty template, added Bootstrap for basic styling, and thought out a system of tags to organize the content. Compared to other static site generators we've used, the learning curve was quite low.

Triggered by this experience, I created a TEI Publisher plugin for 11ty. Unlike the Python version, it concentrates on integrating the content coming from TEI Publisher and leaves everything else to 11ty and its other plugins.

The TEI Publisher plugin works as follows: it installs a filter to scan the HTML content produced by 11ty for each page, watching out for `pb-view` components being used. As we all know, `pb-view` is the main component in publisher for displaying a TEI document. For each `pb-view` the plugin mimics what a user would do when reading through the document page by page. For every page, the response returned by TEI Publisher is saved as a file (after applying some normalization steps). The plugin also remembers the URL parameters which were used to retrieve the page and writes them into a [mapping table](https://github.com/eeditiones/e-editiones-website/blob/gh-pages/pages/tei-publisher/documentation/index.json).

When we switch the `pb-view` to static mode (by adding the attribute `static=""`), it will use the mapping table to resolve its current combination of URL parameters and loads the corresponding static file instead of trying to connect to the URL. It's as simple as that! For sure, there's more going on behind the scenes, but as a user, you don't have to know anything about it. Just use `pb-view` in your template and the rest happens automagically.

## Configuration

## Advanced features

## Use cases

## Future plans

* create a basic template on git, which you can clone to get started with 11ty and TEI Publisher