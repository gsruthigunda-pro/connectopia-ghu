import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, BookOpen, Award, TrendingUp, Users } from "lucide-react";
import Header from "@/components/layout/Header";

const Stories = () => {
  const featuredStories = [
    {
      id: 1,
      title: "From Student to CEO: Sarah Johnson's Tech Success Story",
      author: "Sarah Johnson",
      class: "Class of 2010",
      department: "Computer Science",
      excerpt: "After graduating from GHU, I founded TechInnovate, which now serves over 50,000 businesses worldwide...",
      category: "Entrepreneurship",
      readTime: "5 min read",
      likes: 342,
      image: "tech-ceo",
    },
    {
      id: 2,
      title: "Medical Breakthrough: Dr. Michael Chen's Pioneering Research",
      author: "Dr. Michael Chen",
      class: "Class of 2008",
      department: "Biomedical Engineering",
      excerpt: "My journey in biomedical research led to developing a revolutionary treatment that has helped thousands...",
      category: "Healthcare",
      readTime: "7 min read",
      likes: 289,
      image: "medical-research",
    },
    {
      id: 3,
      title: "Building Communities: Amanda Rodriguez's Social Impact",
      author: "Amanda Rodriguez",
      class: "Class of 2015",
      department: "Business Administration",
      excerpt: "Starting as a community organizer, I've now established 15 non-profit centers across three states...",
      category: "Social Impact",
      readTime: "6 min read",
      likes: 198,
      image: "social-impact",
    },
    {
      id: 4,
      title: "Global Finance Leader: Robert Kim's Wall Street Journey",
      author: "Robert Kim",
      class: "Class of 2012",
      department: "Finance",
      excerpt: "From analyst to Managing Director, my GHU education laid the foundation for success in global markets...",
      category: "Finance",
      readTime: "4 min read",
      likes: 276,
      image: "finance",
    },
    {
      id: 5,
      title: "Engineering Innovation: Lisa Williams' Sustainable Solutions",
      author: "Lisa Williams",
      class: "Class of 2016",
      department: "Mechanical Engineering",
      excerpt: "Developing eco-friendly manufacturing processes that reduce carbon emissions by 40%...",
      category: "Engineering",
      readTime: "6 min read",
      likes: 234,
      image: "engineering",
    },
    {
      id: 6,
      title: "Data Science for Good: James Anderson's AI for Healthcare",
      author: "James Anderson",
      class: "Class of 2018",
      department: "Data Science",
      excerpt: "Using machine learning to predict and prevent diseases, saving countless lives through early detection...",
      category: "Technology",
      readTime: "5 min read",
      likes: 312,
      image: "data-science",
    },
  ];

  const categories = ["All", "Entrepreneurship", "Healthcare", "Social Impact", "Finance", "Engineering", "Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      <main className="container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Impact Stories</h1>
          <p className="text-muted-foreground">Inspiring stories of GHU alumni making a difference worldwide</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-blue-600" />
                Total Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">342</div>
              <p className="text-xs text-muted-foreground mt-1">23 published this month</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-600" />
                Total Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">45.2K</div>
              <p className="text-xs text-muted-foreground mt-1">Likes and shares</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">289</div>
              <p className="text-xs text-muted-foreground mt-1">Alumni storytellers</p>
            </CardContent>
          </Card>
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-600" />
                Featured Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">48</div>
              <p className="text-xs text-muted-foreground mt-1">Award-winning</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
            <Card key={story.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary">{story.category}</Badge>
                  <span className="text-xs text-muted-foreground">{story.readTime}</span>
                </div>
                <CardTitle className="text-xl mb-2 line-clamp-2">{story.title}</CardTitle>
                <CardDescription className="space-y-1">
                  <p className="font-medium text-foreground">{story.author}</p>
                  <p className="text-xs">{story.class} • {story.department}</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Heart className="h-4 w-4" />
                    <span>{story.likes}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
          <CardHeader>
            <CardTitle>Share Your Story</CardTitle>
            <CardDescription>
              Inspire future generations by sharing your journey, achievements, and lessons learned
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button>
                <BookOpen className="h-4 w-4 mr-2" />
                Submit Your Story
              </Button>
              <Button variant="outline">
                Story Guidelines
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Stories;
