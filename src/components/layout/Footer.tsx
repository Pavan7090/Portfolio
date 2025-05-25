import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiInstagram } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-dark-200 border-t border-gray-200 dark:border-dark-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <span>Pavan S</span>
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              AWS-certified full-stack developer with experience in React.js and React Native — building responsive, cross-platform applications.
            </p>
            
            {/* Social links */}
            <div className="mt-6 flex space-x-5">
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://github.com/Pavan7090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <GitHub size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/pavan-s-178213261" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/pavangowda.1982/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href="mailto:gowdapavan026@gmail.com" 
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                gowdapavan026@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Bengaluru, India
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                +91 7019640513
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Pavan S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}