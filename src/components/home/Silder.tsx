"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

// Partner logos with SVG icons
const partners = [
  {
    name: "Infinity Parker",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/mongodb.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Pastel & Co.",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/Jwt.png"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "EdgeKart",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/amazon-aws.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/node-js.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/node-js (1).svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/firebase.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/react.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/python.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/flutter.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/sql.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
  {
    name: "Omega Million",
    logo: (
      <div className="flex items-center space-x-3">
        <Image
          src={"/home/css.svg"}
          height={100}
          width={200}
          alt="mongodb"
          className="h-[100px]"
        ></Image>
      </div>
    ),
  },
];

export default function Silder() {
  return (
    <div className="bg-black py-5 w-full overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-center text-white text-xl mb-10">
          Trusted by Partner:
        </h2> */}

        <Marquee
          speed={100}
          pauseOnHover={true}
          gradient={false}
          className="py-4"
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-400 hover:text-white transition-colors duration-300 mx-8"
            >
              {partner.logo}
            </div>
          ))}
          {/* Duplicate partners for continuous loop effect */}
          {partners.map((partner, index) => (
            <div
              key={`duplicate-${index}`}
              className="text-gray-400 hover:text-white transition-colors duration-300  mx-8"
            >
              {partner.logo}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
