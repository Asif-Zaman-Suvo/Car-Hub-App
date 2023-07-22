import Image from "next/image";
import React from "react";
import { footerLinks } from "../../constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <Image
          alt="Car hub logo"
          src="/logo.svg"
          className="object-contain"
          width={118}
          height={18}
        />
        <p className="text-base text-gray-700">
          Carhub 2023 <br />
          All rights reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((link) => (
          <div className="footer__link" key={link.title}>
            <h3 className="font-bold">{link.title}</h3>
            {link.links.map((item) => (
              <Link className="text-gray-500" href={item.url} key={item.title}>
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
