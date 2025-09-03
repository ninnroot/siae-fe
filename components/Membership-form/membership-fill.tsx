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
} from "@/components/ui/select";

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
    <section className="bg-white py-8 sm:py-10 flex justify-center px-4 sm:px-6">
      <fieldset className="bg-[var(--color-bg-fieldset)] max-w-4xl w-full px-6 sm:px-8 md:px-10 py-8 sm:py-10 rounded-lg shadow-md">
        <h3 className="text-2xl sm:text-3xl text-[var(--color-primary)] font-bold mb-6 sm:mb-8">
          Get in Touch
        </h3>
        <p className="text-[var(--color-text-paragraph)] leading-6 mb-8 sm:mb-10 text-base sm:text-lg">
          Do leave us a note below and we will get back to you real soon
        </p>

        {/* First Name + Last Name */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-5">
          <div className="w-full sm:w-1/2">
            <label
              htmlFor="firstName"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              First name
            </label>
            <Input
              id="firstName"
              value={formData.firstName}
              placeholder="Enter your first name"
              className="h-12 sm:h-14 bg-white"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm text-[var(--color-text-label)] font-medium mb-1"
            >
              Last name
            </label>
            <Input
              id="lastName"
              value={formData.lastName}
              placeholder="Enter your last name"
              className="h-12 sm:h-14 bg-white"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
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
            placeholder="Enter your Email Address"
            className="h-12 sm:h-14 bg-white"
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        {/* Membership Number */}
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
            className="h-12 sm:h-14 bg-white"
            onChange={(e) => handleInputChange("memberShipNum", e.target.value)}
          />
        </div>

        {/* Salutation */}
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
            <SelectTrigger className="w-full h-12 sm:h-14 bg-white">
              <SelectValue placeholder="Select salutation" />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-text-label)]">
              <SelectItem value="Mr">Mr</SelectItem>
              <SelectItem value="Mrs">Mrs</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Nationality */}
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
            <SelectTrigger className="w-full h-12 sm:h-14 bg-white">
              <SelectValue placeholder="Select nationality" />
            </SelectTrigger>
            <SelectContent className="text-[var(--color-text-label)]">
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

        {/* Info Text */}
        <div className="text-[var(--color-text-label)] leading-relaxed mb-5 text-sm sm:text-base">
          <p>
            You're about to make a secure payment. All transactions are encrypted
            and your information is protected. You can make payment with payment
            providers below:
          </p>
        </div>

            {/* Payment Icons */}
          <div className="flex gap-6 sm:gap-10 mb-6 items-center justify-center overflow-x-auto scrollbar-hide">
            <Image
              src="/payment-icons/visa.png"
              alt="Visa"
              width={100}
              height={100}
              className="h-6 w-auto sm:h-8 md:h-10"
            />
            <Image
              src="/payment-icons/circles.png"
              alt="Circles"
              width={100}
              height={100}
              className="h-6 w-auto sm:h-8 md:h-10"
            />
            <Image
              src="/payment-icons/discover.png"
              alt="Discover"
              width={100}
              height={100}
              className="h-5 w-auto sm:h-7 md:h-8 "
            />
            <Image
              src="/payment-icons/amex.png"
              alt="Amex"
              width={100}
              height={100}
              className="h-6 w-auto sm:h-8 md:h-10"
            />
          </div>


        {/* Proceed Button */}
        <div className="mb-8 sm:mb-12">
          <Button className="w-full bg-[var(--color-primary)] text-white py-3 text-base sm:text-lg">
            Proceed to Payment
          </Button>
        </div>
      </fieldset>
    </section>
  );
};

export default MemberShipFill;
