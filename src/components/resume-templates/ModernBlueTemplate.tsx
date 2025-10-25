import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ModernBlueTemplate({ data }) {
  return (
    <div className="p-6 font-sans text-gray-800 bg-white" id="resume-preview">
      <div className="bg-blue-600 text-white p-6 -m-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">{data.name || "John Doe"}</h1>
        <p className="text-xl mb-4">{data.title || "Software Engineer"}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {data.contact?.email && (
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <span>{data.contact.email}</span>
            </div>
          )}
          {data.contact?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <span>{data.contact.phone}</span>
            </div>
          )}
          {data.contact?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{data.contact.location}</span>
            </div>
          )}
          {data.contact?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <span>{data.contact.linkedin}</span>
            </div>
          )}
          {data.contact?.github && (
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <span>{data.contact.github}</span>
            </div>
          )}
        </div>
      </div>

      {data.summary && (
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-blue-600 mb-2 border-b-2 border-blue-200 pb-1">Summary</h2>
          <p>{data.summary}</p>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-blue-600 mb-3 border-b-2 border-blue-200 pb-1">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between mb-1">
                <p className="font-medium text-lg">{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
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

      {data.education && data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-blue-600 mb-3 border-b-2 border-blue-200 pb-1">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <div className="flex justify-between">
                <p className="font-medium text-lg">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </div>
              <p className="text-blue-600 font-medium">{edu.institution}</p>
              {edu.details && <p className="text-sm text-gray-700 mt-1">{edu.details}</p>}
            </div>
          ))}
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="font-semibold text-xl text-blue-600 mb-3 border-b-2 border-blue-200 pb-1">Skills</h2>
          <div className="grid grid-cols-2 gap-2">
            {data.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
