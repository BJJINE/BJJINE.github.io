# CTI Lab — Cyber Threat Intelligence Lab website

A Jekyll site for a university research lab.
The folder layout follows the [academicpages](https://github.com/academicpages/academicpages.github.io)
convention (`_pages`, `_publications`, `_data`, `_sass`, ...), while the page design follows the clean,
white academic style of sites like [sanghakoh.github.io](https://sanghakoh.github.io/).

---

## Folder structure

```
.
├── _config.yml            # site title, URL, contact info, collections  ← start here
├── Gemfile                # Ruby dependencies
│
├── _data/                 # content you edit most often (no HTML needed)
│   ├── navigation.yml     #   nav bar items
│   ├── members.yml        #   everyone on the Members page
│   ├── news.yml           #   News list on the home page
│   └── research.yml       #   Research Areas on the home page
│
├── _pages/                # one file per page
│   ├── about.md           #   Home            → /
│   ├── members.html       #   Members         → /members/
│   ├── publications.html  #   Publications    → /publications/
│   └── contact.md         #   Contact         → /contact/
│
├── _publications/         # one Markdown file per paper / patent
│   └── YYYY-MM-DD-slug.md
│
├── _layouts/              # page skeletons
│   ├── default.html
│   ├── page.html
│   └── publication.html
│
├── _includes/             # reusable fragments
│   ├── head.html
│   ├── header.html        #   navbar + logo
│   ├── footer.html
│   ├── person-card.html
│   └── publication-item.html
│
├── _sass/                 # styles, split by concern
│   ├── _variables.scss    #   colours & fonts  ← restyle the site here
│   ├── _base.scss
│   ├── _masthead.scss
│   ├── _page.scss
│   ├── _members.scss
│   └── _publications.scss
│
├── assets/
│   ├── css/main.scss      # imports the _sass partials
│   └── js/main.js         # mobile menu + publication filter
│
├── images/
│   ├── logo.svg           # full lockup (home page)
│   ├── logo-mark.svg      # shield only (navbar, favicon)
│   └── people/            # member photos go here
│
└── files/                 # PDFs, CV, slides
```

## Running it locally

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Publishing on GitHub Pages

1. Push this folder to a repository named `<username>.github.io`.
2. In **Settings → Pages**, set the source to the `main` branch.
3. In `_config.yml`, set `url: https://<username>.github.io` and leave `baseurl: ""`.

For a project site (`github.com/<username>/cti-lab`), set `baseurl: "/cti-lab"` instead.

---

## Where to edit what

| I want to change...            | Edit this                                        |
|--------------------------------|--------------------------------------------------|
| Lab name, email, address, map  | `_config.yml`                                    |
| Navigation bar                 | `_data/navigation.yml`                           |
| Members and alumni             | `_data/members.yml`                              |
| News on the home page          | `_data/news.yml`                                 |
| Research areas                 | `_data/research.yml`                             |
| Add a paper or patent          | new file in `_publications/`                     |
| Colours and fonts              | `_sass/_variables.scss`                          |
| Logo                           | replace `images/logo.svg` / `images/logo-mark.svg` |

Every placeholder in the repo is marked with a `TODO` comment.

### Adding a publication

Create `_publications/2026-08-01-my-paper.md`:

```yaml
---
title: "Paper title"
collection: publications
type: conference          # journal | conference | patent
date: 2026-08-01
year: 2026
authors: "<b>Lab Member</b>, External Coauthor, <b>Advisor</b>*"
venue: "ACM Conference on Computer and Communications Security (CCS)"
links:
  - { label: "PDF",  url: "/files/paper.pdf" }
  - { label: "Code", url: "https://github.com/..." }
bibtex: |
  @inproceedings{...}
---

Optional abstract. If you write body text or a bibtex block, the title on the
publications page becomes a link to a detail page.
```

Lab members are wrapped in `<b></b>` so they are highlighted, and `*` marks the
corresponding author. The `type` value drives both the coloured tag and the
filter buttons.

### Adding a member

Add an entry under the right section of `_data/members.yml`, drop a square photo
into `images/people/`, and reference it by filename. Leaving `photo: ""` shows a
neutral placeholder box instead.

### Using your own logo file

Replace `images/logo.svg` (full lockup) and `images/logo-mark.svg` (shield only).
If your file is a PNG, save it as `images/logo.png` and update the `logo` and
`logo_mark` paths in `_config.yml` — nothing else needs to change.
