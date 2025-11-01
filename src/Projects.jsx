import React from "react";

const projects = [
  {
    id: 1,
    title: "Modern LED Mirror Design",
    image:
      "https://images.unsplash.com/photo-1595514535736-ef1a9d4d640c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Bathroom Glass Setup",
    image:
      "https://images.unsplash.com/photo-1618223652554-4e2c8b1dc835?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Decorative Wall Glass Panel",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Custom Designer Mirror",
    image:
      "https://images.unsplash.com/photo-1617093727343-bc8d44a1d3db?auto=format&fit=crop&w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our <span className="text-sky-500">Projects</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our latest creations in glass art, LED mirrors, and architectural installations that blend elegance with modern technology.
        </p>

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
