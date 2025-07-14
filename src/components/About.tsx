import React from 'react';
import { Brain, Cpu, Zap, Target } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "Deep learning, computer vision, and intelligent automation systems"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotics & Drones",
      description: "Autonomous systems, SLAM navigation, and aerial robotics"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Embedded AI",
      description: "Edge computing and real-time AI processing in embedded systems"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Automation",
      description: "Smart systems for industrial and domestic applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/dp/im2.jpg"
                  alt="Rayan Alam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="flex-grow">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  I'm a passionate Computer Science student at AIUB with a deep fascination for the intersection 
                  of artificial intelligence and robotics. My journey in technology is driven by the vision of 
                  creating intelligent systems that can understand, adapt, and interact with the real world.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  My expertise spans across drone systems, embedded AI, autonomous robotics, and intelligent 
                  automation. I believe in the transformative power of AI when combined with robotics to solve 
                  real-world problems, from precision agriculture to smart manufacturing and beyond.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm constantly exploring new frontiers in machine learning, 
                  computer vision, and autonomous systems. My goal is to contribute to the development of intelligent 
                  robots that can seamlessly integrate into our daily lives and industries.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Areas of Interest & Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;