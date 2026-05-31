/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Sparkles, AlertCircle, ArrowRight, ShieldAlert, BadgeInfo, CheckCircle, Flame } from 'lucide-react';
import { Project } from '../types';
import { CountdownTimer } from './CountdownTimer';

interface ProjectShowcaseModalProps {
  project: Project;
  onClose: () => void;
  onApplyTheme: (id: string) => void;
  isThemeApplied: boolean;
}

export function ProjectShowcaseModal({ project, onClose, onApplyTheme, isThemeApplied }: ProjectShowcaseModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Absolute dark overlay background */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Main glass card modal container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border text-left bg-[#0E0E0E] animate-in fade-in zoom-in duration-300"
        style={{ 
          borderColor: 'rgba(255,255,255,0.08)',
          boxShadow: `0 25px 60px -15px ${project.accentHex}20`
        }}
      >
        {/* Sticky Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:rotate-90 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column - High-fidelity mockup and aesthetic specs (5 cols) */}
          <div className="lg:col-span-5 bg-black p-6 md:p-8 flex flex-col justify-between border-r border-neutral-900 min-h-[320px] lg:min-h-0">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-500 font-bold">
                ESTILO VISUAL INTEGRADO
              </span>
              <h3 
                className="text-4xl mt-2 font-display font-black tracking-tight leading-none uppercase"
                style={{ color: project.accentHex }}
              >
                {project.title}
              </h3>
              <p className="text-xs text-neutral-400 font-serif mt-2 italic">
                {project.styleReference}
              </p>
            </div>

            {/* Interactive Specs Details */}
            <div className="space-y-4 my-8">
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">COLOR HEX CENTRAL</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: project.accentHex }} />
                  <span className="text-xs font-mono font-bold text-white">{project.accentHex}</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">TIPOGRAFÍA CORE</p>
                <p className="text-sm font-sans font-medium text-white mt-0.5">
                  {project.customFont === 'serif' ? 'Playfair Display (Serif de Gala)' : 'Barlow Condensed (Display Mayúscula)'}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">ESTRUCTURA DE ENFOQUE</p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[8px] font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply Theme Button */}
            <div className="pt-4 border-t border-neutral-900">
              {isThemeApplied ? (
                <div 
                  className="rounded-xl border p-3 flex items-center gap-2.5 bg-neutral-950"
                  style={{ borderColor: `${project.accentHex}30` }}
                >
                  <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: project.accentHex }} />
                  <div>
                    <p className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">PRESENTE EN LA WEB</p>
                    <p className="text-[9px] text-neutral-400">El sitio web entero tomó el espíritu del proyecto.</p>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => onApplyTheme(project.id)}
                  className="w-full text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg tracking-wider font-mono border"
                  style={{ 
                    borderColor: project.accentHex, 
                    backgroundColor: `${project.accentHex}15`
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" style={{ color: project.accentHex }} /> 
                  ACTIVAR SISTEMA DE DISEÑO
                </button>
              )}
            </div>
          </div>

          {/* Right Column - Briefing, strategy, features (7 cols) */}
          <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-500 px-2.5 py-0.5 rounded-full bg-emerald-950/30 border border-emerald-900/50">
                  ✦ CASO DE ÉXITO {project.year}
                </span>
                <h4 className="text-2xl font-sans font-bold text-white tracking-tight mt-3">
                  Reto, Estrategia & Conversión de IA
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed mt-3">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Special Countdown render if Iron Temple */}
              {project.countdownEnabled && (
                <div className="bg-[#141414] border border-neutral-900 p-4 rounded-2xl">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Flame className="w-4 h-4 text-red-500 fill-red-500" />
                    <p className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                      DEMO INTERACTIVA: MOTOR DE URGENCIA
                    </p>
                  </div>
                  <CountdownTimer colorHex={project.accentHex} />
                  <p className="text-[10px] text-neutral-500 mt-2 text-center">
                    Simulación de urgencia extrema configurada con un solo clic.
                  </p>
                </div>
              )}

              {/* Layout Features and components delivered */}
              <div>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-bold mb-3">
                  MÓDULOS DE CONVERSIÓN ENTREGADOS
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features?.map((feat, idx) => (
                    <div 
                      key={idx} 
                      className="border border-neutral-900 p-3 rounded-xl flex items-center gap-2.5 bg-neutral-950"
                    >
                      <CheckCircle className="w-4 h-4 shrink-0" style={{ color: project.accentHex }} />
                      <span className="text-xs text-neutral-200 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top drawer actions footer */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-mono text-neutral-400">¿Quieres un diseño como este?</p>
                <p className="text-[10px] text-neutral-500">Totalmente personalizado en tiempo récord.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 font-bold text-xs py-2.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-md"
              >
                Cerrar y Ver Portafolio <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
