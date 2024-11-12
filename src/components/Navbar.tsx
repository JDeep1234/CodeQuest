import React from 'react';
import { Code2, Binary, Brain } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="backdrop-blur-lg bg-black/30 sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold tracking-wider">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              CodeQuest
            </span>
          </div>
          
          <div className="flex space-x-1">
            {[
              { id: 'profile', icon: Code2, label: 'Profile' },
              { id: 'coding', icon: Binary, label: 'Coding Profiles' },
              { id: 'dsa', icon: Brain, label: 'DSA Tracker' },
            ].map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ease-out transform hover:scale-105
                  ${activeSection === id 
                    ? 'bg-white/10 text-white shadow-lg shadow-purple-500/20' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;