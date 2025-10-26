export default function VisualImpactTemplate({ data }: { data: any }) {
  return (
    <div className="flex bg-white text-gray-800" id="resume-preview">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-teal-700 text-white p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">{data.name || "John Doe"}</h1>
          <p className="text-lg mb-4 text-teal-100">{data.title || "Software Engineer"}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 uppercase tracking-wider">Contact</h2>
          <div className="space-y-2 text-sm">
            {data.contact?.email && <p>{data.contact.email}</p>}
            {data.contact?.phone && <p>{data.contact.phone}</p>}
            {data.contact?.location && <p>{data.contact.location}</p>}
            {data.contact?.website && <p>{data.contact.website}</p>}
          </div>
        </div>

        {data.skills && data.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 uppercase tracking-wider">Skills</h2>
            <div className="space-y-3">
              {data.skills.map((skill: any, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-1 bg-teal-600 h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-white" style={{ width: `${85 - (i * 5)}%` }}></div>
                  </div>
                  <span className="text-xs w-24 text-right">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.languages && data.languages.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3 uppercase tracking-wider">Languages</h2>
            <div className="space-y-2">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between">
                  <span className="text-sm">{lang.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className={`w-2 h-2 rounded-full ${j < lang.level ? 'bg-white' : 'bg-teal-500'}`}></div>
                    ))}
                  </div>
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
            <h2 className="text-xl font-bold mb-3 text-teal-700 uppercase tracking-wider">About Me</h2>
            <p className="text-sm">{data.summary}</p>
          </section>
        )}

        {data.experience && data.experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-teal-700 uppercase tracking-wider">Experience</h2>
            {data.experience.map((exp: any, i: number) => (
              <div key={i} className="mb-4 relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-700 rounded-full"></div>
                <div className="absolute left-1.5 top-5 w-0.5 h-full bg-gray-300"></div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold text-lg">{exp.role}</h3>
                  <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.duration}</p>
                </div>
                <p className="text-teal-600 font-medium mb-2">{exp.company}</p>
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
            <h2 className="text-xl font-bold mb-4 text-teal-700 uppercase tracking-wider">Education</h2>
            {data.education.map((edu: any, i: number) => (
              <div key={i} className="mb-3 relative pl-6">
                <div className="absolute left-0 top-2 w-3 h-3 bg-teal-700 rounded-full"></div>
                <div className="flex justify-between mb-1">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
                <p className="text-teal-600 font-medium">{edu.institution}</p>
                {edu.details && <p className="text-sm mt-1">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {data.projects && data.projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-4 text-teal-700 uppercase tracking-wider">Projects</h2>
            {data.projects.map((project: any, i: number) => (
              <div key={i} className="mb-3 p-3 bg-teal-50 rounded-lg">
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
