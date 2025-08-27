"use client";
import React, { useState } from "react";

export default function ContactComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-2xl bg-gradient-to-br from-primary/[5%] to-primary/[3%] px-8 py-11 dark:from-dark dark:to-dark sm:p-[55px] lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Let's Work Together
                </h2>
                <p className="dark:text-gray-300 text-lg font-medium text-body-color">
                  I'm currently available for freelance projects and full-time
                  opportunities. Let's discuss how I can help bring your ideas
                  to life.
                </p>
              </div>

              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                    Email
                  </h3>
                  <p className="dark:text-gray-400 text-body-color">
                    alireza.miladi@yahoo.com
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                    Phone
                  </h3>
                  <p className="dark:text-gray-400 text-body-color">
                    +98 903 726 6535
                  </p>
                </div>
              </div>

              {isSent && (
                <div className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-6 rounded-lg p-4">
                  ✅ Message sent successfully! I'll get back to you within 24
                  hours.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 dark:border-gray-600 w-full rounded-lg border px-6 py-3 text-base text-body-color placeholder-body-color shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-[#242B51] dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 dark:border-gray-600 w-full rounded-lg border px-6 py-3 text-base text-body-color placeholder-body-color shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-[#242B51] dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 dark:border-gray-600 w-full rounded-lg border px-6 py-3 text-base text-body-color placeholder-body-color shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-[#242B51] dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message *
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Tell me about your project or inquiry..."
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 dark:border-gray-600 w-full resize-none rounded-lg border px-6 py-3 text-base text-body-color placeholder-body-color shadow-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 dark:bg-[#242B51] dark:text-white"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="mr-3 h-5 w-5 animate-spin text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>

                      <div className="mt-4 sm:mt-0">
                        <p className="dark:text-gray-400 text-sm text-body-color">
                          Typically replies within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
