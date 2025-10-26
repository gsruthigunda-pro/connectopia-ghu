import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Calendar, TrendingUp, Code, Briefcase, Heart, Globe } from "lucide-react";
import Header from "@/components/layout/Header";

const Communities = () => {
  const communities = [
    {
      id: 1,
      name: "Computer Science Alumni",
      description: "Connect with fellow CS graduates, share projects, and discuss latest tech trends",
      members: 12500,
      posts: 3420,
      category: "Technology",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      name: "Business Leaders Network",
      description: "Executive networking, leadership insights, and business strategy discussions",
      members: 8900,
      posts: 2150,
      category: "Business",
      icon: Briefcase,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 3,
      name: "Healthcare Professionals",
      description: "Medical and public health alumni sharing insights and opportunities",
      members: 6700,
      posts: 1890,
      category: "Healthcare",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 4,
      name: "Global Alumni Network",
      description: "International alumni connecting across borders and cultures",
      members: 15200,
      posts: 4560,
      category: "Global",
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 5,
      name: "Data Science & Analytics",
      description: "Share insights, datasets, and career opportunities in data science",
      members: 9800,
      posts: 2780,
      category: "Technology",
      icon: TrendingUp,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: 6,
      name: "Entrepreneurship Hub",
      description: "For alumni founders, startup enthusiasts, and innovation drivers",
      members: 5400,
      posts: 1650,
      category: "Business",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      <main className="container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Micro-Communities</h1>
          <p className="text-muted-foreground">Join specialized groups and connect with like-minded alumni</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Communities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">58,500</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">16,450</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Events This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42</div>
            </CardContent>
          </Card>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => {
            const Icon = community.icon;
            return (
              <Card key={community.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`${community.bgColor} p-3 rounded-lg`}>
                      <Icon className={`h-6 w-6 ${community.color}`} />
                    </div>
                    <Badge variant="secondary">{community.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{community.name}</CardTitle>
                  <CardDescription>{community.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{community.members.toLocaleString()} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{community.posts.toLocaleString()} posts</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Join Community</Button>
                    <Button variant="outline" size="icon">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Create Community CTA */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Want to start a new community?</CardTitle>
            <CardDescription>
              Have an idea for a specialized alumni group? We encourage alumni to create communities around shared interests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>
              <Users className="h-4 w-4 mr-2" />
              Propose New Community
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Communities;
