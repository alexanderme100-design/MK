import React from 'react';
import Section from './Section';
import { SWOT_DATA } from '../constants';

const Organization: React.FC = () => {
  return (
    <Section id="organization" title="組織、計畫與宣導" subtitle="PDCA 策略循環，持續優化交通安全防護網" bgColor="bg-gray-50">
      
      {/* SWOTS Grid */}
      <h3 className="text-2xl font-bold text-left text-gray-800 mb-6 flex items-center">
        <span className="w-2 h-8 bg-purple-600 mr-3 rounded-full"></span>
        114學年度交通安全 SWOTS 分析
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {SWOT_DATA.map((item) => (
          <div key={item.category} className={`p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow ${item.color.replace('text-', 'bg-').split(' ')[0]} bg-opacity-20`}>
            <div className="flex items-center mb-4">
              <div className={`p-2 rounded-lg bg-white shadow-sm mr-3 ${item.color.split(' ')[1]}`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
            </div>
            <ul className="space-y-2">
              {item.points.map((point, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* PDCA Visual */}
      <div className="bg-white p-8 rounded-3xl shadow-xl">
         <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">PDCA 執行策略</h3>
         <div className="flex flex-col md:flex-row justify-between items-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
            
            {[
              { step: 'Plan', title: '規劃階段', desc: 'SWOT分析、制定計畫', color: 'bg-blue-500' },
              { step: 'Do', title: '執行階段', desc: '課程教學、導護工作', color: 'bg-yellow-500' },
              { step: 'Check', title: '檢核階段', desc: '訪視自評、事故統計', color: 'bg-green-500' },
              { step: 'Act', title: '行動/改善', desc: '修正制度、未來計畫', color: 'bg-red-500' }
            ].map((pdca, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/4 group">
                <div className={`w-20 h-20 rounded-full ${pdca.color} text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform mb-4 border-4 border-white`}>
                  {pdca.step}
                </div>
                <h4 className="text-lg font-bold text-gray-800">{pdca.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{pdca.desc}</p>
              </div>
            ))}
         </div>
      </div>
    </Section>
  );
};

export default Organization;