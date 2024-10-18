import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/team/github-icon";
import LinkedInIcon from "@/components/team/linkedin-icon";
import XIcon from "@/components/team/x-icon";

// Sample team data
const teamMembers = [
  {
    name: "Văn Tín",
    role: "Người đồng hành",
    image: "/images/tinhuynh.jpg",
    social: {
      linkedin: "/favorites",
      github: "https://github.com",
      x: "https://x.com",
    },
  },
  {
    name: "Phương Anh",
    role: "Người đồng hành",
    image: "/images/leo.jpg",
    social: {
      linkedin: "/favorites",
      x: "https://x.com",
    },
  },
  {
    name: "Sa Lem",
    role: "Người đồng hành",
    image: "/images/salem1.jpg",
    social: {
      linkedin: "/favorites",
      github: "https://github.com",
    },
  },
  {
    name: "Nhật Anh",
    role: "Người đồng hành",
    image: "/images/NA.jpg",
    social: {
      linkedin: "/favorites  ",
      github: "https://github.com",
      x: "https://x.com",
    },
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="container mx-auto py-8 px-8">
      <div className="text-center mb-12">
        <h2 className="text-lg  tracking-wider">Đội Ngũ</h2>
        <h2 className="text-4xl md:text-5xl font-bold"></h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
          >
            {/* Square Image */}
            <div className="relative w-full h-0 pb-[100%]">
              <Image
                src={member.image}
                alt={`${member.name}'s avatar`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold">
                {member.name.split(" ")[0]}
                <span className=" ml-2">{member.name.split(" ")[1]}</span>
              </h3>
              <p className="text-gray-500 mt-2">{member.role}</p>
            </div>

            <div className="flex space-x-6 py-4">
              {member.social.linkedin && (
                <Link
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="text-blue-600 w-6 h-6 hover:opacity-80" />
                </Link>
              )}
              {member.social.github && (
                <Link
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-6 h-6 hover:opacity-80" />
                </Link>
              )}
              {member.social.x && (
                <Link
                  href={member.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon className="w-6 h-6 hover:opacity-80" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
