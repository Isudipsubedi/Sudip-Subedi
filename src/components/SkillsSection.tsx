import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "all",
      label: "All Skills",
    },
    {
      id: "languages",
      label: "Languages",
    },
    {
      id: "frameworks",
      label: "Frameworks & Libraries",
    },
    {
      id: "databases",
      label: "Database Tools",
    },
    {
      id: "others",
      label: "Others",
    },
  ];

  const skills = [
    // Languages
    { name: "HTML", category: "languages", level: 90 },
    { name: "CSS", category: "languages", level: 85 },
    { name: "JavaScript", category: "languages", level: 88 },
    { name: "Python", category: "languages", level: 92 },
    { name: "SQL", category: "languages", level: 90 },
    { name: "C++", category: "languages", level: 75 },
    
    // Frameworks & Libraries
    { name: "React.js", category: "frameworks", level: 85 },
    { name: "Node.js", category: "frameworks", level: 80 },
    { name: "Express.js", category: "frameworks", level: 82 },
    { name: "Flask", category: "frameworks", level: 88 },
    { name: "OpenCV", category: "frameworks", level: 75 },
    { name: "Matplotlib", category: "frameworks", level: 90 },
    { name: "Pandas", category: "frameworks", level: 95 },
    { name: "NumPy", category: "frameworks", level: 90 },
    
    // Database Tools
    { name: "MySQL", category: "databases", level: 88 },
    { name: "PostgreSQL", category: "databases", level: 85 },
    { name: "Snowflake", category: "databases", level: 75 },
    { name: "Excel", category: "databases", level: 80 },
    { name: "Power BI", category: "databases", level: 78 },
    { name: "ETL Processes", category: "databases", level: 85 },
    
    // Others
    { name: "Git", category: "others", level: 85 },
    { name: "GitHub", category: "others", level: 88 },
    { name: "Cloud Computing", category: "others", level: 80 },
    { name: "Machine Learning", category: "others", level: 85 },
    { name: "Data Analysis", category: "others", level: 90 },
    { name: "Agile Methodologies", category: "others", level: 78 },
  ];

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
          </div>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-flow-col auto-cols-max gap-2 bg-transparent h-auto p-1 overflow-x-auto max-w-full scrollbar-hide">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all rounded-full px-4 py-2"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="bg-background/60 backdrop-blur-sm border border-border/50">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredSkills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
