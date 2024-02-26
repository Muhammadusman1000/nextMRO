import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/rishta-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full absolute py-16 flex justify-center h-[80px] items-center ">
      <div className="w-[95%] absolute z-[2] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo image"
            className="w-24"
            width={1000}
            height={1000}
            quality={100}
          />
        </Link>

        <div className="flex space-x-2">
          <Link href="/login">
            <button className="bg-[#8c0b86] text-white font-poppins font-semibold px-4 py-2 rounded hover:bg-[#8c0b86] hover:text-white">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-[#D91285] text-white font-poppins font-semibold px-4 py-2 rounded hover:bg-[#D91285] hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
