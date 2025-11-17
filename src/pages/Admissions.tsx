import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const admissionSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .regex(/^[A-Za-z'\-]+$/, "First name must not contain spaces or numbers"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .regex(/^[A-Za-z'\-]+$/, "Last name must not contain spaces or numbers"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .regex(/^\S+$/, "Email must not contain spaces"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((val) => {
      const digits = val.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, { message: "Phone must contain 10 to 15 digits (you can include spaces or punctuation)" }),
  studentBirthday: z
    .string()
    .min(1, "Birthday is required")
    .refine((val) => {
      const d = new Date(val);
      const now = new Date();
      return !Number.isNaN(d.getTime()) && d <= now;
    }, { message: "Please enter a valid birth date in the past" }),
  gender: z.string().min(1, "Please select a gender"),
  classForAdmission: z.string().min(1, "Please select a class for admission"),
  parentName: z
    .string()
    .min(2, "Parent name must be at least 2 characters")
    .regex(/^[A-Za-z\s'\-]+$/, "Parent name contains invalid characters"),
  address: z.string().min(10, "Address must be at least 10 characters"),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const Admissions = () => {
  const { toast } = useToast();
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<AdmissionFormData>({
      resolver: zodResolver(admissionSchema),
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      studentBirthday: "",
      gender: "",
      classForAdmission: "",
      parentName: "",
      address: "",
    },
  });

  const onSubmit = (data: AdmissionFormData) => {
    console.log("Admission form submitted:", data);
    toast({
      title: "Application Submitted!",
      description: "We will contact you soon regarding the admission process.",
    });
    reset();
    setSelectedGender("");
    setSelectedClass("");
  };

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          Admissions
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
          Join our community of learners. Fill out the form below to start your admission process.
        </p>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  {...register("firstName", {
                    onChange: (e) => {
                      const v = (e.target as HTMLInputElement).value.replace(/\s/g, "");
                      setValue("firstName", v, { shouldValidate: true, shouldDirty: true });
                    },
                  })}
                  placeholder="Enter first name"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  {...register("lastName", {
                    onChange: (e) => {
                      const v = (e.target as HTMLInputElement).value.replace(/\s/g, "");
                      setValue("lastName", v, { shouldValidate: true, shouldDirty: true });
                    },
                  })}
                  placeholder="Enter last name"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    onChange: (e) => {
                      const v = (e.target as HTMLInputElement).value.replace(/\s/g, "");
                      setValue("email", v, { shouldValidate: true, shouldDirty: true });
                    },
                  })}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="(555) 123-4567"
                  type="tel"
                  inputMode="tel"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studentBirthday">Student Birthday *</Label>
                <Input
                  id="studentBirthday"
                  type="date"
                  {...register("studentBirthday")}
                  aria-invalid={!!errors.studentBirthday}
                  aria-describedby={errors.studentBirthday ? "studentBirthday-error" : undefined}
                />
                {errors.studentBirthday && (
                  <p id="studentBirthday-error" className="text-sm text-destructive">{errors.studentBirthday.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select
                  value={selectedGender}
                  onValueChange={(value) => {
                    setSelectedGender(value);
                    // update react-hook-form value and validate
                    setValue("gender", value, { shouldValidate: true, shouldDirty: true });
                  }}
                  aria-invalid={!!errors.gender}
                  aria-describedby={errors.gender ? "gender-error" : undefined}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p id="gender-error" className="text-sm text-destructive">{errors.gender.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="classForAdmission">Class for Admission *</Label>
              <Select
                value={selectedClass}
                onValueChange={(value) => {
                  setSelectedClass(value);
                  // update react-hook-form value and validate
                  setValue("classForAdmission", value, { shouldValidate: true, shouldDirty: true });
                }}
                aria-invalid={!!errors.classForAdmission}
                aria-describedby={errors.classForAdmission ? "classForAdmission-error" : undefined}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nursery">Nursery</SelectItem>
                  <SelectItem value="lkg">LKG</SelectItem>
                  <SelectItem value="ukg">UKG</SelectItem>
                  <SelectItem value="1">Class 1</SelectItem>
                  <SelectItem value="2">Class 2</SelectItem>
                  <SelectItem value="3">Class 3</SelectItem>
                  <SelectItem value="4">Class 4</SelectItem>
                  <SelectItem value="5">Class 5</SelectItem>
                  <SelectItem value="6">Class 6</SelectItem>
                  <SelectItem value="7">Class 7</SelectItem>
                  <SelectItem value="8">Class 8</SelectItem>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                </SelectContent>
              </Select>
              {errors.classForAdmission && (
                <p id="classForAdmission-error" className="text-sm text-destructive">{errors.classForAdmission.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="parentName">Mother/Father Name *</Label>
              <Input
                id="parentName"
                {...register("parentName")}
                placeholder="Enter parent name"
                aria-invalid={!!errors.parentName}
                aria-describedby={errors.parentName ? "parentName-error" : undefined}
              />
              {errors.parentName && (
                <p id="parentName-error" className="text-sm text-destructive">{errors.parentName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                {...register("address")}
                placeholder="Enter complete address"
                aria-invalid={!!errors.address}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
              {errors.address && (
                <p id="address-error" className="text-sm text-destructive">{errors.address.message}</p>
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

export default Admissions;
