/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ExternalLink, Sparkles, Flame, Eye, ShieldCheck, Cpu, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  // Render a mini preview representing the design system
  const renderMiniPreview = () => {
    switch (project.id) {
      case 'iron-temple':
        return (
          <div className="absolute inset-0 bg-black flex flex-col justify-between p-4 overflow-hidden select-none">
            {/* Top Bar with urgent badging */}
            <div className="flex justify-between items-center z-10">
              <span className="text-[9px] font-bold tracking-wider text-red-500 font-mono bg-red-950/40 px-2 py-0.5 rounded-full border border-red-900/50 animate-pulse">
                50% OFF PRIMER MES
              </span>
              <span className="text-[9px] font-bold tracking-wider text-neutral-400 font-mono">
                REGISTRO ABIERTO
              </span>
            </div>

            {/* Giant Title Layout */}
            <div className="my-auto z-10 text-left">
              <h4 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-none tracking-tighter">
                TRANSFORMA <br />
                TU <span className="text-[#E5192A]">CUERPO</span>
              </h4>
              <p className="text-[10px] text-neutral-400 font-mono mt-1 uppercase tracking-widest">
                GYM HARDCORE · ENTRENADORES ELITE
              </p>
            </div>

            {/* Bottom Bar Metrics */}
            <div className="flex justify-between items-center z-10 pt-2 border-t border-neutral-900">
              <div className="flex gap-2">
                <span className="text-[8px] bg-neutral-900/90 text-white px-2 py-0.5 rounded font-mono">03 Días</span>
                <span className="text-[8px] bg-neutral-900/90 text-red-500 px-2 py-0.5 rounded font-mono font-bold animate-pulse">14 : 24 : 29</span>
              </div>
              <span className="text-[8px] text-white flex items-center gap-1 font-bold">
                <Flame className="w-2.5 h-2.5 text-[#E5192A] fill-[#E5192A]" /> VER CLASES
              </span>
            </div>

            {/* Background design elements */}
            <div className="absolute right-[-40px] top-[-30px] w-48 h-48 bg-[#E5192A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-[-20px] bottom-[-20px] w-32 h-32 bg-neutral-900/80 rounded-full blur-xl pointer-events-none" />
          </div>
        );

      case 'nova-motors':
        return (
          <div className="absolute inset-0 bg-[#070B14] flex flex-col justify-between p-4 overflow-hidden select-none">
            {/* Top headers as pill buttons with caps spacing */}
            <div className="flex justify-between items-center z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#4A9EFF] animate-pulse" />
                <span className="text-[8px] font-semibold text-neutral-300 font-mono tracking-widest">NOVA AI CONFIGURATOR</span>
              </div>
              <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded border border-[#4A9EFF]/30 bg-[#4A9EFF]/10 text-white text-[8px] uppercase tracking-wider">
                BOOK TEST DRIVE
              </span>
            </div>

            {/* High Tech HUD Graphics */}
            <div className="my-auto z-10 text-center relative py-2">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-32 h-32 rounded-full border border-dashed border-[#4A9EFF] animate-[spin_20s_linear_infinite]" />
                <div className="w-20 h-20 rounded-full border border-double border-[#4A9EFF] absolute" />
              </div>
              <h4 className="text-2xl md:text-3xl font-display font-black text-white leading-none tracking-tight">
                THE FUTURE OF <br />
                <span className="text-[#4A9EFF] opacity-90 font-black">DRIVING STARTS HERE</span>
              </h4>
              <p className="text-[8px] text-neutral-400 tracking-wider font-mono uppercase mt-1.5">
                BESPOKE ELECTRIC SUPERCAR ENGINE
              </p>
            </div>

            {/* Dashboard metrics at the bottom */}
            <div className="flex justify-between items-center z-10 pt-2 border-t border-[#4A9EFF]/10">
              <div className="flex gap-4 text-left">
                <div>
                  <p className="text-[7px] text-neutral-500 font-mono tracking-wider">RANGE</p>
                  <p className="text-[10px] text-white font-mono font-bold leading-none">820 KM</p>
                </div>
                <div>
                  <p className="text-[7px] text-neutral-500 font-mono tracking-wider">0-100 KM/H</p>
                  <p className="text-[10px] text-[#4A9EFF] font-mono font-bold leading-none">1.9s</p>
                </div>
              </div>
              <div className="w-12 h-4 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4A9EFF] opacity-80" />
                  ))}
                </div>
              </div>
            </div>

            {/* Soft blue glowing core */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#4A9EFF]/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        );

      case 'nokia-ia':
        return (
          <div className="absolute inset-0 bg-[#0F0F0F] flex flex-col justify-between p-4 overflow-hidden select-none">
            {/* Swiss minimalist layout black & white */}
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-bold text-white font-mono uppercase tracking-wider">ИO K I A</span>
              <span className="text-[8px] text-neutral-500 font-mono uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
                INSIGHTS · SOLUTIONS
              </span>
            </div>

            {/* Elegant centered layout */}
            <div className="my-auto z-10 text-center">
              <div className="inline-block px-2.5 py-0.5 rounded-full border border-neutral-800 bg-neutral-900/60 mb-2">
                <span className="text-[7px] font-mono text-neutral-400 uppercase tracking-widest">
                  PIONEERING DYNAMIC AESTHETICS
                </span>
              </div>
              <h4 className="text-3xl font-display font-black text-white leading-none tracking-tight">
                Bold Ideas That <br />
                Start With Vision.
              </h4>
              <p className="text-[8px] text-neutral-500 max-w-xs mx-auto mt-2 leading-relaxed">
                We help modern brands craft digital stories that inspire action and drive results.
              </p>
            </div>

            {/* Grid statistics */}
            <div className="flex justify-between items-center z-10 pt-2 border-t border-neutral-900">
              <span className="text-[8px] text-neutral-400 font-mono uppercase">ESTILO SUIZO IA</span>
              <div className="flex items-center gap-1.5 text-[8px] text-white bg-white/10 px-2 py-0.5 rounded">
                <ShieldCheck className="w-3 h-3 text-neutral-400" /> COMPLIANCE OK
              </div>
            </div>

            {/* Subtle B&W atmospheric shadows */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,#000000_100%] opacity-80 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black to-transparent pointer-events-none" />
          </div>
        );

      case 'lumina-university':
        return (
          <div className="absolute inset-0 bg-[#05060E] flex flex-col justify-between p-4 overflow-hidden select-none bg-radial-[circle_at_center,rgba(212,168,75,0.06)_0%,transparent_70%]">
            {/* Top high-end header */}
            <div className="flex justify-between items-center z-10">
              <span className="text-[10px] font-serif italic text-[#D4A84B] font-bold">Lumina University</span>
              <span className="text-[8px] tracking-widest text-[#D4A84B] border border-[#D4A84B]/20 bg-[#D4A84B]/5 px-2 py-0.5 rounded font-serif uppercase">
                ADMISSIONS
              </span>
            </div>

            {/* Cinematic Serif Layout */}
            <div className="my-auto z-10 text-center py-1">
              <h4 className="text-2xl md:text-2xl font-serif text-white italic tracking-wide leading-snug">
                Where ideas of the <br />
                <span className="text-[#D4A84B] font-normal not-italic relative inline-block">
                  future
                  <span className="absolute bottom-[-2px] left-0 right-0 h-px bg-[#D4A84B]/50" />
                </span> come to life.
              </h4>
              <p className="text-[8px] text-neutral-400 max-w-xs mx-auto mt-2 leading-relaxed italic">
                “A modern private university shaping creative, innovative, and conscious leaders.”
              </p>
            </div>

            {/* Dual Actions layout */}
            <div className="flex justify-between items-center z-10 pt-2 border-t border-[#D4A84B]/10">
              <div className="flex gap-2">
                <span className="text-[7px] text-[#D4A84B] font-mono uppercase tracking-wider">SCHOLARSHIP V4</span>
              </div>
              <div className="flex gap-1">
                <span className="text-[8px] text-white/90 border border-white/10 px-1.5 py-0.5 rounded font-sans scale-90">
                  Explore Programs
                </span>
                <span className="text-[8px] text-[#0A0A0A] bg-[#D4A84B] font-bold px-2 py-0.5 rounded font-sans scale-90">
                  Apply Now
                </span>
              </div>
            </div>

            {/* Cosmic background effects */}
            <div className="absolute ring-1 ring-[#D4A84B]/10 rounded-full w-48 h-48 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-md opacity-20 pointer-events-none" />
            <div className="absolute right-4 top-8 flex gap-0.5">
              <Star className="w-1.5 h-1.5 text-[#D4A84B] opacity-50" />
              <Star className="w-1 h-1 text-[#D4A84B] opacity-30" />
            </div>
          </div>
        );

      default:
        return <div className="absolute inset-0 bg-[#141414]" />;
    }
  };

  return (
    <div 
      className="relative group rounded-2xl md:rounded-3xl border overflow-hidden transition-all duration-500 bg-[#121212]"
      style={{ 
        borderColor: 'rgba(255,255,255,0.08)',
        aspectRatio: '16/9'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Interactive Mock Layout Preview */}
      <div className="absolute inset-0 w-full h-full transition-all duration-700 pointer-events-none">
        {renderMiniPreview()}
      </div>

      {/* High-fidelity Blur Hover Overlay */}
      <div 
        className={`absolute inset-0 bg-[#0A0A0A]/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-5 md:p-6 z-20 backdrop-blur-md`}
      >
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[9px] font-mono tracking-widest text-[#E5192A] uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                  style={{ color: project.accentHex, borderColor: `${project.accentHex}40` }}>
              {project.industry}
            </span>
            <h3 className="text-2xl mt-3 font-display font-black text-white leading-none tracking-tight">
              {project.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-neutral-500 font-bold">
            {project.year}
          </span>
        </div>

        <div className="text-left py-2">
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[9px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button 
            onClick={() => onSelect(project)}
            className="flex-1 bg-white hover:bg-neutral-200 text-[#0A0A0A] font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer shadow-lg outline-none"
          >
            <Eye className="w-3.5 h-3.5" /> Explorar Detalles
          </button>
          
          <button 
            type="button"
            className="w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 cursor-pointer"
            onClick={() => onSelect(project)}
          >
            <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
