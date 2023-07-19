import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="./" className="flex justify-center items-start">
          <Image
            alt="Car hub logo"
            src="/logo.svg"
            className="object-contain"
            width={118}
            height={18}
          ></Image>
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px"
        ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;
