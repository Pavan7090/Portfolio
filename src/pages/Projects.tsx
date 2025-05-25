import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';

// Project data
const projects = [
  {
    id: 'job-portal',
    title: 'Job Portal',
    description: 'A job portal with responsive design using React and Ant Design. Focused on JavaScript functionality and styled frontend with Ant Design. Handled job submission forms and basic MongoDB operations.',
    image: '/job-portal.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Ant Design']
  },
  {
    id: 'event-booking',
    title: 'Event Booking and Management System',
    description: 'Built an Event Booking and Management System, focusing on frontend design enhancements and backend functionality. Key features include event creation, ticketing, booking management, and refund processing. Interactive UI animations and seamless user experiences with robust functionality.',
    image: '/event-booking-and-mgnt.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
  },
  {
    id: 'mobile-app',
    title: 'Lynkt Teacher App (React Native)',
    description: 'A cross-platform mobile app for teachers, built for the Lynkt platform. (Not publicly available, private repo)',
    image: '/lynkt.png',
    category: 'Mobile',
    technologies: ['React Native', 'Redux', 'RESTful APIs'],
  },
  {
    id: 'lynkt-admin',
    title: 'Lynkt Admin Web Application',
    description: 'Admin dashboard for the Lynkt platform, built for managing all aspects of the platform including bookings, users, analytics, and more.',
    image: '/lynkt-admin.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Admin Dashboard', 'Analytics', 'QR Scanner'],
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A modern portfolio website showcasing projects and skills with responsive design and smooth animations.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Frontend',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS']
  }
];

// Categories
const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <motion.div 
      className="pt-24 md:pt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Page Header */}
      <div ref={headingRef} className="section-container pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle mx-auto">
            A showcase of my work in the MERN stack, React Native, and web development.
          </p>
        </motion.div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          {/* Mobile Filter Button */}
          <div className="sm:hidden w-full">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-200 shadow-sm"
            >
              <span className="flex items-center">
                <Filter size={16} className="mr-2" />
                <span>Filter: {selectedCategory}</span>
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isFilterOpen && (
              <div className="mt-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-200 shadow-lg overflow-hidden">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                        : 'hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Filter Tabs */}
          <div className="hidden sm:flex space-x-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                    : 'bg-white dark:bg-dark-200 hover:bg-gray-50 dark:hover:bg-dark-100 text-gray-700 dark:text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-gray-600 dark:text-gray-400 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              viewport={{ once: true, amount: 0.2 }}
              className="card group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-primary-600 dark:text-primary-400 font-medium text-sm flex items-center group-hover:underline"
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}