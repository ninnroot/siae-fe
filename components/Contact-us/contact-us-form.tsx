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
    <section className="bg-white py-11 sm:py-16 flex justify-center px-4 sm:px-6">
      <fieldset className="bg-[var(--color-bg-fieldset)] max-w-3xl w-full px-6 sm:px-10 md:px-12 py-10 sm:py-12 rounded-lg shadow-md">
        <h3 className="text-2xl sm:text-3xl text-[var(--color-primary)] font-bold mb-6 sm:mb-8">
          Get in Touch
        </h3>
        <p className="text-[var(--color-text-paragraph)] leading-6 mb-8 sm:mb-10 text-base sm:text-lg">
          Do leave us a note below and we will get back to you real soon.
        </p>

        {/* Name */}
        <div className="mb-6">
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
            className="h-12 sm:h-14 bg-white"
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="mb-6">
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
            className="h-12 sm:h-14 bg-white"
            placeholder="Enter Your Email Address"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
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
            className="w-full h-32 sm:h-40 p-3 sm:p-4 border border-gray-300 rounded bg-white"
            placeholder="Type your message here..."
          />
        </div>

        <Button className="bg-[var(--color-primary)] text-white hover:bg-gray-500 w-full py-3 text-base sm:text-lg">
          Submit
        </Button>
      </fieldset>
    </section>
  );
};

export default ContactUsFill;
