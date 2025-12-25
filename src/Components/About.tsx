import React from "react";
import Profile from "../assets/Profile.png";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-slate-50 py-28 font-manrope"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-5 gap-14 items-center">
        {/* Left: Image */}
        <div className="md:col-span-2 flex justify-center">
          <img
            src={Profile}
            alt="Josh profile"
            className="w-80 max-w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="md:col-span-3 text-slate-800">
          {/* Section label */}
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-500">
            About
          </p>

          {/* Name */}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Josh
          </h2>

          {/* Intro paragraph */}
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            I work with brands that know they’re building something great — but
            struggle to communicate it in a way that truly connects.
          </p>

          {/* Body paragraph */}
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Most brands sound the same because they focus on features instead of
            meaning. I help bridge the gap between your technical brilliance and
            your audience’s emotions by combining strategic scriptwriting with
            cinematic storytelling.
          </p>

          {/* Emphasis paragraph */}
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            By building what I call{" "}
            <span className="font-medium text-indigo-600">
              narrative infrastructure
            </span>
            , I don’t just edit videos — I design stories that earn trust,
            position authority, and turn attention into action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
