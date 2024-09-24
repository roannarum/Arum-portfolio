"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Personal Website",
    description:
      "This personal website project serves as a digital portfolio to showcase my skills, experience, and projects. It is designed with a clean and modern interface to provide a seamless user experience, highlighting my journey as a developer and my passion for technology. Visitors can easily explore my work, connect with me, and stay updated on my latest projects.",
    image: "/images/projects/personalweb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/roannarum/Arum-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "DiskusAi",
    description:
      "DiskusAI is a platform that combines Discussion Forums, Search Bar Optimization, and Chatbot AI functionalities. DiskusAI aims to provide a better user experience by delivering relevant and helpful answers in discussions, assisting users in finding information effectively, and suggesting appropriate discussion topics.",
    image: "/images/projects/DiskusAi.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/C23-DF02-DiskusAI-Dicoding-Indonesia",
    previewUrl:
      "https://drive.google.com/file/d/1fiji8Iy4bLrLpItzRJsIgxkVI5gDs4Pu/view?usp=sharing",
  },
  {
    id: 3,
    title: "Registration Website",
    description:
      "The project is designed to streamline the class registration process for prospective participants or company clients.",
    image: "/images/projects/daftar.sadasa.png",
    tag: ["All", "Web"],
    gitUrl: "https://daftar.sadasa.id/",
    previewUrl: "https://daftar.sadasa.id/",
  },
  {
    id: 4,
    title: "Arumstay",
    description:
      "Arumstay is a hotel reservation website designed to provide users with a seamless booking experience. The platform allows visitors to browse available rooms, check rates, and make reservations effortlessly.",
    image: "/images/projects/Arumstay.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/roannarum/Hotel-Reservation.git",
    previewUrl: "https://github.com/roannarum/Hotel-Reservation.git",
  },
  {
    id: 5,
    title: "MoodTeen",
    description:
      "An anxiety measurement application designed for children and adolescents aged 8 to 21 years. The anxiety measurements in the Moodteen application are based on the SCARED Scale, which has been adapted and undergone psychometric property analysis to fit the Indonesian version, adjusted to the Indonesian culture and language.",
    image: "/images/projects/moodteen.png",
    tag: ["All", "Mobile"],
    gitUrl:
      "https://drive.google.com/file/d/1JBFusrfmIwTsPzEV3fRkaRVzTumRNoRy/view?usp=sharing",
    previewUrl:
      "https://www.figma.com/proto/3rTznDCmoXNSdEx3SATiS2/RPL-KELOMPOK-4?node-id=143-1958&scaling=scale-down-width&page-id=67%3A428&starting-point-node-id=143%3A1958&t=1rXeSxkth2rXJZ6Z-1",
  },
  {
    id: 6,
    title: "Academic Counselling",
    description:
      "The Academic Counselling System is an online platform designed to facilitate student guidance. It provides a specification of all requirements needed for the system, allowing lecturers to respond to student concerns more efficiently. This system helps lecturers better understand each student's situation by offering easy online access",
    image: "/images/projects/AC.png",
    tag: ["All", "Documentation"],
    gitUrl:
      "https://drive.google.com/file/d/1JBFusrfmIwTsPzEV3fRkaRVzTumRNoRy/view?usp=sharing",
    previewUrl:
      "https://www.figma.com/proto/3rTznDCmoXNSdEx3SATiS2/RPL-KELOMPOK-4?node-id=143-1958&scaling=scale-down-width&page-id=67%3A428&starting-point-node-id=143%3A1958&t=1rXeSxkth2rXJZ6Z-1",
  },
  {
    id: 7,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Documentation"
          isSelected={tag === "Documentation"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
