"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/data/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const navigate = useRouter();

  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 1;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const left = Math.max(2, currentPage - delta);
      const right = Math.min(totalPages - 1, currentPage + delta);

      pages.push(1);

      if (left > 2) {
        pages.push("...");
      }

      for (let i = left; i <= right; i++) {
        pages.push(i);
      }

      if (right < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <Breadcrumb
        pageName="Blog"
        description="Discover the latest articles, tutorials, and insights on web development, design, and technology. Stay updated with trends, best practices, and guides to help you grow your skills."
      />

      <section className="pb-[120px] pt-12">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentPosts.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog
                  navigateTo={() => navigate.push(`/blog/${String(blog.id)}`)}
                  blog={blog}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-10">
            <nav className="flex items-center gap-1">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex h-9 w-9 items-center justify-center rounded-md bg-black/20 text-sm transition dark:bg-dark ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {getPaginationNumbers().map((number, idx) =>
                number === "..." ? (
                  <span
                    key={`dots-${idx}`}
                    className="flex h-9 w-9 items-center justify-center text-sm"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={number}
                    onClick={() => paginate(Number(number))}
                    className={`flex h-9 w-9 items-center justify-center rounded-md border border-black/20 text-sm transition dark:border-dark ${
                      currentPage === number
                        ? "border-primary bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                    }`}
                  >
                    {number}
                  </button>
                )
              )}

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex h-9 w-9 items-center justify-center rounded-md bg-black/20 text-sm transition dark:bg-dark ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
