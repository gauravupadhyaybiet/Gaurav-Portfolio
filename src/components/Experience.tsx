import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const education = [
  {
    title: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Bundelkhand Institute of Engineering Technology",
    period: "2022 - 2026",
    description: "Focused on Software Engineering, Data Structures, Algorithms, Web Development, and Computer Networks.",
    courses: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Software Engineering", "Web Technologies", "AI Basics"]
  },
  {
    title: "Intermediate",
    institution: "R.A.G.A.V Inter college",
    period: "2018 - 2020",
    description: "Specialized in Science Stream with emphasis on Mathematics and Computer Science.",
    courses: ["Mathematics", "Physics", "Chemistry"]
  },
  {
      title:" Web Development Intern (Remote, 2025) – Alpha Innovations",
       description:  " Built and optimized responsive web pages using React and Tailwind CSS. Integrated APIs and implemented CRUD operations for dynamic data handling , Collaborated with the team to enhance LMS features, improving UI/UX",
      industrialcertificate : https://mail.google.com/mail/u/0/#search/al/FMfcgzQcqHSlBWFsHSZmtDbKqhvQtPFC?projector=1&messagePartId=0.1,
      
  

  },
];

const Education: React.FC = () => {
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
      id="experience"   // 👈 this is the missing part
      className="relative min-h-screen py-20 px-6 bg-white text-gray-900"
    >
      <h2 className="text-5xl font-bold text-center mb-6 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
        Education & Experience
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
        My academic journey so far, and space to add professional experience in the future.
      </p>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>

        {education.map((item, index) => (
          <div 
            key={item.title} 
            className="relative pl-12 pb-8 animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <BookOpen className="h-4 w-4 text-white"/>
            </div>
            <Card className="bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.institution}</p>
                  </div>
                  <span className="text-sm font-medium bg-primary/30 px-3 py-1 rounded-full mt-2 md:mt-0 text-white">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{item.description}</p>

                {item.courses && item.courses.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map(course => (
                      <Badge key={course} className="bg-primary/20 text-primary border border-primary/50">
                        {course}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;


