
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, ChevronRight, Clock, Gauge, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard header */}
      <header className="border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className="mr-4 md:hidden" 
              size="icon"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
            <h1 className="text-xl font-semibold">Toolbox Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </header>
      
      <div className="container px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold gradient-text">Welcome to your Dashboard</h2>
          <p className="text-muted-foreground mt-2">Monitor your productivity and access your tools.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground mt-1">+2.5% from last month</p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-1">
                <span>View all projects</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground mt-1">+4 new tasks today</p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-1">
                <span>View all tasks</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">9</div>
              <p className="text-xs text-muted-foreground mt-1">2 pending invitations</p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-1">
                <span>Manage team</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Productivity Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground mt-1">+5% from last week</p>
            </CardContent>
            <CardFooter className="pt-2">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-1">
                <span>View insights</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="analytics">
                <BarChart className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="activity">
                <Clock className="mr-2 h-4 w-4" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="team">
                <Users className="mr-2 h-4 w-4" />
                Team
              </TabsTrigger>
              <TabsTrigger value="performance">
                <Gauge className="mr-2 h-4 w-4" />
                Performance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="analytics" className="border rounded-lg p-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Overview</CardTitle>
                  <CardDescription>View your productivity metrics over time</CardDescription>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="h-[300px] flex items-center justify-center border rounded bg-muted/20">
                    <div className="text-center">
                      <LineChart className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">Analytics chart will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your team's latest actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Task {i} completed</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team">Team content</TabsContent>
            <TabsContent value="performance">Performance metrics</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
