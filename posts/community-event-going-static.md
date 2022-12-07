---
title: Generating a high voltage site by going static
date: 2022-12-06
lead: Generating a static site out of TEI Publisher.
author: Wolfgang Meier
tags:
  - feature
  - tei-publisher
  - tutorial
  - advanced
coverImage: Electrostatic_generator_Teylers_Museum.jpeg
coverImageCredits: Cover photo by McSmit - Own work, <a
  href="https://commons.wikimedia.org/w/index.php?curid=1436426">Public
  Domain</a>
---
Sometimes you don't need a fully dynamic website with sophisticated search and navigation, but rather a simple service, which is fast, cheap and easy to maintain. This is where static site generators provide a perfect alternative to a dynamic, database-driven architecture like TEI Publisher. In this article we'll learn how to combine the best of both worlds.

# Benefits of a static site

A static website is generated once during build time and does not change afterwards. All content is prepared in advance and the output is essentially just a set of files. The only job left for a server is to respond to requests by returning the prepared content. It does not need to process anything. This has a number of advantages:

* the site will be as fast as it can possibly be
* hosting is cheap: you can mostly get it for free
* you'll get an entirely self-sufficient, frozen snapshot of your content: ideal for archiving purposes
* static content is perfect for mobile applications, which should continue to work when offline

For sure there are also some downsides: since everything is pre-generated, you have to know in advance what users might request. Dynamic functions like search are thus necessarily limited.

In the context of digital editions, there are nevertheless many use cases where a static site might be a viable option:

* the edition is rather small, i.e. concentrates on a single or a small collection of works
* users are more interested in reading and browsing than complex searches
* only a part of the site displays content generated from XML, while the rest remains static
* you want to ensure that the content can stay online for a long time with no or low maintenance

The last point is addressing a problem we all face sooner or later: we created a fancy, TEI Publisher-powered website, but then the funding period ends and the university library tells us: sorry, we can only archive static content, not applications requiring a database. So having a – maybe slightly stripped down – static snapshot will at least allow potential users to dig up your site and look at it long after you switched jobs or retired.

## Integrating TEI

A number of frameworks are available to help you create a static website. The e-editiones homepage is an example for this approach: it is based on a static website generator called [11ty](https://www.11ty.dev/). Articles are written using markdown syntax and the generator takes care to transform each article and wrap it into the site's HTML templates. It works great and – thanks to github – the hosting is free.

Digital editions are rarely based on markdown though. Can we integrate TEI or other XML content as well? Some might say: we can always write an XSLT to generate HTML and add this to our static site. But this means we'd loose most of the nice features a system like TEI Publisher provides and have to reimplement them. Is there an easier way?

At this point you may want to browse to a (currently) [hidden page](/pages/tei-publisher/documentation) on the e-editiones website. What we see there is a static version of the latest TEI Publisher documentation! And we all know that the documentation is written in Docbook XML. So how did it get there? The mystery will be revealed in a minute...

![TEI Publisher documentation in e-editiones](/img/tei-publisher-docs.png)

If you investigate the [source code](https://github.com/eeditiones/e-editiones-website/blob/main/pages/tei-publisher/documentation.njk) for this page, you'll notice that it appears to be more or less like any HTML template in TEI Publisher (apart from the fact that it uses a different templating system to pull in the e-editiones header, menu etc.). We see all the familiar webcomponents like `<pb-document>`, `<pb-navigation>` etc. The main `<pb-view>` which displays the body of the content reads as follows:

```html
<pb-view id="view1" src="document1" append-footnotes="append-footnotes" subscribe="transcription" emit="transcription"
    static="" no-scroll>
</pb-view>
```

The only noticable difference is the additional attribute `static=""` – and this is where the magic happens! Obviously this attribute tells `<pb-view>` that - instead of connecting to its usual home base, i.e. a TEI Publisher instance – it should load the content from local, static files. We'll discuss later how this is done.

The unique selling point of this approach is: we can just continue to use nearly all of TEI Publisher's webcomponents! They will **work as before** on a dynamic site, which means we have page-by-page or division-by-division navigation out of the box, we can add facsimiles via `<pb-facsimile>`, switch between diplomatic or reading views via `<pb-toggle>`, and so on. At the same time, you can see that the components integrate nicely with the look and feel of the e-editiones website, which – unlike TEI Publisher – uses Bootstrap for basic styling.

But can we also create a snapshot of an entire website we developed with TEI Publisher? Head over to our copy of the [TEI P5 guidelines](https://guidelines.teipublisher.com). This app was first developed as a dynamic TEI Publisher application and then transformed into a static version. Besides browsing through the chapters of the guidelines, the app also includes all the reference pages. There's even some dynamic functionality: you can jump to a reference page for an element or class by typing into the corresponding search box and there will be an autocomplete popping up. There's also a simple search facility!

<figure class="right">
    <img src="/img/guidelines_mobile.jpg">
    <figcaption>TEI Guidelines as a mobile app</figcaption>
</figure>

Also worth mentioning: the static version of the TEI guidelines app is a so-called **progressive web app**, which means you can install it as a standalone application. This is most useful on a phone or tablet as visited pages will be cached for offline use. I'm actually using the guidelines app on the phone quite often, e.g. if I have to look up something while travelling. What is cached or preloaded for offline use is fully configurable in the generator, so you could even preload all the content and be fully independent of a network connection.

## How does it work?

During the past year we actually implemented two different approaches for generating static content from TEI Publisher. The [first project](https://github.com/eeditiones/tei-publisher-static), which I started last winter, is written in Python. It is fully functional, providing the same features as the second approach. However, I ended up coding all those features myself, basically creating our own static site generator. This works fine as long as your goal is to create a static snapshot of a dynamic publisher-based site.

A few months later, we decided to redo the e-editiones homepage and settled on [11ty](https://www.11ty.dev/) as static site generator. The beauty of 11ty lies in its simplicity: it does one job and does it well. It does not impose a particular structure or choice of libraries, and it's easy to extend the functionality via plugins. For e-editiones we started with a plain, empty template, added Bootstrap for basic styling, and thought out a system of tags to organize the content. Compared to other static site generators we've used, the learning curve was quite low.

Triggered by this experience, I created a TEI Publisher plugin for 11ty. Unlike the Python version, it concentrates on integrating the content coming from TEI Publisher and leaves everything else to 11ty and its other plugins.

The TEI Publisher plugin works as follows: it installs a filter to scan the HTML content produced by 11ty for each page, watching out for `pb-view` components being used. As we all know, `pb-view` is the main component in publisher for displaying a TEI document. For each `pb-view` the plugin mimics what a user would do when reading through the document page by page. For every page, the response returned by TEI Publisher is saved as a file (after applying some normalization steps). The plugin also remembers the URL parameters which were used to retrieve the page and writes them into a [mapping table](https://github.com/eeditiones/e-editiones-website/blob/gh-pages/pages/tei-publisher/documentation/index.json).

When we switch the `pb-view` to static mode (by adding the attribute `static=""`), it will use the mapping table to resolve its current combination of URL parameters and loads the corresponding static file instead of trying to connect to the URL. It's as simple as that! For sure, there's more going on behind the scenes, but as a user, you don't have to know anything about it. Just use `pb-view` in your template and the rest happens automagically.

## Configuration

There are two ways to install 11ty and the TEI Publisher plugin:

1. clone one of the existing [11ty starter projects](https://www.11ty.dev/docs/starter/) templates and add the TEI Publisher plugin
2. copy our [minimal template](https://github.com/eeditiones/tei-publisher-eleventy-starter), which offers a very basic setup

The plugin is distributed via `npm` (= the nodejs package manager). Using option 1) you can add the plugin to your project by running `npm install --save @teipublisher/pb-eleventy-plugin`. Option 2) already includes it.

All configuration for 11ty is done in a central javascript file located in the root of the project: `.eleventy.js`. This might appear a bit scary for those with no javascript experience, but it is actually easy enough. The most basic configuration to include the publisher plugin would look like this:

```javascript
const tpPlugin = require("@teipublisher/pb-eleventy-plugin");

module.exports = (eleventyConfig) => {
    // copy css
    eleventyConfig.addPassthroughCopy('src/resources/css');
    
    eleventyConfig.addPlugin(tpPlugin, {
        remote: 'http://localhost:8080/exist/apps/tei-publisher/'
    });

    return {
        dir: {
          input: "src",
          output: "_site"
        }
    }
};
```

The plugin gets registered in 11ty by calling `eleventyConfig.addPlugin`. The second parameter contains the configuration parameters you would like to pass to the plugin. The one required option (`remote`) specifies the base URI of the TEI Publisher instance we would like to use for our XML transformations.

## More features

### Pre-fetching content

Besides `pb-view`, there's another component in TEI Publisher which is commonly used to load dynamic content into the page: `pb-load`. For example, we usually retrieve the table of contents for a document via `pb-load`. This will only be loaded once for the entire document though, so the most efficient way to integrate it into our static content would actually be to just insert the table of contents into the HTML.

So as an alternative to `pb-load`, the plugin thus defines a so-called **shortcode** which can be added to the HTML template at the point where the table of contents should appear. The templating engine will replace the shortcode with the content it produced.

The shortcode `tpfetch` expects a URL from which to retrieve content and inserts whatever it received as a response into the final HTML. So to pre-load the table of contents for the TEI guidelines, we can call the corresponding TEI Publisher API endpoint:

```
{%raw%}{% tpfetch tpConfig.remote + "api/document/p5.xml/contents?target=transcription&icons=true" %}{%endraw%}
```

### Adding information to global data

Within an HTML template you can access metadata variables 11ty provides to you. These can be set via the metadata header of the template, data files in a directory or contributed by a plugin. 

The TEI Publisher plugin injects a number of global metadata objects. One example is the `tpConfig` object used above to determine the base URL of the TEI Publisher instance. `tpConfig` contains a copy of the configuration object currently used by the plugin.

Sometimes you may also want to retrieve other information from TEI Publisher and make it available to templates. For example, the TEI guidelines generate a reference page for each element and class defined. But to do this, we need a list of element and class idents, which we can iterate over to generate the corresponding reference page.

The plugin thus allows you to specify a set of URLs, from which content should be loaded and added to global metadata. For the guidelines app, the configuration looks like this:

```javascript
// configure the TEI Publisher plugin
eleventyConfig.addPlugin(tpPlugin, {
    remote: 'http://localhost:8080/exist/apps/guidelines/',
    data: {
        // retrieve idents for all TEI elements and classes. Add the result
        // as a global data object, accessible via tpdata.idents. A reference 
        // page will be generated for each ident using 11ty pagination.
        "idents": "api/idents"
    },
    index: {
        "view1": indexContent,
        "reference": indexReference
    }
});
```

Here the `data` configuration option defines that the data retrieved from an API call to `api/idents` should be saved to the plugins' global data object, `tpdata`, under the key `idents`. We can thus later access the list of idents to generate a reference page for each. This is done using 11ty's **pagination** plugin (see the corresponding template in the [guidelines source](https://github.com/wolfgangmm/tei-guidelines-static/blob/main/src/ref.njk)).

### Fetching collection listings

The default entry page into TEI Publisher allows you to browse through the collection hierarchy. This is handled by the `pb-browse-docs` webcomponent. To provide the same functionality on a static site, we need to pre-load the corresponding data as well. This happens automatically if you specify `collections: true` in the plugin configuration.

On your browsing page, make sure to include the extra attribute `static=""` on any `pb-browse-docs` element. Just as for `pb-view`, this will cause `pb-browse-docs` to load the document listings from local files.

In addition to fetching the content displayed by `pb-browse-docs`, this will also add another global data object, `tpdocuments`. `tpdocuments` contains metadata for each document, grouped by the name of the HTML template assigned by TEI Publisher for this document. So, for example, we'll find metadata for Kant's Kritik under `tpdocuments.dta` as this document is handled by the `dta` template in publisher:

```json
{
    "dta": {
        "path": "test/kant_rvernunft_1781.TEI-P5.xml",
        "odd": "dta.odd",
        "view": "page"
    }
}
```

Again we can later use this information in our HTML templates, e.g. to generate one page for each document using the same `dta` template.

## Outlook

We successfully tested the 11ty plugin in various context. The TEI guidelines app demonstrates how you can create a static snapshot of a complete publisher-generated app. It worked so well that we will likely drop the dynamic app and continue further development on the static version only. Mid-term, the goal is to generate the entire TEI guidelines documentation on the command line without requiring a full TEI Publisher installation.

To some extent this is already possible as demonstrated by the automatic build, which is triggered whenever one pushes to the repository: it will start TEI Publisher as a docker image, launch 11ty to generate the static content and publish it.

It would be even better if we could skip the docker step. As discussed during the last TEI conference, we're already working to refactor the core library powering all transformations in TEI Publisher, i.e. tei-publisher-lib, to run with other XQuery engines, which would include e.g. saxon on the command line, thus dropping the need for an eXist-db/TEI Publisher installation.