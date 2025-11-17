"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Clock } from "./clock";

export function NewsHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Politics",
    "Business",
    "Technology",
    "Energy",
    "Gulf",
    "Africa",
    "Security",
    "Media",
    "CEO Signal",
  ];

  return (
    <header className="pt-2.5 md:pt-3 md:pb-2.5 px-3 md:px-6 max-w-[78rem] mx-auto">
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col w-full">
        <div className="flex justify-between mb-2.5">
          <div className="pb-2.5">
            <Link
              href="/events"
              className="no-underline text-[#3a6d78] whitespace-nowrap capitalize font-[sans-serif] text-xs font-semibold leading-[120%] pt-0.5 pb-[3px] px-[3px] rounded-[5px] border border-dotted border-[#3a6d78] mr-2.5"
            >
              Events
            </Link>
            <Link
              href="/newsletters"
              className="no-underline text-[#3a6d78] whitespace-nowrap capitalize font-[sans-serif] text-xs font-semibold leading-[120%] pt-0.5 pb-[3px] px-[3px] rounded-[5px] border border-dotted border-[#3a6d78]"
            >
              <svg
                width="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                className="inline h-2.5 fill-none relative top-[0.5px]"
              >
                <circle cx="5" cy="5" r="5" className="fill-[rgb(250,202,110)]" />
              </svg>{" "}
              Email Briefings
            </Link>
          </div>
          <span className="min-h-3 flex leading-[120%]">
            <Link
              href="/account"
              className="no-underline uppercase text-[#3a6d78] h-min font-[sans-serif] text-[0.625rem] font-semibold leading-[120%] -mt-[3px] -mb-2.5 -mx-2.5 p-2.5"
            >
              Sign In
            </Link>
          </span>
        </div>

        <div className="flex justify-between mb-2.5">
          <div className="text-[#1f1d1a] uppercase items-center gap-x-2.5 font-[Helvetica] text-[0.625rem] flex relative">
            <div className="flex items-center gap-x-2.5">
              <Image
                src="https://static.semafor.com/_next/static/media/spinning-earth.eafcef04.gif"
                alt="rotating globe"
                width={12}
                height={12}
                className="inline mix-blend-multiply w-3 h-3"
              />
              <div>8:21 AM</div>
            </div>
            <div>Monday November 17, 2025</div>
          </div>

          <nav className="text-[#1f1d1a] flex relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer border-none"
            >
              <Image
                src="https://static.semafor.com/_next/static/media/nav-open-variant.6b4b47b8.svg"
                alt="Open navigation"
                width={20}
                height={20}
                className="h-4"
              />
            </button>
          </nav>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className="flex justify-between">
          <div className="flex-1 w-0">
            <div className="flex">
              <Link
                href="/events"
                className="no-underline text-[#3a6d78] whitespace-nowrap capitalize font-[sans-serif] text-xs font-semibold leading-[120%] pt-0.5 pb-[3px] px-[3px] rounded-[5px] border border-dotted border-[#3a6d78] mr-2.5"
              >
                Events
              </Link>
              <Link
                href="/newsletters"
                className="no-underline text-[#3a6d78] whitespace-nowrap capitalize font-[sans-serif] text-xs font-semibold leading-[120%] pt-0.5 pb-[3px] px-[3px] rounded-[5px] border border-dotted border-[#3a6d78]"
              >
                <svg
                  width="10"
                  viewBox="0 0 10 10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline h-2.5 fill-none relative top-[0.5px]"
                >
                  <circle cx="5" cy="5" r="5" className="fill-[rgb(250,202,110)]" />
                </svg>{" "}
                Email Briefings
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#4b4a47] text-center whitespace-nowrap font-[FeatureFlatHeadline] text-xs font-[180] leading-[130%] mb-[9px]">
              Intelligence for the New World Economy
            </p>
            <div className="flex justify-between items-end mt-1">
              <ul className="flex gap-x-[18px] relative bottom-[3px]">
                <Clock city="D.C." delay={-8460} />
                <Clock city="BXL" delay={-30060} />
                <Clock city="Lagos" delay={-30060} />
              </ul>

              <Link href="/" className="relative top-[3px]">
                <Image
                  src="https://static.semafor.com/_next/static/media/homepage-semafor-text-logo-fos.a1e5dbe4.svg"
                  alt="News Logo"
                  width={282}
                  height={40}
                  className="max-w-[322px] px-5 w-full h-full"
                />
              </Link>

              <ul className="flex gap-x-[18px] relative bottom-[3px]">
                <Clock city="Riyadh" delay={-37260} />
                <Clock city="Beijing" delay={-12060} />
                <Clock city="SG" delay={-12060} />
              </ul>
            </div>
          </div>

          <span className="flex-1 flex justify-end min-h-3 leading-[120%]">
            <Link
              href="/account"
              className="no-underline uppercase text-[#3a6d78] h-min font-[sans-serif] text-[0.625rem] font-semibold leading-[120%] -mt-[5px] -mx-3 p-2.5"
            >
              Sign In
            </Link>
          </span>
        </div>
      </div>

      {/* Navigation Bar */}
      <hr className="mx-auto my-2 md:border-t-dashed md:h-px md:block md:mt-0.5 md:mb-0 md:mx-0 md:border-t-[#c3c1ae] md:border-b-0 md:border-x-0 hidden" />
      <nav className="md:text-[#1f1d1a] md:flex-wrap md:justify-center md:font-[Helvetica] md:font-[395] md:flex md:pt-[5px] md:pb-0.5 hidden">
        {navLinks.map((link, index) => (
          <Link
            key={link}
            href={`/${link.toLowerCase().replace(" ", "-")}`}
            className={`no-underline whitespace-nowrap capitalize text-xs leading-[120%] px-3.5 py-1 ${
              index === 0 ? "text-[#3a6d78]" : "text-[#4b4a47]"
            }`}
          >
            {link}
          </Link>
        ))}
      </nav>
      <hr className="md:block border-t-solid w-full h-px hidden relative border-b-0 border-x-0 last:mt-0.5 last:border-dashed last:border-[#c3c1ae]" />
    </header>
  );
}
