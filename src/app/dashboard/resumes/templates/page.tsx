"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const templates = [
  { id: "BoldTitleTemplate", name: "Bold Title" },
  { id: "ClassicTemplate", name: "Classic" },
  { id: "CompactProfessionalTemplate", name: "Compact Professional" },
  { id: "CorporateStandardTemplate", name: "Corporate Standard" },
  { id: "CreativePortfolioTemplate", name: "Creative Portfolio" },
  { id: "CreativeSplitTemplate", name: "Creative Split" },
  { id: "ElegantSerifTemplate", name: "Elegant Serif" },
  { id: "GradientFlowTemplate", name: "Gradient Flow" },
  { id: "ModernBlueTemplate", name: "Modern Blue" },
  { id: "ModernElegantTemplate", name: "Modern Elegant" },
  { id: "TechMinimalTemplate", name: "Tech Minimal" },
  { id: "VisualImpactTemplate", name: "Visual Impact" },
];

export default function TemplatesPage() {
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const [TemplateComponent, setTemplateComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePreview = async (templateId: string) => {
    setIsLoading(true);
    setSelectedPreview(templateId);
    try {
      const template = await dynamic(
        () => import(`@/components/resume-templates/${templateId}`),
        { ssr: false }
      );
      setTemplateComponent(() => template);
    } catch (error) {
      console.error("Error loading template:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-yellow-50/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-200/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto p-6 relative z-10">
        <h1 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-yellow-600 to-foreground">
          Choose a Resume Template
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card 
              key={template.id} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer border border-yellow-200/30 hover:border-yellow-400/50 overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader>
                <CardTitle className="text-lg">{template.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => handlePreview(template.id)} 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  Preview
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedPreview && TemplateComponent && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-white p-4 rounded-lg max-w-4xl w-full relative max-h-[90vh] overflow-auto">
              <button
                className="absolute top-2 right-2 text-gray-600 font-bold text-xl hover:text-gray-900"
                onClick={() => setSelectedPreview(null)}
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4">{selectedPreview.replace(/Template/g, '')} Preview</h2>
              <div className="overflow-auto max-h-[70vh] border p-4 bg-gray-50">
                {isLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <p>Loading preview...</p>
                  </div>
                ) : (
                  <div className="w-full max-w-4xl mx-auto bg-white shadow-lg">
                    <TemplateComponent data={{
                      name: "John Doe",
                      title: "Software Engineer",
                      summary: "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering high-quality solutions and leading cross-functional teams.",
                      experience: [
                        {
                          role: "Senior Software Engineer",
                          company: "Tech Solutions Inc.",
                          duration: "2020-Present",
                          description: "Led development of microservices architecture, improving system scalability by 40%",
                          highlights: [
                            "Implemented CI/CD pipelines, reducing deployment time by 60%",
                            "Mentored junior developers and conducted code reviews",
                            "Collaborated with product team to define technical requirements",
                          ],
                        },
                        {
                          role: "Software Engineer",
                          company: "Digital Innovations LLC",
                          duration: "2018-2020",
                          description: "Developed and maintained web applications using React and Node.js",
                          highlights: [
                            "Optimized database queries, improving application performance by 30%",
                            "Participated in agile development processes and daily stand-ups",
                          ],
                        },
                      ],
                      education: [
                        {
                          degree: "Bachelor of Science in Computer Science",
                          institution: "University of Technology",
                          duration: "2014-2018",
                          details: "GPA: 3.8/4.0, Dean's List: 6 semesters",
                        },
                      ],
                      skills: [
                        "JavaScript", "TypeScript", "Python", "Java",
                        "React", "Vue.js", "HTML5", "CSS3", "SASS",
                        "Node.js", "Express", "Django", "Spring Boot",
                        "MongoDB", "PostgreSQL", "MySQL", "Redis",
                        "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
                        "Git", "Jira", "Jenkins", "Webpack", "Babel",
                      ],
                      projects: [
                        {
                          name: "Task Management App",
                          duration: "2022",
                          description: "Developed a full-stack task management application with React and Node.js",
                          technologies: ["React", "Node.js", "MongoDB", "AWS"],
                        },
                      ],
                      contact: {
                        email: "john.doe@example.com",
                        phone: "(123) 456-7890",
                        location: "San Francisco, CA",
                        linkedin: "linkedin.com/in/johndoe",
                        github: "github.com/johndoe",
                      },
                    }} />
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Link
                  href={`/dashboard/resumes/create?template=${selectedPreview}`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-center py-2 px-6 rounded transition-colors duration-300"
                >
                  Select Template
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
