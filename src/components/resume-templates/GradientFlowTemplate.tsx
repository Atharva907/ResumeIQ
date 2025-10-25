export default function GradientFlowTemplate({ data }) {
  return (
    <div className="p-6 font-sans text-gray-800 bg-white" id="resume-preview">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 -m-6 mb-6 rounded-b-2xl">
        <h1 className="text-3xl font-bold mb-2">{data.name || "John Doe"}</h1>
        <p className="text-xl mb-4">{data.title || "Software Engineer"}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {data.contact?.email && <p>{data.contact.email}</p>}
          {data.contact?.phone && <p>{data.contact.phone}</p>}
          {data.contact?.location && <p>{data.contact.location}</p>}
        </div>
      </div>

      {data.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Summary</h2>
          <p>{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4 pb-4 border-l-2 border-gradient-to-b from-blue-500 to-purple-600 pl-4">
              <div className="flex justify-between mb-1">
                <p className="font-semibold text-lg">{exp.role}</p>
                <p className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.duration}</p>
              </div>
              <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
              {exp.description && <p className="text-sm text-gray-700 mb-2">{exp.description}</p>}
              {exp.highlights && (
                <ul className="ml-5 list-disc text-sm">
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="mb-1">{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      <div className="grid grid-cols-2 gap-6">
        {data.education && data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Education</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between mb-1">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                {edu.details && <p className="text-sm mt-1">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md text-sm">{skill}</span>
              ))}
            </div>
          </section>
        )}
      </div>

      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</h2>
          {data.projects.map((project, i) => (
            <div key={i} className="mb-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
              <div className="flex justify-between mb-1">
                <p className="font-semibold">{project.name}</p>
                <p className="text-sm text-gray-500">{project.duration}</p>
              </div>
              {project.description && <p className="text-sm mb-2">{project.description}</p>}
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
