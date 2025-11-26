import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, bgColor = 'bg-white', children }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 tracking-wide relative inline-block">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded-full"></span>
          </h2>
          {subtitle && <p className="text-gray-600 text-lg mt-2">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;