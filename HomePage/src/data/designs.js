// The two design directions shown as cards on the chooser page.

import previewDesign1 from "../../previews/design-1.jpg";
import previewDesign2 from "../../previews/design-2.jpg";

export const designs = [
  {
    tag: "Design 01",
    theme: "light",
    link: "design-1/",
    image: previewDesign1,
    imageAlt: "Preview of Design 1, the editorial K&R homepage",
    meta: "Editorial · Refined · Classic",
    title: "The Editorial",
    text: "Reads like a trusted local paper. Serif headlines, a front-page hero with an “In this issue” index, a services ledger and clip-out coupons.",
    colors: ["#f6f5f1", "#16150f", "#ba4426"],
    colorText: "Newsprint white · Ink black · K&R rust",
    buttonText: "Explore Design 1",
  },
  {
    tag: "Design 02",
    theme: "light",
    link: "design-2/",
    image: previewDesign2,
    imageAlt: "Preview of Design 2, the clean and modern K&R homepage",
    meta: "Clean · Modern · Booking-first",
    title: "Clean & Modern",
    text: "Calm, crisp and quick to act on. A booking form right in the hero, service cards, a three-step process and a side-by-side plan comparison.",
    colors: ["#ffffff", "#10263d", "#2b5b8a"],
    colorText: "Clean white · Slate navy · Steel blue",
    buttonText: "Explore Design 2",
  },
];
