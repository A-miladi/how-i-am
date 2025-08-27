import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-[99] md:bottom-8 md:right-8">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md bg-white/30 text-white shadow-md backdrop-blur-sm transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-white dark:border-[#000]"></span>
        </div>
      )}
    </div>
  );
}
