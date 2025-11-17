"use client";

import { useState } from "react";

interface Newsletter {
  id: string;
  name: string;
  description: string;
  frequency: string;
  link: string;
  defaultChecked?: boolean;
}

const newsletters: Newsletter[] = [
  {
    id: "flagship",
    name: "Flagship",
    description: "The daily global news briefing you can trust.",
    frequency: "Every Weekday",
    link: "/newsletters/flagship/latest",
    defaultChecked: true,
  },
  {
    id: "principals",
    name: "Washington, DC",
    description: "What the White House is reading.",
    frequency: "every weekday morning",
    link: "/newsletters/washingtondc/latest",
    defaultChecked: true,
  },
  {
    id: "business",
    name: "Business",
    description: "The stories (& the scoops) from Wall Street.",
    frequency: "2x per week",
    link: "/newsletters/business/latest",
  },
  {
    id: "technology",
    name: "Technology",
    description: "What's next in the new era of tech.",
    frequency: "2x per week",
    link: "/newsletters/technology/latest",
  },
  {
    id: "energy",
    name: "Energy",
    description: "The nexus of politics, tech, and energy.",
    frequency: "2x per week",
    link: "/newsletters/energy/latest",
  },
  {
    id: "gulf",
    name: "Gulf",
    description: "Navigating the region's capital, influence, and power.",
    frequency: "3x per week",
    link: "/newsletters/gulf/latest",
  },
  {
    id: "africa",
    name: "Africa",
    description: "A rapidly-growing continent's crucial stories.",
    frequency: "3x per week",
    link: "/newsletters/africa/latest",
  },
  {
    id: "americana",
    name: "Americana",
    description: "An insider's guide to American power.",
    frequency: "1x per week",
    link: "/newsletters/americana/latest",
  },
  {
    id: "media",
    name: "Media",
    description: "Media's essential read.",
    frequency: "1x per week",
    link: "/newsletters/media/latest",
  },
];

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [selectedNewsletters, setSelectedNewsletters] = useState<string[]>(
    newsletters.filter((n) => n.defaultChecked).map((n) => n.id)
  );

  const handleCheckboxChange = (id: string) => {
    setSelectedNewsletters((prev) =>
      prev.includes(id) ? prev.filter((nId) => nId !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email, "Newsletters:", selectedNewsletters);
  };

  return (
    <section className="flex flex-col font-[FeatureFlatHeadline] pt-5">
      <form onSubmit={handleSubmit} className="border-t border-solid border-t-[#1f1d1a] flex flex-col-reverse">
        <ul className="flex flex-col">
          <li aria-hidden="true">
            <div className="border-t border-dashed border-[#c3c1ae] h-px" aria-hidden="true" />
          </li>
          {newsletters.map((newsletter) => (
            <li key={newsletter.id}>
              <label
                htmlFor={`checkbox-${newsletter.id}`}
                className="bg-[#f8f5d7] flex md:focus-within:cursor-pointer md:hover:cursor-pointer gap-[5px] mt-[5px] mb-3 group"
              >
                <div className="cursor-pointer items-center w-min min-w-[26px] h-min min-h-[26px] flex relative rounded-sm mt-1 md:scale-110">
                  <span className="bg-[#f8f5d7] items-end min-h-[22px] flex leading-[120%]">
                    <svg
                      width="26"
                      viewBox="0 0 24 22"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="inline h-[22px] fill-none"
                    >
                      <rect
                        x="0.5"
                        y="1.5"
                        width="19"
                        height="19"
                        rx="0"
                        className={
                          selectedNewsletters.includes(newsletter.id)
                            ? "fill-[rgb(255,236,183)] stroke-[rgb(31,29,26)]"
                            : "fill-[#f8f5d7] stroke-black"
                        }
                      />
                      {selectedNewsletters.includes(newsletter.id) && (
                        <path
                          d="M15 7L8.63636 15L5 10.78947"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-[rgb(31,29,26)]"
                        />
                      )}
                    </svg>
                  </span>
                  <input
                    id={`checkbox-${newsletter.id}`}
                    type="checkbox"
                    className="ml-1 mr-[3px] my-[3px] z-[-1] absolute left-0 top-0 focus:outline-[unset]"
                    checked={selectedNewsletters.includes(newsletter.id)}
                    onChange={() => handleCheckboxChange(newsletter.id)}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-[FeatureFlatHeadline,serif] mb-1 text-[#1f1d1a] text-xl leading-[120%] mt-1">
                    {newsletter.name}
                  </p>
                  <p className="font-[FeatureFlatHeadline] font-light text-[#4b4a47] text-[0.8125rem] leading-[130%]">
                    {newsletter.description}
                  </p>
                  <p className="gap-2.5 font-[Helvetica] flex text-[#4b4a47] text-xs leading-[120%] mt-[5px]">
                    <span className="leading-[120%] capitalize">{newsletter.frequency}</span>
                    <a
                      href={newsletter.link}
                      aria-label={`Read the latest ${newsletter.name.toLowerCase()} newsletter`}
                      className="no-underline"
                    >
                      Read it
                    </a>
                  </p>
                </div>
              </label>
              <div className="border-t border-dashed border-[#c3c1ae] h-px" aria-hidden="true" />
            </li>
          ))}
        </ul>

        <div className="h-[130px]">
          <div className="md:static md:pt-[5px] bg-[#f8f5d7] sticky pt-2.5 top-0">
            <h3 className="font-[395] text-base mt-[7px] mb-3">Sign up for our email briefings.</h3>
            <div className="flex relative">
              <label className="opacity-0 z-[-1] max-w-px absolute" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                placeholder="Email address"
                id="newsletter-email"
                autoComplete="email"
                aria-invalid="false"
                type="email"
                className="z-[2] bg-[#fcfae4] w-full text-base font-light leading-[120%] px-[11px] py-2 border-l border-r-0 border-y border-solid border-[#1f1d1a] placeholder:text-[#66655d] placeholder:text-base placeholder:leading-[120%] focus:-outline-offset-2 focus:border-r-solid focus:outline-1 focus:outline-solid focus:outline-[#1f1d1a] focus:border-r"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="tracking-[0.02em] text-[#1f1d1a] cursor-pointer z-[2] bg-[#f8f5d7] min-w-[84px] text-base font-medium leading-[120%] relative px-2.5 border border-solid -left-px active:text-[#a59e93] active:outline-1 focus:text-[#a59e93] focus:outline-1"
              >
                Sign&nbsp;Up
              </button>
            </div>
            <p className="text-center text-base font-light text-[#4b4a47] leading-[130%] my-3">
              {selectedNewsletters.length} briefings selected
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
