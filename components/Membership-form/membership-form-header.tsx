import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FormHeader = () => {
  return (
    <section className="py-16 bg-white flex justify-center">
    <Link href="/membership"><ArrowLeft className="w-8 h-8 text-[#090056] cursor-pointer mt-2" /></Link>
      <div className="max-w-4xl w-full px-6">
        {/* Top Bar */}
        <div className="inline-flex items-center space-x-3 mb-8">
          <h2 className="text-5xl text-[#090056] font-bold">Associate Fellow</h2>
        </div>

        {/* Entrance Fee Information */}
        <div className="text-gray-700  leading-relaxed">
          <p>
            An Entrance Fee of <strong className="text-[#090056]">$530.00</strong> and Subscription Fee are required for consideration.
            Applicants should submit the completed form with online payment of entrance fee and subscription fee.
            Please email photocopies of academic qualifications and a passport size photograph to{" "}
            <strong className="text-[#090056]">aero@slee.org.sg</strong>.
          </p>
        </div>

        {/* Fees Section */}
        <ul className="mt-6 list-disc list-inside text-gray-700 leading-relaxed">
          <li>Membership fees for Associate Fellow is <strong className="text-[#090056]">$575.00</strong> per year.</li>
          <li>
            Annual Renewal Period is 1 April of every year. If you sign up anytime 90 days before 1 April,
            we will accord you provisional membership before 1 April. There will not be any pro-rata of
            registration or renewal fees.
          </li>
        </ul>

        {/* Membership Criteria */}
        <h3 className="mt-8 text-xl font-bold text-[#090056]">Membership Criteria</h3>
        <ul className="mt-4 list-disc list-inside text-gray-700 leading-relaxed">
          <li>
            Associate Fellow is open to persons who are:
            <ul className="list-[circle] list-inside ml-5 mt-1">
              <li>
                Teaching professionals and renowned academicians from institutions of higher learning
                including tertiary institutions situated in or outside Singapore; or
              </li>
              <li>
                Senior management staff from aerospace companies who have made substantial contributions
                to the aerospace industry.
              </li>
            </ul>
          </li>
          <li className="mt-2">
            You may use the following form to register:
            <ul className="list-[circle] list-inside ml-5 mt-1">
              <li>
                In the final section, fill up your email address (as user ID) and password for login.
                You need to log in to access your account profile and members-only content.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FormHeader;
