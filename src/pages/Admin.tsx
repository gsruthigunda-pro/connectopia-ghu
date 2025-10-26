import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Send, Shield, Database, Users, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Admin = () => {
  const { toast } = useToast();
  const [inviteForm, setInviteForm] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
    graduationYear: "",
    message: "",
  });

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Invitation Sent",
      description: `Invitation email sent to ${inviteForm.email}`,
    });
    setInviteForm({ name: "", email: "", role: "", department: "", graduationYear: "", message: "" });
  };

  const adminStats = [
    { title: "Total Users", value: "70,234", icon: Users, color: "text-blue-600" },
    { title: "Pending Invites", value: "45", icon: Send, color: "text-orange-600" },
    { title: "Active Sessions", value: "2,340", icon: CheckCircle, color: "text-green-600" },
    { title: "Data Quality", value: "96%", icon: Database, color: "text-purple-600" },
  ];

  const recentInvites = [
    { name: "John Smith", email: "john.smith@example.com", status: "Accepted", date: "2025-10-24" },
    { name: "Emily Davis", email: "emily.davis@example.com", status: "Pending", date: "2025-10-23" },
    { name: "Michael Brown", email: "michael.brown@example.com", status: "Accepted", date: "2025-10-22" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-background">
      <Header />
      <main className="container py-8 px-4">
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-primary rounded-lg p-3">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Admin Portal</h1>
            <p className="text-muted-foreground">Manage alumni and student registrations</p>
          </div>
        </div>

        {/* Admin Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {adminStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                    {stat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Invitation Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <UserPlus className="h-5 w-5 text-primary" />
                <CardTitle>Send Invitation</CardTitle>
              </div>
              <CardDescription>
                Invite alumni or students to join the GHU Alumni Connect platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInvite} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter full name"
                    value={inviteForm.name}
                    onChange={(e) => setInviteForm({ ...inviteForm, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={inviteForm.email}
                    onChange={(e) => setInviteForm({ ...inviteForm, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Select value={inviteForm.role} onValueChange={(value) => setInviteForm({ ...inviteForm, role: value })}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alumni">Alumni</SelectItem>
                        <SelectItem value="student">Current Student</SelectItem>
                        <SelectItem value="staff">Staff</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      placeholder="2024"
                      value={inviteForm.graduationYear}
                      onChange={(e) => setInviteForm({ ...inviteForm, graduationYear: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Select value={inviteForm.department} onValueChange={(value) => setInviteForm({ ...inviteForm, department: value })}>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="is">Information Systems</SelectItem>
                      <SelectItem value="ee">Electrical Engineering</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                      <SelectItem value="ba">Business Administration</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="ph">Public Health</SelectItem>
                      <SelectItem value="bme">Biomedical Engineering</SelectItem>
                      <SelectItem value="ds">Data Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Personal Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Add a personalized message to the invitation..."
                    value={inviteForm.message}
                    onChange={(e) => setInviteForm({ ...inviteForm, message: e.target.value })}
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Invitation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Invitations */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Recent Invitations</CardTitle>
                <CardDescription>Track the status of sent invitations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInvites.map((invite, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-semibold">{invite.name}</p>
                        <p className="text-sm text-muted-foreground">{invite.email}</p>
                        <p className="text-xs text-muted-foreground mt-1">{invite.date}</p>
                      </div>
                      <Badge variant={invite.status === "Accepted" ? "default" : "secondary"}>
                        {invite.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data Management
                </CardTitle>
                <CardDescription>
                  Tools for data consolidation, cleaning, and quality assurance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Run Data Validation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Consolidate Records
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Export Alumni Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
