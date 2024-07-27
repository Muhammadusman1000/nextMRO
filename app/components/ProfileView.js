"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const ProfileView = () => {
  const select = useSelector((state) => state.data);
  console.log(select);

  return (
    <div>
      {select.map((data, key) => {
        return (
          <div key={key} className="pt-44">
            <div className="border-2 border-black">
              <Image
                src={data.image}
                alt=""
                className="w-24 h-56 object-cover"
                layout="responsive"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileView;
