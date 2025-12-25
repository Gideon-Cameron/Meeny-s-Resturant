import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-white py-28 font-manrope"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What I can help you with
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-md">
            <img
              src={Img1}
              alt="Service 1"
              className="h-48 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Service One
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-md bg-indigo-400 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-md">
            <img
              src={Img2}
              alt="Service 2"
              className="h-48 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Service Two
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-md bg-indigo-400 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-md">
            <img
              src={Img3}
              alt="Service 3"
              className="h-48 w-full object-cover"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Service Three
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-md bg-indigo-400 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Get Started
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
