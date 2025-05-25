import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-dark-300/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <NavLink to="/" className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <Code size={28} className="text-primary-500" />
              <span className="text-xl font-bold">Pavan S</span>
            </NavLink>
          </motion.div>

          {/* Desktop navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "nav-link nav-link-active" : "nav-link"
            }>
              Contact
            </NavLink>
          </motion.nav>

          {/* Right side buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-dark-200 shadow-lg"
      >
        <nav className="px-4 py-5 space-y-4">
          <NavLink to="/" className={({ isActive }) => 
            `block py-2 px-4 rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
            }`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `block py-2 px-4 rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
            }`
          }>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            `block py-2 px-4 rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
            }`
          }>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `block py-2 px-4 rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
            }`
          }>
            Contact
          </NavLink>
        </nav>
      </motion.div>
    </header>
  );
}