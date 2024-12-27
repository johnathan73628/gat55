import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = async (): Promise<boolean> => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    } else {
      const isValidEmail = await validateEmailWithZeroBounce(formData.email);
      if (!isValidEmail) {
        newErrors.email = "Email is not valid.";
      }
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateEmailWithZeroBounce = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch(
        `https://api.zerobounce.net/v2/validate?api_key=b275f891befc473f9e9eb4b4bd4dacbf&email=${email}`
      );
      const data = await response.json();
      return data.status === "valid";
    } catch (error) {
      console.error("Error validating email with ZeroBounce:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!(await validateForm())) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const emailData: Record<string, unknown> = { ...formData };

    try {
      await emailjs.send(
        "service_yfmf9mu",
        "template_ng3uju3",
        emailData,
        "kV83nnR8uBNkpZwc6"
      );
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <motion.div 
        className="container mx-auto max-w-5xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Have a question or want to work together? Drop me a message below and I'll get back to you as soon as possible.
        </motion.p>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerChildren}
        >
          {[
            { icon: Mail, title: "Email", content: "ganthony7554@gmail.com" },
            { icon: Phone, title: "Phone", content: "+2348132826572" },
            { icon: MessageSquare, title: "Facebook", content: "@Gilbert John" }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="group transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="mt-12 border-2 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                    {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="transition-all duration-300 focus:scale-[1.02]"
                    />
                    {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Message subject"
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                  {errors.subject && <p className="text-destructive text-sm">{errors.subject}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    className="min-h-[150px] transition-all duration-300 focus:scale-[1.02]"
                  />
                  {errors.message && <p className="text-destructive text-sm">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}