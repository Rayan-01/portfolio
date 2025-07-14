import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University-Bangladesh (AIUB)",
      location: "Dhaka, Bangladesh",
      period: "2021 - Present",
      description: "Specializing in Artificial Intelligence, Machine Learning, Robotics, and Drone Technology. Crew Member of Software Team at AIUB Robotic Crew",
      highlights: [

      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rajbari Government College",
      location: "Rajbari, Bangladesh",
      period: "2019 - 2020",
      description: "",
      highlights: [

      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Rajbari Government High School",
      location: "Rajbari, Bangladesh",
      period: "2017 - 2018",
      description: "",
      highlights: [

      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey marked by excellence and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white p-3 rounded-lg flex-shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                        <Award className="w-4 h-4" />
                       
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;