import { card } from "./ui.jsx";
import { projects } from "../../../shared/pages.js";

// Photo grid of recent jobs (edit the list in shared/pages.js)
function ProjectGallery() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <figure className={card + " overflow-hidden"} data-reveal={String((index % 3) + 1)} key={project.title}>
          <img className="aspect-[4/3] w-full object-cover" src={project.image} alt={project.imageAlt} loading="lazy" />
          <figcaption className="px-5 pt-[18px] pb-5">
            <span className="inline-block rounded-full bg-blue-tint px-2.5 py-1 text-xs font-bold text-blue">{project.type}</span>
            <h3 className="mt-2 mb-0.5 text-[19px]">{project.title}</h3>
            <span className="text-sm text-soft">{project.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ProjectGallery;
