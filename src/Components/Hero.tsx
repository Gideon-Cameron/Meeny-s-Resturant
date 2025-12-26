import React from "react";
import heroImage from "../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-[80vh] bg-teal-500 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Text Content */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            It all started with a dog...
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-4 text-teal-50">
            In 2006, a vet on holiday encountered a small injured dog that would
            change everything. What began as a single moment of compassion grew
            into a lifelong mission to help animals who had nowhere else to turn.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6 text-teal-50">
            Today, that mission continues through dedicated care, outreach, and
            a belief that every animal deserves kindness, no matter where they are.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            className="inline-block bg-white text-teal-600 font-medium px-6 py-3 rounded-md shadow hover:bg-teal-100 transition"
          >
            Get in touch
          </button>
        </div>

        {/* Image */}
        <div className="w-full h-full flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Vet with dog"
            className="max-h-[65vh] w-full object-cover rounded-md shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
