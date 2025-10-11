import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const projects = [
  {
    title: "GMart",
    description: "A Simple e-commerce platform built with  Node.js, and MongoDB intregated with rozarpay.",
    image: "https://cdn.shopify.com/s/files/1/0070/7032/files/website-design.jpg?v=1691011202",
    tags: [ "Node.js", "MongoDB", "Express", "ejs"],
    githubUrl: "https://github.com/gauravupadhyaybiet/gmart",
    liveUrl: "https://gmart-gules.vercel.app/",
  },

  {
    title: "real-time-chat-buddy",
    description: "chat with ai intregate Gemini ai",
    image: "https://img.freepik.com/free-vector/flat-woman-chatting-with-chatbot-communicating-ai-robot-assistant_88138-959.jpg?semt=ais_incoming&w=740&q=80",
    tags: ["TypeScript", "react", "Supabase", "Tailwind CSS",],
    githubUrl: "https://github.com/gauravupadhyaybiet/real-time-chat-buddy",
    liveUrl: "https://real-time-chat-buddy.vercel.app/",
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    animatedElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 px-6 bg-white text-gray-900"
    >
      <h2 className="text-5xl font-bold text-center mb-6 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
        Featured Projects
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
        Here are some of my recent projects that showcase my skills.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-col h-full bg-white shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-500">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge
                      key={tag}
                      className="bg-primary/30 text-white border border-primary/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-gray-900 hover:bg-primary/10 flex items-center gap-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary text-white hover:bg-primary/80 flex items-center gap-2"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* View More Projects Button */}
      <div className="flex justify-center mt-12">
        <Button
          className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2 animate-pulse"
          asChild
        >
          <a
            href="https://github.com/gauravupadhyaybiet" // replace with your GitHub repo
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;


