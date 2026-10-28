import { projects } from "../../../shared/pages.js";

// Photo grid of recent jobs (edit the list in shared/pages.js)
function ProjectGallery() {
  return (
    <div className="gallery">
      {projects.map((project, index) => (
        <figure className="work" data-reveal={String((index % 3) + 1)} key={project.title}>
          <img src={project.image} alt={project.imageAlt} loading="lazy" />
          <figcaption>
            <span className="work__type">{project.type}</span>
            <h3>{project.title}</h3>
            <span className="work__place">{project.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default ProjectGallery;
