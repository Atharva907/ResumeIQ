export default function AcademicTemplate({ data }: { data: any }) {
  return (
    <div className="p-8 bg-white text-gray-800" id="resume-preview">
      {/* Academic Header */}
      <header className="mb-8 pb-6 border-b-2 border-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.name || "John Doe"}</h1>
          <h2 className="text-xl text-gray-700 mb-4">{data.title || "Academic Professional"}</h2>
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            {data.contact?.email && <span>{data.contact.email}</span>}
            {data.contact?.phone && <span>{data.contact.phone}</span>}
            {data.contact?.location && <span>{data.contact.location}</span>}
            {data.contact?.linkedin && <span>{data.contact.linkedin}</span>}
          </div>
        </div>
      </header>

      {/* Academic Summary */}
      {data.summary && (
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide">Research Interests</h3>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Education and Experience */}
        <div className="md:w-3/5">
          {/* Education Section */}
          {data.education && data.education.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Education</h3>
              {data.education.map((edu: any, i: number) => (
                <div key={i} className="mb-6 pb-4 border-l-4 border-gray-800 pl-5">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{edu.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                  {edu.details && <p className="text-gray-700">{edu.details}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Experience Section */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Academic Experience</h3>
              {data.experience.map((exp, i) => (
                <div key={i} className="mb-6 pb-4 border-l-4 border-gray-800 pl-5">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
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
        </div>

        {/* Right Column - Publications, Skills, Projects */}
        <div className="md:w-2/5">
          {/* Publications Section */}
          {data.publications && data.publications.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Selected Publications</h3>
              {data.publications.map((pub, i) => (
                <div key={i} className="mb-4 pb-4 border-b border-gray-200 last:border-0">
                  <h4 className="text-lg font-medium text-gray-900 mb-1">{pub.title}</h4>
                  <p className="text-sm text-gray-600 italic mb-1">{pub.journal}</p>
                  <p className="text-sm text-gray-600">{pub.year}</p>
                </div>
              ))}
            </section>
          )}

          {/* Skills Section */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Research Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {data.projects && data.projects.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Research Projects</h3>
              {data.projects.map((project, i) => (
                <div key={i} className="mb-4 p-4 bg-gray-50 rounded-md">
                  <h4 className="text-lg font-medium text-gray-900 mb-1">{project.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{project.duration}</p>
                  {project.description && <p className="text-gray-700 text-sm mb-2">{project.description}</p>}
                  {project.technologies && (
                    <p className="text-xs text-gray-600">
                      <span className="font-medium">Methods:</span> {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Awards Section */}
          {data.achievements && data.achievements.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Awards & Honors</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {data.achievements.map((achievement, i) => (
                  <li key={i} className="mb-1 text-sm">{achievement}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}