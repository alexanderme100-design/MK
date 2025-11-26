import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="font-bold text-white text-lg mb-2">新北市蘆洲區鷺江國民小學</p>
        <p className="text-sm mb-4">地址：新北市蘆洲區民族路7號 | 電話：(02) 2281-9980</p>
        <div className="w-full h-px bg-gray-700 my-4"></div>
        <p className="text-xs text-gray-500">© 114學年度交通安全訪視報告. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;