import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Coporate = () => {
  return (
    <div className="mx-6 sm:px-12 md:max-w-6xl md:mx-auto py-12 md:py-20">
      <div className="text-center flex flex-col space-y-4">
        <h2 className="text-xl md:text-3xl text-[#090056] font-bold">
          Corporate Members
        </h2>
        <p className="text-[#bababb] text-md md:text-lg font-[400]">
          Annual Subscription: <b className="text-black">$500</b>
        </p>
        <p className="text-md md:text-lg font-[300]">
          Contribute to Aerospace Development and elevate your organization’s
          capabilities
        </p>
        <div className="flex mx-auto flex-wrap items-center gap-2 md:flex-row">
          <Link href= "/membership-form"><Button className="bg-[#090056] px-10 py-5">Apply</Button></Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-16 leading-8 pt-10">
        <ul className="md:w-1/2 !list-disc px-6 md:px-0">
          <li>
            Corporate Members will also gain access to the Institute’s premium
            aviation content and training resource library, as well as discounts
            to SIAE training courses and seminars
          </li>
          <li>
            Membership period shall be from 1 Apr to 31 Mar of subsequent year
            and there shall be no pro-rating of membership.  Any signup or
            payment from 1 Jan to 1 Apr shall be recognized and granted
            provisional membership until subscription officially commences on 1
            Apr.
          </li>
        </ul>
        <ul className="md:w-1/2 !list-disc px-6 md:px-0">
          <li>
            Corporate membership shall be opened to aerospace organisations or
            related business registered in or outside Singapore who support the
            objectives of the Institute.
          </li>
          <li>
            May appoint 2 company representatives who will be recognized as
            Ordinary Members and enjoy voting rights. 
          </li>
          <li>
            Corporate Members can enjoy priority invitation to the Institute’s
            events and post-event video recordings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Coporate;
