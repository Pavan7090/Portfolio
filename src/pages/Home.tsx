import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Monitor, Layers, ChevronDown } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
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
import { VscVscode } from 'react-icons/vsc';

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
  { name: 'Responsive Design', icon: SiCss3 },
  { name: 'Lynkt Teacher App (React Native)', icon: SiReact },
  { name: 'Lynkt Admin Web Application', icon: SiReact },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const skillsRef = useRef<HTMLDivElement>(null);
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
  const projectsRef = useRef<HTMLDivElement>(null);
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <motion.section 
        ref={scrollRef}
        className="h-screen relative overflow-hidden flex items-center justify-center animated-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{ opacity, scale, y }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 animate-float">
              <Code size={32} />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Pavan S</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300 h-[40px] sm:h-[48px] md:h-[60px]"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'React Native Developer',
                1000,
                'AWS Certified',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToContent}
        >
          <ChevronDown className="text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.section>

      {/* About Section Snippet */}
      <section ref={aboutRef} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm an AWS-certified full-stack developer with experience in React.js and React Native, building responsive, cross-platform applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="card p-6 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-400">Building responsive web apps with React.js and mobile apps with React Native</p>
          </div>

          <div className="card p-6 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
              <Monitor size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend Integration</h3>
            <p className="text-gray-600 dark:text-gray-400">Implementing backend services with Node.js, Express, and Supabase.</p>
          </div>

          <div className="card p-6 flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Full Stack</h3>
            <p className="text-gray-600 dark:text-gray-400">Creating complete MERN stack applications with responsive design.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/about" className="btn btn-outline">
            Learn More About Me
          </Link>
        </motion.div>
      </section>

      {/* Skills Section Snippet */}
      <section ref={skillsRef} className="section-container bg-gray-50 dark:bg-dark-200">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            I specialize in modern technologies and frameworks that enable me to build exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card overflow-hidden flex flex-col items-center group"
            >
              <div className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 w-full"></div>
              <div className="p-4 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-dark-100 shadow-md mb-2 group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all">
                  <div className="text-primary-600 dark:text-primary-400">
                    <skill.icon size={28} />
                  </div>
                </div>
                <div className="font-medium text-gray-700 dark:text-gray-300 text-sm">{skill.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work. Each project was carefully crafted to solve specific problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              id: 'job-portal',
              title: 'Job Portal',
              description: 'A job portal with responsive design using React and Ant Design',
              image: '/job-portal.png'
            },
            {
              id: 'event-booking',
              title: 'Event Booking System',
              description: 'A MERN stack application for event booking and management',
              image: '/event-booking-and-mgnt.png'
            },
            {
              id: 'mobile-app',
              title: 'Lynkt Teacher App (React Native)',
              description: 'A cross-platform mobile app for teachers, built for the Lynkt platform. (Not publicly available, private repo)',
              image: '/lynkt.png'
            },
            {
              id: 'lynkt-admin',
              title: 'Lynkt Admin Web Application',
              description: 'Admin dashboard for the Lynkt platform, built for managing all aspects of the platform including bookings, users, analytics, and more.',
              image: '/lynkt-admin.png',
              liveLink: 'https://www.lynkt.co/'
            }
          ].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="card group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                {project.liveLink && (
                  <Link 
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    View live <ArrowRight size={16} className="ml-1" />
                  </Link>
                )}
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View details <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="max-w-2xl mx-auto text-lg mb-10">
              Have a project in mind? I'm currently available for freelance work.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 transition-colors">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}