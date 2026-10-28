import { projects } from "../../../shared/pages.js";

// Photo grid of recent jobs (edit the list in shared/pages.js)
function ProjectGallery() {
  return (
    <div className="grid gap-x-[clamp(20px,2.4vw,32px)] gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <figure data-reveal={String((index % 3) + 1)} key={project.title}>
          <img className="aspect-[4/3.2] w-full object-cover" src={project.image} alt={project.imageAlt} loading="lazy" />
          <figcaption className="mt-3 border-t border-hair pt-3.5">
            <span className="text-[15px]/none font-semibold tracking-[0.06em] text-rust-dk uppercase">{project.type}</span>
            <h3 className="mt-2 mb-1 text-[26px]">{project.title}</h3>
            <span className="font-serif text-lg/[1.4] text-muted">{project.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ProjectGallery;
