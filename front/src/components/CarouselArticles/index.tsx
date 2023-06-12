import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { IArticle } from '@/interfaces/IArticle';

export default function Articles(props: { articles: IArticle[] }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5700, min: 1800 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1405 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1405, min: 1036 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    tablet2: {
      breakpoint: { max: 1036, min: 1 },
      items: 2,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <div className="flex w-screen flex-col justify-center bg-white">
      <div className="w-fit">
        <h1 className="pl-5 pt-5 text-green-900 after:block after:h-[1px] after:w-full after:bg-green-900 ">
          Artigos Linkedin
        </h1>
      </div>

      <Carousel
        responsive={responsive}
        //centerMode={true}
        //autoPlay
        //autoPlaySpeed={5000}
        //rewind={true}
        //rewindWithAnimation={true}
        //pauseOnHover
        infinite={true}
        showDots
        //slidesToSlide={2}
        className="my-10 gap-2"
      >
        {props.articles.map((article) => {
          return (
            <div
              key={article.title}
              className="mb-10 h-72 max-w-xs rounded-lg bg-white shadow-lg shadow-gray-800"
            >
              <a
                href={article.url}
                className="h-full w-full rounded-lg"
                target="_blank"
              >
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  width={350}
                  height={200}
                  className="rounded-t-lg"
                />
                <div className="p-2">
                  <h3 className="text-green-900">{article.title}</h3>
                  <p className="mt-5 text-left text-xs italic text-green-900">
                    {article.publishedAt}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
