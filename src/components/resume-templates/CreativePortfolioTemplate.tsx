import { Mail, Phone, MapPin, Linkedin, Github, Globe, Calendar } from "lucide-react";

export default function CreativePortfolioTemplate({ data }: { data: any }) {
  return (
    <div className="p-0 text-gray-800 bg-gradient-to-br from-slate-50 to-blue-50" id="resume-preview">
      {/* Creative header with overlapping elements */}
      <header className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative p-8 pb-16">
          {/* Profile section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile image placeholder with creative border */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl font-bold">
                {data.name ? data.name.split(" ").map((n: any[]) => n[0]).join("").toUpperCase() : "JD"}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg">
                <Calendar className="h-4 w-4" />
              </div>
            </div>

            {/* Name and title with creative styling */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2 bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {data.name || "John Doe"}
              </h1>
              <h2 className="text-xl text-gray-600 mb-4">{data.title || "Software Engineer"}</h2>

              {/* Creative contact section */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {data.contact?.email && (
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>{data.contact.email}</span>
                  </div>
                )}
                {data.contact?.phone && (
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span>{data.contact.phone}</span>
                  </div>
                )}
                {data.contact?.location && (
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-blue-500" />
                    <span>{data.contact.location}</span>
                  </div>
                )}
                {data.contact?.linkedin && (
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 text-sm">
                    <Linkedin className="h-4 w-4 text-blue-500" />
                    <span>{data.contact.linkedin}</span>
                  </div>
                )}
                {data.contact?.github && (
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 text-sm">
                    <Github className="h-4 w-4 text-blue-500" />
                    <span>{data.contact.github}</span>
                  </div>
                )}
                {data.contact?.website && (
                  <div className="bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <span>{data.contact.website}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Summary with creative card */}
        {data.summary && (
          <section className="mb-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-full opacity-50"></div>

              <h2 className="text-2xl font-bold mb-4 text-blue-600">About Me</h2>
              <p className="text-gray-700 leading-relaxed relative z-10">{data.summary}</p>
            </div>
          </section>
        )}

        {/* Experience with creative cards */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Professional Journey</h2>
            <div className="space-y-6">
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                  {/* Decorative element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 ${
                    i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-indigo-400' : 'bg-purple-400'
                  }`}></div>

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <h4 className="text-lg text-blue-600 font-medium">{exp.company}</h4>
                    </div>
                    <div className="bg-linear-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                      {exp.duration}
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                  )}

                  {exp.highlights && (
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight: any, j: number) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 ${
                            i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                          }`}>
                            {j + 1}
                          </div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Two-column layout for education and skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Education with creative cards */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Education</h2>
              <div className="space-y-4">
                {data.education.map((edu: any, i: number) => (
                  <div key={i} className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
                    {/* Decorative element */}
                    <div className={`absolute top-0 left-0 w-20 h-20 rounded-br-full opacity-20 ${
                      i % 2 === 0 ? 'bg-blue-400' : 'bg-indigo-400'
                    }`}></div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-md text-blue-600 font-medium mb-2">{edu.institution}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">{edu.duration}</span>
                    </div>
                    {edu.details && <p className="text-gray-700 text-sm">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills with creative visualization */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 text-blue-600">Skills & Expertise</h2>
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  {data.skills.map((skill: any, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                        i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                      }`}>
                        {skill.substring(0, 2).toUpperCase()}
                      </div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Projects with creative cards */}
        {data.projects && data.projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.projects.map((project: any, i: number) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  {/* Project header with gradient */}
                  <div className={`bg-linear-to-r h-2 ${
                    i % 3 === 0 ? 'from-blue-400 to-blue-600' : 
                    i % 3 === 1 ? 'from-indigo-400 to-indigo-600' : 
                    'from-purple-400 to-purple-600'
                  }`}></div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {project.duration}
                      </span>
                    </div>

                    {project.description && (
                      <p className="text-gray-700 mb-4">{project.description}</p>
                    )}

                    {project.technologies && (
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech: any, j: number) => (
                            <span 
                              key={j} 
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                i % 3 === 0 ? 'bg-blue-100 text-blue-700' : 
                                i % 3 === 1 ? 'bg-indigo-100 text-indigo-700' : 
                                'bg-purple-100 text-purple-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
