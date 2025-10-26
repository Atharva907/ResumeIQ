import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function CreativeSplitTemplateImproved({ data }) {
  return (
    <div className="min-h-[29.7cm] w-[21cm] mx-auto bg-white shadow-lg flex" id="resume-preview">
      {/* Left sidebar with personal info */}
      <div className="w-1/3 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">{data.name || "John Doe"}</h1>
          <h2 className="text-lg font-light">{data.title || "Software Engineer"}</h2>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="text-lg font-semibold border-b border-white/30 pb-1">Contact</h3>
          {data.contact?.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{data.contact.email}</span>
            </div>
          )}
          {data.contact?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{data.contact.phone}</span>
            </div>
          )}
          {data.contact?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{data.contact.location}</span>
            </div>
          )}
          {data.contact?.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <span className="text-sm">{data.contact.linkedin}</span>
            </div>
          )}
          {data.contact?.github && (
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span className="text-sm">{data.contact.github}</span>
            </div>
          )}
        </div>

        {data.skills && data.skills.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold border-b border-white/30 pb-1 mb-3">Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-sm truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right side with main content */}
      <div className="flex-1 p-6">
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 pb-2 border-b-2 border-indigo-600 text-indigo-600">Summary</h2>
            <p className="leading-relaxed text-justify">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-indigo-600 text-indigo-600">Experience</h2>
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-5 border-l-2 border-indigo-600 pl-5 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-0 w-3 h-3 bg-indigo-600 rounded-full"></div>

                <div className="mb-2">
                  <div className="flex justify-between mb-1">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-sm text-gray-500 bg-indigo-100 px-2 py-1 rounded">{exp.duration}</span>
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
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-indigo-600 text-indigo-600">Education</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-3 border-l-2 border-indigo-600 pl-5 relative">
                {/* Timeline dot */}
                <div className="absolute -left-[5px] top-0 w-3 h-3 bg-indigo-600 rounded-full"></div>

                <div className="mb-1">
                  <div className="flex justify-between mb-1">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-gray-500 bg-indigo-100 px-2 py-1 rounded">{edu.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                </div>

                {edu.details && <p className="text-sm text-gray-700">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {data.projects && data.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-indigo-600 text-indigo-600">Projects</h2>
            {data.projects.map((project, i) => (
              <div key={i} className="mb-4 p-4 bg-indigo-50 rounded-md border-l-2 border-indigo-600">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
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
  );
}
