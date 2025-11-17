import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  href: string;
}

export function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="my-16 md:-mx-3">
      <div className="md:mx-3 h-px border-t-solid border-t-2 border-[#1f1d1a]" aria-hidden="true" />
      <Link
        href={href}
        className="no-underline md:px-3 text-[#1f1d1a] capitalize text-[2.625rem] font-light leading-[120%] inline-block mb-[30px] font-[FeatureFlatCondensed-Regular] mt-1.5"
      >
        {title}
      </Link>
      <div className="md:mb-2.5 md:mx-3 md:hidden border-t-dashed h-px border-t mb-3 border-[#c3c1ae]" aria-hidden="true" />
    </div>
  );
}
