/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface CommitteeMember {
  name: string;
  title: string;
  subtitle?: string;
  image: string;
  description?: string;
}
const executiveMembers: CommitteeMember[] = [
  {
    name: "Kenneth Yeo",
    title: "President, SIAE",
    subtitle: "Senior Licensed Aircraft Engineer, SIA Engineering Company Ltd",
    image: "/about-members/Kenneth Yeo.jpg",
  },
  {
    name: "Nicholas Tan",
    title: "Vice President SIAE",
    subtitle: "Co-Chairman, SATEC",
    image: "/about-members/Nicholas Tan.jpg",
  },
];

const middleMembers: CommitteeMember[] = [
  {
    name: "Lee Kian Hong",
    title: "Honorary Asst Secretary",
    subtitle: "Senior Sales Executive, Evident Scientific",
    image: "/about-members/Lee Kian Hong.jpg",
  },
  {
    name: "Chong Chin Ming",
    title: "Honorary Treasurer",
    subtitle: "Senior Lecturer, Republic Polytechnic",
    image: "/about-members/Chong Chin Ming.jpg",
  },
  {
    name: "David Teo",
    title: "Honorary Asst Treasurer",
    subtitle: "Lecturer, Republic Polytechnic",
    image: "/about-members/David Teo.jpg",
  },
];

const committeeMembers: CommitteeMember[] = [
  {
    name: "Phyo Sithu",
    title: "Committee Member",
    subtitle:
      "Deputy General Manager (Materials & Purchasing), Pratt & Whitney",
    image: "/about-members/Phyo Sithu.jpg",
  },
  {
    name: "G Kalidas",
    title: "Committee Member",
    subtitle: "Managing Director, Delta Aircraft Systems",
    image: "/about-members/G Kalidas.jpg",
  },
  {
    name: "Brian Gan",
    title: "Committee Member",
    subtitle: "Quality Assurance Manager, StandardAero",
    image: "/about-members/Brian Gan.jpg",
  },
  {
    name: "Mohammed Azir",
    title: "Committee Member",
    subtitle: "Equipment Maintenance & Project Engineer, Pratt & Whitney",
    image: "/about-members/Mohammed Azir.jpg",
  },
  {
    name: "Yasantha Pathirana",
    title: "Committee Member",
    subtitle: "Senior Supervisor (Quality Control), Pratt & Whitney",
    image: "/about-members/Yasantha Pathirana.jpg",
  },
  {
    name: "Xu Wan Yang Elektra",
    title: "Committee Member",
    subtitle: "Senior Lecturer, Nanyang Polytechnic",
    image: "/about-members/Xu Wan Yang Elektra.jpg",
  },
];

const technicalCouncil: CommitteeMember[] = [
  {
    name: "Prof Peter Kuok SH",
    title: "Civil Service College, Kuok Group",
    description:
      "More than 40 years of working experience in Senior Managerial Positions in both private and public sectors: Government Agencies and Singapore Government Holding Companies. Prior to working in the public sector, he worked at his family business in Properties Development and Housing Development, Hospitality and Tourism business & Healthcare Services, Supermarket, Retail Facilities and as Director Singapore Bus Services.",
    image: "/about-members/Prof Peter Kuok SH.jpg",
  },
  {
    name: "Prof Low Kin Huat",
    title: "Civil Aviation University of China, GUTMA, F.SIAE",
    description:
      "Accomplished scientist and engineering research lead in NTU with more than 30 years of experience in robotics, mechatronics, drones, vibrations, mechanics and dynamics, machine and mechanism designs. Top 2% scientist in the world by Stanford University, 2022. Nominated as one of the first two Honorary Members of GUTMA (Global UTM Association, Switzerland) 2017. ",
    image: "/about-members/Prof Low Kin Huat.jpg",
  },
  {
    name: "Dr Hamid Saeedipour",
    title: "Principal Lecturer (Industry) Republic Polytechnic",
    description:
      "Over 25 years of experience in aerospace engineering design, smart MRO systems, and composite structure repair. He has held key roles in the UK, Iran, Malaysia, and Singapore, including associate dean, deputy director, and aircraft designer. Hamid has received multiple awards, including the JEC Group’s Most Innovative Project Award (2015) and the IPS Crescendas Medal (2017).",
    image: "/about-members/Dr Hamid Saeedipour.jpg",
  },
  {
    name: "Dr Neo Kok Beng",
    title: "Founder and CEO, Neo Aeronautics",
    description:
      "Award-winning engineer, educator & entrepreneur specialized in technological innovations and commercialisation. Amongst his accolades include the Presidents’ Design Award, Prime Minister Community Service Award, USA Veterans’ Affairs Innovation Initiative Award, Global Entrepreneurship Winner, Harvard Kennedy School Service Award & NUS Innovation & Enterprise Awards. ",
    image: "/about-members/Dr Neo Kok Beng.jpg",
  },
  {
    name: "Mr. Liu Wing Tim",
    title:
      "Mechanical-Automation Engineer (Germany), Aeronautical-Helicopter Engineer (France), MBA (UK)",
    description:
      "Former head of aerodynamics branch at ALD, HQ-RSAF responsible for flight testing and store certification programs. Senior management in manufacturing technology and capital projects in Dairies Division, F&N Limited. Managing Director of ATTC, a SAR Part 147 MTO and National CET Institute for Aerospace WSQ, from 2013 to 2015. Adjunct lecturer at NTU, Adjunct lecturer at SIT-University of Glasgow, 2018 to 2024.",
    image: "/about-members/Mr. Liu Wing Tim.jpg",
  },
];

export default function CommitteePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2">2023 - 2025</p>
          <h1 className="text-4xl font-bold text-navy-900 mb-8">
            SIAE Executive Committee
          </h1>
        </div>

        {/* Top Level - President and Vice President */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
          {executiveMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-full max-w-60 h-60 md:w-50 md:h-50 mx-auto mb-4 border-4 border-white shadow-lg">
                <AvatarImage
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                />
                <AvatarFallback className="text-xl font-semibold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold text-navy-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-1">
                {member.title}
              </p>
              <p className="text-xs text-gray-500 max-w-48 mx-auto">
                {member.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Middle Level - Honorary Positions */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mb-12">
          {middleMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-full max-w-60 h-60 md:w-50 md:h-50 mx-auto mb-4 border-4 border-white shadow-lg">
                <AvatarImage
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-lg font-semibold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-lg font-bold text-navy-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-700 mb-1">
                {member.title}
              </p>
              <p className="text-xs text-gray-500 max-w-40 mx-auto">
                {member.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Level - Committee Members */}
        <div className="grid grid-cols-1 gap-8 mb-20 md:grid-cols-3 lg:grid-cols-6">
          {committeeMembers.map((member, index) => (
            <div key={index} className="text-center px-4 md:px-0">
              <Avatar className="w-full max-w-60 h-60 md:w-28 md:h-28 mx-auto mb-3 border-2 border-white shadow-md">
                <AvatarImage
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-sm font-semibold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h4 className="text-lg md:text-sm font-bold text-navy-900 mb-1">
                {member.name}
              </h4>
              <p className="text-sm md:text-xs font-medium text-gray-700 mb-1">
                {member.title}
              </p>
              <p className="text-xs md:text-xs text-gray-500 leading-tight">
                {member.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Competency Council */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-900">
            Technical Competency Council
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technicalCouncil.map((member, index) => (
            <Card key={index} className="overflow-hidden p-0">
              <CardContent className="p-0">
                <div className="relative">
                  <Avatar className="w-full h-84 rounded-none">
                    <AvatarImage
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full object-cover h-100"
                    />
                    <AvatarFallback className="text-2xl font-bold rounded-none h-64">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bottom-0 left-0 right-0 bg-opacity-75 p-4">
                    <h3 className="text-lg font-bold mb-1">
                      {member.name.toUpperCase()}
                    </h3>
                    {member.title && (
                      <p className=" text-gray-500">{member.title}</p>
                    )}
                  </div>
                </div>
                {member.description && (
                  <div className="p-4">
                    <p className="text-sm leading-relaxed text-gray-700">
                      {member.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
