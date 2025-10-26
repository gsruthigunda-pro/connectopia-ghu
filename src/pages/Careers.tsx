import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Briefcase, DollarSign, MapPin, Building2, GraduationCap } from "lucide-react";
import Header from "@/components/layout/Header";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const Careers = () => {
  // Career trends data
  const industryData = [
    { name: "Technology", count: 18500, percentage: 26 },
    { name: "Healthcare", count: 12300, percentage: 18 },
    { name: "Finance", count: 10500, percentage: 15 },
    { name: "Education", count: 8900, percentage: 13 },
    { name: "Manufacturing", count: 7200, percentage: 10 },
    { name: "Consulting", count: 6100, percentage: 9 },
    { name: "Other", count: 6500, percentage: 9 },
  ];

  const salaryData = [
    { degree: "Ph.D.", avgSalary: 125000 },
    { degree: "MBA", avgSalary: 115000 },
    { degree: "M.S.", avgSalary: 95000 },
    { degree: "B.S.", avgSalary: 75000 },
    { degree: "B.B.A.", avgSalary: 68000 },
  ];

  const careerProgression = [
    { year: "0-2", avgSalary: 65000 },
    { year: "3-5", avgSalary: 82000 },
    { year: "6-10", avgSalary: 105000 },
    { year: "11-15", avgSalary: 135000 },
    { year: "16+", avgSalary: 175000 },
  ];

  const topEmployers = [
    { name: "Google", alumni: 450, color: "text-blue-600" },
    { name: "Microsoft", alumni: 380, color: "text-green-600" },
    { name: "Amazon", alumni: 340, color: "text-orange-600" },
    { name: "Meta", alumni: 290, color: "text-blue-500" },
    { name: "Apple", alumni: 270, color: "text-gray-600" },
  ];

  const COLORS = ['#2563eb', '#7c3aed', '#059669', '#dc2626', '#f59e0b', '#3b82f6', '#6b7280'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      <main className="container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Career Insights Dashboard</h1>
          <p className="text-muted-foreground">Track alumni career trends, industry distribution, and success metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                Avg Starting Salary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$72,500</div>
              <p className="text-xs text-muted-foreground mt-1">+8% from last year</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-blue-600" />
                Employment Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">94%</div>
              <p className="text-xs text-muted-foreground mt-1">Within 6 months</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4 text-purple-600" />
                Top Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,730</div>
              <p className="text-xs text-muted-foreground mt-1">Fortune 500 alumni</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-orange-600" />
                Avg Mid-Career
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$135K</div>
              <p className="text-xs text-muted-foreground mt-1">10-15 years exp.</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Industry Distribution */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Alumni by Industry</CardTitle>
              <CardDescription>Distribution of alumni across major industries</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={industryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Salary by Degree */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Average Salary by Degree</CardTitle>
              <CardDescription>Starting salary comparison across degree types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="degree" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="avgSalary" fill="#2563eb" name="Avg Salary" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Career Progression */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Career Progression</CardTitle>
              <CardDescription>Salary growth over years of experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={careerProgression}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Years of Experience', position: 'insideBottom', offset: -5 }} />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Line type="monotone" dataKey="avgSalary" stroke="#059669" strokeWidth={2} name="Avg Salary" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Employers */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Top Employers</CardTitle>
              <CardDescription>Companies with most GHU alumni</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topEmployers.map((employer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`font-bold text-2xl ${employer.color}`}>#{index + 1}</div>
                      <div>
                        <p className="font-semibold">{employer.name}</p>
                        <p className="text-sm text-muted-foreground">{employer.alumni} alumni</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{employer.alumni}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Opportunities */}
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Featured Career Opportunities</CardTitle>
                <CardDescription>Latest openings from our alumni network</CardDescription>
              </div>
              <Button>View All Opportunities</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Senior Software Engineer", company: "Google", location: "Mountain View, CA", salary: "$150K-$200K" },
                { title: "Product Manager", company: "Microsoft", location: "Seattle, WA", salary: "$130K-$170K" },
                { title: "Data Scientist", company: "Amazon", location: "Remote", salary: "$120K-$160K" },
              ].map((job, index) => (
                <div key={index} className="p-4 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                  <h3 className="font-semibold mb-2">{job.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">Apply Now</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Careers;
