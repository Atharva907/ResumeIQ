"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Templates list
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
  
  // New templates
  { id: "ModernMinimalTemplate", name: "Modern Minimal" },
  { id: "ExecutiveTemplate", name: "Executive" },
  { id: "CreativeDesignTemplate", name: "Creative Design" },
  { id: "TechInnovatorTemplate", name: "Tech Innovator" },
  { id: "AcademicTemplate", name: "Academic" },
  { id: "HealthcareTemplate", name: "Healthcare" },
  { id: "SalesTemplate", name: "Sales" },
  { id: "LegalTemplate", name: "Legal" },
  { id: "FashionTemplate", name: "Fashion" },
  { id: "FinanceTemplate", name: "Finance" },
  { id: "EducationTemplate", name: "Education" },
  { id: "MarketingTemplate", name: "Marketing" },
  { id: "HospitalityTemplate", name: "Hospitality" },
  { id: "EngineeringTemplate", name: "Engineering" },
  { id: "ArtisticTemplate", name: "Artistic" },
  { id: "ConsultingTemplate", name: "Consulting" },
  { id: "HealthcareTechTemplate", name: "Healthcare Tech" },
  { id: "NonProfitTemplate", name: "Non Profit" },
  { id: "StartupTemplate", name: "Startup" },
  { id: "DataScienceTemplate", name: "Data Science" },
  { id: "EntrepreneurTemplate", name: "Entrepreneur" },
  
  // Additional templates
  { id: "RealEstateTemplate", name: "Real Estate" },
  { id: "MediaTemplate", name: "Media" },
  { id: "CulinaryTemplate", name: "Culinary" },
];

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

// New template imports
import ModernMinimalTemplateData from "@/components/resume-templates/ModernMinimalTemplateData";
import ExecutiveTemplateData from "@/components/resume-templates/ExecutiveTemplateData";
import CreativeDesignTemplateData from "@/components/resume-templates/CreativeDesignTemplateData";
import TechInnovatorTemplateData from "@/components/resume-templates/TechInnovatorTemplateData";
import AcademicTemplateData from "@/components/resume-templates/AcademicTemplateData";
import HealthcareTemplateData from "@/components/resume-templates/HealthcareTemplateData";
import SalesTemplateData from "@/components/resume-templates/SalesTemplateData";
import LegalTemplateData from "@/components/resume-templates/LegalTemplateData";
import FashionTemplateData from "@/components/resume-templates/FashionTemplateData";
import FinanceTemplateData from "@/components/resume-templates/FinanceTemplateData";
import EducationTemplateData from "@/components/resume-templates/EducationTemplateData";
import MarketingTemplateData from "@/components/resume-templates/MarketingTemplateData";
import HospitalityTemplateData from "@/components/resume-templates/HospitalityTemplateData";
import EngineeringTemplateData from "@/components/resume-templates/EngineeringTemplateData";
import ArtisticTemplateData from "@/components/resume-templates/ArtisticTemplateData";
import ConsultingTemplateData from "@/components/resume-templates/ConsultingTemplateData";
import HealthcareTechTemplateData from "@/components/resume-templates/HealthcareTechTemplateData";
import NonProfitTemplateData from "@/components/resume-templates/NonProfitTemplateData";
import StartupTemplateData from "@/components/resume-templates/StartupTemplateData";
import DataScienceTemplateData from "@/components/resume-templates/DataScienceTemplateData";
import EntrepreneurTemplateData from "@/components/resume-templates/EntrepreneurTemplateData";

// Additional template imports
import RealEstateTemplateData from "@/components/resume-templates/RealEstateTemplateData";
import MediaTemplateData from "@/components/resume-templates/MediaTemplateData";
import CulinaryTemplateData from "@/components/resume-templates/CulinaryTemplateData";

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
  
  // New template mappings
  ModernMinimalTemplate: ModernMinimalTemplateData,
  ExecutiveTemplate: ExecutiveTemplateData,
  CreativeDesignTemplate: CreativeDesignTemplateData,
  TechInnovatorTemplate: TechInnovatorTemplateData,
  AcademicTemplate: AcademicTemplateData,
  HealthcareTemplate: HealthcareTemplateData,
  SalesTemplate: SalesTemplateData,
  LegalTemplate: LegalTemplateData,
  FashionTemplate: FashionTemplateData,
  FinanceTemplate: FinanceTemplateData,
  EducationTemplate: EducationTemplateData,
  MarketingTemplate: MarketingTemplateData,
  HospitalityTemplate: HospitalityTemplateData,
  EngineeringTemplate: EngineeringTemplateData,
  ArtisticTemplate: ArtisticTemplateData,
  ConsultingTemplate: ConsultingTemplateData,
  HealthcareTechTemplate: HealthcareTechTemplateData,
  NonProfitTemplate: NonProfitTemplateData,
  StartupTemplate: StartupTemplateData,
  DataScienceTemplate: DataScienceTemplateData,
  EntrepreneurTemplate: EntrepreneurTemplateData,
  
  // Additional template mappings
  RealEstateTemplate: RealEstateTemplateData,
  MediaTemplate: MediaTemplateData,
  CulinaryTemplate: CulinaryTemplateData,
};

// Get template data by ID
const getTemplateData = (templateId: string) => {
  return templateDataMap[templateId as keyof typeof templateDataMap] || null;
};

export default function TemplatesPage() {
  const [previewTemplate, setPreviewTemplate] = useState<string | null>(null);
  const [modalComponent, setModalComponent] = useState<any>(null);
  const [modalData, setModalData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load template component and data dynamically
  const handlePreview = async (templateId: string) => {
    setIsLoading(true);
    setPreviewTemplate(templateId);
    try {
      const TemplateComponent = await dynamic(
        () => import(`@/components/resume-templates/${templateId}`),
        { ssr: false }
      );
      const data = getTemplateData(templateId);
      setModalComponent(() => TemplateComponent);
      setModalData(data);
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
          {templates.map((template) => {
            const TemplatePreview = dynamic(
              () => import(`@/components/resume-templates/${template.id}`),
              { ssr: false }
            );

            // Get preview data for mini-card
            const previewData = getTemplateData(template.id);

            return (
              <Card key={template.id} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-yellow-400/50 overflow-hidden group">
                <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:h-2 transition-all duration-300"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">{template.name}</CardTitle>
                  <p className="text-xs text-gray-500">Professional resume template</p>
                </CardHeader>
                <CardContent className="p-4 flex flex-col gap-3">
                  <div className="relative h-48 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                    <div className="absolute inset-0 scale-[0.4] origin-top-left w-[250%] h-[250%] overflow-auto">
                      {previewData && <TemplatePreview {...previewData} />}
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-xs text-gray-500 font-medium">Clean Layout</span>
                    <Button
                      onClick={() => handlePreview(template.id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-1 h-auto"
                    >
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {previewTemplate && modalComponent && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-start z-50 p-4 pt-10 overflow-auto">
            <div className="bg-white p-6 rounded-lg max-w-5xl w-full relative max-h-[90vh] overflow-auto shadow-xl">
              <div className="flex justify-between items-center mb-4 pb-2 border-b">
                <h2 className="text-xl font-bold">{previewTemplate.replace(/Template/g, '')} Template</h2>
                <button
                  className="text-gray-600 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  onClick={() => setPreviewTemplate(null)}
                >
                  ×
                </button>
              </div>
              <div className="overflow-auto max-h-[80vh] border p-6 bg-gray-50 flex justify-center rounded-md">
                {isLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <p>Loading preview...</p>
                  </div>
                ) : (
                  <div className="transform scale-90 origin-top w-full max-w-4xl bg-white shadow-lg rounded-md p-2">
                    {modalComponent && modalData && (() => {
                      const ModalComponent = modalComponent;
                      return <ModalComponent {...modalData} />;
                    })()}
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <Link
                  href={`/dashboard/resumes/create?template=${previewTemplate}`}
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
