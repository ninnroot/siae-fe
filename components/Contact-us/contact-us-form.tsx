"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
const ContactUsFill = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-white py-16 flex justify-center">
      <fieldset className="bg-[var(--color-bg-fieldset)] max-w-6xl w-full px-12 py-12 rounded-lg shadow-md">
        <h3 className="text-3xl text-[var(--color-primary)] font-bold mb-8 ">
          Get in Touch
        </h3>
        <p className="text-[var(--color-text-paragraph)] leading-6 mb-10 text-lg">
          Do leave us a note below and we will get back to you real soon.
        </p>

        {/* Name */}
        <div className="flex gap-6 mb-6">
          <div className="w-full">
            <Label
              htmlFor="name"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              placeholder="Enter Your Name"
              className="h-14 bg-white"
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex-col flex gap-2 mb-6">
          <div className="w-full">
            <Label
              htmlFor="email"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-14 bg-white"
              placeholder="Enter Your Email Address"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex-col flex gap-2 mb-6">
          <div className="w-full">
            <Label
              htmlFor="message"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              Message
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="w-full h-40 p-4 border border-gray-300 rounded bg-white"
              placeholder="Type your message here..."
            />
          </div>
        </div>

        <Button className="bg-[var(--color-primary)] text-white hover:bg-gray-500 w-full py-3 text-lg">
          Submit
        </Button>
      </fieldset>
    </section>
  );
};

export default ContactUsFill;
