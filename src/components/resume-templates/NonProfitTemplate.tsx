export default function NonProfitTemplate({ data }: { data: any }) {
  return (
    <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 text-gray-800" id="resume-preview">
      {/* NonProfit Header */}
      <header className="mb-8 pb-6 border-b-2 border-emerald-600">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-emerald-900">{data.name || "John Doe"}</h1>
            <h2 className="text-xl text-emerald-700 mb-4">{data.title || "Nonprofit Professional"}</h2>
            <div className="flex flex-wrap gap-4 text-sm text-emerald-600">
              {data.contact?.email && <span>{data.contact.email}</span>}
              {data.contact?.phone && <span>{data.contact.phone}</span>}
              {data.contact?.location && <span>{data.contact.location}</span>}
              {data.contact?.linkedin && <span>{data.contact.linkedin}</span>}
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-600">
              ${data.nonprofitMetrics?.fundsRaised || "5M+"}
            </div>
            <div className="text-sm text-emerald-600">Funds Raised</div>
            <div className="text-2xl font-bold text-emerald-600 mt-2">
              {data.nonprofitMetrics?.programs || "20+"}
            </div>
            <div className="text-sm text-emerald-600">Programs Managed</div>
          </div>
        </div>
      </header>

      {/* NonProfit Summary */}
      {data.summary && (
        <section className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-3 text-emerald-900 flex items-center">
            <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
            Mission & Vision
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
              <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                Nonprofit Experience
              </h3>
              {data.experience.map((exp: any, i: number) => (
                <div key={i} className="mb-6 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-emerald-900">{exp.role}</h4>
                    <span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">{exp.duration}</span>
                  </div>
                  <p className="text-emerald-700 font-medium mb-2">{exp.company}</p>
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
              <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                Education
              </h3>
              {data.education.map((edu: any, i: number) => (
                <div key={i} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold text-emerald-900">{edu.degree}</h4>
                    <span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">{edu.duration}</span>
                  </div>
                  <p className="text-emerald-700 font-medium mb-1">{edu.institution}</p>
                  {edu.details && <p className="text-gray-700 text-sm">{edu.details}</p>}
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="md:w-2/5">
          {/* NonProfit Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                Nonprofit Skills
              </h3>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: any, i: number) => (
                    <span key={i} className="px-3 py-1 bg-linear-to-r from-emerald-100 to-green-100 rounded-full text-sm text-emerald-700">{skill}</span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Programs Section */}
          {data.programs && data.programs.length > 0 && (
            <section className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                Key Programs
              </h3>
              {data.programs.map((program, i) => (
                <div key={i} className="mb-4 p-4 bg-white rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-emerald-900 mb-1">{program.name}</h4>
                  <p className="text-sm text-emerald-600 mb-2">{program.duration}</p>
                  {program.description && <p className="text-gray-700 text-sm mb-2">{program.description}</p>}
                  {program.impact && (
                    <p className="text-xs text-emerald-600">
                      <span className="font-medium">Impact:</span> {program.impact}
                    </p>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Achievements Section */}
          {data.achievements && data.achievements.length > 0 && (
            <section>
              <h3 className="text-xl font-bold mb-4 text-emerald-900 flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                Nonprofit Achievements
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