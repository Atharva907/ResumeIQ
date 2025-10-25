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
  initialContent?: string;
  onSave?: (content: string) => void;
  onPreview?: (content: string) => void;
}

const templates = [
  { id: "classic", name: "Classic" },
  { id: "modern", name: "Modern" },
  { id: "creative", name: "Creative" },
];

const aiSuggestions = [
  "Add a professional summary at the top",
  "Include specific metrics for your achievements",
  "Use action verbs to start bullet points",
  "Highlight relevant skills for the job",
];

export default function CodeEditor({ initialContent = "", onSave, onPreview }: CodeEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [selectedTemplate, setSelectedTemplate] = useState("classic");
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
    // PDF download functionality will be implemented later
    console.log("Downloading PDF...");
  };

  const handleDownloadDOCX = () => {
    // DOCX download functionality will be implemented later
    console.log("Downloading DOCX...");
  };

  const handleApplySuggestion = (suggestion: string) => {
    // AI suggestion application will be implemented later
    console.log("Applying suggestion:", suggestion);
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
          <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
            <SelectTrigger className="w-[140px]">
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
          <Button variant="ghost" size="icon" onClick={() => setShowSuggestions(!showSuggestions)}>
            <Sparkles className="h-4 w-4" />
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
            defaultLanguage="markdown"
            value={content}
            onChange={(value) => setContent(value || "")}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              wordWrap: "on",
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
        </div>

        {/* AI Suggestions Panel */}
        {showSuggestions && (
          <div className="w-80 border-l p-4 overflow-y-auto">
            <h3 className="mb-4 font-semibold">AI Suggestions</h3>
            <div className="space-y-3">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="rounded-md border p-3">
                  <p className="text-sm">{suggestion}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 h-8 px-2 text-xs"
                    onClick={() => handleApplySuggestion(suggestion)}
                  >
                    Apply
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
