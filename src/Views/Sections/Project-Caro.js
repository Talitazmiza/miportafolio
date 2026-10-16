import { useState } from "react";
 
export default function Portfolio() {
  // null = modal closed, otherwise holds the project that was clicked
  const [activeProject, setActiveProject] = useState(null);
  const [slide, setSlide] = useState(0);
 
  // Hardcoded projects. Change titles and image paths to your own.
  const projects = [
    {
      title: "Super App PPSDM Migas (Examination & Certification System)",
      cover: "../../images/superapp/cover.png",
      images: [ 
      "../../images/superapp/1.png",
      "../../images/superapp/2.png",
      "../../images/superapp/3.png",
      "../../images/superapp/4.png",
      "../../images/superapp/5.png",
      "../../images/superapp/6.png",
      ],
    },
  ];
 
  const openProject = (project) => {
    setActiveProject(project);
    setSlide(0); // always start at the first image
  };
 
  const closeProject = () => setActiveProject(null);
 
  const total = activeProject ? activeProject.images.length : 0;
  const prev = () => setSlide((slide - 1 + total) % total);
  const next = () => setSlide((slide + 1) % total);
 
  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* CARDS */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <div
            key={project.title}
            onClick={() => openProject(project)}
            className="cursor-pointer overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md"
          >
            <img src={project.cover} alt={project.title} className="aspect-video w-full object-cover" />
            <h3 className="p-4 text-center text-lg font-semibold">{project.title}</h3>
          </div>
        ))}
      </div>
 
      {/* CAROUSEL POP UP (only shows when a card is clicked) */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeProject} // click the dark background to close
        >
          <div
            className="relative w-full max-w-3xl rounded-xl bg-white p-4"
            onClick={(e) => e.stopPropagation()} // clicking inside won't close it
          >
            {/* Title + close button */}
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{activeProject.title}</h2>
              <button onClick={closeProject} className="px-2 text-2xl leading-none">
                &times;
              </button>
            </div>
 
            {/* Current image */}
            <img
              src={activeProject.images[slide]}
              alt={`${activeProject.title} ${slide + 1}`}
              className="aspect-video w-full rounded-lg bg-gray-100 object-contain"
            />
 
            {/* Previous / Next */}
            {total > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-6 top-1/2 rounded-full bg-white/90 px-3 py-2 shadow"
                >
                  &#8249;
                </button>
                <button
                  onClick={next}
                  className="absolute right-6 top-1/2 rounded-full bg-white/90 px-3 py-2 shadow"
                >
                  &#8250;
                </button>
              </>
            )}
 
            {/* Dots */}
            <div className="mt-3 flex justify-center gap-2">
              {activeProject.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2.5 w-2.5 rounded-full ${i === slide ? "bg-rose-400" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}