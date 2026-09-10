---
title: "Open Processing Model Release"
lead: "Mark your calendars! On 15 September, e-editiones will launch the Open Processing Model (OPM), an open-source Python implementation of the TEI Processing Model"
author: Lars Windauer
date: 2026-09-09
room: "https://teams.microsoft.com/meet/345696760827567?p=3hA6zp8bxc2LV8eIot"
tags:
  - events
  - meetups
  - announcements
  - e-editiones
coverImage: save-the-date-OPM-release.png
coverImageCredits: by Lars Windauer
---

## 🗓️ 15th September at 17:00 CEST

On 15 September, e-editiones will release the Open Processing Model (OPM) — an open-source Python implementation of the TEI Processing Model, bringing the power of TEI processing directly into popular scholarly workflows.

### Join us for the launch!

* 📅 Date: Tuesday, 15 September 2026
* 🕒 Time: 17:00 CEST
* 📍 Location: [Online (Teams)](https://teams.microsoft.com/meet/345696760827567?p=3hA6zp8bxc2LV8eIot)
* 🎟️ No registration required

Join us for a first look at what OPM can bring to the TEI and Digital Humanities community.

We'll demonstrate how to use opm for transforming single documents to HTML, ePub, docx, markdown and PDF via HTML for print or typst. We'll also talk about using it to generate a static website, prepare data to pass it to a static site generator, and how to use pre-rendered content to speed up an existing TEI Publisher app.

<style>
#opm-samples-carousel {
  background: #eef0f2;
  border: 1px solid #dee2e6;
  border-radius: .5rem;
  overflow: hidden;
}
#opm-samples-carousel .carousel-item img {
  height: 440px;
  width: 100%;
  object-fit: contain;
  padding: 1.5rem 1.5rem 2.5rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, .18));
}
#opm-samples-carousel .carousel-caption {
  position: static;
  height: 5rem;
  padding: .75rem 15% 0;
  background: #fff;
  border-top: 1px solid #dee2e6;
  color: var(--color-4);
}
#opm-samples-carousel .carousel-caption h5 {
  margin: 0 0 .25rem;
  font-size: 1.1rem;
}
#opm-samples-carousel .carousel-caption p {
  margin: 0;
}
#opm-samples-carousel .carousel-indicators {
  bottom: 5rem;
  margin-bottom: .6rem;
}
#opm-samples-carousel .carousel-control-prev,
#opm-samples-carousel .carousel-control-next {
  bottom: 5rem;
  width: 10%;
}
@media (max-width: 576px) {
  #opm-samples-carousel .carousel-item img { height: 320px; }
}
</style>
<div class="mb-4">
  <div id="opm-samples-carousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#opm-samples-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Letter sample"></button>
      <button type="button" data-bs-target="#opm-samples-carousel" data-bs-slide-to="1" aria-label="JATS web sample"></button>
      <button type="button" data-bs-target="#opm-samples-carousel" data-bs-slide-to="2" aria-label="Shakespeare play sample"></button>
      <button type="button" data-bs-target="#opm-samples-carousel" data-bs-slide-to="3" aria-label="Static web presentation"></button>
      <button type="button" data-bs-target="#opm-samples-carousel" data-bs-slide-to="4" aria-label="Astro website"></button>
      <button type="button" data-bs-target="#opm-samples-carousel" data-bs-slide-to="5" aria-label="EPUB sample"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/img/opm-samples/previews/serafin02-page1-1.png" class="d-block" alt="First page of the Serafin typst sample">
        <div class="carousel-caption">
          <h5>Letter sample (PDF via typst)</h5>
          <p><a href="/img/opm-samples/serafin02.typst.pdf">Open the PDF</a></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/opm-samples/opm-jats-screenshot.png" class="d-block" alt="Web preview of a journal article">
        <div class="carousel-caption">
          <h5>Web preview of journal article</h5>
          <p>Using JATS XML format</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/opm-samples/previews/F-ado-page2-02.png" class="d-block" alt="Second page of the Shakespeare sample">
        <div class="carousel-caption">
          <h5>Shakespeare play (PDF via typst)</h5>
          <p><a href="/img/opm-samples/F-ado.typst.pdf">Open the PDF</a></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/opm-samples/opm-web-screenshot.png" class="d-block" alt="Static web page screenshot">
        <div class="carousel-caption">
          <h5>Static web presentation</h5>
          <p>Plain HTML + CSS produced by OPM</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/opm-samples/opm-astro-screenshot.png" class="d-block" alt="Static web page using Astro">
        <div class="carousel-caption">
          <h5>Full static web site</h5>
          <p>OPM JSON output powering an <a href="astro.build">Astro-based</a> website</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/img/opm-samples/opm-epub-screenshot.png" class="d-block" alt="EPUB preview screenshot from the Gentle Introduction sample">
        <div class="carousel-caption">
          <h5>EPUB sample using TEI Publisher documentation</h5>
          <p><a href="/img/opm-samples/quickstart.epub">Download the EPUB</a></p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#opm-samples-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#opm-samples-carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

### Why it matters

The TEI Processing Model is a conceptual cornerstone designed to empower scholars working with XML-encoded material. It is used worldwide to process and publish numerous digital editions and other scholarly resources — online, in print, and in other output formats. Until now, access and adoption have been constrained to users of a particular technology stack based on XQuery and eXist-db. OPM removes these limitations and opens the affordances of the TEI PM to the wider Python ecosystem, making it easier for researchers, developers, and institutions to build on open standards.

📖 Read the full announcement: [Open Processing Model](/posts/opm-announcement/) 📄 Project prospectus: [Read here (PDF)](/assets/files/prospectus-2026-05-11.pdf)

### Support e-editiones 

[Join e-editiones](/join) and follow us on [Mastodon](https://social.e-editiones.org/@eeditiones), [LinkedIn](https://www.linkedin.com/company/e-editiones/), [BlueSky](https://bsky.app/profile/e-editiones.bsky.social) and [Instagram](https://www.instagram.com/eeditiones/) for updates.
