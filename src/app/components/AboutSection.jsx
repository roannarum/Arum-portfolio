"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>Flask</li>
        <li>PowerBi</li>
        <li>Laravel</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Flutter</li>
        <li>HTML, CSS, and JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mb-4">
          <p className="font-semibold text-base">
            Universitas Jenderal Achmad Yani Yogyakarta{" "}
            <span className="text-gray-400 font-light">(2020-2024)</span>
          </p>
          <p className="text-sm font-medium">Information Systems</p>
          <p className="text-sm font-light">GPA: 3.91</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Junior Web Developer</li>
        <li>MikroTik Certified Network Associate (MTCNA)</li>
        <li>Scrum Foundation Professional Certificate</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm an Information Systems graduate with a passion for building
            interactive and user-centric web applications. My expertise spans
            Software Development, UI/UX design, web applications, databases, and
            machine learning. I am proficient in various technologies and always
            looking to expand my skill set. I'm a quick learner, adaptable, and
            a strong team player with effective problem-solving and
            communication skills. I thrive in collaborative environments and am
            driven to deliver innovative and impactful solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
