export default function CorporateStandardTemplate({ data }) {
  return (
    <div className="p-6 font-sans text-gray-800 bg-white" id="resume-preview">
      <div className="mb-6 border-b-2 border-gray-800 pb-4">
        <h1 className="text-2xl font-bold mb-1">{data.name || "John Doe"}</h1>
        <p className="text-lg text-gray-700 mb-3">{data.title || "Software Engineer"}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.contact?.email && <p>{data.contact.email}</p>}
          {data.contact?.phone && <p>{data.contact.phone}</p>}
          {data.contact?.location && <p>{data.contact.location}</p>}
        </div>
      </div>

      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2 uppercase border-b border-gray-300 pb-1">Professional Summary</h2>
          <p className="text-sm">{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1">Professional Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1">
                <p className="font-semibold">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
              <p className="text-sm text-gray-700 mb-2">{exp.company}</p>
              {exp.description && <p className="text-sm mb-2">{exp.description}</p>}
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
            <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1">Education</h2>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between mb-1">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
                <p className="text-sm text-gray-700">{edu.institution}</p>
                {edu.details && <p className="text-sm mt-1">{edu.details}</p>}
              </div>
            ))}
          </section>
        )}

        {data.skills && data.skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1">Skills & Expertise</h2>
            <ul className="list-disc text-sm ml-5">
              {data.skills.map((skill, i) => (
                <li key={i} className="mb-1">{skill}</li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {data.certifications && data.certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 uppercase border-b border-gray-300 pb-1">Certifications</h2>
          {data.certifications.map((cert, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between">
                <p className="font-semibold text-sm">{cert.name}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
              </div>
              <p className="text-sm text-gray-700">{cert.issuer}</p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
