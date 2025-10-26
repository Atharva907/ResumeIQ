import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function TechMinimalTemplateImproved({ data }: { data: any }) {
  return (
    <div className="min-h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg" id="resume-preview">
      {/* Minimal tech header */}
      <header className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{data.name || "John Doe"}</h1>
            <h2 className="text-lg text-gray-600">{data.title || "Software Engineer"}</h2>
          </div>

          <div className="text-right text-sm text-gray-600 space-y-1">
            {data.contact?.email && (
              <div className="flex items-center gap-1 justify-end">
                <Mail className="h-4 w-4" />
                <span>{data.contact.email}</span>
              </div>
            )}
            {data.contact?.phone && (
              <div className="flex items-center gap-1 justify-end">
                <Phone className="h-4 w-4" />
                <span>{data.contact.phone}</span>
              </div>
            )}
            {data.contact?.location && (
              <div className="flex items-center gap-1 justify-end">
                <MapPin className="h-4 w-4" />
                <span>{data.contact.location}</span>
              </div>
            )}
            {data.contact?.linkedin && (
              <div className="flex items-center gap-1 justify-end">
                <Linkedin className="h-4 w-4" />
                <span>{data.contact.linkedin}</span>
              </div>
            )}
            {data.contact?.github && (
              <div className="flex items-center gap-1 justify-end">
                <Github className="h-4 w-4" />
                <span>{data.contact.github}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Two-column layout for main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Summary, Experience, Education */}
          <div className="flex-1">
            {data.summary && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-2 pb-1 border-b border-gray-300">Summary</h2>
                <p className="leading-relaxed text-justify">{data.summary}</p>
              </section>
            )}

            {data.experience && data.experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Experience</h2>
                {data.experience.map((exp: any, i: number) => (
                  <div key={i} className="mb-4 border-l border-gray-400 pl-4">
                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-base font-semibold">{exp.role}</h3>
                        <span className="text-sm text-gray-500">{exp.duration}</span>
                      </div>
                      <p className="text-gray-700 text-sm font-medium">{exp.company}</p>
                    </div>

                    {exp.description && <p className="text-sm text-gray-700 mb-1">{exp.description}</p>}

                    {exp.highlights && (
                      <ul className="mt-1 ml-4 list-disc text-sm text-gray-700 space-y-1">
                        {exp.highlights.map((highlight: any, j: number) => (
                          <li key={j}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            )}

            {data.education && data.education.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Education</h2>
                {data.education.map((edu: any, i: number) => (
                  <div key={i} className="mb-3 border-l border-gray-400 pl-4">
                    <div className="mb-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-base font-semibold">{edu.degree}</h3>
                        <span className="text-sm text-gray-500">{edu.duration}</span>
                      </div>
                      <p className="text-gray-700 text-sm font-medium">{edu.institution}</p>
                    </div>

                    {edu.details && <p className="text-sm text-gray-700">{edu.details}</p>}
                  </div>
                ))}
              </section>
            )}
          </div>

          {/* Right column - Skills, Projects */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-6 lg:self-start">
            {data.skills && data.skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Skills</h2>
                <div className="grid grid-cols-2 gap-1">
                  {data.skills.map((skill: any, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.projects && data.projects.length > 0 && (
              <section className="mb-6">
                <h2 className="text-lg font-bold mb-3 pb-1 border-b border-gray-300">Projects</h2>
                {data.projects.map((project: any, i: number) => (
                  <div key={i} className="mb-3 p-3 bg-gray-50 rounded-sm border-l border-gray-400">
                    <div className="flex justify-between mb-1">
                      <h3 className="text-base font-semibold">{project.name}</h3>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    {project.description && <p className="text-sm text-gray-700 mb-1">{project.description}</p>}
                    {project.technologies && (
                      <p className="text-xs text-gray-600">
                        <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                      </p>
                    )}
                  </div>
                ))}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
