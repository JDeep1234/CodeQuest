import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative flex flex-col items-center p-8 bg-black rounded-lg leading-none">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 mb-6">
          <img
            src="https://lh3.googleusercontent.com/ylmQYqkKTs9gB1O1Xoh-HWAzYi9MWKlEKIVHeErCjPQh0WlJH4zduXbDoXGk5b1VFUae5rKG3FuU4W5L-xadGyp664w=s1280-w1280-h800"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          JDeep
        </h1>
        
        <p className="text-gray-400 mb-6 text-center max-w-md">
          Full Stack Developer | DSA Enthusiast | Open Source Contributor
        </p>
        
        <div className="flex space-x-4 mb-8">
          {[
            { icon: Github, href: 'https://github.com/JDeep1234', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/bjnyanadeep/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:jdeepb34@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {[
            { label: 'Projects', value: '25+' },
            { label: 'Contributions', value: '40+' },
            { label: 'DSA Problems', value: '300+' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl font-bold text-purple-400">{value}</div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;