import { ChartData, GradeCurriculum, SWOTItem } from './types';
import { Shield, AlertTriangle, Lightbulb, Zap } from 'lucide-react';
import React from 'react';

// Data from Page 10: Commute Methods
export const COMMUTE_DATA: ChartData[] = [
  { name: '機車接送', value: 53, fill: '#F59E0B' }, // Orange
  { name: '走路', value: 31, fill: '#10B981' }, // Green
  { name: '開車接送', value: 12, fill: '#EF4444' }, // Red
  { name: '大眾運輸', value: 3, fill: '#8B5CF6' }, // Purple
  { name: '其它', value: 3, fill: '#6B7280' }, // Gray
];

// Data from Page 5: Student Background
export const BACKGROUND_DATA: ChartData[] = [
  { name: '一般生', value: 91, fill: '#3B82F6' },
  { name: '新住民', value: 6, fill: '#10B981' },
  { name: '原住民', value: 1, fill: '#F59E0B' },
];

export const CURRICULUM_DATA: GradeCurriculum[] = [
  {
    grade: '低年級 (1-2年級)',
    focus: '安全上學 GOGO (行人)',
    color: 'bg-yellow-100 border-yellow-500 text-yellow-900',
    items: [
      '認識校園周邊環境 (民族路/民權路)',
      '安全和危險的地方 (環境辨識)',
      '過馬路停看聽 (行人號誌)',
      '我更是好乘客 (安全座椅/安全帽)',
      '影片教學：安全過，不衝動'
    ]
  },
  {
    grade: '中年級 (3-4年級)',
    focus: '平安好行 (自行車基礎)',
    color: 'bg-blue-100 border-blue-500 text-blue-900',
    items: [
      '行人危險感知 (視野死角/內輪差)',
      '認識大型車輛與安全距離',
      '自行車構造與裝備檢查 (ABC檢查法)',
      '安全騎乘技巧 (平衡/直線)',
      '搭乘客運與公車禮儀'
    ]
  },
  {
    grade: '高年級 (5-6年級)',
    focus: '快樂平安行 (進階自行車)',
    color: 'bg-green-100 border-green-500 text-green-900',
    items: [
      '路權與責任 (轉彎/讓路)',
      '自行車上路實務 (路口轉彎/手勢)',
      '大型車內輪差體驗與風險迴避',
      '交通事故處理與應變 (SOP)',
      '製作交通安全創意海報 (Canva)'
    ]
  }
];

export const SWOT_DATA: SWOTItem[] = [
  {
    category: 'Strengths',
    title: '優勢 (S)',
    points: ['位於交通便利的都會區', '專責委員會定期運作', '志工團隊組織完善 (92人)', '行政人員規劃能力佳'],
    icon: <Shield className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    category: 'Weaknesses',
    title: '劣勢 (W)',
    points: ['校門口交通流量大，易壅塞', '家長接送車輛多，與公車爭道', '部分路口未設號誌', '人力老化問題'],
    icon: <AlertTriangle className="w-6 h-6" />,
    color: 'bg-orange-50 text-orange-700 border-orange-200'
  },
  {
    category: 'Opportunities',
    title: '機會 (O)',
    points: ['與區公所合作改善周邊設施', '新增行人專用時相', '申請計畫爭取資源', '推動走路上學獎勵'],
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'bg-green-50 text-green-700 border-green-200'
  },
  {
    category: 'Threats',
    title: '威脅 (T)',
    points: ['上下學尖峰時段風險高', '家長違規停車習慣難改', '周邊道路施工影響動線', '突發性交通事故'],
    icon: <Zap className="w-6 h-6" />,
    color: 'bg-red-50 text-red-700 border-red-200'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "Traffic Safety Assistant" for Lu Jiang Elementary School (鷺江國小).
Use the following information from the 114th Academic Year Traffic Safety Visitation Report to answer user questions.
Answer in Traditional Chinese (繁體中文).
Be friendly, encouraging, and informative.

Key Facts:
- Date: 114.10.23
- Location: Intersection of Minzu Rd and Minquan Rd, Luzhou District, New Taipei City.
- Students: 2459 (Elementary), 127 (Kindergarten). Total 237 Staff.
- Commute: 53% Scooter, 31% Walk, 12% Car.
- Strengths: Convenient location, strong volunteer team (92 people in 113 school year).
- Weaknesses: Congestion at Minzu Rd gate, mixing of cars/scooters/buses.
- Strategy: PDCA cycle, SWOTS analysis.
- Education: 2 hours/semester per student. Integration into subjects.
- Activities: "Walk to School" promotion, Bilingual videos, Safety Maps, Canva posters.
- Environment: Divided pickup zones (Minzu Rd for cars, Minquan Rd for scooters/cars split), "New Pedestrian Path" on Minzu Rd.
- Volunteers: Provide safety guidance. Average age ~67.
- Innovation: Bilingual safety videos, IT integration (Google Maps analysis), "Don't run in hallways".
- Awards: Ms. Huang Xiumei awarded Excellent Volunteer.
- Rules: Wear yellow caps (lower grades), stick to designated routes, "Stop, Look, Listen".

If asked about something not in this data, say you don't have that specific information but emphasize general safety rules.
`;