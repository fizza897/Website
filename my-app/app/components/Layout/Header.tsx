"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Logo from "@/app/components/Images/Logo-horizontal-fullcolor.png";
import Link from "next/link";
import Wrapper from "@/app/components/Shared/Wrapper";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white">
    <Wrapper>
      <div className="items-center md:flex md:justify-between md:px-10">
        <div className="mb-4 md:mb-0">
          <Image src={Logo} width={150} height={150} alt="panaverse dao" />
        </div>
        <div className="pr-5 md:hidden z-10" onClick={() => setToggle(!toggle)}>
          {toggle ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex md:space-x-4 font-semibold text-black ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {toggle && (
          <div className="md:hidden fixed top-0 left-0 h-screen w-full bg-black text-white flex flex-col items-center justify-center mb-4">
            <div onClick={() => setToggle(false)} className="cursor-pointer text-4xl absolute top-4 right-4">
              &times;
            </div>
            <ul className="text-  xl mt-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/resources">Resources</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </Wrapper>
    </header>
  );
}