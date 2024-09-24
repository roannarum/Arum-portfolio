"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg"; // Tambahkan ikon email
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center my-12 py-24 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Let&apos;s Connect I&apos;m always open to exciting opportunities and
          collaborations. If you have any questions, want to discuss a project,
          or just want to chat, feel free to reach out. I&apos;ll do my best to
          respond promptly!
        </p>
        <div className="socials flex flex-row gap-4 justify-center">
          <Link href="https://github.com/roannarum">
            <Image src={GithubIcon} alt="roannarum" />
          </Link>
          <Link href="https://www.linkedin.com/in/dewi-arumsari/">
            <Image src={LinkedinIcon} alt="Dewi_Arumsari" />
          </Link>
          <Link href="mailto:dewiarumsari@gmail.com">
            <Image src={EmailIcon} alt="Email Dewi Arumsari" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
