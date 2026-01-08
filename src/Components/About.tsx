import React from "react";
import { Link } from "react-router-dom";
// import aboutImage from "../assets/About.jpg";

const About: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF6ED]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT IMAGE */}
          {/* <div className="flex justify-center lg:justify-start">
            <img
              src={aboutImage}
              alt="About our food"
              className="w-full max-w-xl rounded-xl object-cover shadow-lg"
            />
          </div> */}

          {/* RIGHT TEXT */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              BIG TASTE. BOLD LAYERS.
              <br />
              EVERY BITE MATTERS.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700">
              Meeny’s Kitchen & Grill is where cultures meet in the kitchen.
              We bring together the deep, comforting flavours of Caribbean
              cooking with the rich spices and soul of Asian cuisine — creating
              dishes that feel both familiar and exciting.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-700">
              Every meal is prepared with care, balance, and intention. From our
              signature Blasian boxes to our made-to-order mains, we focus on
              quality ingredients, bold seasoning, and food that’s meant to be
              enjoyed, shared, and remembered.
            </p>

            {/* CTA */}
            <Link to="/menu">
              <button
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-yellow-500 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-yellow-600"
              >
                View The Menu
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
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
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
