import React, { useState } from 'react';
import { Code2, Binary, Brain, Trophy, Github, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import CodingProfiles from './components/CodingProfiles';
import DSATracker from './components/DSATracker';

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {activeSection === 'profile' && <ProfileCard />}
          {activeSection === 'coding' && <CodingProfiles />}
          {activeSection === 'dsa' && <DSATracker />}
        </div>
      </main>
    </div>
  );
}

export default App;