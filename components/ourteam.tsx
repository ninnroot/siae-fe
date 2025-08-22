import React from "react";

type TeamMemberProps = {
  img: string;
  name: string;
  role?: string;
  position?: string;
  company?: string;
};

type CouncilMemberProps ={
    img : string;
    name : string ;
    position : string;
    textContent: string;
}

function TeamMember({ img, name, role, position, company }: TeamMemberProps) {
    {/*for SIAE executive committe*/}
  return (
    <div className="flex flex-col items-center text-center mb-6">
      <img
        src={img}
        alt={role || name}
        className="w-24 h-24 object-cover rounded-full shadow-lg"
      />
      <p className="text-sm font-semibold mt-3">{name}</p>
      {role && <p className="text-xs font-extralight">{role}</p>}
      {position && <p className="text-xs font-extralight">{position}</p>}
      {company && <p className="text-xs font-extralight">{company}</p>}
    </div>
  );
}


function Council({ img, name, position, textContent }: CouncilMemberProps) {
  return (
    <div className="w-full md:w-80 flex flex-col md:flex-none justify-center">
      {/* Mobile view*/}
      <div className="md:hidden mb-4 flex flex-col items-center">
        <img
          src={img}
          alt={name}
          className="w-48 h-48 object-cover rounded-lg shadow-lg "
        />
        <div className="mt-2 p-2 justify-center">
          <p className="text-sm font-semibold text-[#090056] mb-2">{name}</p>
          <p className="text-xs font-light mb-1">{position}</p>
          <p className="text-xs">{textContent}</p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block relative w-full h-100 overflow-hidden cursor-pointer group">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105 rounded-lg shadow-lg"
        />

        <div className="absolute bottom-0 left-0 bg-black bg-opacity-30 p-2">
          <p className="text-sm font-semibold text-white drop-shadow-md">{name}</p>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-60 transition-opacity duration-300 p-4 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm font-light mb-2">{position}</p>
          <p className="text-xs">{textContent}</p>
        </div>
      </div>
    </div>
  );
}


function OurTeam() {
  const teamSections: TeamMemberProps[][] = [
    [
      {
        name: "Kenneth Yeo",
        role: "President, SIAE",
        position: "Senior Licensed Aircraft Engineer",
        company: "SIA Engineering Company Ltd",
        img: "/TeamMember/Member/Kenneth_Yeo.jpg",
      },
      {
        name: "Nicholas Tan",
        role: "Vice President, SIAE",
        position: "Co-Chairman, Satec",
        img: "/TeamMember/Member/Nicholas_Tan.jpg",
      },
    ],
    [
      {
        name: "Lee Kian Hong",
        role: "Honorary Asst Secretary",
        position: "Senior Sales Executive",
        company: "Evident Scientific",
        img: "/TeamMember/Member/Lee_Kian.jpg",
      },
      {
        name: "Chong Chin Ming",
        role: "Honorary Treasurer",
        position: "Senior Lecturer",
        company: "Republic Polytechnic",
        img: "/TeamMember/Member/Chong_Chin_Ming.jpg",
      },
      {
        name: "David Teo",
        role: "Honorary Asst Treasurer",
        position: "Senior Lecturer",
        company: "Republic Polytechnic",
        img: "/TeamMember/Member/David_Teo.jpg",
      },
    ],
    [
      {
        name: "Phyo Sithu",
        role: "Committee Member",
        position: "Deputy GM (Materials & Purchasing)",
        company: "Pratt & Whitney",
        img: "/TeamMember/Member/Phyo_Sithu.jpg",
      },
      {
        name: "G. Kalidas",
        role: "Committee Member",
        position: "Managing Director",
        company: "Delta Aircraft Systems",
        img: "/TeamMember/Member/G.jpg",
      },
      {
        name: "Brian Gan",
        role: "Committee Member",
        position: "Quality Assurance Manager",
        company: "Standard Aero",
        img: "/TeamMember/Member/B_G.jpg",
      },
      {
        name: "Mohammed Azir",
        role: "Committee Member",
        position: "Equipment Maintenance & Project Engineer",
        company: "Pratt & Whitney",
        img: "/TeamMember/Member/M_A.jpg",
      },
      {
        name: "Yasatha Pathirana",
        role: "Committee Member",
        position: "Senior Sales Executive",
        company: "Evident Scientific",
        img: "/TeamMember/Member/Y_P.jpg",
      },
      {
        name: "Xu Wan Yang Elecktra",
        role: "Committee Member",
        position: "Senior Lecturer",
        company: "Nanyang Polytechnic",
        img: "/TeamMember/Member/X_W_Y_E.jpg",
      },
    ],
  ];
  const councilSections : CouncilMemberProps [][] =[
     [
       {
        img : "/TeamMember/Council/Peter_Kuok.jpg",
        name : "Prof Peter Kuok SH",
        position : "Civil Service College,Kuok Group",
        textContent : "More than 40 years of working experience in Senior Managerial Positions in both private and public sectors; Government Agencies and Singapore Government Holding Companies. Prior to working in the public sector, he worked at his family business in Properties Development and Housing Development; Hospitality and Tourism business Healthcare Services, Supermarket, Retail Facilities and as Director Singapore Bus Services"
    },
    {
        img : "/TeamMember/Council/Low_Kin_Huat.jpg",
        name : "PROF LOW KIN HUAT",
        position : "Civil Aviation University of China,GUTMA, F.SIAE",
        textContent : "Accomplished scientist and engineering research lead in NTU with more than 30 years of experience in robotics, mechatronics, drones, vibrations, mechanics and dynamics, machine and mechanism designs. Top 2% scientist in the world by Stanford University, 2022. Nominated as one of the first two Honorary Members of GUTMA (Global UTM Association, Switzerland) 2017. "
    },
    {
        img : "/TeamMember/Council/Hamid_Saeedipour.jpg",
        name : "DR HAMID SAEEDIPOUR",
        position : "Principal Lecturer (Industry) Republic Polytechnic",
        textContent : "Over 25 years of experience in aerospace engineering design, smart MRO systems, and composite structure repair. He has held key roles in the UK, Iran, Malaysia, and Singapore, including associate dean, deputy director, and aircraft designer. Hamid has received multiple awards, including the JEC Group’s Most Innovative Project Award (2015) and the IPS Crescendas Medal (2017)."
    },

  ],
  [
 {
        img : "/TeamMember/Council/Neo_Kok_Beng.jpg",
        name : "DR NEO KOK BENG",
        position : "Founder and CEO,Neo Aeronautics ",
        textContent : "Award-winning engineer, educator & entrepreneur specialized in technological innovations and commercialisation. Amongst his accolades include the Presidents’ Design Award, Prime Minister Community Service Award, USA Veterans’ Affairs Innovation Initiative Award, Global Entrepreneurship Winner, Harvard Kennedy School Service Award & NUS Innovation & Enterprise Awards. "
    },
    {
        img : "/TeamMember/Council/Liu_Wing_Tim.jpg",
        name : "MR. LIU WING TIM",
        position : "Mechanical-Automation Engineer (Germany), Aeronautical-Helicopter Engineer (France), MBA (UK)",
        textContent : "Former head of aerodynamics branch at ALD, HQ-RSAF responsible for flight testing and store certification programs. Senior management in manufacturing technology and capital projects in Dairies Division, F&N Limited. Managing Director of ATTC, a SAR Part 147 MTO and National CET Institute for Aerospace WSQ, from 2013 to 2015. Adjunct lecturer at NTU, Adjunct lecturer at SIT-University of Glasgow, 2018 to 2024."
    },
  ]
]

  return (
    <div>
      {/*Top Bar*/}
      <div className="text-center mt-1.5">
        <p className="text-xs font-extralight mb-2">2023-2025</p>
        <h2 className="text-2xl text-[#090056] font-bold mb-6">SIAE Executive Committee</h2>
      </div>
      {/*SIAE Executive Committe*/}
      <div className="flex flex-col space-y-10">
        {teamSections.map((section, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:justify-center md:gap-11"
          >
            {section.map((member, j) => (
              <TeamMember key={j} {...member} />
            ))}
          </div>
        ))}
      </div>

      {/*Council Text */}
         <div className="text-center mt-4">

        <h2 className="text-4xl text-[#090056] font-bold mb-6">Techincal Competency Council</h2>
      </div>
         {/*Council*/}
            <div className="flex flex-col space-y-6" >
            {councilSections.map((section, i) => (
                <div key={i} className="flex flex-col md:flex-row md:gap-6 justify-center items-center">
                {section.map((member, j) => (
                    <Council key={j} {...member} />
                ))}
                </div>
            ))}
            </div>

      
    </div>
  );
}

export default OurTeam;
