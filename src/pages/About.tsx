import { Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          About Endeavour
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
            Established in 1995, Endeavour has been a beacon of quality education 
            for over 25 years, shaping the lives of thousands of students.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide world-class education that nurtures critical thinking, creativity, 
                and character development in every student.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Values</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Integrity, excellence, compassion, and innovation guide everything we do 
                in creating a supportive learning community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be a leading institution that empowers students to become confident, 
                compassionate global citizens ready to make a positive impact.
              </p>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              What started as a small institution with just 50 students has grown into a thriving 
              community of over 1,500 students. Our journey has been marked by continuous innovation, 
              dedication to academic excellence, and an unwavering commitment to student welfare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, Endeavour stands proud with state-of-the-art facilities, a team of 
              highly qualified educators, and a track record of outstanding academic and co-curricular 
              achievements. Our alumni have gone on to excel in various fields, making significant 
              contributions to society.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Facilities</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Modern, well-equipped classrooms with smart boards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Advanced science and computer laboratories</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Comprehensive library with over 10,000 books</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Sports complex with indoor and outdoor facilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Music and arts studios for creative expression</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Safe and comfortable transportation services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
