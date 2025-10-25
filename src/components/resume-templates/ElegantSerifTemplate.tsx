import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function ElegantSerifTemplate({ data }) {
  return (
    <div className="p-8 font-serif text-gray-800 bg-white shadow-lg" id="resume-preview" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Elegant header with decorative elements */}
      <header className="mb-8 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        <div className="text-center pt-6 pb-4">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">{data.name || "John Doe"}</h1>
          <p className="text-xl text-gray-600 italic mb-4">{data.title || "Software Engineer"}</p>
          
          {/* Elegant contact information */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mt-4">
            {data.contact?.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="italic">{data.contact.email}</span>
              </div>
            )}
            {data.contact?.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="italic">{data.contact.phone}</span>
              </div>
            )}
            {data.contact?.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="italic">{data.contact.location}</span>
              </div>
            )}
            {data.contact?.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-gray-400" />
                <span className="italic">{data.contact.linkedin}</span>
              </div>
            )}
            {data.contact?.github && (
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-gray-400" />
                <span className="italic">{data.contact.github}</span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </header>

      {data.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center italic text-gray-800">Professional Summary</h2>
          <div className="max-w-3xl mx-auto text-center leading-relaxed italic text-gray-700">
            {data.summary}
          </div>
        </section>
      )}

      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center italic text-gray-800">Professional Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-6 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              <div className="pl-8 relative">
                <div className="absolute -left-2 top-2 w-4 h-4 bg-white border-2 border-gray-400 rounded-full"></div>
                
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-gray-600 italic">{exp.company}</p>
                    <p className="text-sm text-gray-500 italic">{exp.duration}</p>
                  </div>
                </div>
                
                {exp.description && (
                  <p className="text-gray-700 italic mb-3">{exp.description}</p>
                )}
                
                {exp.highlights && (
                  <ul className="space-y-2 text-gray-700 italic">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="relative pl-6">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center italic text-gray-800">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-4 text-center p-4 bg-gray-50 rounded-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-lg text-gray-700 italic mb-2">{edu.institution}</p>
              <p className="text-sm text-gray-500 italic mb-2">{edu.duration}</p>
              {edu.details && <p className="text-sm text-gray-700 italic">{edu.details}</p>}
            </div>
          ))}
        </section>
      )}

      {data.skills && data.skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center italic text-gray-800">Skills & Expertise</h2>
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {data.skills.map((skill, i) => (
              <div key={i} className="text-center p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-700 italic">{skill}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.projects && data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center italic text-gray-800">Projects</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {data.projects.map((project, i) => (
              <div key={i} className="p-4 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-500 italic">{project.duration}</p>
                </div>
                {project.description && (
                  <p className="text-gray-700 italic mb-2">{project.description}</p>
                )}
                {project.technologies && (
                  <p className="text-sm text-gray-600 italic">
                    <span className="font-semibold">Technologies:</span> {project.technologies.join(', ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
