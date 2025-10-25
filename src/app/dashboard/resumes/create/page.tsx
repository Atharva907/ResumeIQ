"use client";

import { useState } from "react";
import { ArrowLeft, Eye, Save, FileText, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import CodeEditor from "@/components/CodeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const defaultResumeContent = `# John Doe
Software Engineer

## Contact
- Email: john.doe@example.com
- Phone: (123) 456-7890
- LinkedIn: linkedin.com/in/johndoe
- GitHub: github.com/johndoe

## Summary
Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering high-quality solutions and leading cross-functional teams.

## Experience
**Senior Software Engineer** | Tech Solutions Inc. | 2020-Present
- Led development of microservices architecture, improving system scalability by 40%
- Implemented CI/CD pipelines, reducing deployment time by 60%
- Mentored junior developers and conducted code reviews
- Collaborated with product team to define technical requirements

**Software Engineer** | Digital Innovations LLC | 2018-2020
- Developed and maintained web applications using React and Node.js
- Optimized database queries, improving application performance by 30%
- Participated in agile development processes and daily stand-ups

## Education
**Bachelor of Science in Computer Science** | University of Technology | 2014-2018
- GPA: 3.8/4.0
- Dean's List: 6 semesters
- Senior Project: E-commerce Platform with React and Node.js

## Skills
- **Programming Languages**: JavaScript, TypeScript, Python, Java
- **Frontend**: React, Vue.js, HTML5, CSS3, SASS
- **Backend**: Node.js, Express, Django, Spring Boot
- **Databases**: MongoDB, PostgreSQL, MySQL, Redis
- **Cloud**: AWS, Azure, Google Cloud, Docker, Kubernetes
- **Tools**: Git, Jira, Jenkins, Webpack, Babel

## Projects
**Task Management App** | Personal Project | 2022
- Developed a full-stack task management application with React and Node.js
- Implemented user authentication, real-time updates, and drag-and-drop functionality
- Deployed on AWS with CI/CD pipeline

**E-commerce Platform** | University Project | 2018
- Built a responsive e-commerce website with product catalog and payment integration
- Implemented shopping cart, order management, and admin dashboard
`;

export default function CreateResumePage() {
  const [resumeTitle, setResumeTitle] = useState("Untitled Resume");
  const [resumeContent, setResumeContent] = useState(defaultResumeContent);
  const [previewContent, setPreviewContent] = useState(defaultResumeContent);
  const [activeTab, setActiveTab] = useState("edit");

  const handleSave = (content: string) => {
    // Save functionality will be implemented later
    console.log("Saving resume:", { title: resumeTitle, content });
  };

  const handlePreview = (content: string) => {
    setPreviewContent(content);
    setActiveTab("preview");
  };

  const handleDownloadPDF = () => {
    // PDF download functionality will be implemented later
    console.log("Downloading PDF...");
  };

  const handleDownloadDOCX = () => {
    // DOCX download functionality will be implemented later
    console.log("Downloading DOCX...");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Create Resume</h1>
              <p className="text-muted-foreground">Build your professional resume with AI assistance</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDownloadPDF}>
              <FileText className="mr-2 h-4 w-4" />
              PDF
            </Button>
            <Button variant="outline" onClick={handleDownloadDOCX}>
              <Download className="mr-2 h-4 w-4" />
              DOCX
            </Button>
            <Button onClick={() => handleSave(resumeContent)}>
              <Save className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Resume Details</CardTitle>
              <CardDescription>Provide a title for your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Resume Title</Label>
                  <Input
                    id="title"
                    value={resumeTitle}
                    onChange={(e) => setResumeTitle(e.target.value)}
                    placeholder="e.g., Software Engineer Resume"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[calc(100vh-280px)]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="h-[calc(100%-40px)]">
            <CodeEditor
              initialContent={resumeContent}
              onSave={handleSave}
              onPreview={handlePreview}
            />
          </TabsContent>
          <TabsContent value="preview" className="h-[calc(100%-40px)] overflow-auto">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="mr-2 h-5 w-5" />
                  Resume Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100%-80px)] overflow-auto">
                <div className="prose max-w-none">
                  <div className="whitespace-pre-wrap">{previewContent}</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
