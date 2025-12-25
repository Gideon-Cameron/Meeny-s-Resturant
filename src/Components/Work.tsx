// Work.jsx
import React from "react";

const videos = [
  {
    id: 1,
    label: "Portfolio Video 1",
    headline: "Turning Viewers into Heroes",
    description:
      "Most brand films position the company as the hero. This story reframes the audience as the hero on a mission — and heroes take action.",
    url: "https://www.youtube.com/embed/_o0zXgaCt4Y",
  },
  {
    id: 2,
    label: "Portfolio Video 2",
    headline: "When Clarity Beats Cleverness",
    description:
      "Many campaigns confuse complexity for intelligence. This piece simplifies the message so the value lands instantly.",
    url: "https://www.youtube.com/embed/S-ll-twQhQg",
  },
  {
    id: 3,
    label: "Portfolio Video 3",
    headline: "Proof Over Promises",
    description:
      "Audiences don’t trust claims — they trust evidence. This video lets real results carry the narrative weight.",
    url: "https://www.youtube.com/embed/FH1vYuKWvrQ",
  },
  {
    id: 4,
    label: "Portfolio Video 4",
    headline: "The Narrative Problem",
    description:
      "Most promos make the organization the hero, leaving the audience as spectators. In 2025, spectators don’t buy tickets — heroes on a mission do.",
    url: "https://www.youtube.com/embed/uOgcMRxGfDQ",
  },
  {
    id: 5,
    label: "Portfolio Video 5",
    headline: "Emotion Before Explanation",
    description:
      "Before audiences understand features, they need to feel the stakes. This story leads with emotion, then earns attention.",
    url: "https://www.youtube.com/embed/pdVTSSsMNEo",
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full bg-white py-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-teal-700">
            Some of the stories I’ve helped bring to life
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Each project starts with a narrative problem — and ends with a story
            designed to move the audience to action.
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="relative">
          <div className="flex gap-10 overflow-x-auto pb-6 pr-10 scroll-smooth">
            {videos.map((video) => (
              <div
                key={video.id}
                className="min-w-[340px] md:min-w-[400px] lg:min-w-[460px] flex-shrink-0"
              >
                {/* Video Card */}
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                  {/* Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
                    <p className="text-[10px] uppercase tracking-widest text-slate-300">
                      {video.label}
                    </p>
                    <h3 className="font-display text-sm font-semibold text-white">
                      {video.headline}
                    </h3>
                    <p className="mt-1 text-xs text-slate-200 leading-snug line-clamp-4">
                      {video.description}
                    </p>
                  </div>

                  {/* Video */}
                  <iframe
                    src={video.url}
                    title={video.headline}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Work;
