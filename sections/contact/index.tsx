"use client";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, RHFSelect, RHFTextArea, RHFTextField } from "@/components/hook-form";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email().min(1, { message: "Email is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactSchema = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const defaultValues: ContactSchema = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const handleSubmit = async (data: ContactSchema) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const socialLinks = [
    {
      name: "Github",
      icon: FaGithub,
      href: "https://github.com/Abdussamadajao",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "http://www.linkedin.com/in/ajaoabdussamad",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      href: "https://x.com/AbdussamadAjao",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:abdussamadajao@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content & Socials */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for projects
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                Let's bring your ideas to <span className="text-primary">life</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                I'm currently open to new opportunities, technical collaborations, and
                open-source contributions. Drop me a line and let's discuss your next
                project.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group size-12 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
                      aria-label={link.name}
                    >
                      <Icon className="text-xl text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-sm" />
                <span className="text-sm font-medium">abdussamadajao@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-sm" />
                <span className="text-sm font-medium">Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden">
              <Form form={form} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <RHFTextField
                      name="name"
                      label="Name"
                      inputProps={{
                        placeholder: "John Doe",
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <RHFTextField
                      name="email"
                      label="Email"
                      inputProps={{
                        placeholder: "dev@example.com",
                        type: "email",
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">

                  <RHFSelect
                    name="subject"
                    label="Inquiry Type"
                    placeholder="Select Inquiry Type"
                    options={[
                      { label: "Technical Collaboration", value: "collaboration" },
                      { label: "Hiring / Full-time", value: "hire" },
                      { label: "Consulting Project", value: "consulting" },
                      { label: "Other", value: "other" },
                    ]} />
                </div>

                <div className="space-y-2">
                  <RHFTextArea
                    name="message"
                    label="Message"
                    inputProps={{
                      placeholder: "Tell me about your project or just say hi...",
                      rows: 5,
                    }}
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3 p-4 rounded-lg ${submitStatus.type === "success"
                      ? "bg-primary/10 border border-primary/20 text-primary"
                      : "bg-destructive/10 border border-destructive/20 text-destructive"
                      }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="text-lg" />
                    ) : (
                      <AlertCircle className="text-lg" />
                    )}
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <button
                  className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="text-lg animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="text-lg transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
