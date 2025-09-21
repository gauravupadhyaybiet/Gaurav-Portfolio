import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          alert("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 min-h-screen bg-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to chat? Feel free to reach out – I'm always open to new opportunities and collaborations.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-100 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-primary mr-3" />
                    <a
                      href="mailto:your.email@example.com"
                      className="hover:text-primary"
                    >
                      upadhyaygaurav572@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <a href="tel:+911234567890" className="hover:text-primary">
                      +91 6387250817
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-6 w-6 text-primary mr-3" />
                    <div className="flex gap-4">
                      <a href="https://github.com/gauravupadhyaybiet" target="_blank">
                        <Github className="h-6 w-6 hover:text-primary" />
                      </a>
                      <a href="https://www.linkedin.com/in/gaurav-upadhyay-558059266/" target="_blank">
                        <Linkedin className="h-6 w-6 hover:text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-100 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                  />
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="bg-white border-gray-300 text-gray-900"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

