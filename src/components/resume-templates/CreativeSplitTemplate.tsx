import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

export default function CreativeSplitTemplate({ data }: { data: any }) {
  return (
    <div className="flex bg-white text-gray-800" id="resume-preview">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-indigo-900 text-white p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">{data.name || "John Doe"}</h1>
          <p className="text-lg mb-4 text-indigo-200">{data.title || "Software Engineer"}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3 border-b border-indigo-700 pb-1">Contact</h2>
          <div className="space-y-2 text-sm">
            {data.contact?.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{data.contact.email}</span>
              </div>
            )}
            {data.contact?.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{data.contact.phone}</span>
              </div>
            )}
            {data.contact?.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.contact.location}</span>
              </div>
            )}
            {data.contact?.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>{data.contact.website}</span>
              </div>
            )}
            {data.contact?.github && (
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>{data.contact.github}</span>
              </div>
            )}
            {data.contact?.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <span>{data.contact.linkedin}</span>
              </div>
            )}
          </div>
        </div>

        {data.skills && data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-b border-indigo-700 pb-1">Skills</h2>
            <div className="space-y-2 text-sm">
              {data.skills.map((skill: any, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.languages && data.languages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 border-b border-indigo-700 pb-1">Languages</h2>
            <div className="space-y-2 text-sm">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-indigo-300">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-2/3 p-6">
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-indigo-900">About Me</h2>
            <p className="text-sm">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-indigo-900">Experience</h2>
            {data.experience.map((exp: any, i: number) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
                <p className="text-indigo-700 font-medium mb-2">{exp.company}</p>
                {exp.description && <p className="text-sm mb-2">{exp.description}</p>}
                {exp.highlights && (
                  <ul className="ml-5 list-disc text-sm">
                    {exp.highlights.map((highlight: any, j: number) => (
                      <li key={j} className="mb-1">{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {data.education && data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-indigo-900">Education</h2>
            {data.education.map((edu: any, i: number) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
                <p className="text-indigo-700 font-medium">{edu.institution}</p>
                {edu.details && <p className="text-sm mt-1">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {data.projects && data.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 text-indigo-900">Projects</h2>
            {data.projects.map((project: any, i: number) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{project.name}</h3>
                  <p className="text-sm text-gray-500">{project.duration}</p>
                </div>
                {project.description && <p className="text-sm mb-2">{project.description}</p>}
                {project.technologies && (
                  <p className="text-xs text-gray-600">
                    <span className="font-bold">Tech:</span> {project.technologies.join(', ')}
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
