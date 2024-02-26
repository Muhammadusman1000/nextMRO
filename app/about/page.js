import React from "react";

const Aboutus = () => {
  return (
    <div className="w-full py-[150px] q">
      <p className="w-[70%] mx-auto shadow-xl shadow-gray-300 text-center text-3xl py-16 text-[#8c0b86] font-bold">
        About us
      </p>

      <div className="w-[70%] mx-auto mt-16 grid grid-cols-2">
        <div>
          <p className="text-2xl text-[#D91285] font-semibold">Description</p>
          <p className="mt-5">
            Muslim Rishta Online in is one of the largest online Pakistan
            Matrimonial Site. Simple to use and exclusively online Premium
            matrimony services make us a differentiator amongst the matrimonial
            sites. We believe in providing a secure, easy to use and convenient
            matrimonial matchmaking experience to our members. Muslim Rishta
            Online Pakistan is most oldest and most successful matchmaking
            service, has been trusted since 2011 by people all over the Pakistan
            to help them find their soulmates. Today, hundreds of thousands of
            people have met their life partners through our revolutionary
            matchmaking service and countless others have made some very special
            friends. Register with us for free to find your life partner. Our
            premium membership package ensures you are able to communicate with
            suitable members and Initiate marriage proposals.
          </p>
        </div>
        <div></div>
      </div>

      <div className="w-[70%] flex justify-between gap-10 mx-auto mt-16">
        <div className="w-[70%]">
          <p className='text-2xl  text-[#D91285] font-semibold"'>Scope</p>
          <p className="mt-5">
            We offer an extensive scope of decisions dependent on your own
            special vision of a life partner – making it simple for you to meet
            individuals worth investing your time with. We believe that staying
            transparent and providing right & appropriate details can help our
            members in making an educated judgment and engage you energies in
            the right direction for a win win. We aspire to become the most
            sought after matrimonial services provider in the near future
          </p>
        </div>
        <div className="w-[30%]">
          <p className='text-2xl text-[#D91285] font-semibold"'>Goals</p>
          <p className="mt-5">
            Our goal is to bring happiness in the life of people through
            marriage by providing user friendly and family environmental
            platform where privacy and security is ensured.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
