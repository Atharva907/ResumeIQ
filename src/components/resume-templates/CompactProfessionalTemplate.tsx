export default function CompactProfessionalTemplate({ data }) {
  return (
    <div className="p-4 font-sans text-gray-800 bg-white" id="resume-preview">
      <div className="mb-4 flex justify-between items-start">
        <div>
          <h1 className="text-xl font-bold">{data.name || "John Doe"}</h1>
          <p className="text-sm text-gray-600">{data.title || "Software Engineer"}</p>
        </div>
        <div className="text-right text-sm text-gray-600">
          {data.contact?.email && <p>{data.contact.email}</p>}
          {data.contact?.phone && <p>{data.contact.phone}</p>}
          {data.contact?.location && <p>{data.contact.location}</p>}
        </div>
      </div>

      <hr className="my-3 border-gray-300" />

      {data.summary && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-1">Summary</h2>
          <p className="text-xs">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between mb-1">
                <p className="font-semibold text-sm">{exp.role}</p>
                <p className="text-xs text-gray-500">{exp.duration}</p>
              </div>
              <p className="text-xs text-gray-700 mb-1">{exp.company}</p>
              {exp.description && <p className="text-xs mb-1">{exp.description}</p>}
              {exp.highlights && (
                <ul className="ml-4 list-disc text-xs">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="mb-1">{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="grid grid-cols-2 gap-4">
        {data.education && data.education.length > 0 && (
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase mb-2">Education</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between mb-1">
                  <p className="font-semibold text-sm">{edu.degree}</p>
                  <p className="text-xs text-gray-500">{edu.duration}</p>
                </div>
                <p className="text-xs text-gray-700">{edu.institution}</p>
                {edu.details && <p className="text-xs mt-1">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="mb-4">
            <h2 className="text-sm font-bold uppercase mb-2">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs">{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      {data.projects && data.projects.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold uppercase mb-2">Projects</h2>
          {data.projects.map((project, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between mb-1">
                <p className="font-semibold text-sm">{project.name}</p>
                <p className="text-xs text-gray-500">{project.duration}</p>
              </div>
              {project.description && <p className="text-xs mb-1">{project.description}</p>}
              {project.technologies && (
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">Tech:</span> {project.technologies.join(', ')}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
