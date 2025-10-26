import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, Briefcase, TrendingUp, MessageSquare, Award } from "lucide-react";
import Header from "@/components/layout/Header";

const Dashboard = () => {
  const stats = [
    { title: "Total Alumni", value: "70,000+", icon: Users, trend: "+12% this year", color: "text-blue-600" },
    { title: "Active Communities", value: "24", icon: Building2, trend: "8 new this month", color: "text-purple-600" },
    { title: "Career Opportunities", value: "156", icon: Briefcase, trend: "+45 this week", color: "text-green-600" },
    { title: "Engagement Rate", value: "68%", icon: TrendingUp, trend: "+5% from last month", color: "text-orange-600" },
    { title: "Impact Stories", value: "342", icon: MessageSquare, trend: "23 published this month", color: "text-pink-600" },
    { title: "Success Rate", value: "94%", icon: Award, trend: "Alumni satisfaction", color: "text-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      <main className="container py-8 px-4">
        {/* Hero Section */}
        <div className="mb-8 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Global Horizon University
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alumni Connect Analytics Platform - Empowering connections, tracking success, building community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Navigate to key features of the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="/directory" className="group p-6 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                <Users className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Alumni Directory</h3>
                <p className="text-sm text-muted-foreground">Search and connect with alumni worldwide</p>
              </a>
              <a href="/communities" className="group p-6 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                <Building2 className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Micro-Communities</h3>
                <p className="text-sm text-muted-foreground">Join specialized groups and networks</p>
              </a>
              <a href="/careers" className="group p-6 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                <Briefcase className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Career Insights</h3>
                <p className="text-sm text-muted-foreground">Explore trends and opportunities</p>
              </a>
              <a href="/stories" className="group p-6 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                <MessageSquare className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Impact Stories</h3>
                <p className="text-sm text-muted-foreground">Read inspiring alumni success stories</p>
              </a>
              <a href="/admin" className="group p-6 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                <Award className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Admin Portal</h3>
                <p className="text-sm text-muted-foreground">Manage alumni and student invitations</p>
              </a>
              <a href="/careers" className="group p-6 border-2 rounded-lg hover:border-primary transition-all hover:shadow-md">
                <TrendingUp className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">View engagement and career analytics</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
