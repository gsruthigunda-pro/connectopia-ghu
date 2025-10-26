import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Sample alumni data based on the dataset
  const alumni = [
    {
      id: 1,
      name: "Gregory Cooper",
      email: "hicksmichelle.1@example.com",
      graduationYear: 2006,
      degree: "B.S. Biomedical Engineering",
      department: "Electrical Engineering",
      currentJob: "Designer, interior/spatial",
      location: "Kylebury, MO",
    },
    {
      id: 2,
      name: "Aaron Adams",
      email: "nicholskaren.2@example.com",
      graduationYear: 2006,
      degree: "M.S. Biomedical Engineering",
      department: "Computer Science",
      currentJob: "Child psychotherapist",
      location: "Courtneyfort, ND",
    },
    {
      id: 3,
      name: "Randy Tran",
      email: "simpsoncrystal.3@example.com",
      graduationYear: 2011,
      degree: "MBA",
      department: "Business Administration",
      currentJob: "Insurance risk surveyor",
      location: "North Christopher, NM",
    },
    {
      id: 4,
      name: "Jessica Wright",
      email: "coletammy.5@example.com",
      graduationYear: 2011,
      degree: "B.S. Information Systems",
      department: "Information Systems",
      currentJob: "Accommodation manager",
      location: "Rodneymouth, GU",
    },
    {
      id: 5,
      name: "Michael Larson",
      email: "jeffrey54.27@example.com",
      graduationYear: 2010,
      degree: "M.P.H.",
      department: "Public Health",
      currentJob: "Surveyor, insurance",
      location: "North Lauren, OH",
    },
    {
      id: 6,
      name: "Kimberly Stokes",
      email: "kwilliams.29@example.com",
      graduationYear: 2010,
      degree: "Ph.D.",
      department: "Data Science",
      currentJob: "Chief Marketing Officer",
      location: "West Anntown, ME",
    },
  ];

  const departments = ["all", "Computer Science", "Information Systems", "Electrical Engineering", 
    "Mechanical Engineering", "Business Administration", "Finance", "Marketing", "Public Health", 
    "Biomedical Engineering", "Data Science"];

  const graduationYears = ["all", "2005-2010", "2011-2015", "2016-2020", "2021-2025"];

  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.currentJob.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === "all" || person.department === selectedDepartment;
    
    let matchesYear = true;
    if (selectedYear !== "all") {
      const [start, end] = selectedYear.split("-").map(Number);
      matchesYear = person.graduationYear >= start && person.graduationYear <= end;
    }
    
    return matchesSearch && matchesDepartment && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      <main className="container py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Alumni Directory</h1>
          <p className="text-muted-foreground">Connect with 70,000+ alumni worldwide</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle>Search Alumni</CardTitle>
            <CardDescription>Find alumni by name, location, job title, or department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, job, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept === "all" ? "All Departments" : dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <GraduationCap className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  {graduationYears.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year === "all" ? "All Years" : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredAlumni.length}</span> alumni
          </p>
          <Button variant="outline" size="sm">
            Export Results
          </Button>
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((person) => (
            <Card key={person.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg mb-1">{person.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-xs">
                      <GraduationCap className="h-3 w-3" />
                      Class of {person.graduationYear}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{person.degree.split(' ')[0]}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Briefcase className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{person.currentJob}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{person.location}</p>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{person.department}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Directory;
