import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "A web application built with Next.js,Typescript,Tailwind CSS and Node.js",
      image: "/image/project1.png",
      link: "#",
    },
    {
      title: "MATOME-AI",
      description: "Matome is a AI based web app that generate PDFs to summarize the content of the website",
      image: "/image/project2.png",
      link: "#",
    }
    
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
