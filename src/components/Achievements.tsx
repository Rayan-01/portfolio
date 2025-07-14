import React from 'react';
import { Award, Trophy, Medal, Star, AlignCenterVertical as Certificate, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gold Medal at WICE 2025",
      description: "7th WICE 2025 Bangladesh National Round - Recognition for outstanding innovation in AI and Drone Technology",
      year: "2025",
      color: "bg-yellow-500"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Runner-up in Robo Soccer",
      description: "AIUB CS Fest - Second place in robot soccer competition",
      year: "2024",
      color: "bg-gray-400"
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: "Cisco Certification",
      description: "Successfully completed IT Essentials: PC Hardware and Software through the Cisco Networking Academy program, gaining comprehensive knowledge of computer hardware and software systems",
      year: "2022",
      color: "bg-blue-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Best Young Inventor",
      description: "Awarded Best Young Inventor at the Digital Innovation Fair 2018 for outstanding creativity and innovative contributions in technology",
      year: "2018",
      color: "bg-orange-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Science Fair Winner",
      description: "Secured 1st Place in the District Science Fair 2017, showcasing exceptional innovation and scientific aptitude",
      year: "2017",
      color: "bg-purple-500"
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for innovation, academic excellence, and contributions to technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className={`${achievement.color} text-white p-3 rounded-lg flex-shrink-0`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {achievement.title}
                      </h3>
                      <span className="text-blue-600 font-medium text-sm bg-blue-50 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;