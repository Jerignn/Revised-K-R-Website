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
  src/styles/style.css  Tailwind entry: the design's theme (colours, fonts)
  src/components/ui.jsx Shared pieces (section heading, labels, class lists)
```

## Buttons

Always use `<Button>` so sizes stay standard:
`size="sm"` 44px · `size="md"` 48px (default) · `size="lg"` 56px.

## Before going live

In each `design-*/index.html`, change `robots` to `index, follow` and add a
`<link rel="canonical">` with the real domain.

## Page addresses

Pages have clean addresses: `/design-1/`, `/design-1/about`,
`/design-1/services/furnaces`. Inside the code, page links are written as
`#/about` and the router in `shared/useRoute.js` turns them into clean ones.

The built site must sit at the root of a domain, and the host must send any
unknown `/design-1/...` or `/design-2/...` address to that design's
`index.html` (`npm run dev` and `npm run preview` already do this).

## Styling (Tailwind CSS v4)

Styles are Tailwind classes written directly in the components. Each app
(chooser, design-1, design-2) has its own `style.css` with a `@theme` block,
so the same class name means that design's colour or font: `bg-paper` and
`font-serif` in Design 1, `bg-navy` and `text-blue` in Design 2.

- Change a colour or font for a whole design: edit its `@theme` block.
- Repeated patterns (section heading, eyebrow label, card) live in
  `src/components/ui.jsx`; reuse those instead of copying class lists.
- Don't pass a class that sets the same property as one already on the
  element (e.g. a second text colour); use a prop like `light` instead.
