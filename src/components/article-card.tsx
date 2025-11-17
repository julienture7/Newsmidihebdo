import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCredit?: string;
  href: string;
  variant?: "default" | "large" | "featured";
}

export function ArticleCard({
  title,
  description,
  imageUrl,
  imageAlt,
  imageCredit,
  href,
  variant = "default",
}: ArticleCardProps) {
  const titleSize = variant === "large" ? "text-[2.125rem]" : "text-xl";
  const descriptionSize = variant === "large" ? "text-base" : "text-[0.9375rem]";

  return (
    <Link href={href} className="block group">
      <div className="md:hidden mt-9 mb-3 border-t-dashed h-px border-t border-[#c3c1ae]" />

      <div className={variant === "large" ? "min-h-[7.625rem]" : "min-h-12"}>
        <h2
          className={`bg-[linear-gradient(#fffaeb,#fffaeb)] bg-[100%_100%] bg-size-[0_100%] bg-no-repeat font-[FeatureFlatHeadline] ${titleSize} mt-[9px] md:bg-[position-x:left] md:bg-size-[100%_100%] md:transition-all md:duration-300 text-[#1f1d1a] font-[370] md:hover:text-[#0e29b5] leading-[120%]`}
        >
          {title}
        </h2>
      </div>

      {description && (
        <div className="md:relative">
          <div className={variant === "large" ? "min-h-[4.5rem]" : "min-h-[5.125rem]"}>
            <div
              className={`text-[#4b4a47] font-[FeatureFlatHeadline] ${descriptionSize} leading-[130%] text-left pt-2.5 font-[180]`}
            >
              {description}
            </div>
          </div>
        </div>
      )}

      {imageUrl && (
        <div className="mt-3.5">
          <figure className="flex flex-col mt-2.5">
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              width={740}
              height={555}
              className="w-full h-full"
            />
            {imageCredit && (
              <span className="text-[#575757] font-[Helvetica] text-[0.5625rem] mt-1.5">
                {imageCredit}
              </span>
            )}
          </figure>
        </div>
      )}
    </Link>
  );
}
