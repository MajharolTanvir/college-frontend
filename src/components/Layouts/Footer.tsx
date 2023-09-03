import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="bg-[#262582] text-white ">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 justify-center items-center py-10 px-5 border-b gap-5">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/rangamati_public_collage.jpg"
              alt="Logo"
              height={140}
              width={140}
            />
            <div className="flex gap-2 mt-3">
              <FaSquareFacebook className="text-3xl" />
              <FaSquareTwitter className="text-3xl" />
              <FaLinkedin className="text-3xl" />
              <FaYoutubeSquare className="text-3xl" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-medium border-b w-36 mb-3">
              Main menu
            </h3>
            <p className="p-1">Home</p>
            <p className="p-1">About</p>
            <p className="p-1">Departments</p>
            <p className="p-1">Gallery</p>
            <p className="p-1">News & events</p>
          </div>

          <div>
            <h3 className="text-2xl font-medium border-b w-48 mb-3">
              Important links
            </h3>
            <Link href="http://www.educationboardresults.gov.bd/">
              <p className="p-1">Education board result</p>
            </Link>
            <Link href="https://moedu.gov.bd/">
              <p className="p-1">Ministry of Education</p>
            </Link>
            <Link href="https://dshe.gov.bd/">
              <p className="p-1">DG website</p>
            </Link>
            <Link href="https://banbeis.gov.bd/">
              <p className="p-1">Banbeis</p>
            </Link>
            <Link href="http://www.naem.gov.bd/">
              <p className="p-1">National education management academy</p>
            </Link>
          </div>
          <div>
            <h3 className="text-2xl font-medium border-b w-48 mb-3">
              Important links
            </h3>

            <Link href="https://www.nu.ac.bd/">
              <p className="p-1">National university</p>
            </Link>
            <Link href="https://teachers.gov.bd/">
              <p className="p-1">Teacher Batayan</p>
            </Link>
            <Link href="https://ugc.gov.bd/en">
              <p className="p-1">Bangladesh University Grants Commission</p>
            </Link>

            <Link href="https://www.facebook.com/webshilpo/">
              <p className="font-medium p-1">Developed by WebShilpo</p>
            </Link>
          </div>
        </div>
        <div className="py-4">
          <p className="text-center">
            All rights reserved - © Copyright {year} | Rangamati Public College
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
