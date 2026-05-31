/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Dumbbell, Car, Cpu, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ThemeSwitcherProps {
  projects: Project[];
  activeThemeId: string;
  onThemeChange: (id: string) => void;
}

export function ThemeSwitcher({ projects, activeThemeId, onThemeChange }: ThemeSwitcherProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case 'iron-temple':
        return <Dumbbell className="w-4 h-4" />;
      case 'nova-motors':
        return <Car className="w-4 h-4" />;
      case 'nokia-ia':
        return <Cpu className="w-4 h-4" />;
      case 'lumina-university':
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div 
        className="backdrop-blur-xl rounded-2xl p-2 md:p-3 border flex flex-col md:flex-row items-center justify-between gap-4 bg-[#141414]/90"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="flex items-center gap-3 pl-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <div className="text-left">
            <p className="text-xs font-mono tracking-wider text-neutral-400 font-bold uppercase">
              STUDIO STYLE PRESET ENGINE
            </p>
            <p className="text-[10px] text-neutral-500 font-sans">
              Interactúa con los estilos de mi portafolio para re-diseñar la landing entera.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:flex items-center gap-2 w-full md:w-auto">
          {projects.map((project) => {
            const isActive = project.id === activeThemeId;
            return (
              <button
                key={project.id}
                onClick={() => onThemeChange(project.id)}
                className={`relative flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl text-xs font-medium transition-all duration-300 border font-mono select-none overflow-hidden cursor-pointer w-full ${
                  isActive 
                    ? 'text-white' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border-transparent'
                }`}
                style={{
                  borderColor: isActive ? project.accentHex : 'transparent',
                  background: isActive ? `${project.accentHex}1a` : 'transparent'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeThemeBg"
                    className="absolute inset-0 -z-10 opacity-10"
                    style={{ backgroundColor: project.accentHex }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span style={{ color: isActive ? project.accentHex : undefined }}>
                  {getIcon(project.id)}
                </span>
                
                <span className="tracking-wide">
                  {project.title.split(' ')[0]}
                </span>
                
                <div 
                  className="w-1.5 h-1.5 rounded-full absolute top-1 right-1"
                  style={{ backgroundColor: project.accentHex }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
