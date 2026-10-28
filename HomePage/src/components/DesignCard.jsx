// One clickable card that links to a design.
// design: one item from src/data/designs.js
// index: its position, so the second card animates in a moment after the first

function DesignCard({ design, index }) {
  return (
    <a
      className="group flex animate-card-in flex-col overflow-hidden rounded-[26px] border border-line bg-white no-underline shadow-[0_30px_60px_-40px_rgb(60_30_10/0.35)] transition duration-450 ease-soft hover:-translate-y-2 hover:shadow-[0_40px_70px_-40px_rgb(60_30_10/0.5)] active:-translate-y-1 active:scale-99 active:duration-150"
      style={{ animationDelay: index * 0.12 + "s" }}
      href={design.link}
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#f7f2ea]">
        <img
          className="size-full object-cover object-top transition-[scale,object-position] duration-[1.4s,4s] ease-soft group-hover:scale-103 group-hover:object-[center_30%]"
          src={design.image}
          alt={design.imageAlt}
          width="1440"
          height="990"
        />
        <span className="absolute top-[18px] left-[18px] rounded-full bg-white/85 px-3.5 py-2 text-xs/none font-bold tracking-[0.14em] text-ink uppercase backdrop-blur-sm">
          {design.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[22px] pt-6 pb-7 sm:px-8 sm:pt-[30px] sm:pb-[34px]">
        <span className="text-xs/none font-bold tracking-[0.18em] text-rust uppercase">{design.meta}</span>
        <h2 className="my-3.5 font-display text-[clamp(32px,3.4vw,44px)]/none font-bold tracking-[-0.03em]">{design.title}</h2>
        <p className="mb-[18px] text-soft">{design.text}</p>

        <div className="mb-[26px] flex items-center gap-2 text-sm text-soft">
          {design.colors.map((color) => (
            <i className="size-[18px] rounded-full border border-black/12" key={color} style={{ background: color }}></i>
          ))}
          {design.colorText}
        </div>

        {/* The underline wipes in from the left on hover */}
        <span className="relative mt-auto inline-flex items-center gap-2.5 self-start pb-1 font-bold text-rust after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-450 after:ease-soft group-hover:after:scale-x-100">
          {design.buttonText}
          <svg
            className="size-[18px] transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default DesignCard;
