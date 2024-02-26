import React from "react";
import Image from "next/image";
import divider from "../../public/divider.png";
import first from "../../public/1.png";
import second from "../../public/2.png";
import third from "../../public/3.png";

const Steps = () => {
  return (
    <div className="w-full container-fluid py-8 bg-white">
      <div className="w-full h-auto py-8 flex justify-center items-center mt-10">
        <div className="w-auto">
          <p className="text-2xl font-poppins font-semibold text-gray-700">
            Step To Find Your Soul Mate
          </p>
          <div className="w-full">
            <Image
              src={divider}
              width={1000}
              height={1000}
              alt=""
              className="mx-auto w-28"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
        <div>
          <Image
            src={first}
            width={1000}
            height={1000}
            alt=""
            className="mx-auto w-28"
          />
          <p className="text-xl font-poppins font-semibold text-center mt-3 text-gray-700">
            Create a Profile
          </p>
          <p className="text-center px-16 font-poppins mt-2">
            Create your profile in seconds with our easy sign-up
          </p>
        </div>
        <div>
          <Image
            src={second}
            width={1000}
            height={1000}
            alt=""
            className="mx-auto w-28"
          />
          <p className="text-xl font-poppins font-semibold text-center mt-3 text-gray-700">
            Browse Matches
          </p>
          <p className="text-center px-16 font-poppins mt-2">
            Find matches based on your choices
          </p>
        </div>
        <div>
          <Image
            src={third}
            width={1000}
            height={1000}
            alt=""
            className="mx-auto w-28"
          />
          <p className="text-xl font-poppins font-semibold text-center mt-3 text-gray-700">
            Start Communicating
          </p>
          <p className="text-center px-16 font-poppins mt-2">
            Send a message or intrest to start communicating with other members
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
