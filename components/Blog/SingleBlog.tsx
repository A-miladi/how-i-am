import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleBlog = ({
  blog,
  navigateTo,
}: {
  blog: Blog;
  navigateTo?: () => void;
}) => {
  const { title, image, paragraph, author, tags, publishDate, id } = blog;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      onClick={navigateTo}
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="500"
      data-aos-delay={id * 50}
      className="wow fadeInUp relative cursor-pointer overflow-hidden rounded-md bg-white shadow-xl transition-all duration-200 hover:scale-105 hover:shadow-[rgba(1,1,1,0.5)] dark:bg-dark max-md:mb-4"
      data-wow-delay=".1s"
    >
      <Link href="/" className="relative block h-[220px] w-full">
        <span className="absolute right-2 top-2 z-20 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-1 text-sm font-semibold capitalize text-white shadow-xl shadow-[rgba(1,1,1,0.6)]">
          {tags[0]}
        </span>
        <Image
          src={image}
          alt="image"
          fill
          loading="lazy"
          className="grayscale-[50%]"
        />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href="/"
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 h-[220px] border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src="/images/blog/me.png"
                  alt="author"
                  fill
                  loading="lazy"
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
