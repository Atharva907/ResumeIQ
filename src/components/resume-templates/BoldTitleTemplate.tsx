export default function BoldTitleTemplate({ data }) {
  return (
    <div className="p-6 font-sans text-gray-800 bg-white" id="resume-preview">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 uppercase tracking-wide">{data.name || "John Doe"}</h1>
        <p className="text-xl text-gray-600 mb-4">{data.title || "Software Engineer"}</p>
        <div className="flex justify-center gap-6 text-sm text-gray-600">
          {data.contact?.email && <p>{data.contact.email}</p>}
          {data.contact?.phone && <p>{data.contact.phone}</p>}
          {data.contact?.location && <p>{data.contact.location}</p>}
        </div>
      </div>

      {data.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-3 uppercase tracking-wide">Summary</h2>
          <p className="text-center">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-5 uppercase tracking-wide">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <div className="text-center mb-3">
                <h3 className="text-xl font-bold uppercase">{exp.role}</h3>
                <p className="text-gray-700 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-500 italic">{exp.duration}</p>
              </div>
              {exp.description && <p className="text-sm mb-3 text-center">{exp.description}</p>}
              {exp.highlights && (
                <ul className="ml-8 list-disc text-sm">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="mb-2">{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-5 uppercase tracking-wide">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold uppercase">{edu.degree}</h3>
                <p className="text-gray-700 font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-500 italic">{edu.duration}</p>
              </div>
              {edu.details && <p className="text-sm text-center">{edu.details}</p>}
            </div>
          ))}
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-5 uppercase tracking-wide">Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {data.skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium">{skill}</span>
            ))}
          </div>
        </section>
      )}

      {data.projects && data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-5 uppercase tracking-wide">Projects</h2>
          {data.projects.map((project, i) => (
            <div key={i} className="mb-4">
              <div className="text-center mb-2">
                <h3 className="text-xl font-bold uppercase">{project.name}</h3>
                <p className="text-sm text-gray-500 italic">{project.duration}</p>
              </div>
              {project.description && <p className="text-sm mb-2 text-center">{project.description}</p>}
              {project.technologies && (
                <p className="text-xs text-center text-gray-600">
                  <span className="font-bold">Tech:</span> {project.technologies.join(', ')}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
