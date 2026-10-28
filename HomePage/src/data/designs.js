// The two design directions shown as cards on the chooser page.

import previewDesign1 from "../../previews/design-1.jpg";
import previewDesign2 from "../../previews/design-2.jpg";

export const designs = [
  {
    tag: "Design 01",
    theme: "dark",
    link: "design-1/index.html",
    image: previewDesign1,
    imageAlt: "Preview of Design 1, the dark and bold K&R homepage",
    meta: "Bold · Cinematic · Dark",
    title: "Dark & Bold",
    text: "Confident and cinematic. A full-bleed hero, split feature sections and a dark services accordion, all driven by K&R rust.",
    colors: ["#0e0e0e", "#ba4426", "#f4f1ec"],
    colorText: "Deep black · K&R rust · Cinematic motion",
    buttonText: "Explore Design 1",
  },
  {
    tag: "Design 02",
    theme: "light",
    link: "design-2/index.html",
    image: previewDesign2,
    imageAlt: "Preview of Design 2, the light and friendly K&R homepage",
    meta: "Bright · Warm · Friendly",
    title: "Light & Friendly",
    text: "Bright, warm and direct. A big “Comfort that's never a gamble.” headline, service tabs, a bento of services and a cheerful maintenance-plan band.",
    colors: ["#f7f2ea", "#ba4426", "#1f1d1b"],
    colorText: "Warm cream · K&R rust · Playful motion",
    buttonText: "Explore Design 2",
  },
];
