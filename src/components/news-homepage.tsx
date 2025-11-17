import Image from "next/image";
import Link from "next/link";
import { NewsHeader } from "./news-header";
import { ArticleCard } from "./article-card";
import { NewsletterSignup } from "./newsletter-signup";
import { FeaturedArticles } from "./featured-articles";
import { ArticleGrid } from "./article-grid";
import { SectionHeader } from "./section-header";

// Sample data - in a real app, this would come from an API
const topStories = [
  {
    title: "The curious life and lonely death of an American in Kabul",
    excerpt: "Jeff Rigsby moved back to Afghanistan after the US withdrawal with a self-imposed mission to save lives and inform millions.",
    image: "https://img.semafor.com/64270ed5975dd40709fd22db620012ea62a92edc-3000x2287.png?rect=0%2C19%2C3000%2C2250&w=740&h=555&q=75&auto=format",
    imageCaption: "Joey Pfeifer/Semafor/Rigsby Family",
    link: "/article/american-kabul",
  },
  {
    title: "Belén Garijo's prescription for Germany's Merck",
    excerpt: "The former doctor says long-term success stems from making hard decisions when the going is good.",
    image: "https://img.semafor.com/6796d7ab0458c23ab03e19070d4cea012eb84d51-1280x976.png?rect=0%2C8%2C1280%2C960&w=740&h=555&q=75&auto=format",
    imageCaption: "Merck/Joey Pfeifer/Semafor",
    link: "/article/merck-ceo",
  },
  {
    title: "Laude Institute ramps efforts to bring more AI research to light",
    excerpt: "Braden Hancock is a research partner at the Laude Institute, a nonprofit that aims to fund computer science studies that might otherwise die on the vine.",
    link: "/article/laude-institute",
  },
];

const businessArticles = [
  {
    title: "Yale study shows CEOs picked from within drive higher returns",
    excerpt: "Researchers say the performance gap should tell boards not to assume that an outside 'savior' will be better.",
    image: "https://img.semafor.com/e6310e12781c7728bb826dd55237583888d6d3db-4096x2160.jpg?rect=608%2C0%2C2880%2C2160&w=740&h=555&q=75&auto=format",
    imageCaption: "Sean Anthony Eddy/Getty",
    link: "/article/ceo-study",
  },
  {
    title: "Argentina gets $900M as US pulls same amount from IMF",
    excerpt: "The movement of funds last month, according to reports, is separate from the US Treasury purchasing pesos during Argentina's run-up to Javier Milei's election win.",
    link: "/article/argentina-imf",
  },
  {
    title: "Markets show little reaction as US government shutdown concludes",
    excerpt: "The S&P 500 traded down about 1% as the longest government shutdown in US history ended.",
    link: "/article/shutdown-markets",
  },
];

const techArticles = [
  {
    title: "Spotting cybercrime is working for Anthropic's marketing",
    excerpt: "The company said it had successfully struck down attempts by a perceived Chinese state-sponsored group that succeeded in hacking a 'small number' of global targets.",
    image: "https://img.semafor.com/698eaacdf3e361b1f2062c33f83607ae82fcdff9-1479x986.png?rect=83%2C0%2C1315%2C986&w=740&h=554&q=75&auto=format",
    imageCaption: "Chance Yeh/Getty Images for HubSpot",
    link: "/article/anthropic-cybercrime",
  },
  {
    title: "Google refuses to breakup in a plan meant to resolve EU sanctions",
    excerpt: "Google doubled down in its response to the European Commission's landmark September decision that found its adtech business breached antitrust rules.",
    image: "https://img.semafor.com/9efddb0d756f91d6202cce3eecb868de3e42fc3c-4000x2667.jpg?rect=222%2C0%2C3556%2C2667&w=740&h=555&q=75&auto=format",
    imageCaption: "Carlos Jasso/File Photo/Reuters",
    link: "/article/google-eu",
  },
];

export function NewsHomepage() {
  return (
    <div className="bg-[#f8f5d7] overflow-x-hidden font-[FeatureFlatHeadline,Times_New_Roman,Times,serif]">
      <NewsHeader />

      <div className="mx-auto md:px-6 max-w-[78rem] px-3">
        {/* Hero Story */}
        <div className="-mt-1 self-start">
          <Link
            href="/article"
            className="block md:cursor-pointer md:text-[#4b4a47] md:mb-3 md:focus-visible:text-[#0e29b5] md:hover:text-[#0e29b5] group no-underline"
          >
            <div className="mt-9 mb-3 border-t-dashed h-px border-t hidden border-[#c3c1ae]" aria-hidden="true" />
            <div className="md:text-[#3a6078] md:uppercase md:text-center md:font-[Helvetica,Arial,sans-serif] md:text-[13px] md:font-bold md:leading-[120%] md:block md:mt-3 hidden" />
            <h2 className="bg-[linear-gradient(#fffaeb,#fffaeb)] bg-[100%_100%] bg-size-[0_100%] bg-no-repeat font-[FeatureFlatHeadline] max-md:text-[#1f1d1a] max-md:text-[34px] text-center text-[2.125rem] leading-[110%] mt-3 md:[background-position-x:left] md:bg-size-[100%_100%] md:transition-all md:duration-300 md:text-[#1f1d1a] font-[370] md:focus-visible:text-[#0e29b5] md:hover:text-[#0e29b5]">
              Divisions widen on US right over Epstein
            </h2>
            <div>
              <div className="text-center mt-[13px] text-[#4b4a47] font-[FeatureFlatHeadline] text-lg leading-[120%] font-[180]">
                Some Republicans are openly defying US President Donald Trump over files related to the late financier and sex offender Jeffrey Epstein.
              </div>
            </div>
            <div className="mt-6">
              <figure className="flex flex-col mt-2.5">
                <Image
                  src="https://img.semafor.com/6a2266ee635840f013ff10149aa4d9eb12630e2e-2048x1365.jpg?rect=114%2C0%2C1820%2C1365&w=740&h=555&q=75&auto=format"
                  alt="Marjorie Taylor Greene"
                  width={740}
                  height={555}
                  className="inline w-full h-full"
                />
                <span className="text-[#575757] font-[Helvetica] text-[0.5625rem] mt-1.5">
                  Annabelle Gordon/Reuters
                </span>
              </figure>
            </div>
          </Link>
        </div>

        {/* Featured Articles */}
        <div className="flex flex-col self-start">
          <div className="md:mt-3.5 md:mb-1.5 w-full mt-[25px] mb-3 border-t-dashed h-px border-t border-[#c3c1ae]" aria-hidden="true" />
          <FeaturedArticles />
        </div>

        {/* World at a Glance */}
        <div className="md:mt-0 lg:mt-2.5 mt-3">
          <div className="min-h-[90px]">
            <div className="md:my-6 lg:hidden border-t-dashed h-px border-t mt-9 mb-3 border-[#c3c1ae]" aria-hidden="true" />
            <div className="flex relative">
              <h2 className="md:max-w-[50%] text-[#1f1d1a] min-w-[120px] max-w-[60%] font-[FeatureFlatCondensed-Medium] text-[1.5625rem] font-normal leading-[100%]">
                The World at a Glance
              </h2>
              <div className="w-[130px] absolute right-0">
                <Image
                  src="https://static.semafor.com/_next/static/media/world_map_sm.c8d5f47b.png"
                  alt="World Map"
                  width={130}
                  height={73}
                  className="h-[73px]"
                />
              </div>
            </div>
            <div className="flex mt-2.5 mb-[22px]">
              <span className="leading-[120%] items-center w-5 flex">
                <span className="bg-[#bc4d2c] w-2.5 h-2.5 leading-[100%] inline-block rounded-full" />
              </span>
              <span className="text-[#1f1d1a] font-[Helvetica] text-[0.775rem] inline-block leading-[120%]">
                Updated 11:20pm GMT+1
              </span>
            </div>
          </div>

          <div>
            {[
              {
                number: 1,
                text: "Tensions between Tokyo and Beijing escalated",
                detail: "over the Japanese prime minister's comments about Taiwan.",
              },
              {
                number: 2,
                text: "Massive protests erupted in Mexico",
                detail: "over corruption and the government's handling of violent crime.",
              },
              {
                number: 3,
                text: "Donald Trump's handling of files related to Jeffrey Epstein",
                detail: "is deepening a divide on the American right.",
              },
              {
                number: 4,
                text: "Ukraine's president vowed to overhaul the country's embattled energy sector",
                detail: "following accusations of widespread corruption.",
              },
              {
                number: 5,
                text: "Global internet freedom declined for a 15th consecutive year",
                detail: ", according to a new report.",
              },
              {
                number: 6,
                text: "The world's largest illegal sports streaming platform",
                detail: "was shut down — though perhaps not for long.",
              },
            ].map((item) => (
              <Link key={item.number} href="/article" className="flex my-2.5 no-underline">
                <span className="text-[#1f1d1a] w-5 font-[Helvetica] text-base leading-[130%]">
                  {item.number}
                </span>
                <span className="leading-[120%] flex-1">
                  <p className="lg:text-[0.90625rem] text-[#4b4a47] font-[FeatureFlatHeadline] text-base leading-[130%] group">
                    <strong className="font-[FeatureFlatHeadline-Bold] font-[495] text-[#1f1d1a] underline lg:text-[#243bb5]">
                      {item.text}
                    </strong>{" "}
                    {item.detail}
                  </p>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Middle Top Stories */}
        <div className="w-full">
          <div className="md:block w-full hidden border-t-dashed h-px border-t my-3 border-[#c3c1ae]" aria-hidden="true" />
          <ArticleGrid articles={topStories} columns={3} />
          <div className="md:block w-full hidden border-t-dashed h-px border-t mt-3 mb-4 border-[#c3c1ae]" aria-hidden="true" />
        </div>

        {/* Politics Section */}
        <SectionHeader title="Politics" href="/vertical/politics" />
        <ArticleGrid articles={topStories.slice(0, 2)} columns={2} />

        {/* Business Section */}
        <SectionHeader title="Business" href="/vertical/business" />
        <ArticleGrid articles={businessArticles} columns={4} />

        {/* Technology Section */}
        <SectionHeader title="Technology" href="/vertical/tech" />
        <div className="md:grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto] grid-cols-[1fr_1fr] grid relative">
          {techArticles.map((article, index) => (
            <Link
              key={article.link}
              href={article.link}
              className="md:cursor-pointer md:text-center md:row-end-1 md:pb-[29px] w-full block h-full pt-3 pb-6 md:text-[#4b4a47] md:focus-visible:text-[#0e29b5] md:hover:text-[#0e29b5] group no-underline"
            >
              <div className="md:w-full md:flex">
                <div className="md:text-center md:flex-1" />
                <div className="md:w-full md:flex md:basis-px basis-[71.33%]">
                  <div className="md:w-full">
                    <div>
                      <div>
                        <div className="min-h-[7.625rem]">
                          <h2 className="bg-[linear-gradient(#fffaeb,#fffaeb)] bg-[100%_100%] bg-size-[0_100%] bg-no-repeat text-[2.125rem] leading-[120%] max-md:text-[#1f1d1a] max-md:font-[FeatureFlatHeadline] md:[background-position-x:left] md:bg-size-[100%_100%] md:transition-all md:duration-300 md:text-[#1f1d1a] font-[370] md:focus-visible:text-[#0e29b5] md:hover:text-[#0e29b5]">
                            {article.title}
                          </h2>
                        </div>
                        <div className="md:relative">
                          <div className="min-h-[4.5rem]">
                            <div className="text-base leading-[130%] max-md:text-[#4b4a47] max-md:font-[FeatureFlatHeadline] font-[180] pt-2.5">
                              {article.excerpt}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {article.image && (
                      <div>
                        <figure className="flex flex-col md:max-w-[435px] mt-3">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={740}
                            height={555}
                            className="inline w-full h-full"
                          />
                          <span className="mt-1 text-[#66655d] font-[Helvetica] text-[0.5625rem]">
                            {article.imageCaption}
                          </span>
                        </figure>
                      </div>
                    )}
                  </div>
                </div>
                <div className="md:text-center md:flex-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="min-w-[15.3125rem] pb-2.5 mt-16">
          <NewsletterSignup />
        </div>

        {/* Footer */}
        <footer className="mt-[50px] border-t-2 border-t-[#1f1d1a] pb-6">
          <div>
            <div className="md:flex md:justify-between mt-[30px]">
              <div className="md:w-6/12 md:min-w-[50%] md:mr-[8.33%]">
                <div>
                  <Link href="/" className="no-underline">
                    <Image
                      src="https://static.semafor.com/_next/static/media/semafor-logo-long-fos.7a9cae19.svg"
                      alt="News Logo"
                      width={278}
                      height={37}
                      className="md:w-[278px] md:h-[37px] w-6/12 h-fit"
                    />
                  </Link>
                </div>
                <p className="text-[#1f1d1a] max-w-[588px] font-[FeatureFlatCondensed-Regular] text-[2.1875rem] font-light mt-[42px] leading-[120%]">
                  Intelligence for the New World Economy
                </p>
              </div>
            </div>
            <nav className="md:flex md:justify-between border-t-none mt-9 mb-3">
              <div className="lg:text-right lg:items-center lg:inline-flex lg:pb-2.5 md:pb-0 text-[#1f1d1a] whitespace-nowrap font-[FeatureFlatHeadline] text-base inline-block pb-3 font-[180]">
                <span className="leading-[120%]">© 2025 News Inc.</span>
              </div>
              <div>
                <Link
                  href="/privacy"
                  className="no-underline lg:items-center lg:inline-flex lg:mx-3 lg:pr-0 text-center text-[#1f1d1a] whitespace-nowrap font-[FeatureFlatHeadline] text-base inline-block pr-10 font-[370]"
                >
                  Privacy
                </Link>
                <a
                  href="#"
                  className="no-underline lg:items-center lg:inline-flex lg:mx-3 text-center text-[#1f1d1a] whitespace-nowrap font-[FeatureFlatHeadline] text-base inline-block font-[370]"
                >
                  Consent Preferences
                </a>
              </div>
            </nav>
          </div>
          <div className="border-t-dashed h-px border-t border-[#c3c1ae]" aria-hidden="true" />
        </footer>
      </div>
    </div>
  );
}
