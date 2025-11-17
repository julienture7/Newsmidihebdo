import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  excerpt: string;
  image?: string;
  imageCaption?: string;
  link: string;
  category?: string;
}

interface ArticleGridProps {
  articles: Article[];
  columns?: 2 | 3 | 4;
}

export function ArticleGrid({ articles, columns = 3 }: ArticleGridProps) {
  const gridCols = {
    2: "md:grid-cols-[1fr_1px_1fr]",
    3: "md:grid-cols-[repeat(2,1fr_1px)_1fr]",
    4: "md:grid-cols-[1fr_1fr_1fr_1fr]",
  };

  return (
    <div className={`grid grid-cols-[1fr] ${gridCols[columns]} grid-rows-[auto] relative`}>
      {articles.map((article, index) => (
        <>
          <Link
            key={article.link}
            href={article.link}
            className="w-full block md:text-[#4b4a47] md:p-3 md:focus-visible:text-[#0e29b5] md:hover:text-[#0e29b5] group no-underline md:cursor-pointer"
          >
            <div className="md:w-full">
              <div>
                <div>
                  <div className="min-h-12">
                    <h2 className="bg-[linear-gradient(#fffaeb,#fffaeb)] bg-[100%_100%] bg-size-[0_100%] bg-no-repeat max-md:text-[#1f1d1a] max-md:font-[FeatureFlatHeadline] max-md:text-xl md:[background-position-x:left] md:bg-size-[100%_100%] md:transition-all md:duration-300 md:text-[#1f1d1a] text-xl font-[370] md:focus-visible:text-[#0e29b5] md:hover:text-[#0e29b5]">
                      {article.title}
                    </h2>
                  </div>
                  <div className="md:relative">
                    <div className="min-h-16">
                      <div className="max-md:text-[#4b4a47] max-md:font-[FeatureFlatHeadline] max-md:text-base max-md:leading-[130%] text-[0.9375rem] font-[180] pt-2.5">
                        {article.excerpt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {article.image && (
                <div>
                  <figure className="flex flex-col mt-3">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={740}
                      height={555}
                      className="inline w-full h-full"
                    />
                    {article.imageCaption && (
                      <span className="text-[#66655d] font-[Helvetica] text-[0.5625rem] mt-1.5">
                        {article.imageCaption}
                      </span>
                    )}
                  </figure>
                </div>
              )}
            </div>
          </Link>
          {index < articles.length - 1 && columns > 2 && (
            <div className="border-t border-dashed border-l-dashed w-px h-full border-l border-[#c3c1ae]" aria-hidden="true" />
          )}
        </>
      ))}
    </div>
  );
}
