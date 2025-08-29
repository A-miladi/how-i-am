import React, { useState } from "react";
import RelatedPost from "../Blog/RelatedPost";
import blogData from "@/data/blogData";

export default function ResearchBlog() {
  const [query, setQuery] = useState("");
  const filteredPosts = blogData.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="mb-10 mt-12 rounded-md bg-primary bg-opacity-5 p-6 dark:bg-opacity-5 lg:mt-0">
        <form
          className="flex items-center justify-between"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mr-5 w-full rounded-md border border-transparent px-5 py-3 text-base font-medium text-body-color placeholder-body-color outline-none focus:border-primary dark:bg-white dark:bg-opacity-10"
          />
          <button
            type="submit"
            className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-md bg-primary text-white"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>

      <div className="mb-10 rounded-md bg-primary bg-opacity-5 shadow-lg dark:bg-opacity-10">
        <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black shadow-xl dark:border-white dark:border-opacity-10 dark:text-white">
          Related Posts
        </h3>
        <ul className="max-h-[430px] overflow-y-auto px-4">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((i, idx) => (
              <React.Fragment key={i.title}>
                <li className="my-2 w-full cursor-pointer rounded-xl border-opacity-10 px-2 py-2 transition-all duration-200 hover:scale-105 hover:bg-black/10 dark:border-white dark:border-opacity-10 dark:hover:bg-black">
                  <RelatedPost
                    title={i.title}
                    image={i.logo}
                    slug="#"
                    date={i.publishDate}
                  />
                </li>
                {idx !== filteredPosts.length - 1 && (
                  <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
                )}
              </React.Fragment>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 px-6 py-4 text-sm">
              No results found.
            </p>
          )}
        </ul>
      </div>
    </>
  );
}
