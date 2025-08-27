
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const Membership = () => {
  const memberDatas = [
    {
      memberType: "Elected Member",
      price: "$60",
      lists: [
        "Practising engineer holding AME license issued by CAAS or equivalent, OR",
        "Holding engineering/science degree and employed in aerospace sector, OR",
        "Degree holder with at least one year experience in airworthiness certification, OR",
        "Served in aerospace company at management level for at least 2 years",
      ],
    },
    {
      memberType: "Fellow",
      price: "$60",
      lists: [
        "Ordinary members with at least 10 years continuous membership in the institute (or its predessor membership)",
        "Attained the age of 35 years old",
        "Contributed significantly towards the objectives of the institute",
        "Maybe upgraded to Honorary Fellow on recommendation of Exco and voted by majority at AGM.  Subscription will be waived for life. ",
      ],
    },
    {
      memberType: "Associate Member",
      price: "$60",
      lists: [
        "Posessess tertiary degree and employed in the aerospace sector, OR",
        "Anyone holding AME licence but does not practice in capacity of engineer, OR",
        "Anyone holding recognized diploma (or equivalent) and employed for at least 5 years in aerospace industry, OR",
        "Anyone holding a responsible position in an aerospace company and supports objectives of the institute",
        "Any person who has passed the prescribed examinations conducted by the institute.",
      ],
    },
    {
      memberType: "Associate Fellow",
      price: "$60",
      lists: [
        "Teaching professionals or established researcher/academicians from institutions and organizations, OR",
        "Senior management staff from aerospace companies who have made substantial contributions to aerospace industry",
      ],
    },
    {
      memberType: "Technician Member",
      price: "$60",
      lists: [
        "Possesses a Certificate in Aircraft Maintenance Engineering or equivalent",
      ],
    },
    {
      memberType: "Student Member",
      price: "$60",
      lists: [
        "Any person undergoing an approved academic course or training scheme that leads to eventual qualification of Ordinary or Technician membership",
        "Entrance fee for Student Membership is waived for now – $30 savings ",
      ],
    },
  ];
  return (
    <div className="bg-[#fafbfd]">
      <div className="mx-6 sm:px-12 md:max-w-6xl md:mx-auto py-4 md:py-8">
        {memberDatas.map((memberData, index) => (
          <div key={index}>
            <div className="my-8 md:my-16 flex flex-col">
              <div className="flex justify-between items-center my-3">
                <div className="flex flex-col md:flex-row md:gap-3 items-start md:items-center">
                  <h2 className="text-xl md:text-3xl text-[#090056] text-center md:text-left font-bold">
                    {memberData.memberType}
                  </h2>
                  <p className="text-[#bababb] sm:text-md md:text-lg font-[400]">
                    Annual Subscription:{" "}
                    <b className="text-[#090056]">{memberData.price}</b>
                  </p>
                </div>
                
                <Button
                  variant="ghost"
                  className="text-md font-[400] hidden md:flex"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-5" />
                </Button>
              </div>
              <ul className="!list-disc md:w-3/4 text-md md:text-lg font-[300] ml-6 leading-8">
                {memberData.lists.map((list) => (
                  <li>{list}</li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="text-md font-[400] bg-[#090056] w-1/2 mx-auto md:hidden flex mt-5">
                <Link href="/membership-form">
                Applied
                <ArrowUpRight className="w-5" />
              </Link>
              </Button>
         
            </div>
            {memberDatas.length > index + 1 && (
              <div className="w-full h-[1px] bg-[#e2e2e3]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
