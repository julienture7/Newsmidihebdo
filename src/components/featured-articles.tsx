import Image from "next/image";
import Link from "next/link";

interface FeaturedArticle {
  title: string;
  author: string;
  authorImage: string;
  link: string;
}

const articles: FeaturedArticle[] = [
  {
    title: "View / AI buildout is just cloud 2.0",
    author: "Reed Albergotti",
    authorImage: "https://img.semafor.com/21b2b47b53ad644cf3577717c50f31f7667dd2e1-1600x1600.png?h=50&w=50",
    link: "/article/ai-buildout",
  },
  {
    title: "View/ Ethiopia's COP32 success offers opportunity for Africa",
    author: "Alexis Akwagyiram",
    authorImage: "https://img.semafor.com/179840acc0f27090ecbb6accb206f18ff414cb62-1600x1600.png?h=50&w=50",
    link: "/article/ethiopia-cop",
  },
];

export function FeaturedArticles() {
  return (
    <section className="gap-1.5 flex mt-1.5">
      {articles.map((article) => (
        <Link
          key={article.link}
          href={article.link}
          className="no-underline md:cursor-pointer bg-[#ece9d2] flex flex-col justify-between p-1.5 flex-1"
        >
          <h2 className="text-[#1f1d1a] font-[FeatureFlatCondensed-Medium] text-lg font-[370] leading-[120%]">
            {article.title}
          </h2>
          <div className="md:h-3 w-full h-10" />
          <div className="flex items-end gap-1">
            <Image
              src={article.authorImage}
              alt={article.author}
              width={50}
              height={50}
              className="inline object-cover w-[2.3125rem] h-[2.3125rem]"
            />
            <div>
              <p className="text-[#1f1d1a] font-[Helvetica] text-[0.8125rem] mb-[-3px] leading-[120%]">
                {article.author}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
