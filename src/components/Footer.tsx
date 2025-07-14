import React from 'react';
import { Heart, Code, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Rayan Alam</h3>
            <p className="text-gray-400 leading-relaxed">
              AI & Robotics Enthusiast passionate about creating intelligent systems 
              that bridge the gap between artificial intelligence and real-world applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Education', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.querySelector(`#${link.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Artificial Intelligence
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Machine Learning
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Computer Vision
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Robotics & Automation
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Drone Technology
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Rayan Alam</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {currentYear} Rayan Alam. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;