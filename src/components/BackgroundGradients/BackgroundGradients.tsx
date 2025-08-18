import React from 'react';
import { GradientProps } from './types';

export const WhiteToBlueGradient: React.FC<GradientProps> = ({ children }) => (
  <div className="bg-gradient-to-br from-white via-blue-50 to-blue-100">
    {children}
  </div>
);

export const BlueToWhiteGradient: React.FC<GradientProps> = ({ children }) => (
  <div className="bg-gradient-to-br from-[#0076e3] via-blue-800 to-slate-900">
    {children}
  </div>
);