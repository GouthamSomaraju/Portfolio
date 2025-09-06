import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,
  Code,
  Database,
  Monitor,
  Server,
  BookOpen,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const skills = [
    { name: 'HTML5', level: 90, color: 'bg-orange-500' },
    { name: 'CSS3', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React.js', level: 75, color: 'bg-cyan-500' },
    { name: 'Node.js', level: 70, color: 'bg-green-500' },
    { name: 'Express.js', level: 70, color: 'bg-gray-600' },
    { name: 'MySQL', level: 65, color: 'bg-blue-600' },
    { name: 'Bootstrap', level: 80, color: 'bg-purple-500' },
    { name: 'Git/GitHub', level: 75, color: 'bg-gray-800' },
    { name: 'VS Code', level: 85, color: 'bg-blue-400' },
    { name: 'Postman', level: 70, color: 'bg-orange-600' },
    { name: 'AutoCAD', level: 90, color: 'bg-red-500' },
    { name: 'SOLIDWORKS', level: 85, color: 'bg-red-600' },
    { name: 'MS Office', level: 80, color: 'bg-blue-700' },
    { name: 'Firebase', level: 65, color: 'bg-yellow-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">
              Goutham Somaraju
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Goutham
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A skilled web developer passionate about building dynamic, responsive applications
                and crafting seamless user experiences
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="cursor-pointer px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A skilled web developer with expertise in HTML, CSS, JavaScript, Node.js, and Express. 
                  Experienced in building dynamic, responsive websites and web applications. Proficient in 
                  both front-end and back-end development, ensuring seamless user experiences and efficient 
                  server-side solutions. Passionate about writing clean, scalable code and solving complex problems.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center">
                  <User size={80} className="text-gray-400" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <span className="text-sm text-gray-500 mt-20">Your Photo Here</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    B. Tech (Mechanical Engineering)
                  </h3>
                  <p className="text-lg text-blue-600 mb-2">
                    Hyderabad Institute of Technology and Management
                  </p>
                  <p className="text-gray-600 mb-2">CGPA: 6.5/10</p>
                  <p className="text-gray-500">2020-2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <BookOpen className="text-green-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Diploma in Mechanical Engineering
                  </h3>
                  <p className="text-lg text-green-600 mb-2">
                    VNR VJIET College
                  </p>
                  <p className="text-gray-600 mb-2">CGPA: 7.67/10</p>
                  <p className="text-gray-500">2018-2021</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BookOpen className="text-purple-600" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Secondary School Certificate (SSC)
                  </h3>
                  <p className="text-lg text-purple-600 mb-2">
                    St. Alphonsa's High School
                  </p>
                  <p className="text-gray-600 mb-2">CGPA: 8.0/10</p>
                  <p className="text-gray-500">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">TRIPZY</h3>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Travel-Tour Web Application
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A dynamic travel and tour web application designed to inspire travellers with rich visuals 
                  and help them easily explore, filter, and view tour packages across various destinations.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Engaging homepage with hero banner and category images</li>
                    <li>• Dynamic tour package filtering using JSON APIs</li>
                    <li>• Responsive design with Tailwind CSS</li>
                    <li>• Interactive package cards with ratings and itineraries</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Bootstrap', 'Tailwind CSS', 'JSON APIs'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://tripzy-app.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-48 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Food Recipe</h3>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Food Recipe Website
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A simple and responsive food recipe web application that allows users to search for dishes, 
                  view ingredients, and manage a list of favorites for easy access.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Functional search with API integration</li>
                    <li>• Add to favorites with heart icons</li>
                    <li>• Firebase Authentication for user login</li>
                    <li>• Responsive Bootstrap layout</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Bootstrap'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://foodie-food-recipe-app.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/GouthamSomaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4">
              Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-12 max-w-2xl">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:gouthamsomaraju@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      gouthamsomaraju11@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Github className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <a
                      href="https://github.com/GouthamSomaraju"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      github.com/GouthamSomaraju
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Somaraju Goutham.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;