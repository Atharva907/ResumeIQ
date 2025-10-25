import Link from "next/link";
import { Plus, FileText, CheckCircle, Zap, BarChart3, Settings, LogOut, User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for demonstration
const userResumes = [
  {
    id: "1",
    title: "Software Engineer Resume",
    lastModified: "2023-10-15",
    atsScore: 85,
    status: "completed",
  },
  {
    id: "2",
    title: "Product Manager Resume",
    lastModified: "2023-10-10",
    atsScore: 78,
    status: "in-progress",
  },
  {
    id: "3",
    title: "UX Designer Resume",
    lastModified: "2023-09-28",
    atsScore: 92,
    status: "completed",
  },
];

const userSubscription = {
  plan: "Free",
  usedAiSuggestions: 3,
  maxAiSuggestions: 5,
  usedAtsChecks: 2,
  maxAtsChecks: 3,
  nextBillingDate: null,
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your resumes and track your job applications</p>
          </div>
          <Link href="/dashboard/resumes/create">
            <Button className="mt-4 md:mt-0">
              <Plus className="mr-2 h-4 w-4" />
              Create New Resume
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userResumes.length}</div>
              <p className="text-xs text-muted-foreground">
                +1 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ATS Score Average</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(userResumes.reduce((acc, resume) => acc + resume.atsScore, 0) / userResumes.length)}%
              </div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">AI Suggestions Used</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userSubscription.usedAiSuggestions}/{userSubscription.maxAiSuggestions}</div>
              <Progress value={(userSubscription.usedAiSuggestions / userSubscription.maxAiSuggestions) * 100} className="mt-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">ATS Checks Used</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userSubscription.usedAtsChecks}/{userSubscription.maxAtsChecks}</div>
              <Progress value={(userSubscription.usedAtsChecks / userSubscription.maxAtsChecks) * 100} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="resumes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="resumes">My Resumes</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="resumes" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {userResumes.map((resume) => (
                <Card key={resume.id} className="transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{resume.title}</CardTitle>
                      <Badge variant={resume.status === "completed" ? "default" : "secondary"}>
                        {resume.status === "completed" ? "Completed" : "In Progress"}
                      </Badge>
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
                    <Progress value={resume.atsScore} className="h-2" />
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
          </TabsContent>

          <TabsContent value="subscription" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Your Subscription
                </CardTitle>
                <CardDescription>
                  Manage your subscription and billing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-sm text-muted-foreground">
                      {userSubscription.plan === "Free" ? "Free Plan" : "Premium Plan"}
                    </p>
                  </div>
                  <Badge variant={userSubscription.plan === "Free" ? "secondary" : "default"}>
                    {userSubscription.plan}
                  </Badge>
                </div>
                {userSubscription.plan === "Free" && (
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-medium mb-2">Upgrade to Premium</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get unlimited AI suggestions, ATS checks, and access to premium templates
                    </p>
                    <Button>Upgrade to Premium</Button>
                  </div>
                )}
                {userSubscription.plan === "Premium" && userSubscription.nextBillingDate && (
                  <div>
                    <p className="font-medium mb-2">Next Billing Date</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(userSubscription.nextBillingDate).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Manage Subscription
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Resume Analytics
                </CardTitle>
                <CardDescription>
                  Track your resume performance and job application success
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="font-medium">Most Used Keywords</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Best Performing Templates</p>
                    <div className="flex flex-col space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Modern Template</span>
                        <span>92% ATS Score</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Classic Template</span>
                        <span>85% ATS Score</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Creative Template</span>
                        <span>78% ATS Score</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Manage your account settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">Profile Information</p>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>John Doe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">john.doe@example.com</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Preferences</p>
                  <div className="flex items-center justify-between">
                    <span>Email Notifications</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dark Mode</span>
                    <Button variant="outline" size="sm">Toggle</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Change Password</Button>
                <Button variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
