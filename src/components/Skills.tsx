import React, { useEffect } from "react";

const skills = {
  "Frontend Development": ["JavaScript", "TypeScript", "React",  "HTML/CSS", "Tailwind CSS"],
  "Backend Development": ["Node.js", "Express", "Python",  "RESTful APIs", ],
  "Database": ["MongoDB", "PostgreSQL", "Supabase" ,"Firebase"],
  "Other" : ["excel", "Pandas","Prompt Engineering"],
  "Tools" : ["Git/Github","Postman", "VS Code","Cursor", "AI Tools"]
};

const Skills: React.FC = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-16 px-4 bg-gray-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-pink-300/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <h2 className="text-5xl font-bold mb-12 text-gray-800 text-center animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
        My Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div
            key={category}
            className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 bg-gradient-to-br from-purple-200/50 via-pink-200/50 to-indigo-200/50 rounded-xl p-8 shadow-xl hover:shadow-2xl"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 text-center md:text-left">
              {category}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {skillList.map((skill, idx) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full font-medium text-white text-sm cursor-default
                             bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
                             transform transition-all duration-300 hover:scale-110 hover:shadow-lg animate-floating"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-floating {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes blob {
          0%,100% { transform: translate(0px,0px) scale(1); }
          33% { transform: translate(30px,-20px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Skills;
