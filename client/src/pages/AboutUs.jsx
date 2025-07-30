import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Linkedin } from "lucide-react";

const AnimatedCard = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

const StatCard = ({ number, label, suffix = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="text-center text-white"
  >
    <div className="text-3xl md:text-4xl font-bold mb-2">
      {number}{suffix}
    </div>
    <div className="text-sm opacity-90">{label}</div>
  </motion.div>
);

const AboutUs = () => {

  const heroCards = [
    {
      image: "/child1.svg",
      bgColor: "bg-green-400",
    },
    {
      image: "child2.svg",
      bgColor: "bg-orange-400",
    },
    {
      image: "child3.svg",
      bgColor: "bg-blue-400",
    },
    {
      image: "child4.svg",
      bgColor: "bg-yellow-400",
    },
  ];

  const differentiators = [
    {
      title: "Curriculum-Aligned, Future-Focused",
      description: "Our content seamlessly integrates with existing curricula while preparing students for tomorrow's challenges.",
      bgColor: "bg-[#A5ED6E]",
      iconBg: "bg-green-500",
      image: "different1.svg"
    },
    {
      title: "Gamified Designed Modules",
      description: "Learning becomes an adventure with our gamified approach that keeps students engaged and motivated.",
      bgColor: "bg-[#FFE495]",
      iconBg: "bg-yellow-500",
      image: "different2.svg"
    },
    {
      title: "Age-Smart Content Structure",
      description: "Every lesson is carefully crafted to match cognitive development stages and learning preferences.",
      bgColor: "bg-[#BFEDF8]",
      iconBg: "bg-green-500",
      image: "different3.svg"
    },
    {
      title: "Project-Based Learning",
      description: "Students don't just learn concepts—they build, create, and solve real-world problems..",
      bgColor: "bg-[#E9D9FF]",
      iconBg: "bg-purple-500",
      image: "different4.svg"
    },

    {
      title: "Real-World Relevance",
      description: "Every skill and concept connects directly to practical applications students will use in their future careers.",
      bgColor: "bg-[#A6FFC4]",
      iconBg: "bg-green-500",
      image: "different5.svg"
    },
  ];

  const teamMembers = [
    {
      name: "Sharad Raj Ustar",
      image: "sharad.svg",
      bgColor: "bg-[#66C537]/20",
      linkedin: "https://www.linkedin.com/in/sharadrajutsav/",
      post: "Founder & CEO",
      iconbg: "bg-[#236900]"
    },
    {
      name: "Shreya Sinha",
      image: "shreya.svg",
      bgColor: "bg-[#5CE1E6]/20",
      linkedin: "https://www.linkedin.com/in/shreya-sinha2802/",
      post: "Co-Founder",
      iconbg: "bg-[#007074]"
    },
    {
      name: "CA Saurabh Jain",
      image: "saurabh.svg",
      bgColor: "bg-[#FFDE59]/20",
      linkedin: "https://www.linkedin.com/in/ca-saurabh-jain-8a014034/",
      post: "Co-Founder",
      iconbg: "bg-[#B59100]"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full">
        <div className="bg-[url('/paper.svg')] bg-cover bg-center bg-no-repeat w-full mx  ">
          {/* Main Heading */}
          <div
            className="w-full relative h-full  py-8 ">
            <div className="absolute inset-0 -z-10">
              {/* Small yellow circle - top left */}
              <div className="w-20 h-20 bg-yellow-400 rounded-full absolute top-6 left-10 sm:top-14 sm:left-20"></div>

              {/* Large blue circle - top right */}
              <div className="w-16 h-16 bg-blue-500 rounded-full absolute top-15 right-8"></div>

              {/* Small pink circle - bottom left */}
              <div className="w-10 h-10 bg-pink-500 rounded-full absolute bottom-10 left-10"></div>

              {/* Medium red circle - middle right */}
              <div className="w-8 h-8 bg-red-400 rounded-full absolute top-1/2 right-4"></div>

              {/* Small purple circle - bottom right */}
              <div className="w-6 h-6 bg-purple-500 rounded-full absolute bottom-6 right-20"></div>

              {/* Large orange circle - bottom center */}
              <div className="w-12 h-12 bg-orange-400 rounded-full absolute bottom-14 left-1/3"></div>

              {/* Small green circle - middle left */}
              <div className="w-4 h-4 bg-green-400 rounded-full absolute top-1/3 left-1/4"></div>

              {/* Extra large indigo circle - bottom right area */}
              <div className="w-14 h-14 bg-indigo-400 rounded-full absolute top-3/4 right-1/3"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center flex flex-col justify-center items-center mb-16"
            >
              <div className="flex flex-wrap flex-col items-center text-center mb-5">
                <div className="bg-white w-auto backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 mt-14 sm:mt-8 border border-black/50">
                  <div className="text-black text-xs sm:text-xs flex items-center gap-2">
                    <span> <img className="h-5 w-5" src="/heart.svg" alt="" /></span>Created with love
                  </div>
                </div>
              </div>

              <div className=" flex flex-col justify-center items-center  w-auto">


                <div className="relative flex flex-row w-auto  ">
                  
                  <div>
                    <h1 className="text-[#068F36] text-xl sm:text-2xl md:text-2xl lg:text-5xl  leading-tight"
                      style={{ fontFamily: '"Sigmar", sans-serif' }}>

                      Shaping the future
                    </h1>
                  </div>
                </div>

                <h1 className="text-[#068F36] text-xl sm:text-2xl md:text-2xl lg:text-5xl  leading-tight"
                  style={{ fontFamily: '"Sigmar", sans-serif' }}>
                  through smarter learning
                </h1>
              </div>

            </motion.div>

            {/* Hero Cards Grid */}
            <div className="w-[70%] h-[60vh] flex items-center justify-center mx-auto mb-15">
              <div className="grid w-full h-full grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-50">
                {heroCards.map((card, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div
                      className={`
            ${card.bgColor} 
            rounded-3xl 
            p-6 
            h-full 
            flex 
            items-end 
            overflow-hidden 
            relative 
            ${index % 2 === 1 ? 'mt-10' : ''}
          `}
                    >
                      <img
                        src={card.image}
                        alt={`Learning scenario ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                      />
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Stats Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#367E01]  px-8 py-12 mb-16"
        >
          <div className="text-center text-white mb-8">
            <p className="text-lg opacity-90">
              Way are is a mission driven company that lives to empower students, they think differently from
              <br />
              their education journey, and study more interactively
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="12K" suffix="+" label="Students Empowered" delay={0.1} />
            <StatCard number="500" suffix="+" label="Schools Connected" delay={0.2} />
            <StatCard number="95" suffix="%" label="Student Satisfaction" delay={0.3} />
            <StatCard number="24/7" label="Learning Support" delay={0.4} />
          </div>
        </div>

      </section>

      {/* Our Vision Section */}
      <section className="px-4 sm:px-8 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* Active Creators - Image Left, Content Right */}
            <AnimatedCard delay={0.2}>
              <div className="flex flex-col lg:flex-row items-center">
                {/* Image Section with Pink Background */}
                <div className="w-full lg:w-1/2 bg-[#FFB7E3] rounded-3xl p-4 sm:p-8 flex items-center justify-center mb-4 lg:mb-0">
                  <img
                    src="vision1.svg"
                    alt="Active creators illustration"
                    className="w-48 sm:w-64 h-auto object-contain"
                  />
                </div>
                {/* Text Section with Transparent Background */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 lg:px-20 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    Active Creators
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We envision a world where students are not just passive learners but
                    active creators, leaders, and innovators—where every child sees
                    themselves as capable of building something meaningful.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Future-Ready Generation - Content Left, Image Right */}
            <AnimatedCard delay={0.4}>
              <div className="flex flex-col lg:flex-row items-center">
                {/* Text Section with Transparent Background */}
                <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 lg:px-20 text-center lg:text-left order-2 lg:order-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    Future-Ready Generation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A generation of students who understand business, ethics,
                    and impact by the time they leave school— equipped with both
                    knowledge and wisdom.
                  </p>
                </div>
                {/* Image Section with Blue Background */}
                <div className="w-full lg:w-1/2 bg-[#BFEDF8] rounded-3xl p-4 sm:p-8 flex items-center justify-center mb-4 lg:mb-0 order-1 lg:order-2">
                  <img
                    src="vision2.svg"
                    alt="Future ready illustration"
                    className="w-48 sm:w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="px-4 sm:px-8 lg:px-30 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What's make us different?
            </h2>
          </motion.div>

          {/* First Row - 2 cards side by side on desktop, stacked on mobile */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Left card - 60% width on desktop, full width on mobile */}
            <AnimatedCard delay={0.1} className="flex-1 lg:flex-[3]">
              <div className={`${differentiators[0].bgColor} rounded-3xl h-full`}>
                <div className="flex flex-col md:flex-row h-full items-center">
                  {/* Image on mobile/tablet - top */}
                  <div className="w-full md:hidden mb-4">
                    <img
                      src={differentiators[0].image}
                      alt={differentiators[0].title}
                      className="w-full h-48 object-contain rounded-2xl"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex-1 relative z-10 w-full p-4 sm:p-6 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {differentiators[0].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
                      {differentiators[0].description}
                    </p>
                  </div>
                  {/* Image on desktop - right */}
                  <div className="hidden md:block w-full md:w-69 md:h-58 relative z-5 flex-shrink-0">
                    <img
                      src={differentiators[0].image}
                      alt={differentiators[0].title}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Right card - 40% width on desktop, full width on mobile */}
            <AnimatedCard delay={0.2} className="flex-1 lg:flex-[2]">
              <div className={`${differentiators[1].bgColor} rounded-3xl h-full`}>
                <div className="flex flex-col md:flex-row h-full items-center">
                  {/* Image on mobile/tablet - top */}
                  <div className="w-full md:hidden mb-4">
                    <img
                      src={differentiators[1].image}
                      alt={differentiators[1].title}
                      className="w-full h-48 object-contain rounded-2xl"
                    />
                  </div>
                  {/* Text content */}
                  <div className="flex-1 p-4 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {differentiators[1].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
                      {differentiators[1].description}
                    </p>
                  </div>
                  {/* Image on desktop - right */}
                  <div className="hidden md:block w-full md:w-50 flex-shrink-0">
                    <img
                      src={differentiators[1].image}
                      alt={differentiators[1].title}
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Second Row - 3 equal cards, single column on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Image at top */}
            <AnimatedCard delay={0.3}>
              <div className={`${differentiators[2].bgColor} relative rounded-3xl h-auto md:h-[50vh]`}>
                <div className="flex flex-col gap-4 p-4 md:p-0">
                  {/* Image at top */}
                  <div className="w-full h-48 md:h-60">
                    <img
                      src={differentiators[2].image}
                      alt={differentiators[2].title}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                  {/* Text content */}
                  <div className="p-2 md:p-5 md:py-5 md:absolute md:bottom-0 md:left-0 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {differentiators[2].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
                      {differentiators[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Card 2 - Image at bottom on desktop, top on mobile */}
            <AnimatedCard delay={0.4}>
              <div className={`${differentiators[3].bgColor} rounded-3xl relative h-auto md:h-[50vh]`}>
                <div className="flex flex-col gap-4 p-4 md:p-0">
                  {/* Image on mobile - top */}
                  <div className="w-full h-48 md:hidden">
                    <img
                      src={differentiators[3].image}
                      alt={differentiators[3].title}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                  {/* Text content */}
                  <div className="p-2 md:p-6 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {differentiators[3].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-smd leading-relaxed">
                      {differentiators[3].description}
                    </p>
                  </div>
                  {/* Image on desktop - bottom */}
                  <div className="hidden md:block w-full md:absolute md:bottom-0 md:left-0 h-60">
                    <img
                      src={differentiators[3].image}
                      alt={differentiators[3].title}
                      className="w-full h-70 object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Card 3 - Image at top */}
            <AnimatedCard delay={0.3}>
              <div className={`${differentiators[4].bgColor} relative rounded-3xl h-auto md:h-[50vh]`}>
                <div className="flex flex-col gap-4 p-4 md:p-0">
                  {/* Image at top */}
                  <div className="w-full h-48 md:h-60">
                    <img
                      src={differentiators[4].image}
                      alt={differentiators[4].title}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </div>
                  {/* Text content */}
                  <div className="p-2 md:p-5 md:py-5 md:absolute md:bottom-0 md:left-0 text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {differentiators[4].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-md leading-relaxed">
                      {differentiators[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* People Behind This Vision */}
      <section className="px-6 py-16">
        <div className="w-[80%] mx-auto">
          <div

            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              People behind this vision
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full mx-auto overflow-visible">
            {teamMembers.map((member, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.2}
                className="text-center cursor-pointer overflow-visible group"
                whileHover={{
                  scale: 1.05,
                  scaleX: 2.08,
                  zIndex: 10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                initial={{ zIndex: 1 }}
              >
                <div className="rounded-3xl mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:scale-x-108 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-2xl transition-transform duration-300 ease-out group-hover:scale-x-108 group-hover:scale-118"
                  />
                </div>
                <div className={`flex flex-col ${member.bgColor} h-[10vh] rounded-xl items-center justify-center gap- transition-all duration-300 group-hover:scale-x-108`}>
                  <div>
                    <p className="text-xs sm:text-md transition-all duration-300">{member.post}</p>
                  </div>
                  <div className="flex items-center gap-2 transition-all duration-300">
                    <h3 className="text-xl sm:text-3xl font-bold text-gray-800">
                      {member.name}
                    </h3>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white text-2xl font-bold px-2 py-0.5 rounded-sm ${member.iconbg} transition-transform duration-200 hover:scale-110`}
                      >
                        in
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Want to Play All Levels CTA */}
      <section className="px-4 sm:px-6 lg:px-6 py-8 sm:py-12 lg:py-16">
        <div className="w-full sm:w-[95%] lg:w-[80%] mx-auto">
          <AnimatedCard delay={0.2}>
            <div className="bg-yellow-400 relative w-full h-auto lg:h-[50vh] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                <div className="flex-1 w-full lg:w-[60%] h-full text-center lg:text-left">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                      Want to play all the levels?
                    </h2>
                  </div>
                  <div className="mb-6 sm:mb-8 lg:mb-0">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      Our interactive tools, immersive story-based lessons, and fun gamification are
                      designed to keep kids engaged. As they play games, collect badges and unlock
                      concepts. With every lesson, they'll also see how their hard work improving
                      their performance outcome while helping them in learning.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[40%] relative flex flex-col items-center">
                  <div className="w-full h-48 sm:h-56 lg:h-63 mb-4 lg:mb-0">
                    <img
                      src="CTA.svg"
                      alt="Gaming trophy and dice illustration"
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <button
                    
                    className="bg-green-600 text-white px-1.5 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-xs sm:text-base absolute bottom-4 right-4 lg:absolute lg:bottom-0 lg:right-1"
                  >
                    Book Your Free Demo → 14 days
                  </button>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>


    </div>
  );
};

export default AboutUs;