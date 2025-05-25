import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github as GitHub } from 'lucide-react';

// Project data (in a real app, this would come from an API or CMS)
const projectsData = {
  'job-portal': {
    title: 'Job Portal',
    description: 'A job portal with responsive design using React and Ant Design.',
    longDescription: 'Developed a comprehensive job portal using the MERN stack (MongoDB, Express.js, React.js, Node.js). The frontend was built with React and styled using Ant Design components for a professional, responsive interface. The application allows employers to post job listings and job seekers to search and apply for positions. Special attention was given to the JavaScript functionality and MongoDB operations for efficient data management.',
    image: '/job-portal.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Ant Design', 'JavaScript', 'RESTful API'],
    features: [
      'Responsive design optimized for all devices',
      'Job search with filtering capabilities',
      'User authentication for employers and job seekers',
      'Job submission forms with validation',
      'Employer dashboard for managing job postings',
      'Job seeker profiles and application tracking',
      'Admin panel for content moderation'
    ],
    challengesSolved: 'One of the main challenges was implementing an efficient job search algorithm that could filter through large numbers of listings quickly. I optimized the MongoDB queries and implemented indexed searching to improve performance. Another challenge was creating a responsive interface that worked well on both desktop and mobile devices, which I addressed by using Ant Design\'s responsive grid system.',
    liveLink: 'https://job-portal-demo.netlify.app',
    githubLink: 'https://github.com/Pavan7090/job-portal'
  },
  'event-booking': {
    title: 'Event Booking and Management System',
    description: 'Built an Event Booking and Management System, focusing on frontend design enhancements and backend functionality.',
    longDescription: 'This comprehensive event booking and management system allows event organizers to create events, manage ticketing, and process bookings while providing attendees with an intuitive platform to discover and book events. The application was built using the MERN stack with a focus on creating interactive UI animations and seamless user experiences while ensuring robust backend functionality.',
    image: '/event-booking-and-mgnt.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'RESTful API', 'JWT Authentication'],
    features: [
      'Event creation and ticketing system',
      'Interactive UI animations for enhanced user experience',
      'Secure booking management',
      'Payment processing and refund handling',
      'User authentication and profile management',
      'Event discovery with search and filtering',
      'Admin dashboard for event analytics'
    ],
    challengesSolved: 'Developing a secure and efficient payment processing system was a significant challenge. I implemented proper validation and error handling to ensure transactions were processed correctly. Another challenge was creating a booking system that could handle concurrent users, which I solved by implementing proper database locking and transaction management.',
    liveLink: 'https://event-booking-demo.netlify.app',
    githubLink: 'https://github.com/Pavan7090/event-booking'
  },
  'mobile-app': {
    title: 'Lynkt Teacher App (React Native)',
    description: 'A cross-platform mobile app for teachers, built for the Lynkt platform. (Not publicly available, private repo)',
    longDescription: 'Developed a React Native mobile application exclusively for teachers on the Lynkt platform. The app enables teachers to manage their workshops, bookings, attendance, and more. Built with a component-based architecture and integrated with RESTful APIs for robust functionality. (App is not deployed and the repository is private as it belongs to the organization.)',
    image: '/lynkt.png',
    category: 'Mobile',
    technologies: ['React Native', 'Redux', 'RESTful APIs', 'JavaScript', 'Mobile UI Design', 'Expo'],
    features: [
      'Teacher-only access',
      'Workshop and booking management',
      'Attendance tracking',
      'Push notifications',
      'Responsive design',
      'Secure authentication'
    ],
    challengesSolved: 'Ensured secure teacher-only access and optimized performance for mobile devices. Integrated complex booking and attendance flows.',
    liveLink: '',
    githubLink: ''
  },
  'lynkt-admin': {
    title: 'Lynkt Admin Web Application',
    description: 'Admin dashboard for the Lynkt platform, built for managing all aspects of the platform including bookings, users, analytics, and more.',
    longDescription: 'Developed the complete admin side of the Lynkt platform (https://www.lynkt.co/), a web application for administrators. Features include a comprehensive admin dashboard, on-spot booking, workshop dashboard, QR scanner, user management, analytics, all bookings, attendance, waitlist, and contact message management. The application is live and used by the organization for all administrative tasks.',
    image: '/lynkt-admin.png',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Admin Dashboard', 'Analytics', 'QR Scanner'],
    features: [
      'Admin dashboard overview',
      'On-spot booking system',
      'Workshop management',
      'QR code scanner',
      'User management',
      'Analytics and reporting',
      'All bookings and attendance tracking',
      'Waitlist management',
      'Contact message management'
    ],
    challengesSolved: 'Built a scalable admin platform with real-time analytics, secure user management, and seamless booking workflows. Integrated QR scanning and advanced reporting.',
    liveLink: 'https://www.lynkt.co/',
    githubLink: ''
  },
  'portfolio': {
    title: 'Personal Portfolio',
    description: 'A modern portfolio website showcasing projects and skills with responsive design and smooth animations.',
    longDescription: 'Designed and developed a personal portfolio website to showcase projects, skills, and professional experience. The site features a modern design with smooth animations powered by Framer Motion and responsive layouts created with Tailwind CSS. The portfolio demonstrates both technical skill and design sensibilities, with performance optimization for all devices.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Frontend',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Vite', 'Responsive Design'],
    features: [
      'Responsive design for all device sizes',
      'Smooth page transitions and animations',
      'Interactive project showcases',
      'Dark/light mode theme toggle',
      'Contact form with validation',
      'Performance optimized assets',
      'Accessible design'
    ],
    challengesSolved: 'Creating engaging animations while ensuring they didn\'t impact performance was a significant challenge. I used Framer Motion\'s lazy loading and optimized the animations to run efficiently. Another challenge was implementing a responsive design that looked great on all screen sizes, which I addressed by using Tailwind CSS\'s responsive utility classes.',
    liveLink: 'https://pavan-s-portfolio.netlify.app',
    githubLink: 'https://github.com/Pavan7090/portfolio'
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="pt-32 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/projects" className="text-primary-600 hover:underline">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div 
      className="pt-24 md:pt-32 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link to="/projects" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
          <ArrowLeft size={16} className="mr-2" />
          Back to all projects
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-xl">
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
                {project.title}
              </h1>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                {project.category}
              </span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-dark-100 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Only show buttons if links are available and not for job-portal or event-booking */}
              {project.liveLink && id !== 'job-portal' && id !== 'event-booking' && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Live Project
                </a>
              )}
              {project.githubLink && id !== 'job-portal' && id !== 'event-booking' && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <GitHub size={16} className="mr-2" />
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Project Overview
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>{project.longDescription}</p>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-1 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Challenges & Solutions
          </h2>
          <div className="bg-gray-50 dark:bg-dark-100 rounded-xl p-6">
            <p className="text-gray-700 dark:text-gray-300">
              {project.challengesSolved}
            </p>
          </div>
        </section>

        {/* Next Project */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Explore More Projects
          </h2>
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </section>
      </div>
    </motion.div>
  );
}