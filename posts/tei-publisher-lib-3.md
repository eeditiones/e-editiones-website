---
title: "tei-publisher-lib 3: Print CSS and other new features"
short: tei-publisher-lib 3
lead:  Version 3.0.0 of TEI Publisher's core library has been released
author: Wolfgang Meier
date: 2023-01-27
tags:
    - draft
    - announcements
    - tei-publisher
    - tei-publisher-lib
    - release
coverImageCredits: Foto von <a href="https://unsplash.com/@sneakyelbow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sneaky Elbow</a> auf <a href="https://unsplash.com/de/s/fotos/three?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
coverImage: /img/sneaky-elbow-h00rqvO5A-M-unsplash.jpg
--- 

> Version 3.0.0 features a dedicated output mode to better support printing HTML using paged media CSS, and two small extensions to the TEI Processing Model.

`tei-publisher-lib` contains the code libraries used for ODD processing and the different supported output modes. It implements the corresponding parts of the TEI guidelines.

<p class="alert alert-warning">
We use semantic versioning for all TEI Publisher projects: a change in the first digit of the version number indicates a <strong>breaking change</strong>. You should be aware that such releases are not fully backwards compatible and may require adjustments to existing apps. Please read the section on <a href="#upgrading">upgrading</a> below.
</p>

## A dedicated output mode for Print CSS

TEI Publisher 8 will feature a simpler approach for creating print output using the Print CSS and CSS Paged Media standards. This supplements the existing FO and LaTeX output modes. The new features will be covered in a separate article. 

With respect to `tei-publisher-lib`, one major change was introduced: the `print` output mode, which was previously a synonym for `fo`, now targets HTML optimized for print.

## Extensions to the Processing Model

We added two carefully chosen features to our implementation of the TEI Processing Model, which have been extensively tested, but not announced or documented until now:

1. a method to specify a ~processing mode~ passed to all subsequently called models
2. a way to set a parameter, so it will become available to models processed below

The first is implemented as a specialization of the second. Both features are not intended for daily use, but rather for edge cases, where the standard mechanisms for handling the flow of processing are not enough. This mainly applies to cases in which you have to process the same parts of the TEI document multiple times in different contexts. None of the examples shipping with TEI Publisher needs those features, but in complex ODDs we frequently encounter situations which cannot be handled without those extensions.

### Processing Modes

Distinguishing between processing modes is a common feature in XSLT. It comes handy if you need to process the same XML more than once for different purposes. One common example would be to generate a separate index page: the elements you want to process are likely the same as when you output the body of the document, but you need to render them differently. While you can often use tricks to somehow distinguish the two cases, it's sometimes simply not possible.

tei-publisher-lib 3 allows you to specify a new extension attribute, `@pb:mode`, on a `<model>`. The value of the attribute will be taken as the name of the mode, and subsequently called models can check it via a variable, e.g. `$mode="bibliography"`. This allows you to distinguish different modes in a predicate.

### Setting Parameters

TEI Publisher always supported parameters to be passed into the ODD. However, those parameters came from external sources and there was no way to set a parameter from within a model in the ODD. Sometimes you may wish to do so, for example, to compile a sorted list of people, whose details are not given in the document itself, but an auxilary authority file, which you have to pull in before sorting. Again, using tricks often helps in such a task, but not always.

tei-publisher-lib now supports setting a parameter, so it becomes available to subsequent models. The syntax is the same as for the standard `<param name="foo" value="baz"/>`. Just the name of the element changes to `<pb:set-param>`, marking this as an extension.

## Upgrading

In previous versions, the output mode `print` was a synonym for `fo`. It generated XML output to be further processed by an XSL/FO engine like Apache fop. This has changed: `print` now refers to the Print CSS mode, which extends the `web` output mode. We thought this is a more natural fit and doesn't break backwards compatibility too much. If you have been generating output targetted only at XSL/FO, make sure to use the `fo` output mode instead of `print`.

TEI Publisher compiles ODDs into XQuery code. Loading this generated code may fail if you upgrade your custom application to `tei-publisher-lib` 3 as the imports will be wrong. The app itself may work correctly at first. But trying to download the document using the `fo` mode will result in an error.

Fortunately fixing this should not be difficult. There are two ways to resolve the issue:

1. reinstall your custom app **after** updating `tei-publisher-lib`: this should regenerate all required files, at least with the 7.0 versions of TEI Publisher
2. the manual approach

The latter involves three steps:

**a) Recreate `modules/pm-config.xql`**

In eXide open the XQuery file `modules/generate-pm-config.xql` and execute it once by clicking `Run`. If your custom app does not have this file (it may be too old), you can copy it from [github](https://github.com/eeditiones/tei-publisher-app/blob/master/templates/basic/modules/generate-pm-config.xql).

**b) Check `resources/odd/configuration.xml`**

If you registered any custom XQuery module in your `resources/odd/configuration.xml` for the `web` output mode, make sure to also enable this for the `print` output mode by copying the corresponding configuration section. For example:

```xml
<modules>
    <output mode="web">
        <module uri="http://karlbarth.ch/apps/kb/ext-html.xql" prefix="ext-html" at="xmldb:exist:///db/apps/kb/modules/ext-html.xql"/>
    </output>
    <!-- we need to add this because print extends web -->
    <output mode="print">
        <module uri="http://karlbarth.ch/apps/kb/ext-html.xql" prefix="ext-html" at="xmldb:exist:///db/apps/kb/modules/ext-html.xql"/>
    </output>
</modules>
```

**c) Recompile ODDs**

Next you need to recompile your ODDs. This can either be done using the corresponding `Regenerate All ODDs` button, which you can find above the document list on the start page (you need to be logged in). If you are unable to access this page, because your installation is already broken, the alternative is to go through the API:

In the browser, open the `api.html` page. You get to this page by appending `api.html` to the root URL of your application. Login via the *Authorize* button using the database user and password configured for your application (to be entered in the `basicAuth` form). Scroll down to the *odd* section and find the POST request to `/api/odd`. The label next to it should say 'Recompile ODDs'.

Uncollapse the panel and click *'Try it out'*, followed by *'Execute'*. This will recompile all ODDs registered with the application, which may take a while.

For those on Linux or Mac preferring the command line: you can also achieve the same by using the following shell command with `curl`:

```sh
curl -X 'POST' 'http://user:password@localhost:8080/exist/apps/shakespeare-pm/api/odd?check=false'
```