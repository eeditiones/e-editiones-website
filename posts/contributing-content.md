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
# coverImage: Image to be used as cover, located in img folder
# coverImageCredits: Any credits to be shown for the cover image
---

> The community is invited to contribute content in the form of tutorials, announcements, project reports, teaching materials – whatever may be of interest and help other members.

The e-editiones website is hosted on GitHub and will be updated whenever files are pushed to the repository. Articles are authored using Markdown syntax and start with a short header to tell the system how the post should appear on the website. You don't need any special software to write a post: you can do it directly in the web browser using GitHub's simple editor (though we would recommend using a proper text editor for longer posts).

## Adding an article

To contribute an article, log into GitHub with your account (or create one first) and browse to the [posts](https://github.com/eeditiones/e-editiones-website/tree/main/posts) subfolder of the GitHub repository and click on the `Add file` button in the toolbar. Here you can choose to upload an existing file or open an editor to write your text.

<img width="236" alt="image" src="https://user-images.githubusercontent.com/117303754/199563935-14303746-5718-4ccc-b94c-9b9f8b0467b9.png">

Unless you are a member of the editorial team, GitHub will warn you that you are about to make changes to a project you don't have write access to. This is ok! Your changes will result in a ~pull request~, which will be sent to the e-editiones team for approval.

<img width="1205" alt="image" src="https://user-images.githubusercontent.com/117303754/199564198-0829f34f-6163-4ae9-ad64-e6a62e788eea.png">

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

You should at least provide the full title, author, date and some tags. You may also supply a short title if your main title is longer than ~5 words. The ~short title~ as well as the ~lead~ will be used in post listings (like the one on the start page). 

We also recommend to choose a cover image to catch some attention. Images need to be saved separately in the [img](https://github.com/eeditiones/e-editiones-website/tree/main/img) folder. Don't forget to provide proper credits in the `coverImageCredits` field.

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

## Writing Content

Content is written using [markdown syntax](https://commonmark.org/help/). It should not repeat the title already given in the header as this will be inserted automatically. 

If you write a longer article, please use headings to give it some structure. They will be automatically added to the table of contents in the right sidebar and help the user to navigate the text.

## Submitting

Once you are happy with your article, fill out the form at the bottom of the GitHub page, titled ~Propose new file~. Provide a title and maybe a short comment
for the editorial team.

<img width="1183" alt="image" src="https://user-images.githubusercontent.com/117303754/199565381-0561f0e4-e46c-479e-8ea7-b0d2912fc9a8.png">
