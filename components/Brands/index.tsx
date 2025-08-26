"use client";
import { Brand } from "@/types/brand";
import Image from "next/image";
import { motion } from "framer-motion";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "React",
    href: "https://reactjs.org",
    image: "/images/brands/react.svg",
  },
  {
    id: 2,
    name: "Next.js",
    href: "https://nextjs.org",
    image: "/images/brands/nextjs-icon.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    image: "/images/brands/typescript.svg",
  },
  {
    id: 4,
    name: "Node.js",
    href: "https://nodejs.org",
    image: "/images/brands/nodejs-icon.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    image: "/images/brands/tailwindcss-icon.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    href: "https://www.mongodb.com",
    image: "/images/brands/mongodb-icon.svg",
  },
  {
    id: 7,
    name: "Java Script",
    href: "https://reactnative.dev",
    image: "/images/brands/javascript.svg",
  },
  {
    id: 8,
    name: "Python",
    href: "https://www.python.org",
    image: "/images/brands/python.svg",
  },
  {
    id: 9,
    name: "NestJS",
    href: "https://nestjs.com",
    image: "/images/brands/nestjs.svg",
  },
  {
    id: 10,
    name: "Redux",
    href: "https://redux.js.org",
    image: "/images/brands/redux.svg",
  },
];

const Brands = () => {
  // Duplicate brands for seamless looping
  const loopedBrands = [...brandsData, ...brandsData];

  return (
    <section className="pt-16">
      <div className="container">
        <div className="relative w-full overflow-hidden rounded-md bg-opacity-70 py-8 backdrop-blur-sm dark:bg-dark dark:bg-opacity-5">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {loopedBrands.map((brand, index) => (
              <SingleBrand key={index} brand={brand} />
            ))}
          </motion.div>
          <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-white to-transparent dark:from-black" />
          <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-white to-transparent dark:from-black" />
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <motion.div
      className="mx-3 flex w-[120px] items-center justify-center py-4 sm:mx-4 lg:mx-6 xl:mx-8"
      whileHover={{ scale: 1.2, rotateY: 15 }}
      animate={{
        filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"],
      }}
      transition={{
        filter: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 300 },
        rotateY: { type: "spring", stiffness: 300 },
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full opacity-60 hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill className="object-contain" />
      </a>
    </motion.div>
  );
};
