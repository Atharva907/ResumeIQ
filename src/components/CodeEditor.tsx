import { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  FileText, 
  Eye, 
  Save, 
  Undo, 
  Redo, 
  Copy,
  Sparkles,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote
} from "lucide-react";

interface CodeEditorProps {
  value?: string;
  onChange?: (content: string) => void;
  onSave?: (content: string) => void;
  onPreview?: (content: string) => void;
  onTemplateChange,
  onDownloadPDF,
  onDownloadDOCX?: (template: string) => void;
  onDownloadPDF?: () => void;
  onDownloadDOCX?: () => void;
}

const defaultResumeData = {
  name: "John Doe",
  title: "Software Engineer",
  contact: {
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/johndoe",
    github: "github.com/johndoe"
  },
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
        "Collaborated with product team to define technical requirements"
      ]
    },
    {
      role: "Software Engineer",
      company: "Digital Innovations LLC",
      duration: "2018-2020",
      description: "Developed and maintained web applications using React and Node.js",
      highlights: [
        "Optimized database queries, improving application performance by 30%",
        "Participated in agile development processes and daily stand-ups"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      duration: "2014-2018",
      details: "GPA: 3.8/4.0, Dean's List: 6 semesters"
    }
  ],
  skills: [
    "JavaScript", "TypeScript", "Python", "Java",
    "React", "Vue.js", "HTML5", "CSS3", "SASS",
    "Node.js", "Express", "Django", "Spring Boot",
    "MongoDB", "PostgreSQL", "MySQL", "Redis",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
    "Git", "Jira", "Jenkins", "Webpack", "Babel"
  ],
  projects: [
    {
      name: "Task Management App",
      duration: "2022",
      description: "Developed a full-stack task management application with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "AWS"]
    }
  ]
};

const templates = [
  { id: "ClassicTemplate", name: "Classic Clean" },
  { id: "ModernBlueTemplate", name: "Modern Blue" },
  { id: "ElegantSerifTemplate", name: "Elegant Serif" },
  { id: "TechMinimalTemplate", name: "Tech Minimal" },
  { id: "CreativeSplitTemplate", name: "Creative Split" },
  { id: "CompactProfessionalTemplate", name: "Compact Professional" },
  { id: "GradientFlowTemplate", name: "Gradient Flow" },
  { id: "BoldTitleTemplate", name: "Bold Title" },
  { id: "CorporateStandardTemplate", name: "Corporate Standard" },
  { id: "VisualImpactTemplate", name: "Visual Impact" },
  { id: "ModernElegantTemplate", name: "Modern Elegant" },
  { id: "CreativePortfolioTemplate", name: "Creative Portfolio" },
  
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
  { id: "RealEstateTemplate", name: "Real Estate" },
  { id: "MediaTemplate", name: "Media" },
  { id: "CulinaryTemplate", name: "Culinary" },
];



export default function CodeEditor({ 
  value = JSON.stringify(defaultResumeData, null, 2),
  onChange, 
  onSave, 
  onPreview,
  onTemplateChange,
  onDownloadPDF,
  onDownloadDOCX 
}: CodeEditorProps) {
  const [content, setContent] = useState(value);
  const [selectedTemplate, setSelectedTemplate] = useState("ClassicTemplate");
  const [isImproving, setIsImproving] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
  };

  const handleSave = () => {
    if (onSave) {
      onSave(content);
    }
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(content);
    }
  };

  const handleDownloadPDF = () => {
    if (onDownloadPDF) {
      onDownloadPDF();
    }
  };

  const handleDownloadDOCX = () => {
    if (onDownloadDOCX) {
      onDownloadDOCX();
    }
  };

  const handleApplySuggestion = async () => {
    setIsImproving(true);
    try {
      const response = await fetch('/api/improveResume', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resumeData: content }),
      });

      const data = await response.json();

      if (response.ok && data.improved) {
        // If the response is a JSON string, parse it
        let improvedContent;
        try {
          improvedContent = typeof data.improved === 'string' 
            ? data.improved 
            : JSON.stringify(data.improved, null, 2);
        } catch (e) {
          improvedContent = data.improved;
        }

        setContent(improvedContent);
        if (onSave) onSave(improvedContent);
      } else {
        console.error('Failed to improve resume:', data.error);
      }
    } catch (error) {
      console.error('Error improving resume:', error);
    } finally {
      setIsImproving(false);
    }
  };

  const handleTemplateChange = async (templateId: string) => {
    setSelectedTemplate(templateId);
    
    // Load template-specific data
    try {
      let dataFileName = templateId;
      // Handle special cases for template names
      if (templateId.endsWith('Improved')) {
        // For improved templates, remove "Improved" and add "Data"
        dataFileName = templateId.replace('Improved', '') + 'Data';
      } else if (!templateId.endsWith('Data')) {
        // For regular templates, add "Data" if not present
        dataFileName = templateId.replace('Template', 'TemplateData');
      }
      
      const templateData = await import(`@/components/resume-templates/${dataFileName}`);
      setContent(JSON.stringify(templateData.default, null, 2));
      if (onChange) {
        onChange(JSON.stringify(templateData.default, null, 2));
      }
    } catch (error) {
      console.error("Error loading template data:", error);
    }
    
    if (onTemplateChange) {
      onTemplateChange(templateId);
    }
  };

  const insertText = (text: string) => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const selection = editor.getSelection();
      const model = editor.getModel();

      if (model) {
        model.pushEditOperations(
          [],
          [
            {
              range: selection,
              text: text,
            },
          ],
          () => null
        );
      }
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 border-b p-2">
        <div className="flex items-center gap-2">
          <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template.id} value={template.id}>
                  {template.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => editorRef.current?.trigger('undo')}>
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => editorRef.current?.trigger('redo')}>
            <Redo className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => insertText('**text**')}>
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => insertText('*text*')}>
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => insertText('__text__')}>
            <Underline className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={() => insertText('- ')}>
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => insertText('1. ')}>
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => insertText('> ')}>
            <Quote className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleApplySuggestion} disabled={isImproving}>
            {isImproving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={handlePreview}>
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleSave}>
            <Save className="h-4 w-4" />
          </Button>
          <Separator orientation="vertical" className="h-6" />
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={handleDownloadPDF}>
            <FileText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleDownloadDOCX}>
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1">
          <Editor
            height="100%"
            defaultLanguage="json"
            value={value || content}
            onChange={(value) => {
              const newContent = value || "";
              setContent(newContent);
              if (onChange) onChange(newContent);
            }}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              wordWrap: "on",
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              folding: true,
              fontSize: 14,
            }}
          />
        </div>


      </div>
    </div>
  );
}
