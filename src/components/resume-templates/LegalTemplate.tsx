export default function LegalTemplate({ data }: { data: any }) {
  return (
    <div className="p-8 bg-white text-gray-800" id="resume-preview">
      {/* Legal Header */}
      <header className="mb-8 pb-6 border-b-2 border-gray-800">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-gray-900">{data.name || "John Doe"}</h1>
            <h2 className="text-xl text-gray-700 mb-4">{data.title || "Legal Professional"}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.linkedin && <span>{data.contact.linkedin}</span>}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-800 mb-1">Bar Admission</div>
            <div className="text-sm text-gray-600">{data.barAdmission || "State Bar, 2015"}</div>
            <div className="text-lg font-bold text-gray-800 mb-1 mt-3">Practice Areas</div>
            <div className="text-sm text-gray-600">{data.practiceAreas?.join(", ") || "Corporate Law, Litigation"}</div>
          </div>
        </div>
      </header>

      {/* Legal Summary */}
      {data.summary && (
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide">Professional Profile</h3>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Experience and Education */}
        <div className="md:w-3/5">
          {/* Experience Section */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Legal Experience</h3>
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="mb-6 pb-4 border-l-4 border-gray-800 pl-5">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{exp.role}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{exp.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                  {exp.description && <p className="text-gray-700 mb-2">{exp.description}</p>}
                  {exp.highlights && (
                    <ul className="list-disc pl-5 text-gray-700">
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
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Legal Education</h3>
              {data.education.map((edu: any, i: number) => (
                <div key={i} className="mb-4 pb-4 border-l-4 border-gray-800 pl-5">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{edu.duration}</span>
                  </div>
                  <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                  {edu.details && <p className="text-gray-700">{edu.details}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column - Skills, Cases, Achievements */}
        <div className="md:w-2/5">
          {/* Legal Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Legal Skills</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill: any, i: number) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-700">{skill}</span>
                ))}
              </div>
            </section>
          )}

          {/* Notable Cases */}
          {data.cases && data.cases.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase tracking-wide">Notable Cases</h3>
              {data.cases.map((case_, i) => (
                <div key={i} className="mb-4 p-4 bg-gray-50 rounded-md">
                  <h4 className="text-lg font-medium text-gray-900 mb-1">{case_.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{case_.outcome}</p>
                  {case_.description && <p className="text-gray-700 text-sm">{case_.description}</p>}
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