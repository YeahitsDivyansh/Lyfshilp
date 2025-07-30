import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, ChevronDown, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowUp } from "react-icons/fa";
import { useAuth } from "@/contexts/AuthContext";
import emailjs from '@emailjs/browser';

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

// Trial Booking Modal Component
const TrialBookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    class: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        class: ''
      });
      setShowSuccess(false);
      setError('');
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // EmailJS configuration - You need to set these up in your EmailJS account
      const serviceId = 'service_52co609'; // Replace with your EmailJS service ID
      const templateId = 'template_50ibn0n'; // Replace with your EmailJS template ID
      const publicKey = 'zgnJuM3MRywVUxjcR'; // Replace with your EmailJS public key

      const templateParams = {
        to_email: 'anujyelve3074@gmail.com',
        subject: 'New Free Trial Request',
        name: formData.fullName,
        email: formData.email,
        phone: formData.phoneNumber,
        class: formData.class,
        message: `A new user wants to book a free trial:
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone Number: ${formData.phoneNumber}
        Class: ${formData.class}`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setShowSuccess(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          {/* Modal content */}
          <div className="p-6 sm:p-8">
            {!showSuccess ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Book Your Free Trial
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll contact you soon!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Class */}
                  <div>
                    <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">
                      Class/Grade *
                    </label>
                    <select
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select your class</option>
                      
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                      <option value="Class 9">Class 9</option>
                      <option value="Class 10">Class 10</option>
                      <option value="Class 11">Class 11</option>
                      <option value="Class 12">Class 12</option>
                    </select>
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Book Free Trial'}
                  </button>
                </form>
              </>
            ) : (
              /* Success message */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Request Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you! We'll contact you soon to schedule your free trial.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Progress Card Component
const ProgressCardComponent = () => {
  const [progress, setProgress] = useState(35);
  const [arrowPosition, setArrowPosition] = useState("bottom");
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  // Auto-play on mobile
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        handleButtonHover();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleButtonHover = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Step 1: Progress to 50%, arrow moves up slightly
    setTimeout(() => {
      setProgress(50);
      setArrowPosition("middle");
    }, 100);

    // Step 2: Progress to 70%, arrow moves just below button
    setTimeout(() => {
      setProgress(70);
      setArrowPosition("near");
    }, 600);

    // Step 3: Progress to 100%, arrow moves on top of button
    setTimeout(() => {
      setProgress(100);
      setArrowPosition("top");
    }, 1100);

    // Reset after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 1600);
  };

  const handleButtonLeave = () => {
    if (isAnimating) return;

    setProgress(35);
    setArrowPosition("bottom");
  };

  const getArrowClasses = () => {
    const baseClasses =
      "absolute left-1/2 transform -translate-x-1/2 text-xl text-black transition-all duration-500 pointer-events-none";

    switch (arrowPosition) {
      case "bottom":
        return `${baseClasses} top-full mt-6`;
      case "middle":
        return `${baseClasses} top-full mt-3`;
      case "near":
        return `${baseClasses} top-full mt-1`;
      case "top":
        return `${baseClasses} top-1/2 -translate-y-1/2`;
      default:
        return `${baseClasses} top-full mt-6`;
    }
  };

  return (
    <div className="mx-auto p-2 sm:p-4 w-full bg-white rounded-md pt-4 sm:pt-10 shadow-lg">
      {/* Progress Bar */}
      <div className="mb-2 sm:mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 sm:h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Play Button Container */}
      <div className="relative mb-4 sm:mb-8">
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-1.5 sm:py-2 px-2 sm:px-4 rounded-lg transition-all duration-300 text-xs sm:text-sm"
          onMouseEnter={isMobile ? undefined : handleButtonHover}
          onMouseLeave={isMobile ? undefined : handleButtonLeave}
        >
          ✨ Let's Play
        </button>
      </div>
    </div>
  );
};

// Bitcoin Card Component with local state
const BitcoinCard = ({ bitcoinImages }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();

  // Auto-play on mobile
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 3000);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    let timeouts = [];

    if (isHovered && !isAnimating) {
      setIsAnimating(true);

      // Debug log
      console.log("Starting animation with images:", bitcoinImages);

      // Cycle through images
      for (let i = 1; i < bitcoinImages.length; i++) {
        timeouts.push(
          setTimeout(() => {
            console.log(`Switching to image ${i}:`, bitcoinImages[i]);
            setCurrentImageIndex(i);
          }, i * 500) // Reduced to 500ms for faster cycling
        );
      }

      // Reset to first image after complete cycle
      timeouts.push(
        setTimeout(() => {
          console.log("Resetting to first image");
          setCurrentImageIndex(0);
          setIsAnimating(false);
        }, bitcoinImages.length * 500)
      );
    }

    if (!isHovered) {
      setCurrentImageIndex(0);
      setIsAnimating(false);
    }

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [isHovered, bitcoinImages]);

  return (
    <div className="relative w-full h-40 sm:h-60">
      <motion.div
        className="absolute inset-0 bg-white rounded-lg overflow-hidden cursor-pointer shadow-lg"
        onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
        onMouseLeave={isMobile ? undefined : () => setIsHovered(false)}
        initial={{ scale: 1, y: 0 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
      >
        <motion.div
          className="w-full h-full relative"
          animate={{
            rotate: isHovered ? [-1, 1, -1] : 0,
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="w-full h-full relative">
            {bitcoinImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Bitcoin card variant ${index + 1}`}
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: index === 0 ? 1 : 0 }}
                animate={{
                  opacity: currentImageIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

// People Avatars Component with local state
const PeopleAvatars = ({ defaultImages }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);
  const isMobile = useIsMobile();

  // Auto-play on mobile
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 2000);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    setShowTeacher(isHovered);
  }, [isHovered]);

  const chotuArrowVariants = {
    default: { x: 0 },
    hover: { x: -40 },
  };

  const velmaArrowVariants = {
    default: { x: 0 },
    hover: { x: -40 },
  };

  const raviArrowVariants = {
    default: { x: 0 },
    hover: { x: 40 },
  };

  const teacherArrowVariants = {
    default: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const transition = {
    duration: 0.35,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const crossFadeTransition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  };

  return (
    <div className="relative h-full flex flex-col items-center">
      <div
        className="relative w-[340px] h-[210px] cursor-pointer"
        onMouseEnter={isMobile ? undefined : () => setIsHovered(true)}
        onMouseLeave={isMobile ? undefined : () => setIsHovered(false)}
      >
        {/* Chotu Label & Arrow */}
        <motion.div
          className="absolute top-4 left-4"
          variants={chotuArrowVariants}
          animate={isHovered ? "hover" : "default"}
          transition={transition}
        >
          <div className="w-15 h-12 absolute mt-4 ml-30 top-1/2 -left-7 transform -translate-y-1/2">
            <img
              src={defaultImages.chotuArrow}
              alt="Chotu arrow"
              className=""
            />
          </div>
        </motion.div>

        {/* Velma Label & Arrow */}
        <motion.div
          className="absolute top-4 right-4"
          variants={velmaArrowVariants}
          animate={isHovered ? "hover" : "default"}
          transition={transition}
        >
          <div className="w-15 h-12 absolute mt-4 mr-25 top-1/2 -right-7 transform -translate-y-1/2">
            <img
              src={defaultImages.velmaArrow}
              alt="Velma arrow"
              className=""
            />
          </div>
        </motion.div>

        {/* Circle Images - Cross-fade between states */}
        <div className="absolute top-1/2 w-[80%] left-1/2 mr-15 transform -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait">
            {!showTeacher ? (
              <motion.img
                key="circlesWithoutTeacher"
                src={defaultImages.circlesWithoutTeacher}
                alt="Circles without teacher"
                className="w-[500px] h-[160px]"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
              />
            ) : (
              <motion.img
                key="circlesWithTeacher"
                src={defaultImages.circlesWithTeacher}
                alt="Circles with teacher"
                className="w-[500px] h-[160px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={transition}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Ravi Label & Arrow */}
        <motion.div
          className="absolute bottom-4 left-4"
          variants={raviArrowVariants}
          animate={isHovered ? "hover" : "default"}
          transition={transition}
        >
          <div className="w-15 h-12 mb-6 ml-18 absolute top-1/2 -left-7 transform -translate-y-1/2">
            <img src={defaultImages.raviArrow} alt="Ravi arrow" className="" />
          </div>
        </motion.div>

        {/* Teacher Label & Arrow */}
        <motion.div
          className="absolute bottom-4 right-4"
          variants={teacherArrowVariants}
          animate={showTeacher ? "hover" : "default"}
          transition={crossFadeTransition}
        >
          <div className="w-15 h-12 mb-18 mr-8 absolute top-1/2 -right-7 transform -translate-y-1/2">
            <img
              src={defaultImages.teacherArrow}
              alt="Teacher arrow"
              className=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Student Feedback Carousel Component
const StudentFeedbackCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
    },
  });

  const feedbackCards = [
    {
      text: "I like this type of quiz because it Shows us \"the answer\" when we get wrong and we don't understand the answer at the end it give feedback, where can understand it more so on the test we can get a A or B because we learned by wayground.",
      author: "",
      bgColor: "bg-purple-300",
      rotation: "rotate-1"
    },
    
    {
      text: "This platform made learning so much fun! The games are engaging and help me remember concepts better than traditional studying methods.",
      author: "Alex",
      bgColor: "bg-pink-200",
      rotation: "-rotate-1"
    },
    {
      text: "The interactive notes and quizzes helped me improve my grades significantly. I love how it explains concepts in simple terms.",
      author: "Emma",
      bgColor: "bg-green-100",
      rotation: "rotate-1"
    },
    {
      text: "Amazing way to learn! The combination of games and structured content makes studying enjoyable rather than a chore.",
      author: "Ryan",
      bgColor: "bg-purple-200",
      rotation: "-rotate-1"
    }
  ];

  return (
    <div className="relative p-5 max-w-6xl mx-auto">
      <div ref={sliderRef} className="keen-slider">
        {feedbackCards.map((card, index) => (
          <div key={index} className={`keen-slider__slide transform ${card.rotation}`}>
            <div className={`${card.bgColor} p-8 sm:p-6 rounded-lg shadow-lg relative h-40 sm:h-48`}>
              <div className="h-full overflow-hidden flex flex-col justify-between">
                <p
                  className="text-black text-left text-xs sm:text-sm leading-relaxed flex-1"
                  style={{ fontFamily: '"Patrick Hand", cursive' }}

                >
                  {card.text}
                </p>
                {card.author && (
                  <p className="text-right mt-2 font-bold text-black text-xs sm:text-sm">

                  </p>
                )}
              </div>
              {/* Tape effect */}
              <div className={`absolute -top-2 ${index % 2 === 0 ? 'left-4 sm:left-8' : 'right-4 sm:right-8'} w-8 sm:w-12 h-4 sm:h-6 bg-yellow-100 opacity-80 rounded transform ${index % 2 === 0 ? '-rotate-12' : 'rotate-12'}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg transition duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: feedbackCards.length - 2 }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition duration-300 ${currentSlide === idx ? 'bg-green-600' : 'bg-gray-300'
                }`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const { user } = useAuth();

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add mobile autoplay for Feature 2 (circular logo)
  const [feature2AutoHover, setFeature2AutoHover] = useState(false);

  // Add mobile autoplay for Feature 5 (skill icons)
  const [feature5AutoHover, setFeature5AutoHover] = useState(false);

  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Bitcoin images array (replace with your actual image paths)
  const bitcoinImages = [
    "/Default1.png", // Your default bitcoin image
    "/Default2.png", // Your second variant
    "/Default3.png", // Your third variant
    "/Default4.png", // Your fourth variant
  ];

  const defaultImages = {
    circlesWithoutTeacher: "/avatars1.png",
    circlesWithTeacher: "/avatars2.png",
    chotuArrow: "/chotu.png",
    velmaArrow: "/velma.png",
    raviArrow: "/ravi.png",
    teacherArrow: "/teacher.png",
  };

  const testimonials = [
    {
      image: "/Test1.png",
      name: "Rowhan Smith",
      title: "CEO, Foreclosure",
      quote:
        "Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest-hottest deals on the Internet.",
    },
    {
      image: "/Test2.png",
      name: "Ritika Sethi",
      title: "CEO, Foreclosure",
      quote:
        "Unlike other sites that update weekly or monthly, we refresh our listings constantly—bringing you the hottest, most up-to-date deals available on the Internet.",
    },
    {
      image: "/Test3.png",
      name: "Sarah Johnson",
      title: "Marketing Director, PropTech",
      quote:
        "The platform's real-time updates have transformed how we approach property investments. We're always ahead of the competition with the latest market opportunities.",
    },
  ];

  const features = [
    {
      title: "Get the sepcial Curated Notes",
      description:
        "Choose from 100+ expert-made topic notes. Read it while doing fun activities",
      bgColor: "bg-blue-200",
      mockupImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    },
    {
      title: "Learn and have fun, from anywhere",
      description: "Just google edumaniax, to start your fun learning journey",
      bgColor: "bg-blue-100",
      centerIcon: true,
    },
    {
      title: "Connect & learn together",
      description:
        "Students and teachers, both can learn together without any hussle, at their on ease",
      bgColor: "bg-yellow-200",
      peopleIcons: true,
    },
    {
      title: "Jump-start amazing games",
      description:
        "You can start playing amazing simple games any time, anywhere to learn",
      bgColor: "bg-orange-200",
      dragDropGame: true,
    },
    {
      title: "Learn any of trending skill, with fun",
      description:
        "You can learn subjects like AI, Law, Science etc. while having fun and playing simple games",
      bgColor: "bg-green-200",
      skillIcons: true,
    },
  ];

  const courses = [
    {
      title: "Fundamentals of Finance",
      description: "Learn the basics of budgeting, saving, and financial planning for a secure future.",
      rating: 4.7,
      notesLink: "/finance/notes",
      gamesLink: "/finance/games",
      level: "Beginner",
      duration: "6 weeks",
      students: "2,847",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Computers",
      description: "Understand computer fundamentals, hardware, software, and digital literacy essentials.",
      rating: 4.6,
      notesLink: "/computer/notes",
      gamesLink: "/computer/games",
      level: "Intermediate",
      duration: "5 weeks",
      students: "3,215",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fundamentals of Law",
      description: "Gain a foundational understanding of legal principles, rights, and responsibilities.",
      rating: 4.8,
      notesLink: "/law/notes",
      gamesLink: "/law/games",
      level: "Advanced",
      duration: "7 weeks",
      students: "1,932",
      category: "Legal",
      image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
      title: "Communication Skills",
      description: "Enhance your verbal, non-verbal, and written communication for personal and professional success.",
      rating: 4.9,
      notesLink: "/communications/notes",
      gamesLink: "/communications/games",
      level: "Beginner",
      duration: "4 weeks",
      students: "4,102",
      category: "Soft Skills",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Entrepreneurship",
      description: "Learn how to start, manage, and grow a successful business from scratch.",
      rating: 4.7,
      notesLink: "/entreprenerurship/notes",
      gamesLink: "/entreprenerurship/games",
      level: "Intermediate",
      duration: "6 weeks",
      students: "2,658",
      category: "Business",
      image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Digital Marketing",
      description: "Explore SEO, social media, and online advertising to grow brands digitally.",
      rating: 4.6,
      notesLink: "/digital-marketing/notes",
      gamesLink: "/digital-marketing/games",
      level: "Advanced",
      duration: "5 weeks",
      students: "3,876",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Leadership & Adaptability",
      description: "Develop leadership skills and learn to thrive in changing environments.",
      rating: 4.8,
      notesLink: "/leadership/notes",
      gamesLink: "/leadership/games",
      level: "Beginner",
      duration: "6 weeks",
      students: "2,491",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Environmental",
      description: "Understand environmental issues and sustainable practices for a better future.",
      rating: 4.7,
      notesLink: "/environmental/notes",
      gamesLink: "/environmental/games",
      level: "Intermediate",
      duration: "6 weeks",
      students: "1,743",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    },

  ];

  const categories = [
    "All",
    "Finance",
    "Technology",
    "Legal",
    "Soft Skills",
    "Business",
    "Marketing",
    "Leadership",
    "Environment",
    "Health",
  ];

  const faqs = [
    {
      question: "What makes EduManiax courses truly unique?",
      answer: "Our courses blend cutting-edge interactive learning with real-world applications through gamification, AI-powered personalized learning paths, and adaptive assessments. Every piece of content is crafted by industry veterans and continuously updated to reflect the latest trends and best practices in your field.",

      QbgColor: "bg-green-400",
      AbgColor: "bg-green-100"
    },
    {
      question: "How do I get instant help when I'm stuck?",
      answer:
        "Support is always within reach through multiple channels: 24/7 intelligent chat support, thriving community forums, weekly instructor office hours, and collaborative peer study groups. Our AI learning companion provides instant assistance with common questions and intelligently guides you to the perfect resources.",
      QbgColor: "bg-pink-300",
      AbgColor: "bg-pink-100",
    },
    {
      question: "What if I'm not completely satisfied?",
      answer:
        "We stand behind every learning experience with our comprehensive 30-day satisfaction guarantee. If you're not thriving in your course, we'll provide a complete refund with zero hassle. Plus, you'll have ongoing access to our vibrant community forums and direct mentor support throughout your journey.",
      QbgColor: "bg-blue-300",
      AbgColor: "bg-blue-100",
    },
    {
      question: "Can I showcase my certificates professionally?",
      answer:
        "Definitely! Our stunning digital certificates are designed for maximum impact across professional networks. Seamlessly add them to LinkedIn, showcase them in portfolios, or share achievements on social platforms. Each certificate includes blockchain verification for unquestionable authenticity and credibility.",
      QbgColor: "bg-purple-300",
      AbgColor: "bg-purple-100",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Mobile autoplay for Feature 2
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setFeature2AutoHover(true);
        setTimeout(() => setFeature2AutoHover(false), 3000); // Show animation for 3 seconds
      }, 5000); // Repeat every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  // Mobile autoplay for Feature 5
  useEffect(() => {
    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setFeature5AutoHover(true);
        setTimeout(() => setFeature5AutoHover(false), 2500); // Show animation for 2.5 seconds
      }, 4500); // Repeat every 4.5 seconds
    }
    return () => clearInterval(interval);
  }, [isMobile]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  // Preload all images
  useEffect(() => {
    const imageUrls = Object.values(defaultImages);
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)); // Continue even if some images fail
  }, [defaultImages]);

  if (!imagesLoaded) {
    return (
      <div className="relative w-full h-[210px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">Loading images...</div>
      </div>
    );
  }

  const filteredCourses = activeCategory === "All"
    ? courses
    : courses.filter(course => course.category === activeCategory);

  // Helper function to get level icon
  const getLevelIcon = (level) => {
    switch (level) {
      case "Beginner":
        return "/beginner.png";
      case "Intermediate":
        return "/intermediate.png";
      case "Advanced":
        return "/advance.png";
      default:
        return "/beginner.png";
    }
  };

  return (
    <div className="min-h-screen -mt-8 bg-white overflow-x-hidden">
      {/* Trial Booking Modal */}
      <TrialBookingModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative h-[100vh] sm:h-[100vh] lg:h-[95vh] w-full p-0 -mt-8">
        <div className="w-full relative h-full bg-[url('/heroBG.jpg')] bg-cover  bg-center bg-no-repeat">
          <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap  sm:mt-9  flex-col items-center text-center px-4 sm:px-6">
            {/* Trust Badge */}
            <div className="mb-3 sm:mb-5 pt-3 sm:pt-3 mt-4 sm:mt-6 md:mt-6 md:mb-3">
              <div className="bg-black backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 mt-14 sm:mt-8 border border-white/20">
                <span className="text-white text-xs sm:text-sm flex items-center gap-2">
                  ⭐ Loved by 1K+ users worldwide
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-2 sm:mb- md:-mb-2">
              <h1 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-5xl  leading-tight"
                style={{ fontFamily: '"Sigmar", sans-serif' }}>
                Master AI, Finance, Law
              </h1>
              <h1 className="text-white flex text-xl ml-8 sm:text-2xl md:text-2xl lg:text-5xl  leading-tight"
                style={{ fontFamily: '"Sigmar", sans-serif' }} >
                 With a Twist of Fun <div className=" sm:h-15 sm:w-15 "><img className="w-8 h-7 sm:h-9 sm:w-9 md:h-9 md:w-9 lg:h-15 lg:w-15" src="/Fire.gif" alt="fire" /></div>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-sm sm:text-base md:text-base max-w-4xl mx-4 sm:mx-20 lg:mt-3 lg:mx-60 mb-4 sm:mb-8 leading-tight">
              Explore Artificial Intelligence, Machine Learning, Communication,
              Coding, and more through interactive games, real-world challenges,
              and bite-sized notes
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16 w-full sm:w-auto px-4 sm:px-0">
              <button 
                onClick={() => navigate(user ? '/pricing' : '/courses')}
                className="bg-white text-black font-semibold px-4 sm:px-8 py-3 sm:py-4 rounded-md transition duration-300 cursor-pointer text-sm sm:text-sm hover:bg-gray-100"
              >
                {user ? 'Purchase Plan' : 'Get Started Free'}
              </button>
              <button 
                onClick={() => setIsTrialModalOpen(true)}
                className="border-2 border-white text-white font-semibold px-4 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-white hover:text-green-600 cursor-pointer transition duration-300 text-sm sm:text-sm flex items-center justify-center gap-2"
              >
                Book a trial
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-4 py-2 max-w-2xl mx-auto">
            {/* Main characters illustration */}
            <div className="relative h-[395px] w-[395px] sm:h-[350px] sm:w-[350px] md:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]">
              <img
                src="/heroIMG.png"
                alt="Full"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why You'll Love It Section */}
      <section className="py-10 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 lg:mb-0">
              Why you'll love it
            </h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Feature 1 - Notes */}
            <motion.div
              className="bg-[#C3E2FF] rounded-2xl p-4 sm:p-6 min-h-[300px] sm:h-80 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">
                Get the special Curated Notes
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm">
                Choose from 100+ expert-made topic notes. Read it while doing
                fun activities
              </p>

              {/* Animated Card Container with LOCAL state */}
              <div className="p-0 m-0">
                <BitcoinCard bitcoinImages={bitcoinImages} />
              </div>
            </motion.div>

            {/* Feature 2 - Learn anywhere */}
            <motion.div
              className="bg-[url('/F2.png')] bg-cover bg-center bg-no-repeat rounded-2xl p-6 h-full sm:h-80 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold text-black mb-3">
                Learn and have fun, from anywhere
              </h3>
              <p className="text-gray-700 mb-6 text-sm">
                Just google edumaniax, to start your fun learning journey
              </p>
              <div className="flex-1 flex items-center -mt-5 justify-center">
                <div className="relative group ">
                  {/* OUTER circle (on hover of this) */}
                  <div
                    className="outer w-50 h-50 border-1 border-green-300 rounded-[80px] flex items-center justify-center group"
                    onMouseEnter={isMobile ? undefined : () => setFeature2AutoHover(true)}
                    onMouseLeave={isMobile ? undefined : () => setFeature2AutoHover(false)}
                  >
                    <div className="w-40 h-40 border-1 border-green-400 rounded-[67px] flex items-center justify-center">
                      <div className="w-30 h-30 border-1 border-green-400 rounded-[47px] flex items-center justify-center">
                        {/* INNER circle */}
                        <div className={`inner border-2 bg-white border-green-500 rounded-[20px] flex items-center justify-center transition-all duration-500 delay-500 ${feature2AutoHover
                          ? 'w-24 h-24 shadow-lg shadow-green-500/50'
                          : 'w-20 h-20 group-hover:w-24 group-hover:h-24 group-hover:shadow-lg group-hover:shadow-green-500/50'
                          }`}>
                          <img
                            className={`w-17 h-15 transition-transform duration-500 ${feature2AutoHover
                              ? 'rotate-[-115deg] delay-[1000ms]'
                              : 'group-hover:rotate-[-115deg] group-hover:delay-[1000ms]'
                              }`}
                            src="/midLogo.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 - Connect & learn */}
            <motion.div
              className="bg-[url('/F3.png')] bg-cover bg-center bg-no-repeat rounded-2xl p-4 sm:p-6 min-h-[300px] sm:h-80 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">
                Connect & learn together
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm">
                Students and teachers, both can learn together without any
                hussle, at their on ease
              </p>
              <div className="flex-1 flex items-center h-[60%] justify-center">
                <PeopleAvatars defaultImages={defaultImages} />
              </div>
            </motion.div>
          </div>

          <div className="grid mt-4 sm:mt-5 grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Feature 4 - Games */}
            <motion.div
              className="bg-[url('/F4.png')] bg-cover bg-center bg-no-repeat rounded-2xl relative w-full p-4 sm:p-6 min-h-[250px] sm:h-90"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-black mb-3">
                Jump-start amazing games
              </h3>
              <p className="text-gray-700 mb-4 text-sm">
                You can start playing amazing simple games any time, anywhere to
                learn
              </p>

              {/* Progress Card Component */}
              <div className=" ml-10 h-40">
                <img className=" absolute sm:h-[45%] h-[34%] -ml-6 sm:mt-2 z-50 sm:w-[57%]" src="/mid4.png" alt="mid" />
                <div className="flex sm:w-[60%] w-[60%] ml-15 sm:ml-25 absolute bottom-0 mb-5 left-0 h-18 sm:h-28">
                  <ProgressCardComponent />
                </div>
              </div>
            </motion.div>

            {/* Feature 5 - Skills */}
            <motion.div
              className="bg-[url('/F5.png')] bg-cover bg-center bg-no-repeat rounded-2xl p-4 sm:p-6 min-h-[250px] sm:h-90 w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">
                Learn any of trending skill, with fun
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm">
                You can learn subjects like AI, Law, Science etc. while having
                fun and playing simple games
              </p>
              <div className="flex-1 flex items-center justify-center">
                <div
                  className="grid mt-4 sm:mt-10 grid-cols-5 gap-2 sm:gap-5 group"
                  onMouseEnter={isMobile ? undefined : () => setFeature5AutoHover(true)}
                  onMouseLeave={isMobile ? undefined : () => setFeature5AutoHover(false)}
                >
                  {/* 5 child divs, each has two <img> tags */}
                  <div className={`w-10 sm:w-15 h-10 sm:h-15 mt-4 sm:mt-10 transition-transform duration-300 ease-in-out ${feature5AutoHover
                    ? '-translate-y-4 sm:-translate-y-10'
                    : 'group-hover:-translate-y-4 sm:group-hover:-translate-y-10'
                    }`}>
                    <img src="/Link1.png" className="w-full h-auto" alt="Link 1" />
                    <img src="/Link2.png" className="w-full h-auto" alt="Link 2" />
                  </div>
                  <div className={`w-10 sm:w-15 h-10 sm:h-15 transition-transform duration-300 ease-in-out ${feature5AutoHover
                    ? 'translate-y-4 sm:translate-y-10'
                    : 'group-hover:translate-y-4 sm:group-hover:translate-y-10'
                    }`}>
                    <img src="/Link3.png" className="w-full h-auto" alt="Link 3" />
                    <img src="/Link4.png" className="w-full h-auto" alt="Link 4" />
                  </div>
                  <div className={`w-10 sm:w-15 h-10 sm:h-15 mt-4 sm:mt-10 transition-transform duration-300 ease-in-out ${feature5AutoHover
                    ? '-translate-y-4 sm:-translate-y-10'
                    : 'group-hover:-translate-y-4 sm:group-hover:-translate-y-10'
                    }`}>
                    <img src="/Link5.png" className="w-full h-auto" alt="Link 5" />
                    <img src="/Link6.png" className="w-full h-auto" alt="Link 6" />
                  </div>
                  <div className={`w-10 sm:w-15 h-10 sm:h-15 transition-transform duration-300 ease-in-out ${feature5AutoHover
                    ? 'translate-y-4 sm:translate-y-10'
                    : 'group-hover:translate-y-4 sm:group-hover:translate-y-10'
                    }`}>
                    <img src="/Link7.png" className="w-full h-auto" alt="Link 7" />
                    <img src="/Link8.png" className="w-full h-auto" alt="Link 8" />
                  </div>
                  <div className={`w-10 sm:w-15 h-10 sm:h-15 mt-4 sm:mt-10 transition-transform duration-300 ease-in-out ${feature5AutoHover
                    ? '-translate-y-4 sm:-translate-y-10'
                    : 'group-hover:-translate-y-4 sm:group-hover:-translate-y-10'
                    }`}>
                    <img src="/Link9.png" className="w-full h-auto" alt="Link 9" />
                    <img src="/Link10.png" className="w-full h-auto" alt="Link 10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stats Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 items-center gap-8">
            {/* Heading - order 1 on mobile, positioned in desktop grid */}
            <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:self-start">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-8 leading-tight">
                Join thousands of curious minds from top schools and
                institutions using Edumaniax to -
                <span className="text-green-600">
                  {" "}
                  make learning fun, engaging, and effective
                </span>
              </h2>
            </div>

            {/* Image - order 2 on mobile, spans both rows on desktop */}
            <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2">
              <div className="bg-green-500 rounded-2xl lg:rounded-tl-4xl lg:rounded-bl-4xl text-center h-[300px] sm:h-[430px] w-full lg:w-[550px] relative overflow-hidden">
                {/* Character illustration */}
                <div className="relative w-full pt-5 -mb-10 h-full z-10">
                  <img
                    src="/5.gif"
                    alt="Full"
                    className="absolute inset-0 w-full   object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats - order 3 on mobile, positioned in desktop grid */}
            <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-end">
              <div className="bg-gray-200 rounded-2xl p-4">
                <div className="grid grid-cols-3  divide-x sm:grid-cols-3 gap-4 sm:gap-0 sm:divide-x divide-gray-400">
                  <div className="text-center sm:pr-6">
                    <div className="text-4xl sm:text-4xl font-bold text-green-600 mb-2">
                      50+
                    </div>
                    <div className="text-xs sm:text-sm pr-2 sm:pr-0 text-gray-600">
                      Partners School overall India
                    </div>
                  </div>
                  <div className="text-center  sm:px-6">
                    <div className="text-3xl pr-4 mt-1 sm:mt-0 sm:pr-0 sm:text-4xl font-bold text-green-600 mb-2">
                      12K+
                    </div>
                    <div className="text-xs pr-2 sm:pr-0 sm:text-sm text-gray-600">
                      Students across the globe
                    </div>
                  </div>
                  <div className="text-center  sm:pl-6">
                    <div className="text-4xl sm:text-4xl font-bold text-green-600 mb-2">
                      20+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Trending topics from different categories
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-10 sm:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Courses, curated with love
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-4 py-2 text-xs whitespace-nowrap rounded-full font-medium transition duration-300 ${category === activeCategory
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6 px-2 sm:px-0">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={`${course.title}-${index}`}
                className="bg-white rounded-2xl w-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                {/* Image Section */}
                <div className="relative h-32 sm:h-40 bg-gray-900 flex-shrink-0">
                  <div className="absolute inset-0">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Content Section - Fixed Padding */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Title and Rating Row */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 pr-3">
                      <h4 className="text-sm sm:text-base font-bold text-black line-clamp-2 leading-tight">
                        {course.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs sm:text-sm font-medium">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Metadata Badges - Fixed Layout */}
                  <div className="flex flex-nowrap gap-1.5 mb-4">
                    {/* Level Badge */}
                    <div
                      className={`px-1.5 py-1 rounded-lg flex items-center gap-1 text-xs font-medium ${course.level === "Beginner"
                        ? "bg-green-100 text-green-600"
                        : course.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                        }`}
                    >
                      <img src={getLevelIcon(course.level)} alt={course.level} className="w-3 h-3" />
                      <span className="pb-0.5">{course.level}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="flex items-center bg-[#A063F3]/10 rounded-lg py-1 px-1.5 gap-1">
                      <img src="/time.png" alt="" className="w-3 h-3" />
                      <span className="text-xs pb-0.5 text-[#A063F3] font-medium">{course.duration}</span>
                    </div>

                    {/* Students Badge */}
                    <div className="flex items-center bg-[#008FA6]/10 rounded-lg py-1 px-2.5 gap-1">
                      <img src="/people.png" alt="" className="w-3 h-3" />
                      <span className="text-xs pb-0.5 text-[#008FA6] font-medium">{course.students}</span>
                    </div>
                  </div>

                  {/* Buttons Row - Improved Spacing */}
                  <div className="flex gap-2 mt-auto">
                    <Link
                      to={course.gamesLink}
                      className="flex-1"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#10903E] text-white font-medium py-2.5 px-3 rounded-lg hover:bg-green-700 transition duration-300 text-sm flex items-center justify-center gap-2"
                      >
                        <img src="/game.png" alt="Game" className="w-4 h-4" />
                        Let's Play &gt;
                      </motion.button>
                    </Link>

                    <Link
                      to={course.notesLink}
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#D9A30B] flex items-center text-white font-medium py-2.5 px-3 rounded-lg hover:bg-orange-500 transition duration-300 text-sm"
                      >
                        <img src="/notes.png" alt="Notes" className="w-4 h-4 mr-1" />
                        Notes
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full h-full flex justify-center items-center">
            
              <a href="/courses" className="border-2 sm:border-3 border-green-600 text-green-600 mt-6 sm:mt-8 mb-6 sm:mb-10 lg:mb-10 font-medium px-4 sm:px-6 py-2 rounded-lg hover:bg-green-50 transition duration-300 text-sm sm:text-base">
                View More..
              </a>
            
          </div>
        </div>
      </section>

      {/* Student Feedback Section - CAROUSEL */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-4">
            Hear it from the desks
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-8 sm:mb-16">
            that matter most
          </h2>

          <StudentFeedbackCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-1 sm:py-2 mb-10 sm:mb-20 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6  text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-4">
            Frequently Asked
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-4">
            Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg mb-8 sm:mb-16">
            Everything you need to know before getting started
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-2 md:gap-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={` rounded-2xl p-4  cursor-pointer transition duration-300 `}
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`flex ${faq.QbgColor} p-8 z-30 relative  rounded-2xl -mb-4 justify-between items-center`}>
                  <h3 className={`text-sm  sm:text-lg font-semibold text-black text-left flex-1 pr-2`}>
                    {faq.question}
                  </h3>
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <ChevronDown
                      className={`w-3 sm:w-4 h-3 sm:h-4 text-green-600  transition-transform duration-300 ${openFAQ === index ? "transform rotate-180" : ""
                        }`}
                    />
                  </div>
                </div>
                {openFAQ === index && (
                  <motion.p
                    className={`text-black ${faq.AbgColor} mt-3 sm:-mt-4 rounded-bl-2xl rounded-br-2xl pt-6 p-3  text-left text-sm`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 bg-gray-700 text-white p-4 rounded-lg shadow-md hover:bg-gray-800 transition-all cursor-pointer duration-300 z-100"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default Home;