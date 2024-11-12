import React, { useState } from 'react';
import { Check, Clock, AlertTriangle } from 'lucide-react';
import { dsaQuestions } from '../data/dsaQuestions';

const DSATracker = () => {
  const topics = Array.from(new Set(dsaQuestions.map(q => q.topic))).sort();
  const [activeTopics, setActiveTopics] = useState<string[]>([]);
  const [filter, setFilter] = useState<'Easy' | 'Medium' | 'Hard' | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [questions, setQuestions] = useState(dsaQuestions);

  const toggleTopic = (topic: string) => {
    setActiveTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const toggleCompletion = (id: number) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === id ? { ...q, completed: !q.completed } : q
      )
    );
  };

  const filteredQuestions = questions.filter(question =>
    (activeTopics.length === 0 || activeTopics.includes(question.topic)) &&
    (filter === 'All' || question.difficulty === filter) &&
    (searchQuery === '' || 
     question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     question.topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const progress = {
    total: questions.length,
    completed: questions.filter(p => p.completed).length,
    percentage: Math.round((questions.filter(p => p.completed).length / questions.length) * 100)
  };

  const difficultyStats = {
    Easy: questions.filter(q => q.difficulty === 'Easy').length,
    Medium: questions.filter(q => q.difficulty === 'Medium').length,
    Hard: questions.filter(q => q.difficulty === 'Hard').length
  };

  return (
    <div className="space-y-6">
      {/* Progress Section */}
      <div className="bg-white/5 p-6 rounded-lg backdrop-blur-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">250 DSA Challenge Progress</h2>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-400">
              {progress.completed}/{progress.total}
            </div>
            <div className="text-sm text-gray-400">problems solved</div>
          </div>
        </div>
        
        <div className="relative h-4 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${progress.percentage}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div className="p-2 rounded-lg bg-green-500/20">
            <div className="font-bold text-green-400">{difficultyStats.Easy}</div>
            <div className="text-gray-400">Easy</div>
          </div>
          <div className="p-2 rounded-lg bg-yellow-500/20">
            <div className="font-bold text-yellow-400">{difficultyStats.Medium}</div>
            <div className="text-gray-400">Medium</div>
          </div>
          <div className="p-2 rounded-lg bg-red-500/20">
            <div className="font-bold text-red-400">{difficultyStats.Hard}</div>
            <div className="text-gray-400">Hard</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search questions by title or topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
        />
      </div>

      {/* Topic Filters */}
      <div className="flex flex-wrap gap-4">
        {topics.map(topic => (
          <button
            key={topic}
            onClick={() => toggleTopic(topic)}
            className={`px-4 py-2 rounded-full transition-all duration-300
              ${activeTopics.includes(topic)
                ? 'bg-purple-500 text-white'
                : 'bg-white/5 hover:bg-white/10'
              }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Difficulty Filters */}
      <div className="flex gap-4">
        {(['All', 'Easy', 'Medium', 'Hard'] as const).map(difficulty => (
          <button
            key={difficulty}
            onClick={() => setFilter(difficulty)}
            className={`px-4 py-2 rounded-lg transition-all duration-300
              ${filter === difficulty
                ? 'bg-white/20 text-white'
                : 'bg-white/5 hover:bg-white/10'
              }`}
          >
            {difficulty}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div className="grid gap-4">
        {filteredQuestions.map(question => (
          <div
            key={question.id}
            className="group relative bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors duration-200"
                  >
                    {question.title}
                  </a>
                </h3>
                <div className="text-sm text-gray-400">{question.topic}</div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm
                  ${question.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    question.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}
                >
                  {question.difficulty}
                </span>
                
                <button
                  onClick={() => toggleCompletion(question.id)}
                  className={`p-2 rounded-full transition-all duration-300
                    ${question.completed
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                  <Check className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DSATracker;