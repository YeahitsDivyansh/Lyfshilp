import React from "react";

const Hero = () => {
  return (
    <section
      className="text-white py-20 pb-40 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #3F9400 0%, #2C6601 100%)",
      }}
    >
      {/* ✨ Light Shine Behind Heading */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="w-72 h-72 sm:w-80 sm:h-80 bg-white opacity-13 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center space-y-4 relative z-10">
        {/* Heading: 2-line layout, Sigmar font, emoji after "progress" */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold sigmar-font leading-tight">
          <div>Pick the plan that powers</div>
          <div className="inline-flex items-center justify-center">
            your progress
            <img
              src="/pricingDesign/runwk899FVEasw-ar-11-video-1-d-unscreen 1.svg"
              alt="Rupee emoji"
              className="inline-block w-10 h-10 sm:w-11 sm:h-11 ml-2 mt-1 align-middle"
            />
          </div>
        </h1>

        {/* Subtext */}
        <p className="text-gray-100 text-sm sm:text-lg mt-2">
          Affordable and scalable plans packed with features, notes, and
          learning tools.
        </p>
      </div>
    </section>
  );
};

export default Hero;
