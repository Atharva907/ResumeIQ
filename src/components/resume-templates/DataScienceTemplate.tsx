export default function DataScienceTemplate({ data }: { data: any }) {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-800 to-blue-900 text-white" id="resume-preview">
      {/* Data Science Header */}
      <header className="mb-8 pb-6 border-b border-gray-600">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white">{data.name || "John Doe"}</h1>
            <h2 className="text-xl text-blue-300 mb-4">{data.title || "Data Science Professional"}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-blue-300">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.github && <span>{data.contact.github}</span>}
              {data.contact?.linkedin && <span>{data.contact.linkedin}</span>}
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-400">
              {data.dataScienceMetrics?.models || "50+"}
            </div>
            <div className="text-sm text-blue-300">Models Built</div>
            <div className="text-2xl font-bold text-blue-400 mt-2">
              {data.dataScienceMetrics?.accuracy || "95%"}
            </div>
            <div className="text-sm text-blue-300">Model Accuracy</div>
          </div>
        </div>
      </header>

      {/* Data Science Summary */}
      {data.summary && (
        <section className="mb-8 p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-blue-400 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Data Science Expertise
          </h3>
          <p className="text-gray-300 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="md:w-3/5">
          {/* Experience Section */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Data Science Experience
              </h3>
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="mb-6 p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <span className="text-sm text-blue-300 bg-gray-700 px-2 py-1 rounded">{exp.duration}</span>
                  </div>
                  <p className="text-blue-300 font-medium mb-2">{exp.company}</p>
                  {exp.description && <p className="text-gray-300 mb-2">{exp.description}</p>}
                  {exp.highlights && (
                    <ul className="list-disc pl-5 text-gray-300">
                      {exp.highlights.map((highlight: any, j: number) => (
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
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Data Science Education
              </h3>
              {data.education.map((edu: any, i: number) => (
                <div key={i} className="mb-4 p-4 bg-gray-800 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <span className="text-sm text-blue-300 bg-gray-700 px-2 py-1 rounded">{edu.duration}</span>
                  </div>
                  <p className="text-blue-300 font-medium mb-1">{edu.institution}</p>
                  {edu.details && <p className="text-gray-300 text-sm">{edu.details}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="md:w-2/5">
          {/* Data Science Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Technical Skills
              </h3>
              <div className="p-4 bg-gray-800 rounded-lg">
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: any, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-md text-sm text-blue-300">{skill}</span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {data.projects && data.projects.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Data Science Projects
              </h3>
              {data.projects.map((project: any, i: number) => (
                <div key={i} className="mb-4 p-4 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-1">{project.name}</h4>
                  <p className="text-sm text-blue-300 mb-2">{project.duration}</p>
                  {project.description && <p className="text-gray-300 text-sm mb-2">{project.description}</p>}
                  {project.technologies && (
                    <p className="text-xs text-blue-300">
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
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Data Science Achievements
              </h3>
              <div className="p-4 bg-gray-800 rounded-lg">
                <ul className="list-disc pl-5 text-gray-300">
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