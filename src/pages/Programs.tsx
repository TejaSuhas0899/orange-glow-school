import { GraduationCap, Palette, Trophy, Music } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Comprehensive curriculum aligned with national standards, featuring STEM education, language programs, and advanced learning opportunities.",
      highlights: [
        "Interactive learning methodologies",
        "Small class sizes for personalized attention",
        "Regular assessments and progress tracking",
        "Advanced placement courses for high achievers"
      ]
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Nurturing creative expression through visual arts, performing arts, and creative writing programs.",
      highlights: [
        "Professional art and craft studios",
        "Drama and theater productions",
        "Annual art exhibitions",
        "Creative writing workshops"
      ]
    },
    {
      icon: Trophy,
      title: "Sports & Athletics",
      description: "Developing physical fitness, teamwork, and sportsmanship through diverse athletic programs.",
      highlights: [
        "Cricket, Football, Basketball, and Athletics",
        "Professional coaching staff",
        "Inter-school competitions",
        "State-of-the-art sports facilities"
      ]
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Cultivating appreciation for music and dance with expert instruction in various styles and instruments.",
      highlights: [
        "Vocal and instrumental music classes",
        "Classical and contemporary dance",
        "Annual cultural festivals",
        "Music theory and composition"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer a comprehensive range of programs designed to develop well-rounded 
            individuals ready to excel in all aspects of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all"
            >
              <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <program.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {program.title}
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground text-sm mb-3">
                  Highlights:
                </h3>
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm text-muted-foreground">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-secondary rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Co-Curricular Activities
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Beyond academics, we offer a rich array of clubs and activities including 
            debate club, science club, robotics, environmental club, literary society, 
            and community service programs. These activities help students discover their 
            passions and develop leadership skills.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border">
              Debate & Public Speaking
            </span>
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border">
              Science & Robotics
            </span>
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border">
              Environmental Club
            </span>
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border">
              Community Service
            </span>
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium text-foreground border border-border">
              Literary Society
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
