"use client";

import { useState } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

export default function Blog() {
  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // ✅ Calculate total pages
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  // ✅ Slice data for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

  // ✅ Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* ✅ Pagination */}
          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4 pt-8">
              <ul className="flex items-center justify-center space-x-2 pt-8">
                {/* Prev Button */}
                <li>
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                      currentPage === 1
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Prev
                  </button>
                </li>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <li key={number}>
                      <button
                        onClick={() => paginate(number)}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                          currentPage === number
                            ? "bg-primary text-white"
                            : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:text-white"
                        }`}
                      >
                        {number}
                      </button>
                    </li>
                  )
                )}

                {/* Next Button */}
                <li>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                      currentPage === totalPages
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-body-color bg-opacity-[15%] text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
