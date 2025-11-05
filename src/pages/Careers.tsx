import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const careerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(2, "Position is required"),
  resume: z.any().refine((files) => files?.length > 0, "Resume is required"),
});

type CareerFormData = z.infer<typeof careerSchema>;

const Careers = () => {
  const { toast } = useToast();
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });

  const onSubmit = (data: CareerFormData) => {
    console.log("Career form submitted:", data);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We will review your application and get back to you soon.",
    });
    reset();
    setFileName("");
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          Careers
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
          Join our team of dedicated educators. We're always looking for passionate teachers 
          who want to make a difference in students' lives.
        </p>

        <div className="bg-secondary rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Work With Us?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Competitive salary and benefits package</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Professional development opportunities</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Supportive and collaborative work environment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Modern facilities and teaching resources</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Opportunity to shape young minds and make an impact</span>
            </li>
          </ul>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-6">Apply Now</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Post Applied For *</Label>
              <Input
                id="position"
                {...register("position")}
                placeholder="e.g., Math Teacher, Science Teacher, etc."
              />
              {errors.position && (
                <p className="text-sm text-destructive">{errors.position.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume">Resume *</Label>
              <Input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume")}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFileName(file.name);
                  }
                }}
              />
              {fileName && (
                <p className="text-sm text-muted-foreground">Selected: {fileName}</p>
              )}
              {errors.resume && (
                <p className="text-sm text-destructive">{errors.resume.message as string}</p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
