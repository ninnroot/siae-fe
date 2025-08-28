"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { nationalities } from "@/config/nationalities";
import { DatePicker } from "../ui/date-picker";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const MemberShipFill = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    memberShipNum: "",
    salutation: "",
    nationality: "",
    dob: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-white py-5 flex justify-center mb-5">
      <fieldset className="bg-[var(--color-bg-fieldset)] max-w-4xl w-full px-8 py-10 rounded-lg shadow-md">
        <h3 className="text-2xl text-[var(--color-primary)] font-bold mb-8 mt-3">
          Get in Touch
        </h3>
        <p className="text-[var(--color-text-paragraph)] leading-6 mb-10">
          Do leave us a note below and we will get back to you real soon
        </p>

        {/* First Name + Last Name */}
        <div className="flex gap-6 mb-5">
          <div className="w-1/2">
            <label
              htmlFor="firstname"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              First name
            </label>
            <Input
              id="firstName"
              value={formData.firstName}
              placeholder="Enter your first name"
              className="h-12 bg-white"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="lastname"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              Last name
            </label>
            <Input
              id="lastname"
              value={formData.lastName}
              placeholder="Enter your last name"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="h-12 bg-white"
            />
          </div>
        </div>

        {/* Email + Membership Number + Salutation + Nationality */}
        <div className="flex-col flex gap-4">
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 bg-white"
              placeholder="Enter your Email Address"
            />
          </div>

          <div className="w-full mb-5">
            <label
              htmlFor="memberShipNum"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"

            >
              Membership Number (Legacy)
            </label>
            <Input
              id="memberShipNum"
              type="number"
              value={formData.memberShipNum}
              placeholder="Enter your MemberShip Number"
              onChange={(e) =>
                handleInputChange("memberShipNum", e.target.value)
              }
              className="h-12 bg-white"
            />
          </div>

            <div className="w-full mb-5">
              <label
                htmlFor="salutation"
                className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
              >
                Salutation
              </label>

              <Select
                value={formData.salutation}
                onValueChange={(value) => handleInputChange("salutation", value)}
              >
                <SelectTrigger className="w-full bg-white h-12 ">
                  <SelectValue placeholder="Select salutation" />
                </SelectTrigger>
                <SelectContent className = "text-[var(--color-text-label)]">
                  <SelectItem value="Mr">Mr</SelectItem>
                  <SelectItem value="Mrs">Mrs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          <div className="w-full mb-5">
              <label
                htmlFor="nationality"
                className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
              >
                Nationality
              </label>

              <Select
                value={formData.nationality}
                onValueChange={(value) => handleInputChange("nationality", value)}
              >
                <SelectTrigger className="w-full border bg-white ">
                  <SelectValue placeholder="Select nationality" />
                </SelectTrigger>
                <SelectContent  className = "text-[var(--color-text-label)]">
                  {nationalities.map((n) => (
                    <SelectItem key={n.code} value={n.code}>
                      {n.nationality}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          {/* Date of Birth */}
          <div className="w-full mb-5">
            <DatePicker
              value={formData.dob}
              onChange={(val) => handleInputChange("dob", val)}
            />
          </div>
        </div>

        {/* Info Text */}
        <div className="text-[var(--color-text-label)] leading-relaxed mb-5">
          <p>
            You're about to make a secure payment. All transactions are encrypted
            and your information is protected. You can make payment with payment
            providers below:
          </p>
        </div>

        {/* Payment Icons */}
        <div className="flex gap-10 mb-5 items-center justify-center">
          <Image src="/payment-icons/visa.png" alt="Visa" width={100} height={100} className="h-10 w-auto" />
          <Image src="/payment-icons/circles.png" alt="Circles" width={100} height={100} className="h-10 w-auto" />
          <Image src="/payment-icons/discover.png" alt="Discover" width={150} height={100} className="h-8" />
          <Image src="/payment-icons/amex.png" alt="Amex" width={100} height={100} className="h-10 w-auto" />
        </div>

        {/* Proceed Button */}
        <div className="mb-12">
          <Button className="w-full bg-[var(--color-primary)] text-white py-3 text-lg">
            Proceed to Payment
          </Button>
        </div>
      
      </fieldset>
      
    </section>
  );
};

export default MemberShipFill;
