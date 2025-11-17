import { BookOpen, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Our curriculum is designed to nurture young minds and prepare students for a bright future."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Dedicated and experienced teachers who care about each student's individual growth and success."
    },
    {
      icon: Award,
      title: "Excellence in Sports",
      description: "State-of-the-art sports facilities and coaching to develop well-rounded individuals."
    },
    {
      icon: Sparkles,
      title: "Holistic Development",
      description: "Focus on academics, arts, sports, and character building for complete personality development."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Welcome to Endeavour
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Empowering young minds to achieve excellence through innovative learning, 
              dedicated mentorship, and a nurturing environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply for Admission
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* School Classroom Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Glimpse Into Our Classrooms
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Endeavour, learning is joyful, interactive, and built on strong teacher–student relationships.
              Our classrooms are designed to inspire curiosity, creativity, and confidence.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Image 1 */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/school-pic1.webp"
                className="w-full h-64 md:h-96 object-cover"
                alt="Students raising hands during class"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Content 1 */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Active & Engaged Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Students are encouraged to think, explore, and express themselves freely. 
                Our interactive classroom environment ensures every child participates 
                and learns with enthusiasm.
              </p>
            </div>

            {/* Content 2 */}
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Supportive Teacher–Student Bond
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our teachers celebrate effort, appreciate progress, and motivate students
                with warmth and care. We believe growth happens best in an environment 
                filled with encouragement and trust.
              </p>
            </div>

            {/* Image 2 */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/school-pic2.jpg"
                className="w-full h-64 md:h-96 object-cover"
                alt="Teacher encouraging student with a high-five"
                loading="lazy"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Endeavour?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide an exceptional learning environment where every child can thrive and reach their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards a brighter future. Our admissions team is here to help you through the process.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
