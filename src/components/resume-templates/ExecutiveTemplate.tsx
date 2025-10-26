export default function ExecutiveTemplate({ data }) {
  return (
    <div className="p-8 bg-white text-gray-800" id="resume-preview">
      {/* Executive Header */}
      <header className="mb-8 pb-6 border-b-2 border-gray-800">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.name || "John Doe"}</h1>
            <h2 className="text-xl text-gray-700 mb-4">{data.title || "Executive"}</h2>
          </div>
          <div className="text-right text-sm text-gray-600">
            {data.contact?.email && <p>{data.contact.email}</p>}
            {data.contact?.phone && <p>{data.contact.phone}</p>}
            {data.contact?.location && <p>{data.contact.location}</p>}
            {data.contact?.linkedin && <p>{data.contact.linkedin}</p>}
          </div>
        </div>
      </header>

      {/* Executive Summary */}
      {data.summary && (
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide">Executive Summary</h3>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Experience */}
        <div className="md:w-3/5">
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Professional Experience</h3>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-6 pb-4 border-l-4 border-gray-800 pl-5">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">{exp.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                  {exp.description && <p className="text-gray-700 mb-3">{exp.description}</p>}
                  {exp.highlights && (
                    <ul className="list-disc pl-5 text-gray-700">
                      {exp.highlights.map((highlight, j) => (
                        <li key={j} className="mb-2">{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Education</h3>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-4 pb-4 border-l-4 border-gray-800 pl-5">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">{edu.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                  {edu.details && <p className="text-gray-700">{edu.details}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column - Skills, Projects, Achievements */}
        <div className="md:w-2/5">
          {/* Core Competencies */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-2">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Key Projects */}
          {data.projects && data.projects.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Key Projects</h3>
              {data.projects.map((project, i) => (
                <div key={i} className="mb-4 p-4 bg-gray-50 rounded-md">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{project.duration}</p>
                  {project.description && <p className="text-gray-700 text-sm mb-2">{project.description}</p>}
                  {project.technologies && (
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Professional Achievements */}
          {data.achievements && data.achievements.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Professional Achievements</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {data.achievements.map((achievement, i) => (
                  <li key={i} className="mb-2 text-sm">{achievement}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}