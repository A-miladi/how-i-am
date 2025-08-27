"use client";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { menu } from "./menuData";
import Image from "next/image";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-xl !transition dark:bg-black dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="hidden w-60 px-4 md:flex">
              <a href="/" className="">
                <Image
                  width={50}
                  height={50}
                  alt="logo"
                  src="/images/alogo.png"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="my-2 flex w-full items-center justify-between md:my-0 md:px-2">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="rounded-lg px-2 py-1 lg:hidden"
                >
                  <span
                    className={`relative my-1 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`relative my-1 block h-0.5 w-[25px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-6px] -rotate-45" : ""
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-full rounded border-body-color/50 bg-white px-4 py-3 duration-300 dark:border-body-color/20 dark:bg-dark max-md:shadow-xl lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  } `}
                >
                  <ul className="block lg:flex lg:space-x-10">
                    {menu.map((item, index) => (
                      <li key={index} className="group relative max-md:py-2">
                        {item.submenu ? (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className="dark:group-hover:text-blue flex cursor-pointer items-center justify-between py-1 text-sm text-dark group-hover:text-primary dark:text-white/70 lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                            >
                              {item.title}
                              <span className="pl-2">
                                <svg width="12" height="12" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.19995C12.6941 4.00308 13.0004 4.00308 13.1973 4.19995C13.3941 4.39683 13.3941 4.70308 13.1973 4.89995L8.16602 9.8437C8.05664 9.9312 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>
                            <div
                              className={`submenu relative left-0 top-full rounded-md border-white border-opacity-10 bg-white backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 dark:bg-black  md:border-[0.5px] lg:invisible lg:absolute lg:left-[150%] lg:block lg:w-[220px] lg:p-3 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:left-0 lg:group-hover:opacity-100 ${
                                openIndex === index ? "block" : "hidden"
                              } ${
                                sticky ? "" : "bg-opacity-50 dark:bg-opacity-70"
                              }`}
                            >
                              {item.submenu.map((submenuItem, subIndex) => (
                                <a
                                  href={submenuItem.link}
                                  key={subIndex}
                                  className="block rounded py-3 pl-4 text-xs text-dark hover:bg-primary hover:text-white dark:text-white/70 dark:hover:bg-primary dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <a
                            href={item.link}
                            className="flex py-1 text-sm text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                          >
                            {item.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex w-full items-center justify-center md:hidden">
                <a
                  href="/"
                  className=" flex w-full items-center justify-center py-1"
                >
                  <span className=" text-xl font-bold text-dark dark:text-white">
                    Alireza Miladi
                  </span>
                </a>
              </div>
              <div className="flex items-center justify-end">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
