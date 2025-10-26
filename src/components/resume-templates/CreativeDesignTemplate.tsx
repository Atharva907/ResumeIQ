export default function CreativeDesignTemplate({ data }) {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 text-gray-800" id="resume-preview">
      {/* Creative Header */}
      <header className="mb-8 text-center">
        <div className="inline-block mb-4">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4"></div>
        </div>
        <h1 className="text-4xl font-bold mb-2 text-purple-900">{data.name || "John Doe"}</h1>
        <h2 className="text-xl text-purple-700 mb-4">{data.title || "Creative Professional"}</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-600">
          {data.contact?.email && <span>{data.contact.email}</span>}
          {data.contact?.phone && <span>{data.contact.phone}</span>}
          {data.contact?.location && <span>{data.contact.location}</span>}
        </div>
      </header>

      {/* Creative Summary */}
      {data.summary && (
        <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-purple-900 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            About Me
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-3/5">
          {/* Experience Section */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Experience
              </h3>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-6 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-purple-900">{exp.role}</h4>
                    <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-purple-700 font-medium mb-2">{exp.company}</p>
                  {exp.description && <p className="text-gray-700 mb-2">{exp.description}</p>}
                  {exp.highlights && (
                    <ul className="list-disc pl-5 text-gray-700">
                      {exp.highlights.map((highlight, j) => (
                        <li key={j} className="mb-1">{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Education Section */}
          {data.education && data.education.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Education
              </h3>
              {data.education.map((edu, i) => (
                <div key={i} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-purple-900">{edu.degree}</h4>
                    <span className="text-sm text-purple-600 bg-purple-100 px-2 py-1 rounded-full">{edu.duration}</span>
                  </div>
                  <p className="text-purple-700 font-medium mb-1">{edu.institution}</p>
                  {edu.details && <p className="text-gray-700 text-sm">{edu.details}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="md:w-2/5">
          {/* Skills Section */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Skills
              </h3>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm text-purple-700">{skill}</span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {data.projects && data.projects.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Projects
              </h3>
              {data.projects.map((project, i) => (
                <div key={i} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-purple-900 mb-1">{project.name}</h4>
                  <p className="text-sm text-purple-600 mb-2">{project.duration}</p>
                  {project.description && <p className="text-gray-700 text-sm mb-2">{project.description}</p>}
                  {project.technologies && (
                    <p className="text-xs text-purple-600">
                      <span className="font-medium">Technologies:</span> {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Achievements Section */}
          {data.achievements && data.achievements.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-4 text-purple-900 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Achievements
              </h3>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <ul className="list-disc pl-5 text-gray-700">
                  {data.achievements.map((achievement, i) => (
                    <li key={i} className="mb-1 text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}