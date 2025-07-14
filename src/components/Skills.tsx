import React from 'react';
import { Code, Cpu, Globe, Database, Smartphone, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["Deep Learning", "YOLO", "TensorFlow", "PyTorch", "OpenCV"],
      color: "bg-blue-500"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Robotics",
      skills: ["ROS", "Autonomous Systems", "Drone Technology", "SLAM", "Path Planning", "Sensor Fusion"],
      color: "bg-purple-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Python", "C++", "C#", "Java"],
      color: "bg-green-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      skills: ["Laravel", "HTML5", "CSS", "PHP", "JavaScript"],
      color: "bg-orange-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile & Desktop",
      skills: ["Flutter", "Windows Forms", ".NET"],
      color: "bg-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      skills: ["MySQL", "Git", "Linux", "Arduino", "Raspberry Pi"],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning artificial intelligence, robotics, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${category.color} text-white p-3 rounded-lg inline-block mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;