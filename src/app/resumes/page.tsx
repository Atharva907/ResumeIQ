import Link from "next/link";
import { Plus, FileText, CheckCircle, Zap, BarChart3, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for demonstration
const userResumes = [
  {
    id: "1",
    title: "Software Engineer Resume",
    lastModified: "2023-10-15",
    atsScore: 85,
    status: "completed",
    jobApplications: 5,
  },
  {
    id: "2",
    title: "Product Manager Resume",
    lastModified: "2023-10-10",
    atsScore: 78,
    status: "in-progress",
    jobApplications: 2,
  },
  {
    id: "3",
    title: "UX Designer Resume",
    lastModified: "2023-09-28",
    atsScore: 92,
    status: "completed",
    jobApplications: 8,
  },
  {
    id: "4",
    title: "Data Analyst Resume",
    lastModified: "2023-09-15",
    atsScore: 88,
    status: "completed",
    jobApplications: 3,
  },
];

export default function ResumesPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Resumes</h1>
          <p className="text-muted-foreground">Create and manage your professional resumes</p>
        </div>
        <Link href="/dashboard/resumes/create">
          <Button className="mt-4 md:mt-0">
            <Plus className="mr-2 h-4 w-4" />
            Create New Resume
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resumes..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {userResumes.map((resume) => (
          <Card key={resume.id} className="transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{resume.title}</CardTitle>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/resumes/${resume.id}`}>Edit</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/resumes/${resume.id}/verify`}>Verify</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/resumes/${resume.id}/ats`}>Check ATS</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CardDescription>
                Last modified: {new Date(resume.lastModified).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">ATS Score</span>
                <span className="text-sm font-bold">{resume.atsScore}%</span>
              </div>
              <Progress value={resume.atsScore} className="h-2 mb-4" />

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Status</span>
                <Badge variant={resume.status === "completed" ? "default" : "secondary"}>
                  {resume.status === "completed" ? "Completed" : "In Progress"}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Applications</span>
                <span className="text-sm">{resume.jobApplications}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/dashboard/resumes/${resume.id}`}>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Link href={`/dashboard/resumes/${resume.id}/verify`}>
                  <Button variant="outline" size="sm">
                    Verify
                  </Button>
                </Link>
                <Link href={`/dashboard/resumes/${resume.id}/ats`}>
                  <Button variant="outline" size="sm">
                    Check ATS
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
