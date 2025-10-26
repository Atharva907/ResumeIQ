"use client";
import { useState, useRef } from "react";
import { ArrowLeft, Loader2, FileText, Search, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export default function ATSScorePage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  // ✅ PDF Export Function
  const handleDownloadPDF = async () => {
    const reportElement = reportRef.current;
    if (!reportElement) return;

    const canvas = await html2canvas(reportElement, {
      scale: 2,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let position = 0;
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    if (pdfHeight > pageHeight) {
      let remaining = pdfHeight - pageHeight;
      while (remaining > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        remaining -= pageHeight;
      }
    }

    pdf.save("ATS-Report.pdf");
  };

  // ✅ DOCX Export Function
  const handleDownloadDOCX = async () => {
    if (!reportRef.current) return;
    const text = reportRef.current.innerText;
    const doc = new Document({
      sections: [
        {
          children: text
            .split("\n")
            .filter((line) => line.trim() !== "")
            .map(
              (line) =>
                new Paragraph({
                  children: [
                    new TextRun({
                      text: line,
                      font: "Calibri",
                      size: 24,
                    }),
                  ],
                })
            ),
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "ATS-Report.docx");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">ATS Score Checker</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Upload Resume or Paste Job Description</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <textarea
              placeholder="Paste job description here..."
              className="w-full min-h-[120px] rounded-md border p-3 text-sm"
            />
            <div className="flex justify-end">
              <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" /> Analyze Match
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {showResults && (
          <Card className="mt-8">
            <CardHeader className="flex items-center justify-between">
              <CardTitle>ATS Analysis Results</CardTitle>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownloadPDF}
                >
                  <Download className="mr-2 h-4 w-4" />
                  PDF
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownloadDOCX}
                >
                  <Download className="mr-2 h-4 w-4" />
                  DOCX
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div id="ats-report" ref={reportRef}>
                <div className="p-4 space-y-4">
                  <h2 className="text-lg font-semibold">
                    Overall ATS Score: <span className="text-primary">78%</span>
                  </h2>

                  <div>
                    <p className="font-medium">Keyword Match</p>
                    <Progress value={65} className="h-3 mt-2" />
                    <p className="text-sm text-muted-foreground mt-1">
                      65% keyword alignment with job description.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">Formatting Score</p>
                    <Progress value={85} className="h-3 mt-2" />
                    <p className="text-sm text-muted-foreground mt-1">
                      Resume format is ATS compatible.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">Skill Match</p>
                    <Progress value={82} className="h-3 mt-2" />
                    <ul className="text-sm list-disc list-inside mt-2">
                      <li>Matched: React, JS, Node.js</li>
                      <li>Missing: Agile, RESTful APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
