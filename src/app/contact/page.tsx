"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="max-w-md mx-auto">
        {isSubmitted ? (
          <div className="text-center p-6 border rounded-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Message Sent!
            </h2>
            <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
            <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3" />
              <a
                href="mailto:mohammadjaved476221@gmail.com"
                className="hover:underline"
              >
                mohammadjaved476221@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3" />
              <a
                href="https://github.com/javedkhan07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/javedkhan07
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 mr-3" />
              <a
                href="https://www.linkedin.com/in/javed-khan07/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/javed-khan07
              </a>
            </div>
            <div className="flex items-center">
              <Twitter className="h-5 w-5 mr-3" />
              <a
                href="https://x.com/javed_kh4n"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                x.com/javed_kh4n
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
