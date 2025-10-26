import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ElegantSerifTemplateImproved({ data }) {
  return (
    <div className="min-h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg" id="resume-preview">
      {/* Elegant header with serif font */}
      <header className="bg-gradient-to-r from-amber-50 to-amber-100 border-b-2 border-amber-200 p-6 rounded-t-lg">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2 text-gray-800">{data.name || "John Doe"}</h1>
            <h2 className="text-xl font-serif text-gray-600">{data.title || "Software Engineer"}</h2>
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

      <div className="p-6 font-serif">
        {/* Two-column layout for main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - Summary, Experience, Education */}
          <div className="flex-1">
            {data.summary && (
              <section className="mb-6">
                <h2 className="text-xl font-serif font-bold mb-3 pb-2 border-b-2 border-amber-600 text-amber-700">Summary</h2>
                <p className="leading-relaxed text-justify">{data.summary}</p>
              </section>
            )}

            {data.experience && data.experience.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-serif font-bold mb-4 pb-2 border-b-2 border-amber-600 text-amber-700">Experience</h2>
                {data.experience.map((exp, i) => (
                  <div key={i} className="mb-5 border-l-2 border-amber-600 pl-5 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[5px] top-0 w-3 h-3 bg-amber-600 rounded-full"></div>

                    <div className="mb-2">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-lg font-serif font-semibold">{exp.role}</h3>
                        <span className="text-sm text-gray-500 bg-amber-100 px-2 py-1 rounded">{exp.duration}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>

                    {exp.description && <p className="text-sm text-gray-700 mb-2">{exp.description}</p>}

                    {exp.highlights && (
                      <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                        {exp.highlights.map((highlight, j) => (
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
                <h2 className="text-xl font-serif font-bold mb-4 pb-2 border-b-2 border-amber-600 text-amber-700">Education</h2>
                {data.education.map((edu, i) => (
                  <div key={i} className="mb-3 border-l-2 border-amber-600 pl-5 relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[5px] top-0 w-3 h-3 bg-amber-600 rounded-full"></div>

                    <div className="mb-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-lg font-serif font-semibold">{edu.degree}</h3>
                        <span className="text-sm text-gray-500 bg-amber-100 px-2 py-1 rounded">{edu.duration}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{edu.institution}</p>
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
                <h2 className="text-xl font-serif font-bold mb-4 pb-2 border-b-2 border-amber-600 text-amber-700">Skills</h2>
                <div className="grid grid-cols-2 gap-2">
                  {data.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.projects && data.projects.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-serif font-bold mb-4 pb-2 border-b-2 border-amber-600 text-amber-700">Projects</h2>
                {data.projects.map((project, i) => (
                  <div key={i} className="mb-4 p-4 bg-amber-50 rounded-md border-l-2 border-amber-600">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-serif font-semibold">{project.name}</h3>
                      <span className="text-sm text-gray-500">{project.duration}</span>
                    </div>
                    {project.description && <p className="text-sm text-gray-700 mb-2">{project.description}</p>}
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
