import React from 'react';
import Section from './Section';
import { MapPin, UserCheck, Truck } from 'lucide-react';

const Environment: React.FC = () => {
  return (
    <Section id="environment" title="交通安全與輔導" subtitle="完善的校園周邊動線規劃與導護志工制度" bgColor="bg-blue-50">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Volunteer Stats */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
             <div className="flex items-center mb-6">
                <div className="p-3 bg-yellow-100 rounded-xl mr-4">
                  <UserCheck className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">導護志工團隊</h3>
             </div>
             
             <div className="flex justify-around mb-8 text-center">
                <div>
                   <div className="text-4xl font-bold text-blue-600 mb-1">92</div>
                   <div className="text-sm text-gray-500">113學年度人數</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-green-600 mb-1">67</div>
                   <div className="text-sm text-gray-500">平均年齡 (歲)</div>
                </div>
                <div>
                   <div className="text-4xl font-bold text-purple-600 mb-1">7</div>
                   <div className="text-sm text-gray-500">執勤分組</div>
                </div>
             </div>
             
             <div className="bg-gray-100 p-4 rounded-xl">
               <p className="text-gray-700 leading-relaxed">
                 <span className="font-bold">榮譽榜：</span> 感謝黃秀美女士榮獲新北市113學年度優良導護志工！
                 我們的志工團隊不畏風雨，每日在七個重要崗位守護學童安全。
               </p>
             </div>
          </div>

          {/* Traffic Planning */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
             <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-xl mr-4">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">人車分流規劃</h3>
             </div>

             <div className="space-y-4">
               <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">民族路正門</h4>
                    <p className="text-sm text-gray-600">交通要塞，規劃為<span className="text-red-500 font-bold">汽車接送區</span>。設有新人行道，保障行走空間。</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">民權路側門</h4>
                    <p className="text-sm text-gray-600">車流適中，規劃左右兩側分流，包含<span className="text-green-600 font-bold">機車接送區</span>。</p>
                  </div>
               </div>
               <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800">安親班接送專區</h4>
                    <p className="text-sm text-gray-600">善用校內空間規劃專區，有效管理業者車輛進出。</p>
                  </div>
               </div>
             </div>
          </div>
       </div>

       {/* Visual Representation of Map (Abstract) */}
       <div className="mt-8 bg-white p-6 rounded-3xl shadow-lg border-2 border-dashed border-gray-300 text-center">
          <h4 className="text-lg font-bold text-gray-700 mb-4">校園周邊安心走廊示意圖</h4>
          <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1200/400')] bg-cover bg-center"></div>
             <p className="text-gray-500 relative z-10 font-medium">
               (地圖互動功能：點擊查看 500 公尺內交通肇事熱點與愛心商店分佈)
             </p>
             <button className="absolute bottom-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors shadow-md">
               開啟完整地圖
             </button>
          </div>
       </div>
    </Section>
  );
};

export default Environment;