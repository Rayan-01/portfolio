import React from 'react';
import { ExternalLink, Github, Shield, Wheat, Factory, Eye, Home, GraduationCap, DollarSign, Gamepad2, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Weapon Detection Using Drone",
      description: "AI-powered drone system for real-time weapon detection using YOLO and computer vision algorithms for security applications.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["Python", "YOLO", "Computer Vision", "Drone Technology", "AI"],
      category: "AI & Robotics"
    },
    {
      title: "Aerial Crop Yield Prediction System",
      description: "Machine learning system using drone imagery to predict crop yields and optimize agricultural productivity.",
      icon: <Wheat className="w-6 h-6" />,
      tags: ["Machine Learning", "Computer Vision", "Agriculture", "Python", "TensorFlow"],
      category: "AI & Agriculture"
    },
    {
      title: "Autonomous Factory Robot with SLAM",
      description: "Industrial robot with simultaneous localization and mapping capabilities for autonomous navigation in factory environments.",
      icon: <Factory className="w-6 h-6" />,
      tags: ["ROS", "SLAM", "Autonomous Systems", "C++", "Robotics"],
      category: "Robotics"
    },
    {
      title: "Smart Blind Assistant System",
      description: "AI-powered assistance system using computer vision to help visually impaired individuals navigate.",
      icon: <Eye className="w-6 h-6" />,
      tags: ["Computer Vision", "AI", "Accessibility", "Python", "OpenCV"],
      category: "AI & Accessibility"
    },
    {
      title: "IoT Smart Home System",
      description: "Comprehensive home automation system with IoT sensors, mobile app control, and intelligent energy management.",
      icon: <Home className="w-6 h-6" />,
      tags: ["IoT", "Arduino", "Mobile App", "Automation", "Sensors"],
      category: "IoT & Automation"
    },
    {
      title: "University Course Registration",
      description: "Desktop application for university course registration system with student management and scheduling features.",
      icon: <GraduationCap className="w-6 h-6" />,
      tags: ["C#", "Windows Forms", "Database", "Desktop App"],
      category: "Desktop Application"
    },
    {
      title: "Crowdfunding Web App",
      description: "Full-stack web application for crowdfunding campaigns with payment and project management.",
      icon: <DollarSign className="w-6 h-6" />,
      tags: ["PHP", "MySQL", "HTML", "CSS"],
      category: "Web Development"
    },
    {
      title: "Robo Soccer Robot",
      description: "Manually controlled soccer-playing robot using transmitter. Designed with a custom chassis optimized for agility and ball interaction in competitive matches.",
      icon: <Gamepad2 className="w-6 h-6" />,
      tags: ["Robotics", "RC Control", "Mechanical Design"],
      category: "Robotics Competition"
    },
    {
      title: "Lexical Analyzer",
      description: "Compiler design project implementing a lexical analyzer for programming language tokenization and parsing.",
      icon: <Code className="w-6 h-6" />,
      tags: ["C++", "Compiler Design", "Parsing", "Algorithms"],
      category: "Compiler Design"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI & Robotics": "bg-blue-100 text-blue-800",
      "AI & Agriculture": "bg-green-100 text-green-800",
      "Robotics": "bg-purple-100 text-purple-800",
      "AI & Accessibility": "bg-orange-100 text-orange-800",
      "IoT & Automation": "bg-indigo-100 text-indigo-800",
      "Desktop Application": "bg-gray-100 text-gray-800",
      "Web Development": "bg-pink-100 text-pink-800",
      "Robotics Competition": "bg-red-100 text-red-800",
      "Compiler Design": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative projects spanning AI, robotics, web development, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;