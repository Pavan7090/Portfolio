import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Award, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import skill icons
import { 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiBootstrap, 
  SiAntdesign, 
  SiNodedotjs, 
  SiExpress, 
  SiSupabase, 
  SiMongodb, 
  SiGit, 
  SiGithub, 
  SiPostman, 
  SiFigma,
  SiSwagger
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  
  const bioRef = useRef<HTMLDivElement>(null);
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });
  
  const experienceRef = useRef<HTMLDivElement>(null);
  const experienceInView = useInView(experienceRef, { once: true, amount: 0.3 });

  const educationRef = useRef<HTMLDivElement>(null);
  const educationInView = useInView(educationRef, { once: true, amount: 0.3 });

  const skills = [
    { name: 'React.js', icon: SiReact },
    { name: 'React Native', icon: SiReact },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Ant Design', icon: SiAntdesign },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'REST APIs', icon: SiSwagger },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Postman', icon: SiPostman },
    { name: 'VS Code', icon: VscVscode },
    { name: 'Figma', icon: SiFigma },
    { name: 'Responsive Design', icon: SiCss3 }
  ];

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
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle mx-auto">
            Learn more about my journey, experience, and the skills I've acquired along the way.
          </p>
        </motion.div>
      </div>

      {/* Bio Section */}
      <section className="section-container">
        <div ref={bioRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              My Journey
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p>
                I'm Pavan S, an AWS-certified full-stack developer with practical experience in React.js and React Native — proficient in building responsive, cross-platform applications using a component-based architecture.
              </p>
              <p>
                Skilled in integrating Supabase for backend services and authentication. Passionate about scalable frontend systems and modern Agile workflows with version control best practices.
              </p>
              <p>
                With experience in both frontend and backend development, I bring a comprehensive approach to creating digital solutions that are both functional and user-friendly.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">5+ Months</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Industry Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">AWS</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">8.2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={bioInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 blur-lg"></div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-700">
                <img 
                  src="/my-journey.jpg" 
                  alt="Pavan S" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-container bg-gray-50 dark:bg-dark-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            My Skills
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white dark:bg-dark-100 shadow-md mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20">
                  <div className="text-primary-600 dark:text-primary-400">
                    <skill.icon size={32} />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section ref={experienceRef} className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={experienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white flex justify-center items-center gap-2">
              <Briefcase className="text-primary-500" size={28} />
              Work Experience
            </h2>
          </motion.div>
          
          <div className="space-y-12">
            {[
              {
                title: 'Frontend Developer Intern',
                company: 'Yahweh Software Solution',
                period: 'Feb 2025 - Present',
                description: 'Built cross-platform mobile apps using React Native for Android and iOS devices. Integrated RESTful APIs and implemented state management with Redux. Optimized UI components and collaborated in Agile sprints. Built modular UIs using component-based architecture in React and React Native for scalability.',
              },
              {
                title: 'MERN Full Stack Intern',
                company: 'Xcel Corp, Bengaluru',
                period: 'July 2024 - August 2024',
                description: 'Collaborated with the development team to build full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Developed and enhanced features, including implementing a password update functionality on user profile pages. Immersed in XCEL Corp\'s professional work culture, learning efficient coding practices and teamwork dynamics.',
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 20 }}
                animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="timeline-item"
              >
                <div className="flex items-center mb-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                </div>
                <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm mb-2">
                  <span>{experience.company}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {experience.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section ref={educationRef} className="section-container bg-gray-50 dark:bg-dark-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white flex justify-center items-center gap-2">
              <BookOpen className="text-primary-500" size={28} />
              Education & Certifications
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={educationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Education</h3>
              <div className="space-y-8">
                <div className="timeline-item pb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Computer Application (MCA)</h4>
                  <div className="text-primary-600 dark:text-primary-400 text-sm mb-2 flex items-center">
                    <BookOpen size={14} className="mr-1" />
                    <span>St. Francis College, Bengaluru City University</span>
                    <span className="mx-2">•</span>
                    <span>2022 - 2024</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    CGPA: 8.22
                  </p>
                </div>
                
                <div className="timeline-item">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Computer Application (BCA)</h4>
                  <div className="text-primary-600 dark:text-primary-400 text-sm mb-2 flex items-center">
                    <BookOpen size={14} className="mr-1" />
                    <span>RJS First Grade College, Bengaluru City University</span>
                    <span className="mx-2">•</span>
                    <span>2019 - 2022</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    CGPA: 8.5
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={educationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Certifications</h3>
              <div className="space-y-8">
                <div className="timeline-item">
                  <div className="flex items-center">
                    <Award className="text-primary-500 mr-2" size={20} />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">AWS Certified Cloud Practitioner</h4>
                  </div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    Demonstrated foundational knowledge of AWS Cloud concepts, services, and best practices to support cloud adoption.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Take a look at some of the projects I've worked on. Each project demonstrates my skills and passion for building exceptional digital experiences.
          </p>
          <div className="flex justify-center">
            <Link to="/projects" className="btn btn-primary">
              View All Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}