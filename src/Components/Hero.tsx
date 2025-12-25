import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-32 font-manrope">
      <div className="mx-auto max-w-4xl text-center">
        {/* Main headline */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          I turn your ideas into{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            cinematic videos
          </span>
        </h1>

        {/* Supporting text */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          Helping brands hook their audience, build trust, and drive real
          results through high-impact video content.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 rounded-lg bg-indigo-400 px-9 py-4 text-lg font-medium text-white shadow-md transition-all duration-200 hover:bg-indigo-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
          >
            Get in Touch
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
          </a>

          {/* Secondary CTA */}
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-9 py-4 text-lg font-medium text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
