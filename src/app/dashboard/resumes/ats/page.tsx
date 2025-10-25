import { useState } from "react";
import { ArrowLeft, CheckCircle, AlertCircle, FileText, Loader2, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FileUploader from "@/components/FileUploader";

// Mock data for demonstration
const atsResults = {
  overallScore: 78,
  keywordMatch: {
    score: 65,
    matched: [
      { keyword: "React", count: 5, relevance: "high" },
      { keyword: "JavaScript", count: 8, relevance: "high" },
      { keyword: "Node.js", count: 3, relevance: "high" },
      { keyword: "TypeScript", count: 2, relevance: "medium" },
    ],
    missing: [
      { keyword: "Agile", relevance: "high" },
      { keyword: "Scrum", relevance: "medium" },
      { keyword: "CI/CD", relevance: "medium" },
      { keyword: "RESTful API", relevance: "high" },
    ],
  },
  formatting: {
    score: 85,
    issues: [
      "Avoid using tables in your resume as they may not be parsed correctly by ATS",
      "Use standard section headings like 'Experience', 'Education', 'Skills'",
      "Remove special characters and symbols that may confuse ATS systems",
    ],
  },
  skillsAlignment: {
    score: 82,
    matchedSkills: [
      { skill: "React", level: "Advanced" },
      { skill: "JavaScript", level: "Advanced" },
      { skill: "Node.js", level: "Intermediate" },
      { skill: "TypeScript", level: "Intermediate" },
    ],
    missingSkills: [
      { skill: "Agile", importance: "high" },
      { skill: "Scrum", importance: "medium" },
      { skill: "CI/CD", importance: "medium" },
      { skill: "RESTful API", importance: "high" },
    ],
  },
};

const sampleJobDescription = `We are looking for a Senior Frontend Developer with experience in React, JavaScript, and TypeScript. The ideal candidate will have experience with Agile methodologies, Scrum, and CI/CD pipelines. Knowledge of RESTful API design and implementation is required. Experience with Node.js is a plus.`;

export default function ATSScorePage() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState(sampleJobDescription);
  const [selectedResume, setSelectedResume] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<typeof atsResults | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    // In a real app, you would upload the file to your server here
  };

  const handleAnalyze = () => {
    if (!uploadedFile && !selectedResume) return;

    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      setResults(atsResults);
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleApplySuggestion = (suggestion: string) => {
    // In a real app, this would open the editor with the suggestion applied
    console.log("Applying suggestion:", suggestion);
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
              <h1 className="text-2xl font-bold tracking-tight">ATS Score Checker</h1>
              <p className="text-muted-foreground">Check how well your resume matches job descriptions and ATS requirements</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Resume</CardTitle>
                <CardDescription>
                  Upload your resume in PDF or DOCX format or select one from your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FileUploader onFileUpload={handleFileUpload} />

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Select from Dashboard</label>
                  <Select value={selectedResume} onValueChange={setSelectedResume}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a resume" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Software Engineer Resume</SelectItem>
                      <SelectItem value="2">Product Manager Resume</SelectItem>
                      <SelectItem value="3">UX Designer Resume</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>
                  Paste the job description you want to match your resume against
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[150px]"
                />
                <div className="mt-4 flex justify-end">
                  <Button onClick={handleAnalyze} disabled={isAnalyzing || (!uploadedFile && !selectedResume)}>
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        Analyze Match
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {results && (
              <Card>
                <CardHeader>
                  <CardTitle>ATS Analysis Results</CardTitle>
                  <CardDescription>
                    Overall ATS score: <span className="font-bold">{results.overallScore}%</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall ATS Score</span>
                      <span className="text-sm font-bold">{results.overallScore}%</span>
                    </div>
                    <Progress value={results.overallScore} className="h-3" />
                  </div>

                  <Tabs defaultValue="keywords" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="keywords">Keywords</TabsTrigger>
                      <TabsTrigger value="formatting">Formatting</TabsTrigger>
                      <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    <TabsContent value="keywords" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Keyword Match</h3>
                        <Badge variant={results.keywordMatch.score >= 70 ? "default" : "secondary"}>
                          {results.keywordMatch.score}%
                        </Badge>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Matched Keywords</h4>
                          <div className="space-y-2">
                            {results.keywordMatch.matched.map((item, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                  <span className="text-sm">{item.keyword}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge variant={item.relevance === "high" ? "default" : "secondary"}>
                                    {item.relevance}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {item.count}x
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Missing Keywords</h4>
                          <div className="space-y-2">
                            {results.keywordMatch.missing.map((item, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="h-4 w-4 text-destructive" />
                                  <span className="text-sm">{item.keyword}</span>
                                </div>
                                <Badge variant={item.relevance === "high" ? "destructive" : "secondary"}>
                                  {item.relevance}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="formatting" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Formatting Compatibility</h3>
                        <Badge variant={results.formatting.score >= 70 ? "default" : "secondary"}>
                          {results.formatting.score}%
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        {results.formatting.issues.map((issue, index) => (
                          <div key={index} className="rounded-md border p-3">
                            <div className="flex items-start gap-2">
                              <AlertCircle className="mt-0.5 h-4 w-4 text-destructive" />
                              <p className="text-sm flex-1">{issue}</p>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleApplySuggestion(issue)}
                              >
                                Apply
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="skills" className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Skills Alignment</h3>
                        <Badge variant={results.skillsAlignment.score >= 70 ? "default" : "secondary"}>
                          {results.skillsAlignment.score}%
                        </Badge>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Matched Skills</h4>
                          <div className="space-y-2">
                            {results.skillsAlignment.matchedSkills.map((item, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                  <span className="text-sm">{item.skill}</span>
                                </div>
                                <Badge variant="outline">{item.level}</Badge>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Missing Skills</h4>
                          <div className="space-y-2">
                            {results.skillsAlignment.missingSkills.map((item, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="h-4 w-4 text-destructive" />
                                  <span className="text-sm">{item.skill}</span>
                                </div>
                                <Badge variant={item.importance === "high" ? "destructive" : "secondary"}>
                                  {item.importance}
                                </Badge>
                              </div>
                            ))}
                          </div>
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
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-3">
                  <h4 className="text-sm font-medium mb-2">Improve Your ATS Score</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Add these high-relevance keywords to your resume to improve ATS matching:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {results?.keywordMatch.missing
                      .filter((item) => item.relevance === "high")
                      .map((item, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer">
                          {item.keyword}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div className="rounded-md border p-3">
                  <h4 className="text-sm font-medium mb-2">Formatting Tips</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Follow these formatting best practices to improve ATS compatibility:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Use standard fonts like Arial, Calibri, or Times New Roman</li>
                    <li>• Avoid columns, tables, and graphics</li>
                    <li>• Use simple bullet points instead of special characters</li>
                    <li>• Keep section headings simple and standard</li>
                  </ul>
                </div>

                <div className="rounded-md border p-3">
                  <h4 className="text-sm font-medium mb-2">Skills to Highlight</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Emphasize these skills in your experience section:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {results?.skillsAlignment.missingSkills
                      .filter((item) => item.importance === "high")
                      .map((item, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer">
                          {item.skill}
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {results && (
              <Card>
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Edit Resume with Suggestions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Check Against Another Job
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Get AI-Powered Improvements
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
