import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export default function ModernElegantTemplate({ data }: { data: any }) {
  return (
    <div className="p-0 text-gray-800 bg-white shadow-xl" id="resume-preview">
      {/* Modern gradient header with profile image placeholder */}
      <header className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 pb-16">
        <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <span className="text-3xl text-indigo-600 font-bold">
            {data.name ? data.name.split(" ").map((n: string) => n[0]).join("").toUpperCase() : "JD"}
          </span>
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-2 text-white">{data.name || "John Doe"}</h1>
          <h2 className="text-xl text-indigo-100 mb-6">{data.title || "Software Engineer"}</h2>

          {/* Modern contact badges */}
          <div className="flex flex-wrap gap-3">
            {data.contact?.email && (
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{data.contact.email}</span>
              </div>
            )}
            {data.contact?.phone && (
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{data.contact.phone}</span>
              </div>
            )}
            {data.contact?.location && (
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.contact.location}</span>
              </div>
            )}
            {data.contact?.linkedin && (
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>{data.contact.linkedin}</span>
              </div>
            )}
            {data.contact?.github && (
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>{data.contact.github}</span>
              </div>
            )}
            {data.contact?.website && (
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>{data.contact.website}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-8">
        {/* Summary section with modern card design */}
        {data.summary && (
          <section className="mb-8">
            <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </div>
          </section>
        )}

        {/* Experience section with timeline */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="relative">
                  {/* Timeline line and dot */}
                  {i < data.experience.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 to-purple-300"></div>
                  )}

                  <div className="flex gap-6">
                    <div className="relative">
                      <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {i + 1}
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <span className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm">
                          {exp.duration}
                        </span>
                      </div>
                      <h4 className="text-lg text-indigo-600 font-medium mb-3">{exp.company}</h4>
                      {exp.description && (
                        <p className="text-gray-700 mb-3">{exp.description}</p>
                      )}
                      {exp.highlights && (
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight: any, j: number) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-indigo-500 mt-1">▸</span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Two-column layout for education and skills */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Education section */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Education
              </h2>
              <div className="space-y-4">
                {data.education.map((edu: any, i: number) => (
                  <div key={i} className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{edu.degree}</h3>
                    <h4 className="text-indigo-600 font-medium mb-2">{edu.institution}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">{edu.duration}</span>
                    </div>
                    {edu.details && <p className="text-gray-700 text-sm">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills section with progress bars */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Skills & Expertise
              </h2>
              <div className="bg-linear-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md">
                <div className="space-y-4">
                  {data.skills.map((skill: any, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-full">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-linear-to-r from-indigo-500 to-purple-500 h-2 rounded-full" 
                            style={{ width: `${75 + (i % 3) * 8}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Projects section with cards */}
        {data.projects && data.projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              Featured Projects
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {data.projects.map((project: any, i: number) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                    <span className="bg-linear-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm">
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
                            className="px-3 py-1 bg-linear-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
