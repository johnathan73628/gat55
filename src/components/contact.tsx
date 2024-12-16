import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";

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

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear specific field error on input
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

    if (!(await validateForm())) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    const emailData: Record<string, unknown> = { ...formData };

    emailjs
      .send(
        "service_yfmf9mu", // Replace with your EmailJS Service ID
        "template_ng3uju3", // Replace with your EmailJS Template ID
        emailData,
        "kV83nnR8uBNkpZwc6" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">ganthony7554@gmail.com</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+2348132826572</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" /> Facebook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">@Gilbert John</p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-12">
          <CardContent className="p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Message subject"
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full md:w-auto">
                Send Message
              </Button>
              {status && <p className="mt-4 text-center">{status}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
