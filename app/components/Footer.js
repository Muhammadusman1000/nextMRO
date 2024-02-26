"use client";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandWhatsapp } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#d9128667] py-10">
      <Image
        src="/rishta-logo.png"
        alt=""
        className="mx-auto"
        width={50}
        height={50}
      />

      <div className="flex justify-between w-32 mx-auto mt-5">
        <Link href={"https://www.facebook.com/onlyforeignrishtay/"}>
          <div className="w-9 h-9 flex cursor-pointer justify-center text-gray-600 rounded-sm items-center hover:bg-blue-800 hover:text-white translate-y-[4px] duration-300 hover:-translate-y-[4px]">
            <RiFacebookFill size={25} />
          </div>
        </Link>
        <Link href={"https://www.instagram.com/muslimrishtaonline/"}>
          <div className="w-9 h-8 flex cursor-pointer justify-center text-gray-600 rounded-sm items-center hover:bg-rose-600 hover:text-white translate-y-[4px] duration-300 hover:-translate-y-[4px]">
            <RxInstagramLogo size={25} />
          </div>
        </Link>
        <Link href={"#"}>
          <div className="w-9 h-8 flex cursor-pointer justify-center text-gray-600 rounded-sm items-center hover:bg-green-800 hover:text-white translate-y-[4px] duration-300 hover:-translate-y-[4px]">
            <TbBrandWhatsapp size={25} />
          </div>
        </Link>
      </div>

      <div className="mt-5 ">
        <Link href="/about">
          <p className="w-full text-center text-[#8C0B86] font-semibold text-xl">
            About us
          </p>
        </Link>
      </div>

      <div className="mt-5 ">
        <Link href="/about">
          <p className="w-full text-center text-gray-600 font-semibold">
            © 2022 - Muslim Rishta Online All Right Reserved
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
