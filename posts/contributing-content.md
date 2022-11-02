---
title: Contributing Content to e-editiones
short: Contributing Content
lead: Short tutorial on how to contribute content to the e-editiones website
author: Wolfgang Meier
date: 2022-11-02
tags:
    - tutorial
    - beginner
    - e-editiones
coverImage: mark-konig-xCEuxxhpY3o-unsplash.png
coverImageCredits: Cover photo by <a href="https://unsplash.com/@markkoenig?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mark König</a> on <a href="https://unsplash.com/s/photos/contribution?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
---

> The community is invited to contribute content in the form of tutorials, announcements, project reports, teaching materials – whatever may be of interest and help other members.

The e-editiones website is hosted on GitHub and will be updated whenever files are pushed to the repository. Articles are authored using Markdown syntax and start with a short header to tell the system how the post should appear on the website. You don't need any special software to write a post: you can do it directly in the web browser using GitHub's simple editor (though we would recommend using a proper text editor for longer posts).

## Adding an article

To contribute an article, log into GitHub with your account (or create one first) and browse to the [posts](https://github.com/eeditiones/e-editiones-website/tree/main/posts) subfolder of the GitHub repository and click on the `Add file` button in the toolbar. Choose the `Create new file` option to write your text.

![Add file button](/img/contributing-content1.png){height=64px}

Unless you are a member of the editorial team, GitHub will warn you that you are about to make changes to a project you don't have write access to. This is ok! Your changes will result in a *pull request*, which will be sent to the e-editiones team for approval.

![GitHub editor view](/img/contributing-content2.png)

## Editing the article

As mentioned above, every article should start with a short header containing some basic metadata delimited by 3 dashes (`---`):

```yaml
---
title: Full title of the article
short: (optional) Short title
lead: (optional) Descriptive short summary
author: Author of the article
date: 2022-10-25
tags:
    - events
    - meetups
coverImage: (recommended) Image to be used as cover, located in img folder
coverImageCredits: (recommended) Any credits to be shown for the cover image
---
```

You should at least provide the full title, author, date and some tags. You may also supply a short title if your main title is longer than ~5 words. The *short title* as well as the *lead* will be used in post listings (like the one on the start page). 

We also recommend to choose a cover image to catch some attention. Images have to be saved separately in the [img](https://github.com/eeditiones/e-editiones-website/tree/main/img) folder. This needs to be done by the editorial team as normal contributors are not allowed to upload via the web interface. However, you can drag and drop images into the text and the editors will later move it to the right place (see section on images below). Don't forget to provide proper credits in the `coverImageCredits` field.

Every article should have one or two tags. Tags are important for navigation within the website. Please include at least one of the tag categories listed below. Tags shown as nested below should always come in pairs. For example, if you write about a conference, you should include the tags `events` **and** `conference`.

* events
  * workshop
  * meetups
  * conference
* announcements
  * call
  * e-editiones
  * tei-publisher
  * ... other tags referring to a particular software package, working group etc.
* tutorial
  * beginner
  * intermediate
  * advanced
* faq
* report
  * projects
  * best practice
* teaching

## Writing content

Content is written using [markdown syntax](https://commonmark.org/help/). It should not repeat the title already given in the header as this will be inserted automatically. 

If you write a longer article, please use headings to give it some structure. They will be automatically added to the table of contents in the right sidebar and help the user to navigate the text.

## Images

You cannot upload images to the correct folder via the web interface, but you can drag and drop image files into the text editor and GitHub will generate a link. When reviewing the text, the editorial team will move the images into the correct place.

## Submitting

Once you are happy with your article, fill out the form at the bottom of the GitHub page, titled *Propose new file*. Provide a title and maybe a short comment for the editorial team.

![Form to propose new file](/img/contributing-content3.png)

After clicking *Propose new file*, you will be presented with another form for creating a so-called *pull request*. Click on the green button: *Create pull request* to start sending the request.

![First screen for creating a pull request](/img/contributing-content4.png)

This will be followed by yet another form on which you could provide further notes concerning your contribution, but it's usually enough to just confirm once again by pressing the *Create pull request* button again.

## For experienced users

Users familiar with git may prefer to fork the repository. This allows you to conveniently work on more than one text, use the editor of your choice or add images.

To start a local server (on port 8081) with the website, change into the cloned directory, run `npm install` followed by `npm start`.