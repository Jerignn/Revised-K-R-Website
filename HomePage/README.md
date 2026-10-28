# K&R Heating & Cooling — Homepage designs (React)

## Run it

```bash
npm install      # first time only
npm run dev      # open the link it prints (e.g. http://localhost:5173)
npm run build    # makes the final website in the dist/ folder
npm run preview  # check the built website
```

> The pages are now React apps, so open them through `npm run dev`,
> not by double-clicking the HTML files.

## Folders

```
index.html              Shell for the design chooser page (React starts here)
src/                    Design chooser app: pages/ChooserPage, components/DesignCard, data/designs.js
assets/                 Shared images + switcher.css
previews/               Screenshots used on the chooser cards
design-1/  design-2/    One React app per design:
  index.html            SEO tags (title, description, social, Google business info)
  src/main.jsx          Starts React
  src/App.jsx           Top component
  src/pages/            HomePage.jsx — lists the sections in order
  src/components/       One file per section (Header, Hero, Footer...) + Button, Icon
  src/data/content.js   All text and images — edit content here
  src/hooks/            useScrollReveal (fade-in on scroll)
  src/styles/style.css  The design's styles
```

## Buttons

Always use `<Button>` so sizes stay standard:
`size="sm"` 44px · `size="md"` 48px (default) · `size="lg"` 56px.

## Before going live

In each `design-*/index.html`, change `robots` to `index, follow` and add a
`<link rel="canonical">` with the real domain.
