import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface ChartData {
  name: string;
  value: number;
  fill: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface GradeCurriculum {
  grade: string;
  focus: string;
  items: string[];
  color: string;
}

export interface SWOTItem {
  category: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threats';
  title: string;
  points: string[];
  icon: React.ReactNode;
  color: string;
}