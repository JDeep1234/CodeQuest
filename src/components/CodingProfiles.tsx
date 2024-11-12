import React from 'react';
import { Trophy, Star, Award, BookOpen, Youtube, Globe } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      username: 'johndev',
      rating: '2100+',
      solved: '500+',
      contests: '50+',
      color: 'from-yellow-400 to-orange-500',
      link: 'https://leetcode.com',
    },
    {
      platform: 'CodeForces',
      username: 'john_developer',
      rating: '1800+',
      solved: '300+',
      contests: '40+',
      color: 'from-blue-400 to-blue-600',
      link: 'https://codeforces.com',
    },
    {
      platform: 'CodeChef',
      username: 'john_dev',
      rating: '2000+',
      solved: '400+',
      contests: '45+',
      color: 'from-yellow-600 to-red-600',
      link: 'https://codechef.com',
    },
  ];

  const resources = [
    {
      title: "Tech Interview Handbook",
      description: "Curated coding interview preparation materials with system design concepts and behavioral content.",
      icon: BookOpen,
      color: "from-green-400 to-emerald-500",
      link: "https://www.techinterviewhandbook.org",
      tags: ["Algorithms", "System Design", "Interview Prep"]
    },
    {
      title: "Algorithms",
      description: "Comprehensive video series covering all major algorithms and data structures with visual explanations.",
      icon: Youtube,
      color: "from-red-400 to-rose-500",
      link: "https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O",
      tags: ["Video Course", "Algorithms", "Visualization"]
    },
    {
      title: "CSES Problem Set",
      description: "A collection of competitive programming practice problems with increasing difficulty levels.",
      icon: Globe,
      color: "from-orange-600 to-yellow-500",
      link: "https://cses.fi/problemset/",
      tags: ["Practice Problems", "Coding","CP", "Algorithms"]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Coding Profiles */}
      <div className="grid gap-6 md:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.platform} className="group relative">
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${profile.color} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block p-6 bg-black rounded-lg hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{profile.platform}</h3>
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Username:</span>
                  <span className="font-medium">{profile.username}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Rating:</span>
                  <span className="font-medium text-green-400">{profile.rating}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Problems Solved:</span>
                  <span className="font-medium">{profile.solved}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Contests:</span>
                  <span className="font-medium">{profile.contests}</span>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Click to view profile →
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Learning Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Master DSA with These Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <div key={resource.title} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${resource.color} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}></div>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block p-6 bg-black rounded-lg hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <resource.icon className="w-6 h-6" />
                </div>
                
                <p className="text-gray-400 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                  Explore resource →
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodingProfiles;
