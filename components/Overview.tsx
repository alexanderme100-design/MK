import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { COMMUTE_DATA, BACKGROUND_DATA } from '../constants';
import Section from './Section';
import { Users, MapPin, School } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <Section id="overview" title="學校概況與分析" subtitle="地理位置優越，學生組成多元，通學方式以機車與步行也可以為主">
      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
            <School className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">學校規模</h3>
          <p className="text-gray-600 text-center">國小班級數 99 班</p>
          <p className="text-4xl font-bold text-blue-600 text-center my-2">2459 <span className="text-base text-gray-500">人</span></p>
          <p className="text-gray-500 text-sm text-center">教職員共 237 人</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-green-500 hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">地理位置</h3>
          <p className="text-gray-600 text-center mb-2">蘆洲區民族路及民權路交會處</p>
          <p className="text-gray-600 text-center text-sm">比鄰區公所、捷運站及公車站，交通便利，屬於都會型學校。</p>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300">
           <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
            <Users className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">弱勢關懷</h3>
          <p className="text-gray-600 text-center">單親及隔代教養 11.9%</p>
          <div className="mt-2 text-center">
            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-md mr-1">低收補助</span>
            <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-md">身心障礙</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-400 pl-4">學生通學方式分析</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={COMMUTE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {COMMUTE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">以家長機車接送 (53%) 及走路上學 (31%) 居多</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-400 pl-4">學生背景概況</h3>
          <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={BACKGROUND_DATA}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {BACKGROUND_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">一般生佔91%，新住民子女佔6%</p>
        </div>
      </div>
    </Section>
  );
};

export default Overview;