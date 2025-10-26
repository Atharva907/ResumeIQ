"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowLeft, Eye, Save, FileText, Download, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CodeEditor from "@/components/CodeEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import all template data at build time
import BoldTitleTemplateData from "@/components/resume-templates/BoldTitleTemplateData";
import ClassicTemplateData from "@/components/resume-templates/ClassicTemplateData";
import CompactProfessionalTemplateData from "@/components/resume-templates/CompactProfessionalTemplateData";
import CorporateStandardTemplateData from "@/components/resume-templates/CorporateStandardTemplateData";
import CreativePortfolioTemplateData from "@/components/resume-templates/CreativePortfolioTemplateData";
import CreativeSplitTemplateData from "@/components/resume-templates/CreativeSplitTemplateData";
import ElegantSerifTemplateData from "@/components/resume-templates/ElegantSerifTemplateData";
import GradientFlowTemplateData from "@/components/resume-templates/GradientFlowTemplateData";
import ModernBlueTemplateData from "@/components/resume-templates/ModernBlueTemplateData";
import ModernElegantTemplateData from "@/components/resume-templates/ModernElegantTemplateData";
import TechMinimalTemplateData from "@/components/resume-templates/TechMinimalTemplateData";
import VisualImpactTemplateData from "@/components/resume-templates/VisualImpactTemplateData";

// Additional template imports
import AcademicTemplateData from "@/components/resume-templates/AcademicTemplateData";
import ArtisticTemplateData from "@/components/resume-templates/ArtisticTemplateData";
import BoldTitleTemplateImprovedData from "@/components/resume-templates/BoldTitleTemplateImprovedData";
import ClassicTemplateImprovedData from "@/components/resume-templates/ClassicTemplateImprovedData";
import CompactProfessionalTemplateImprovedData from "@/components/resume-templates/CompactProfessionalTemplateImprovedData";
import ConsultingTemplateData from "@/components/resume-templates/ConsultingTemplateData";
import CorporateStandardTemplateImprovedData from "@/components/resume-templates/CorporateStandardTemplateImprovedData";
import CreativeDesignTemplateData from "@/components/resume-templates/CreativeDesignTemplateData";
import CreativePortfolioTemplateImprovedData from "@/components/resume-templates/CreativePortfolioTemplateImprovedData";
// CreativeSplitTemplateImprovedData import removed - file does not exist
import CulinaryTemplateData from "@/components/resume-templates/CulinaryTemplateData";
import DataScienceTemplateData from "@/components/resume-templates/DataScienceTemplateData";
import EducationTemplateData from "@/components/resume-templates/EducationTemplateData";
import ElegantSerifTemplateImprovedData from "@/components/resume-templates/ElegantSerifTemplateImprovedData";
import EngineeringTemplateData from "@/components/resume-templates/EngineeringTemplateData";
import EntrepreneurTemplateData from "@/components/resume-templates/EntrepreneurTemplateData";
import ExecutiveTemplateData from "@/components/resume-templates/ExecutiveTemplateData";
import FashionTemplateData from "@/components/resume-templates/FashionTemplateData";
import FinanceTemplateData from "@/components/resume-templates/FinanceTemplateData";
import GradientFlowTemplateImprovedData from "@/components/resume-templates/GradientFlowTemplateImprovedData";
import HealthcareTechTemplateData from "@/components/resume-templates/HealthcareTechTemplateData";
import HealthcareTemplateData from "@/components/resume-templates/HealthcareTemplateData";
import HospitalityTemplateData from "@/components/resume-templates/HospitalityTemplateData";
import LegalTemplateData from "@/components/resume-templates/LegalTemplateData";
import MarketingTemplateData from "@/components/resume-templates/MarketingTemplateData";
import MediaTemplateData from "@/components/resume-templates/MediaTemplateData";
import ModernBlueTemplateImprovedData from "@/components/resume-templates/ModernBlueTemplateImprovedData";
import ModernElegantTemplateImprovedData from "@/components/resume-templates/ModernElegantTemplateImprovedData";
import ModernMinimalTemplateData from "@/components/resume-templates/ModernMinimalTemplateData";
import NonProfitTemplateData from "@/components/resume-templates/NonProfitTemplateData";
import RealEstateTemplateData from "@/components/resume-templates/RealEstateTemplateData";
import SalesTemplateData from "@/components/resume-templates/SalesTemplateData";
import StartupTemplateData from "@/components/resume-templates/StartupTemplateData";
import TechInnovatorTemplateData from "@/components/resume-templates/TechInnovatorTemplateData";
import TechMinimalTemplateImprovedData from "@/components/resume-templates/TechMinimalTemplateImprovedData";
import VisualImpactTemplateImprovedData from "@/components/resume-templates/VisualImpactTemplateImprovedData";

// Map template IDs to their data
const templateDataMap = {
  BoldTitleTemplate: BoldTitleTemplateData,
  ClassicTemplate: ClassicTemplateData,
  CompactProfessionalTemplate: CompactProfessionalTemplateData,
  CorporateStandardTemplate: CorporateStandardTemplateData,
  CreativePortfolioTemplate: CreativePortfolioTemplateData,
  CreativeSplitTemplate: CreativeSplitTemplateData,
  ElegantSerifTemplate: ElegantSerifTemplateData,
  GradientFlowTemplate: GradientFlowTemplateData,
  ModernBlueTemplate: ModernBlueTemplateData,
  ModernElegantTemplate: ModernElegantTemplateData,
  TechMinimalTemplate: TechMinimalTemplateData,
  VisualImpactTemplate: VisualImpactTemplateData,
  // Additional template mappings
  AcademicTemplate: AcademicTemplateData,
  ArtisticTemplate: ArtisticTemplateData,
  BoldTitleTemplateImproved: BoldTitleTemplateImprovedData,
  ClassicTemplateImproved: ClassicTemplateImprovedData,
  CompactProfessionalTemplateImproved: CompactProfessionalTemplateImprovedData,
  ConsultingTemplate: ConsultingTemplateData,
  CorporateStandardTemplateImproved: CorporateStandardTemplateImprovedData,
  CreativeDesignTemplate: CreativeDesignTemplateData,
  CreativePortfolioTemplateImproved: CreativePortfolioTemplateImprovedData,
  // CreativeSplitTemplateImproved mapping removed - file does not exist
  CulinaryTemplate: CulinaryTemplateData,
  DataScienceTemplate: DataScienceTemplateData,
  EducationTemplate: EducationTemplateData,
  ElegantSerifTemplateImproved: ElegantSerifTemplateImprovedData,
  EngineeringTemplate: EngineeringTemplateData,
  EntrepreneurTemplate: EntrepreneurTemplateData,
  ExecutiveTemplate: ExecutiveTemplateData,
  FashionTemplate: FashionTemplateData,
  FinanceTemplate: FinanceTemplateData,
  GradientFlowTemplateImproved: GradientFlowTemplateImprovedData,
  HealthcareTechTemplate: HealthcareTechTemplateData,
  HealthcareTemplate: HealthcareTemplateData,
  HospitalityTemplate: HospitalityTemplateData,
  LegalTemplate: LegalTemplateData,
  MarketingTemplate: MarketingTemplateData,
  MediaTemplate: MediaTemplateData,
  ModernBlueTemplateImproved: ModernBlueTemplateImprovedData,
  ModernElegantTemplateImproved: ModernElegantTemplateImprovedData,
  ModernMinimalTemplate: ModernMinimalTemplateData,
  NonProfitTemplate: NonProfitTemplateData,
  RealEstateTemplate: RealEstateTemplateData,
  SalesTemplate: SalesTemplateData,
  StartupTemplate: StartupTemplateData,
  TechInnovatorTemplate: TechInnovatorTemplateData,
  TechMinimalTemplateImproved: TechMinimalTemplateImprovedData,
  VisualImpactTemplateImproved: VisualImpactTemplateImprovedData,
};

// Get template data by ID
const getTemplateData = (templateId: string) => {
  return templateDataMap[templateId as keyof typeof templateDataMap] || {
    name: "John Doe",
    title: "Software Engineer",
    contact: {
      email: "john.doe@example.com",
      phone: "(123) 456-7890",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
    },
    summary:
      "Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering high-quality solutions and leading cross-functional teams.",
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "2020-Present",
        description:
          "Led development of microservices architecture, improving system scalability by 40%",
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
        description:
          "Developed and maintained web applications using React and Node.js",
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
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "React",
      "Vue.js",
      "HTML5",
      "CSS3",
      "SASS",
      "Node.js",
      "Express",
      "Django",
      "Spring Boot",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Git",
      "Jira",
      "Jenkins",
      "Webpack",
      "Babel",
    ],
    projects: [
      {
        name: "Task Management App",
        duration: "2022",
        description:
          "Developed a full-stack task management application with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
      },
    ],
  };
};

export default function CreateResumePage() {
  const searchParams = useSearchParams();
  const templateFromUrl = searchParams.get("template") || "ClassicTemplate";
  
  const [resumeTitle, setResumeTitle] = useState("Untitled Resume");
  const [resumeData, setResumeData] = useState(
    JSON.stringify(getTemplateData(templateFromUrl), null, 2)
  );
  const [selectedTemplate, setSelectedTemplate] = useState(templateFromUrl);
  const [TemplateComponent, setTemplateComponent] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("edit");
  const [isSaving, setIsSaving] = useState(false);

  // Update resume data when template changes
  useEffect(() => {
    setResumeData(JSON.stringify(getTemplateData(selectedTemplate), null, 2));
  }, [selectedTemplate]);

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        const template = await dynamic(
          () => import(`@/components/resume-templates/${selectedTemplate}`),
          { ssr: false }
        );
        setTemplateComponent(() => template);
      } catch (error) {
        console.error("Error loading template:", error);
      }
    };
    loadTemplate();
  }, [selectedTemplate]);

  // ✅ Save Resume Function
  const handleSave = async (content: string) => {
    try {
      setIsSaving(true);

      const response = await fetch("/api/resumes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: resumeTitle,
          content,
          template: selectedTemplate,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Resume saved successfully!");
      } else {
        alert("⚠️ " + (data.message || "Error saving resume"));
      }
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("❌ Error saving resume. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = (content: string) => {
    setResumeData(content);
    setActiveTab("preview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  // ✅ PDF Export
  const handleDownloadPDF = async () => {
    try {
      setActiveTab("preview");

      setTimeout(async () => {
        const element = document.querySelector(".bg-white.shadow-lg");
        if (!element) {
          console.error("Resume preview element not found");
          return;
        }

        const htmlContent = `
          <html>
            <head>
              <meta charset="utf-8" />
              <title>${resumeTitle}</title>
              <style>
                ${Array.from(document.styleSheets)
                  .map((styleSheet) => {
                    try {
                      return Array.from(styleSheet.cssRules)
                        .map((rule) => rule.cssText)
                        .join("\n");
                    } catch (e) {
                      console.warn("Could not access stylesheet:", e);
                      return "";
                    }
                  })
                  .join("\n")}
              </style>
            </head>
            <body>
              ${element.outerHTML}
            </body>
          </html>
        `;

        const response = await fetch("/api/generate-pdf", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            htmlContent,
            filename: `${resumeTitle}.pdf`,
          }),
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.download = `${resumeTitle}.pdf`;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } else {
          const data = await response.json();
          alert(data.message || "Error generating PDF");
        }
      }, 500);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    }
  };

  const handleDownloadDOCX = async () => {
    try {
      const response = await fetch("/api/generate-docx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeData,
          filename: `${resumeTitle}.docx`,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${resumeTitle}.docx`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        const data = await response.json();
        alert(data.message || "Error generating DOCX");
      }
    } catch (error) {
      console.error("Error generating DOCX:", error);
      alert("Error generating DOCX. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-yellow-50/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-200/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-yellow-300/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-yellow-200/50 hover:bg-yellow-50/50 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="h-4 w-4 text-yellow-600" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-foreground via-yellow-600 to-foreground">
                Create Resume
              </h1>
              <p className="text-muted-foreground">
                Build your professional resume with AI assistance
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
              onClick={handleDownloadPDF}
            >
              <FileText className="mr-2 h-4 w-4" />
              PDF
            </Button>
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
              onClick={handleDownloadDOCX}
            >
              <Download className="mr-2 h-4 w-4" />
              DOCX
            </Button>
            <Button
              disabled={isSaving}
              className="bg-linear-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white"
              onClick={() => handleSave(resumeData)}
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Resume Title */}
        <div className="mb-6">
          <Card className="overflow-hidden border border-yellow-200/30 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="h-1 bg-linear-to-r from-yellow-400 to-yellow-600"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                Resume Details
              </CardTitle>
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

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-[calc(100vh-280px)]">
          <TabsList className="grid w-full border border-yellow-200/30 bg-linear-to-r from-yellow-50/50 to-yellow-100/30 shadow-sm grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="h-[calc(100%-40px)]">
            <CodeEditor
              value={resumeData}
              onChange={setResumeData}
              onSave={handleSave}
              onPreview={handlePreview}
              onTemplateChange={handleTemplateChange}
              onDownloadPDF={handleDownloadPDF}
              onDownloadDOCX={handleDownloadDOCX}
            />
          </TabsContent>
          <TabsContent value="preview" className="h-[calc(100%-40px)] overflow-auto">
            <Card className="h-full overflow-hidden border border-yellow-200/30 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-1 bg-linear-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <Eye className="mr-2 h-5 w-5 text-yellow-600" />
                  Resume Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100%-80px)] overflow-auto bg-gray-50">
                {TemplateComponent && (
                  <div className="w-full max-w-4xl mx-auto bg-white shadow-lg">
                    <TemplateComponent data={JSON.parse(resumeData)} />
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
