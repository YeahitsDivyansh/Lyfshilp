import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import {
  BookOpen,
  Gamepad2,
  Clock,
  Users,
  Star,
  TrendingUp,
  Award,
  Play,
  ChevronRight,
  Filter,
  Search,
  ChevronDown,
  ArrowRight
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Fundamentals of Finance",
    description: "Master money management, budgeting, saving, and smart investing to build a strong financial future.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=800&q=80",
    notesLink: "/finance/notes",
    gamesLink: "/finance/games",
    category: "Finance",
    difficulty: "Beginner",
    duration: "6 weeks",
    students: 2847,
    rating: 4.8,
    progress: 0,
    color: "emerald"

  },
  {
    id: 2,
    title: "Computer Science",
    description: "Dive into programming, algorithms, and software development with hands-on projects and real-world applications.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    notesLink: "/computer/notes",
    gamesLink: "/computer/games",
    category: "Technology",
    difficulty: "Intermediate",
    duration: "8 weeks",
    students: 3521,
    rating: 4.9,
    progress: 0,
    color: "blue"
  },
  {
    id: 3,
    title: "Fundamentals of Law",
    description: "Navigate legal systems, understand your rights, and become an informed citizen with practical legal knowledge.",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
    notesLink: "/law/notes",
    gamesLink: "/law/games",
    category: "Legal",
    difficulty: "Beginner",
    duration: "5 weeks",
    students: 1923,
    rating: 4.7,
    progress: 0,
    color: "purple"
  },
  {
    id: 4,
    title: "Communication Mastery",
    description: "Transform your speaking, listening, and presentation skills for personal and professional success.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&auto=format&fit=crop&q=60",
    notesLink: "/communications/notes",
    gamesLink: "/communications/games",
    category: "Soft Skills",
    difficulty: "Beginner",
    duration: "4 weeks",
    students: 4156,
    rating: 4.8,
    progress: 0,
    color: "orange"
  },
  {
    id: 5,
    title: "Entrepreneurship Bootcamp",
    description: "Turn innovative ideas into thriving businesses with strategic planning, leadership, and market insights.",
    image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=600&auto=format&fit=crop&q=60",
    notesLink: "/entreprenerurship/notes",
    gamesLink: "/entreprenerurship/games",
    category: "Business",
    difficulty: "Advanced",
    duration: "10 weeks",
    students: 2634,
    rating: 4.9,
    progress: 0,
    color: "red"
  },
  {
    id: 6,
    title: "Digital Marketing Pro",
    description: "Master social media, SEO, content creation, and digital advertising to build powerful online presence.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    notesLink: "/digital-marketing/notes",
    gamesLink: "/digital-marketing/games",
    category: "Marketing",
    difficulty: "Intermediate",
    duration: "7 weeks",
    students: 3782,
    rating: 4.8,
    progress: 0,
    color: "pink"
  },
  {
    id: 7,
    title: "Leadership & Adaptability",
    description: "Develop confident leadership, emotional intelligence, and adaptability through practical challenges.",
    image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?w=600&auto=format&fit=crop&q=60",
    notesLink: "/leadership/notes",
    gamesLink: "/leadership/games",
    category: "Leadership",
    difficulty: "Intermediate",
    duration: "6 weeks",
    students: 2145,
    rating: 4.7,
    progress: 0,
    color: "indigo"
  },
  {
    id: 8,
    title: "Environmental Sustainability",
    description: "Explore climate solutions, conservation strategies, and sustainable practices for a greener future.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    notesLink: "/environmental/notes",
    gamesLink: "/environmental/games",
    category: "Environment",
    difficulty: "Beginner",
    duration: "5 weeks",
    students: 1876,
    rating: 4.6,
    progress: 0,
    color: "green"
  },
  {
    id: 9,
    title: "Wellness & Mental Health",
    description: "Build emotional resilience, stress management skills, and holistic approaches to mental and physical wellness.",
    image: "https://images.unsplash.com/photo-1644952350841-070996fad2af?w=600&auto=format&fit=crop&q=60",
    notesLink: "/social-learning/notes",
    gamesLink: "/social-learning/games",
    category: "Health",
    difficulty: "Beginner",
    duration: "4 weeks",
    students: 3456,
    rating: 4.9,
    progress: 0,
    color: "teal"
  }
];

const categories = ["All", "Finance", "Technology", "Legal", "Soft Skills", "Business", "Marketing", "Leadership", "Environment", "Health"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

const CourseCard = ({ course, index }) => {
  const [isHovered, setIsHovered] = useState(false);

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
    <motion.div
      className="bg-white rounded-2xl w-full overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-32 sm:h-40 bg-gray-900 flex-shrink-0">
        {/* Course-specific background image */}
        <div className="absolute inset-0">
          <motion.img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
          <span className="bg-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
            {course.category}
          </span>
        </div>
      </div>

      {/* Content Section - Fixed Padding */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Title and Rating Row */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 w-[80%]">
            <h4 className="text-md font-bold  text-black mb-2 truncate group-hover:text-gray-700 transition-colors duration-300">
              {course.title}
            </h4>
          </div>
          <div className="flex items-center gap-1 mt-1 flex-shrink-0">
            <Star className="w-3 sm:w-4 h-3 sm:h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">
              {course.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-xs mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Metadata Badges - Fixed Layout */}
        <div className="flex flex-nowrap gap-1.5 mb-4">
          {/* Level Badge */}
          <div
            className={`px-1.5 py-1 rounded-lg flex items-center gap-1 text-xs font-medium ${course.difficulty === "Beginner"
                ? "bg-green-100 text-green-600"
                : course.difficulty === "Intermediate"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-red-100 text-red-600"
              }`}
          >
            <img src={getLevelIcon(course.difficulty)} alt={course.difficulty} className="w-3 h-3" />
            <span className="pb-0.5">{course.difficulty}</span>
          </div>

          {/* Duration Badge */}
          <div className="flex items-center bg-[#A063F3]/10 rounded-lg py-1 px-1.5 gap-1">
            <img src="/time.png" alt="" className="w-3 h-3" />
            <span className="text-xs pb-0.5 text-[#A063F3] font-medium">{course.duration}</span>
          </div>

          {/* Students Badge */}
          <div className="flex items-center bg-[#008FA6]/10 rounded-lg py-1 px-2.5 gap-1">
            <img src="/people.png" alt="" className="w-3 h-3" />
            <span className="text-xs pb-0.5 text-[#008FA6] font-medium">{course.students.toLocaleString()}</span>
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
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active
      ? 'bg-green-600 text-white shadow-lg'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
  >
    {children}
  </motion.button>
);

const MobileFilterDropdown = ({
  title,
  options,
  selectedValue,
  onSelect,
  isOpen,
  onToggle
}) => {
  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        <span>{title}: {selectedValue}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-lg mt-2 shadow-lg max-h-60 overflow-y-auto"
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                onToggle();
              }}
              className={`w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors ${selectedValue === option
                ? 'bg-green-50 text-green-700 font-medium'
                : 'text-gray-700'
                }`}
            >
              {option}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [difficultyDropdownOpen, setDifficultyDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const coursesRef = useRef(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [hasAutoExpanded, setHasAutoExpanded] = useState(false);
  const filtersRef = useRef(null);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || course.difficulty === selectedDifficulty;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm && coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setCategoryDropdownOpen(false);
        setDifficultyDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAutoExpanded && filtersRef.current) {
        const filtersPosition = filtersRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Auto-expand when filters section comes into view
        if (filtersPosition <= windowHeight * 0.8) {
          setFiltersOpen(true);
          setHasAutoExpanded(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAutoExpanded]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-[100vh] w-full -mt-15 bg-[url('/coursesBG.png')] object-contain bg-cover bg-center bg-no-repeat">
        <div className="relative max-w-6xl mx-auto px-6 py-20  flex justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center sm:mt-10 gap-2 bg-black backdrop-blur-sm rounded-full px-3 py-1 mb-6"
            >
              <span><img className="w-4 h-4" src="/upward.png" alt="" /></span><span className="text-xs sm:text-sm  text-white"> Transform your future right now</span>
            </motion.div>

            <h1 className="text-[26px] md:text-5xl  text-white mb-3 leading-tight"
              style={{ fontFamily: '"Sigmar", sans-serif' }} >
              Master New Skills
              <br />
              <div className=" inline-flex text-white">
                Shape Tomorrow <span><img className="sm:h-15 sm:w-15 w-8 h-8" src="/coursesGIF.gif" alt="courese" /></span>
              </div>
            </h1>

            <p className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-inter leading-relaxed">
              Discover world-class courses designed to unlock your potential. Interactive learning meets gamified experiences.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="relative">
                <img
                  src="/search.png"
                  alt="Search"
                  className="absolute text-white left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-100 pointer-events-none z-10"
                />
                <button
                  onClick={() => {
                    // Create synthetic Enter key event to trigger existing search logic
                    const syntheticEvent = {
                      key: 'Enter',
                      preventDefault: () => { },
                      target: document.querySelector('input[type="text"]')
                    };
                    handleSearchKeyDown(syntheticEvent);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 opacity-80 z-10 bg-transparent border-none cursor-pointer hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-[#074a19] rounded-full transition-all duration-200"
                  aria-label="Search"
                  type="button"
                >
                  <img
                    src="/rightArrow.png"
                    alt=""
                    className="w-full h-full"
                  />
                </button>
                <input
                  type="text"
                  placeholder={` Search courses... `}
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={handleSearchKeyDown}
                  className="w-full pl-14 pr-12 py-4 bg-[#074a19] backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-3 md:gap-8"
            >
              <div className="bg-[#A5ED6E]/30 backdrop-blur-sm rounded-lg shadow-[4px_4px_1px_rgba(0,0,0,1)] sm:px-8 sm:py-3 px-6 py-3 text-center">
                <div className="sm:text-3xl text-2xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-white/80">Expert Courses</div>
              </div>
              <div className="bg-[#A5ED6E]/30 backdrop-blur-sm rounded-lg shadow-[4px_4px_1px_rgba(0,0,0,1)] sm:px-8 sm:py-3 px-6 py-3 text-center">
                <div className="sm:text-3xl text-2xl font-bold text-white mb-1">25K+</div>
                <div className="text-sm text-white/80">Active Learners</div>
              </div>
              <div className="bg-[#A5ED6E]/30 backdrop-blur-sm rounded-lg shadow-[4px_4px_1px_rgba(0,0,0,1)] sm:px-8 sm:py-3 px-8 py-3 text-center">
                <div className="sm:text-3xl text-2xl font-bold text-white mb-1">4.6+</div>
                <div className="text-sm text-white/80">Avg Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filters Section - Non-sticky with Dropdown */}
      <div ref={filtersRef} className="max-w-7xl mx-auto px-6 py-6">
        {/* Filters Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-3 py-1.5 shadow-sm hover:shadow-md transition-all duration-300 group"
          >

            <span><img className="w-6 h-6" src="/filter.png" alt="" /></span>
            <div>
              <span className="text-md font-medium text-gray-700 -ml-2 group-hover:text-gray-900">
                Filters
              </span>
            </div>



          </motion.button>
          <div className="ml-auto w-35 text-md -mt-10 text-gray-700 font-medium rounded-full px-3 py-1">
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
          </div>
        </motion.div>

        {/* Filters Dropdown Content */}
        <motion.div
          initial={false}
          animate={{
            height: filtersOpen ? 'auto' : 0,
            opacity: filtersOpen ? 1 : 0,
            marginBottom: filtersOpen ? 24 : 0
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <div className="bg-white  rounded-xl p-2 shadow-sm">
            {/* Category Filters */}
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <FilterButton
                    key={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Difficulty
              </h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map(difficulty => (
                  <FilterButton
                    key={difficulty}
                    active={selectedDifficulty === difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </FilterButton>
                ))}
              </div>
            </div>

            {/* Clear Filters Button */}
            {(selectedCategory !== "All" || selectedDifficulty !== "All") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="pt-4 mt-4 border-t border-gray-100"
              >
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>


      {/* Courses Grid */}
      <div ref={coursesRef} className="max-w-7xl mx-auto px-6 py-12 pb-28 sm:mb-8 mb-80">
        {filteredCourses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl flex items-center justify-center"><img className="h-50 w-50" src="/noResult.svg" alt="" /></div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
          >
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;