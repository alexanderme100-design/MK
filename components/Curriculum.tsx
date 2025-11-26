import React, { useState } from 'react';
import Section from './Section';
import { CURRICULUM_DATA } from '../constants';
import { BookOpen, Video, Map, Edit3 } from 'lucide-react';

const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="curriculum" title="教學與活動" subtitle="分齡教學，將交通安全融入生活與各領域課程">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Tab Navigation */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {CURRICULUM_DATA.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                activeTab === index 
                  ? `${item.color.split(' ')[0]} ${item.color.split(' ')[1]} shadow-md scale-105` 
                  : 'bg-white border-transparent hover:bg-gray-50'
              }`}
            >
              <h3 className={`text-xl font-bold ${activeTab === index ? 'text-gray-900' : 'text-gray-500'}`}>
                {item.grade}
              </h3>
              <p className={`mt-2 ${activeTab === index ? 'text-gray-700' : 'text-gray-400'}`}>
                核心能力：{item.focus}
              </p>
            </button>
          ))}
        </div>

        {/* Right: Content Display */}
        <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-xl min-h-[400px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
          
          <div className="relative z-10 animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
              {CURRICULUM_DATA[activeTab].grade} 重點課程
            </h3>
            
            <ul className="space-y-4">
              {CURRICULUM_DATA[activeTab].items.map((point, idx) => (
                <li key={idx} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-4 font-bold text-sm">
                    {idx + 1}
                  </span>
                  <span className="text-lg text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* Feature Highlights based on Grade */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
               <div className="text-center">
                  <div className="mx-auto w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <Video className="text-red-500 w-5 h-5"/>
                  </div>
                  <span className="text-xs font-bold text-gray-600">多媒體教學</span>
               </div>
               <div className="text-center">
                  <div className="mx-auto w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <Map className="text-green-500 w-5 h-5"/>
                  </div>
                  <span className="text-xs font-bold text-gray-600">情境體驗</span>
               </div>
               <div className="text-center">
                  <div className="mx-auto w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <Edit3 className="text-purple-500 w-5 h-5"/>
                  </div>
                  <span className="text-xs font-bold text-gray-600">創意產出</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Curriculum;