import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A web application built with React and Node.js",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A mobile app developed with React Native",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Project Three",
      description: "An e-commerce platform with payment integration",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Link
            href={project.link}
            key={index}
            className="theme-card border rounded-lg overflow-hidden shadow-sm"
          >
            <div className="aspect-video relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
