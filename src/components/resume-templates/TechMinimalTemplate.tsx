import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function TechMinimalTemplate({ data }: { data: any }) {
  return (
    <div className="p-8 font-mono text-gray-800 bg-gray-50 border border-gray-200" id="resume-preview" style={{ fontFamily: 'monospace' }}>
      {/* Tech-style header */}
      <header className="mb-8 bg-gray-900 text-white p-6 -m-8 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-1 text-green-400">{data.name || "John Doe"}</h1>
            <p className="text-lg text-gray-300">{data.title || "Software Engineer"}</p>
          </div>
          <div className="text-xs bg-gray-800 px-3 py-1 rounded-full text-green-400 border border-green-400">
            OPEN TO OPPORTUNITIES
          </div>
        </div>
        
        {/* Terminal-style contact info */}
        <div className="bg-black p-4 rounded-md font-mono text-sm text-green-400">
          <p>$ <span className="text-gray-400">contact</span> --info</p>
          <div className="ml-4 mt-2 space-y-1">
            {data.contact?.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-green-400" />
                <span>{data.contact.email}</span>
              </div>
            )}
            {data.contact?.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-green-400" />
                <span>{data.contact.phone}</span>
              </div>
            )}
            {data.contact?.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 text-green-400" />
                <span>{data.contact.location}</span>
              </div>
            )}
            {data.contact?.github && (
              <div className="flex items-center gap-2">
                <Github className="h-3 w-3 text-green-400" />
                <span>{data.contact.github}</span>
              </div>
            )}
            {data.contact?.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-3 w-3 text-green-400" />
                <span>{data.contact.linkedin}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="bg-black p-4 rounded-md font-mono text-sm text-green-400 mb-6">
        <p>$ <span className="text-gray-400">cat</span> profile.txt</p>
        <div className="ml-4 mt-2 text-gray-300">
          {data.summary && (
            <p className="mb-4">{data.summary}</p>
          )}
        </div>
      </div>

      {data.experience && data.experience.length > 0 && (
        <div className="bg-black p-4 rounded-md font-mono text-sm text-green-400 mb-6">
          <p>$ <span className="text-gray-400">ls</span> ~/experience</p>
          <div className="ml-4 mt-2 text-gray-300">
            {data.experience.map((exp: any, i: number) => (
              <div key={i} className="mb-6 p-3 bg-gray-800 rounded-md border-l-2 border-green-400">
                <div className="flex justify-between mb-2 items-center">
                  <p className="text-green-400 font-bold">{exp.role}</p>
                  <p className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">{exp.duration}</p>
                </div>
                <p className="text-sm mb-2 text-gray-400">{exp.company}</p>
                {exp.description && (
                  <p className="text-sm mb-2">{exp.description}</p>
                )}
                {exp.highlights && (
                  <ul className="space-y-1 text-sm">
                    {exp.highlights.map((highlight: any, j: number) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-green-400">&gt;</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education && data.education.length > 0 && (
        <div className="bg-black p-4 rounded-md font-mono text-sm text-green-400 mb-6">
          <p>$ <span className="text-gray-400">cat</span> ~/education/credentials.txt</p>
          <div className="ml-4 mt-2 text-gray-300">
            {data.education.map((edu: any, i: number) => (
              <div key={i} className="mb-4 p-3 bg-gray-800 rounded-md border-l-2 border-blue-400">
                <div className="flex justify-between mb-2 items-center">
                  <p className="text-blue-400 font-bold">{edu.degree}</p>
                  <p className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">{edu.duration}</p>
                </div>
                <p className="text-sm text-gray-400 mb-2">{edu.institution}</p>
                {edu.details && <p className="text-sm">{edu.details}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {data.skills && data.skills.length > 0 && (
        <div className="bg-black p-4 rounded-md font-mono text-sm text-green-400 mb-6">
          <p>$ <span className="text-gray-400">cat</span> ~/tech-stack.txt</p>
          <div className="ml-4 mt-2 grid grid-cols-2 gap-3 text-gray-300">
            {data.skills.map((skill: any, i: number) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-800 rounded border border-gray-700">
                <span className="text-green-400">$</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.projects && data.projects.length > 0 && (
        <div className="bg-black p-4 rounded-md font-mono text-sm text-green-400 mb-6">
          <p>$ <span className="text-gray-400">ls</span> ~/projects</p>
          <div className="ml-4 mt-2 text-gray-300">
            {data.projects.map((project: any, i: number) => (
              <div key={i} className="mb-4 p-3 bg-gray-800 rounded-md border-l-2 border-purple-400">
                <div className="flex justify-between mb-2 items-center">
                  <p className="text-purple-400 font-bold">{project.name}</p>
                  <p className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded">{project.duration}</p>
                </div>
                {project.description && (
                  <p className="text-sm mb-2">{project.description}</p>
                )}
                {project.technologies && (
                  <div className="mt-2 p-2 bg-gray-900 rounded text-xs">
                    <p className="text-gray-400 mb-1">$ <span className="text-gray-500">tech</span> --list</p>
                    <div className="flex flex-wrap gap-2 text-purple-400">
                      {project.technologies.map((tech: any, j: number) => (
                        <span key={j} className="bg-gray-800 px-2 py-1 rounded border border-gray-700">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
