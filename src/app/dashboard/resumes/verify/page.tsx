"use client"; import { useState } from "react";
import { ArrowLeft, CheckCircle, AlertCircle, FileText, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploader from "@/components/FileUploader";
import { Textarea } from "@/components/ui/textarea";

// Mock data for demonstration
const verificationResults = {
  grammar: {
    score: 85,
    issues: [
      {
        type: "spelling",
        message: "Possible spelling error: 'managment' (did you mean 'management'?)",
        line: 5,
        suggestion: "management",
      },
      {
        type: "grammar",
        message: "Subject-verb agreement issue: 'The team are' should be 'The team is'",
        line: 12,
        suggestion: "The team is",
      },
    ],
  },
  completeness: {
    score: 70,
    missingSections: ["Professional Summary", "Skills"],
    suggestions: [
      "Add a professional summary at the top of your resume to highlight your key qualifications",
      "Include a dedicated skills section to list your technical and soft skills",
    ],
  },
  ats: {
    score: 78,
    missingKeywords: ["Agile", "Scrum", "RESTful API", "CI/CD"],
    suggestions: [
      "Include more industry-specific keywords to improve ATS matching",
      "Use standard section headings like 'Experience', 'Education', 'Skills'",
      "Avoid tables, columns, and graphics that may confuse ATS systems",
    ],
  },
  readability: {
    score: 90,
    feedback: "Your resume has good readability with clear formatting and concise language",
    suggestions: [
      "Consider using more action verbs to start bullet points",
      "Quantify achievements with specific metrics and numbers",
    ],
  },
};

export default function VerifyResumePage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<typeof verificationResults | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // In a real app, you would upload the file to your server here
  };

  const handleAnalyze = () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      setResults(verificationResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleApplySuggestion = (suggestion: string) => {
    // In a real app, this would open the editor with the suggestion applied
    console.log("Applying suggestion:", suggestion);
  };

  const overallScore = results
    ? Math.round(
        (results.grammar.score +
          results.completeness.score +
          results.ats.score +
          results.readability.score) / 4
      )
    : 0;

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
              <h1 className="text-2xl font-bold tracking-tight">Resume Verifier</h1>
              <p className="text-muted-foreground">Analyze your resume for grammar, completeness, and ATS compatibility</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Resume</CardTitle>
                <CardDescription>
                  Upload your resume in PDF or DOCX format to analyze it for grammar, completeness, and ATS compatibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FileUploader onFileUpload={handleFileUpload} />
                {uploadedFile && (
                  <div className="mt-4 flex justify-end">
                    <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Analyze Resume
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {results && (
              <Card>
                <CardHeader>
                  <CardTitle>Analysis Results</CardTitle>
                  <CardDescription>
                    Overall score: <span className="font-bold">{overallScore}%</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-sm font-bold">{overallScore}%</span>
                    </div>
                    <Progress value={overallScore} className="h-3" />
                  </div>

                  <Tabs defaultValue="grammar" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="grammar">Grammar</TabsTrigger>
                      <TabsTrigger value="completeness">Completeness</TabsTrigger>
                      <TabsTrigger value="ats">ATS</TabsTrigger>
                      <TabsTrigger value="readability">Readability</TabsTrigger>
                    </TabsList>

                    <TabsContent value="grammar" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Grammar & Spelling</h3>
                        <Badge variant={results.grammar.score >= 80 ? "default" : "secondary"}>
                          {results.grammar.score}%
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        {results.grammar.issues.map((issue, index) => (
                          <div key={index} className="rounded-md border p-3">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="mt-0.5 h-4 w-4 text-destructive" />
                              <div className="flex-1">
                                <p className="text-sm">{issue.message}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Line {issue.line}: {issue.suggestion}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleApplySuggestion(issue.suggestion)}
                              >
                                Apply
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="completeness" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Section Completeness</h3>
                        <Badge variant={results.completeness.score >= 80 ? "default" : "secondary"}>
                          {results.completeness.score}%
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Missing Sections</h4>
                          <div className="flex flex-wrap gap-2">
                            {results.completeness.missingSections.map((section, index) => (
                              <Badge key={index} variant="outline">
                                {section}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Suggestions</h4>
                          <ul className="space-y-2">
                            {results.completeness.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                                <p className="text-sm">{suggestion}</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleApplySuggestion(suggestion)}
                                >
                                  Apply
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="ats" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">ATS Compatibility</h3>
                        <Badge variant={results.ats.score >= 80 ? "default" : "secondary"}>
                          {results.ats.score}%
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Missing Keywords</h4>
                          <div className="flex flex-wrap gap-2">
                            {results.ats.missingKeywords.map((keyword, index) => (
                              <Badge key={index} variant="outline">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Suggestions</h4>
                          <ul className="space-y-2">
                            {results.ats.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                                <p className="text-sm">{suggestion}</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleApplySuggestion(suggestion)}
                                >
                                  Apply
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="readability" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Readability</h3>
                        <Badge variant={results.readability.score >= 80 ? "default" : "secondary"}>
                          {results.readability.score}%
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm">{results.readability.feedback}</p>
                        <div>
                          <h4 className="text-sm font-medium mb-2">Suggestions</h4>
                          <ul className="space-y-2">
                            {results.readability.suggestions.map((suggestion, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="mt-0.5 h-4 w-4 text-primary" />
                                <p className="text-sm">{suggestion}</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleApplySuggestion(suggestion)}
                                >
                                  Apply
                                </Button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>
                  Paste the job description to get tailored suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={10}
                />
                <Button className="w-full mt-4" disabled={!jobDescription || !uploadedFile}>
                  Compare with Job Description
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Use standard section headings</li>
                  <li>• Include relevant keywords from job descriptions</li>
                  <li>• Quantify achievements with numbers</li>
                  <li>• Keep formatting simple and consistent</li>
                  <li>• Proofread carefully for errors</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
