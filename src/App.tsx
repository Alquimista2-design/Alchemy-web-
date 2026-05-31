/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  ArrowUpRight, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Send,
  MessageSquare,
  CheckCircle,
  Menu,
  X,
  Gauge,
  Clock,
  Briefcase,
  Flame,
  MousePointer,
  Sparkle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, SERVICES, PROCESS_STEPS, METRICS } from './data';
import { Project, Service } from './types';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { ProjectCard } from './components/ProjectCard';
import { ProjectShowcaseModal } from './components/ProjectShowcaseModal';
import { CountdownTimer } from './components/CountdownTimer';

export default function App() {
  const [activeThemeId, setActiveThemeId] = useState<string>('nova-motors');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Find active project styling info
  const activeProject = PROJECTS.find(p => p.id === activeThemeId) || PROJECTS[1];

  // Apply custom aesthetic rules globally
  const bannerText = activeProject.pillText || "✦ Diseñado con IA · Entregado en días";
  const accentColor = activeProject.accentHex;
  const fontClass = activeProject.customFont === 'serif' ? 'font-serif' : 'font-display';

  // State counting animations or effects can be simulated
  const handleThemeChange = (id: string) => {
    setActiveThemeId(id);
    // Visual flash or sound effect can go here in future
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  // Scroll to section helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative flex flex-col font-sans selection:bg-neutral-800 selection:text-white overflow-hidden">
      
      {/* Dynamic ambient highlight glow */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[700px] pointer-events-none transition-all duration-1000 z-0 opacity-40`}
        style={{
          background: `radial-gradient(circle at 50% -10%, ${accentColor}33 0%, transparent 70%)`
        }}
      />
      
      {/* Sutil Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-25 z-0" />
      
      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* FIXED DYNAMIC HEADER */}
      <header 
        className="sticky top-0 z-40 backdrop-blur-md border-b bg-[#0A0A0A]/85 transition-all duration-300"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Logo with dynamic accent glow */}
          <button 
            type="button"
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-2.5 group hover:opacity-90 cursor-pointer"
          >
            <div 
              className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-lg text-white transition-all duration-500 bg-neutral-900 border"
              style={{ 
                borderColor: `${accentColor}50`,
                boxShadow: `0 0 15px ${accentColor}1a`
              }}
            >
              <span style={{ color: accentColor }}>A</span>
            </div>
            <span className="font-display font-extrabold text-xl tracking-wider text-white select-none">
              ALCHEMY <span className="opacity-40 font-light">STUDIO</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-neutral-400 font-semibold select-none">
            <button 
              type="button" 
              onClick={() => scrollTo('proyectos')} 
              className="hover:text-white transition-all cursor-pointer hover:translate-y-[-1px]"
            >
              PROYECTOS
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('proceso')} 
              className="hover:text-white transition-all cursor-pointer hover:translate-y-[-1px]"
            >
              PROCESO
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('servicios')} 
              className="hover:text-white transition-all cursor-pointer hover:translate-y-[-1px]"
            >
              SERVICIOS
            </button>
            <button 
              type="button" 
              onClick={() => scrollTo('contacto')} 
              className="hover:text-white transition-all cursor-pointer hover:translate-y-[-1px]"
            >
              CONTACTO
            </button>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollTo('contacto')}
              className="text-xs font-mono tracking-widest font-bold px-5 py-2.5 rounded-xl border transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 text-white"
              style={{
                borderColor: `${accentColor}40`,
                backgroundColor: `${accentColor}10`
              }}
            >
              HABLEMOS
            </button>
          </div>

          {/* Mobile menu triggers */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white p-2 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#0A0A0A] border-b overflow-hidden"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <div className="px-4 py-6 space-y-4 flex flex-col font-mono text-center tracking-widest text-xs">
                <button type="button" onClick={() => scrollTo('proyectos')} className="py-2.5 text-neutral-300 hover:text-white border-b border-neutral-900 cursor-pointer">PROYECTOS</button>
                <button type="button" onClick={() => scrollTo('proceso')} className="py-2.5 text-neutral-300 hover:text-white border-b border-neutral-900 cursor-pointer">PROCESO</button>
                <button type="button" onClick={() => scrollTo('servicios')} className="py-2.5 text-neutral-300 hover:text-white border-b border-neutral-900 cursor-pointer">SERVICIOS</button>
                <button type="button" onClick={() => scrollTo('contacto')} className="py-2.5 text-neutral-300 hover:text-white border-b border-neutral-900 cursor-pointer">CONTACTO</button>
                <button 
                  onClick={() => scrollTo('contacto')}
                  className="py-3 mt-2 rounded-xl text-xs font-bold font-mono tracking-widest text-black"
                  style={{ backgroundColor: accentColor || '#FFFFFF' }}
                >
                  AGENDA LLAMADA
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* DYNAMIC HERO SECTION */}
      <section id="hero" className="relative z-10 pt-10 pb-16 md:pt-14 md:pb-24 flex flex-col items-center">
        
        {/* Style selection controller */}
        <div className="mb-10 w-full">
          <ThemeSwitcher 
            projects={PROJECTS} 
            activeThemeId={activeThemeId} 
            onThemeChange={handleThemeChange} 
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center">
          
          {/* Badge Pill with text spacing */}
          <div className="inline-block relative mb-8">
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border bg-[#141414]/90 text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-neutral-300"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <Sparkles className="w-3 md:w-3.5 h-3 md:h-3.5 animate-spin" style={{ color: accentColor }} />
              <span>{bannerText}</span>
            </div>
            {/* Soft glowing dot behind */}
            <div className="absolute inset-0 rounded-full blur-xl filter -z-10 opacity-30" style={{ backgroundColor: accentColor }} />
          </div>

          {/* Headline display - huge bold uppercase */}
          {activeThemeId === 'lumina-university' ? (
            /* Special serif typography header for Lumina University */
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white leading-tight tracking-tight max-w-4xl mx-auto">
              Diseño web del <br />
              <span className="italic text-[#D4A84B] font-light font-serif">futuro</span> que vive hoy.
            </h1>
          ) : (
            /* Barlow Condensed Display for Gymnasium, Autos and Agency */
            <h1 className="text-5xl sm:text-7xl md:text-[95px] font-display font-extrabold text-white leading-[0.9] tracking-tighter uppercase select-none">
              DISEÑO WEB <br />
              <span className="text-neutral-500">QUE CONVIERTE.</span> <br />
              <span className="transition-colors duration-500" style={{ color: accentColor }}>
                CON INTELIGENCIA ARTIFICIAL.
              </span>
            </h1>
          )}

          {/* Subheadline editorial details */}
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto mt-8 font-sans font-medium leading-relaxed leading-snug">
            Diseñamos plataformas web ultra-premium en tiempo récord. Combinamos el rigor creativo de las mejores agencias con la velocidad exponencial de la IA.
          </p>

          {/* Double action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button
              onClick={() => scrollTo('proyectos')}
              className="w-full sm:w-auto text-xs font-mono tracking-widest font-black uppercase py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
              style={{ 
                backgroundColor: accentColor,
                color: activeThemeId === 'nokia-ia' ? '#000000' : '#FFFFFF',
                boxShadow: `0 4px 20px ${accentColor}25`
              }}
            >
              <span>VER PORTAFOLIO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="w-full sm:w-auto text-xs font-mono tracking-widest font-black uppercase py-4 px-8 rounded-xl border text-neutral-300 hover:text-white hover:bg-neutral-950 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <span>AGENDAR LLAMADA</span>
              <Calendar className="w-4 h-4 text-neutral-400" />
            </button>
          </div>

        </div>
      </section>

      {/* METRICAS DE IMPACTO SECTION */}
      <section 
        className="relative z-10 border-y py-12 bg-neutral-900/10"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-900">
            {METRICS.map((metric, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:px-8 pt-6 lg:pt-0"
              >
                <div className="flex items-center gap-2">
                  <span 
                    className="text-4xl md:text-5xl font-display font-black tracking-tight"
                    style={{ color: accentColor }}
                  >
                    {metric.value}
                  </span>
                  <Sparkle className="w-3.5 h-3.5 text-neutral-600 animate-pulse" />
                </div>
                <span className="text-[10px] font-mono font-extrabold text-neutral-500 tracking-widest mt-1.5 uppercase">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID SECTION (4 proyectos) */}
      <section id="proyectos" className="relative z-10 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header editorial block */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
                  CASOS SELECCIONADOS
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3">
                Cuatro Visiones de Portafolio
              </h2>
            </div>
            <p className="text-neutral-400 text-xs md:text-sm max-w-sm font-sans leading-relaxed">
              Cada proyecto representa un sistema visual absoluto. Haz clic en cualquiera para experimentar su ADN de conversión e interactuar con su estructura.
            </p>
          </div>

          {/* Interactive grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PROJECTS.map((proj) => (
              <ProjectCard 
                key={proj.id} 
                project={proj} 
                onSelect={(proj) => setSelectedProject(proj)} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* PROCESO / COMO TRABAJO SECTION */}
      <section 
        id="proceso" 
        className="relative z-10 py-20 border-y"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              MÉTODO ACELERADO
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3">
              Velocidad IA, Acabado Artesanal
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm mt-4 leading-relaxed">
              Eliminamos las reuniones vacías y los plazos infinitos de la agencia de diseño tradicional. Un workflow enfocado en la excelencia que entrega en una semana.
            </p>
          </div>

          {/* Horizontal Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl border overflow-hidden bg-neutral-950/40 group hover:border-neutral-700 transition-all duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {/* Huge back number */}
                <div className="absolute right-6 top-4 text-7xl md:text-8xl font-display font-black text-neutral-900 select-none opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500">
                  {step.number}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-extrabold text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full uppercase">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-sans font-bold text-white mt-6 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  {step.description}
                </p>

                {/* Accent thin line on hover */}
                <div 
                  className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: accentColor }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPACT SERVICES PLATFORMS */}
      <section id="servicios" className="relative z-10 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              SERVICIOS PREMIUM
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3">
              Fórmulas de Inversión
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm mt-4 leading-relaxed">
              Solución visual de impacto editorial de escala internacional. Selecciona la opción ideal para impulsar la identidad digital de tu producto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {SERVICES.map((serv) => {
              // Featured logic
              const isSelectedPresetAccent = serv.isFeatured;
              const borderStyling = isSelectedPresetAccent 
                ? { borderColor: accentColor, boxShadow: `0 10px 40px -10px ${accentColor}15` }
                : { borderColor: 'rgba(255,255,255,0.06)' };

              return (
                <div 
                  key={serv.id}
                  className={`p-6 md:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative bg-[#131313]/50 hover:bg-[#131313]/80`}
                  style={borderStyling}
                >
                  {serv.isFeatured && (
                    <span 
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-extrabold tracking-widest text-[#0A0A0A] px-3.5 py-1 rounded-full uppercase"
                      style={{ backgroundColor: accentColor }}
                    >
                      ✦ RECOMIENDO DIRECTO
                    </span>
                  )}

                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-2">
                      {serv.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                      {serv.description}
                    </p>

                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-neutral-500 text-sm font-mono font-medium">Desde</span>
                      <span className="text-3xl md:text-4xl font-display font-extrabold text-white">
                        ${serv.price}
                      </span>
                      <span className="text-neutral-500 text-xs font-mono">USD</span>
                    </div>

                    <div className="space-y-3.5 pt-6 border-t border-neutral-900">
                      {serv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-400" />
                          <span className="text-xs text-neutral-300 font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-900">
                    <button
                      onClick={() => scrollTo('contacto')}
                      className={`w-full py-3.5 rounded-xl text-xs font-mono tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                        serv.isFeatured 
                          ? 'text-black' 
                          : 'text-white border hover:bg-neutral-950 border-neutral-800'
                      }`}
                      style={{ 
                        backgroundColor: serv.isFeatured ? accentColor : undefined,
                        borderColor: !serv.isFeatured ? 'rgba(255,255,255,0.06)' : undefined
                      }}
                    >
                      SOLICITAR ESTE SERVICIO <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL HIGH-CONTRAST HERO CTA WITH DYNAMIC TIMER */}
      <section 
        className="relative z-10 py-16 md:py-24 border-y overflow-hidden"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        {/* Soft centered background glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: accentColor }}
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
          <div className="inline-block relative mb-6">
            <span 
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-900/50 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-red-500 animate-pulse"
            >
              <Flame className="w-3 h-3 text-red-500 fill-red-500" /> ¡ÚLTIMOS 2 CUPOS DISPONIBLES ESTA SEMANA!
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight uppercase leading-none text-white">
            ¿Listo para un sitio <br />
            <span style={{ color: accentColor }}>que impresiona?</span>
          </h2>
          
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed mb-10">
            Hablemos por 15 minutos en una llamada de estrategia gratuita para refinar tu idea y estructurar tu sistema de diseño inmediato.
          </p>

          {/* Interactive Countdown */}
          <div className="mb-10">
            <CountdownTimer colorHex={accentColor} />
            <p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2 font-mono">
              La oferta promocional se cierra al expirar el tiempo
            </p>
          </div>

          {/* Large CTA call button */}
          <button
            onClick={() => scrollTo('contacto')}
            className="text-xs font-mono tracking-widest font-black uppercase py-4 px-10 rounded-xl transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
            style={{ 
              backgroundColor: accentColor,
              color: activeThemeId === 'nokia-ia' ? '#000000' : '#FFFFFF',
              boxShadow: `0 4px 30px ${accentColor}30`
            }}
          >
            <Calendar className="w-4 h-4" /> AGENDAR MI LLAMADA GRATIS
          </button>

        </div>
      </section>

      {/* DYNAMIC CONTACT FORM SECTION */}
      <section id="contacto" className="relative z-10 py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-400">
              CONTACTO DIRECTO
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight mt-3">
              Construyamos el Futuro
            </h2>
          </div>

          <div 
            className="border rounded-3xl p-6 md:p-8 bg-neutral-950/80 backdrop-blur-md relative overflow-hidden"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            {contactSubmitted ? (
              <div className="text-center py-10">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border"
                  style={{ borderColor: accentColor, backgroundColor: `${accentColor}10` }}
                >
                  <CheckCircle className="w-6 h-6" style={{ color: accentColor }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">✦ Mensaje Recibido</h3>
                <p className="text-neutral-400 text-xs max-w-xs mx-auto">
                  Me pondré en contacto contigo en las próximas horas para agendar nuestra sesión de diseño de IA.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Tu Nombre
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Alex"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none transition-all duration-300"
                      style={{ focusBorderColor: accentColor }}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Correo Electrónico
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="alex@ejemplo.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                    Háblame de tu proyecto (Servicio o Idea)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Necesito lanzar una landing page de alto impacto para mi SaaS de Inteligencia Artificial..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-[#111111] border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-mono tracking-widest font-black uppercase text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Send className="w-3.5 h-3.5" /> AGENDAR E INICIAR PROPUESTA
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer 
        className="relative z-10 border-t py-12 md:py-16 bg-[#060606] text-neutral-500 text-xs font-medium"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-8 md:mb-12">
            
            <div className="md:col-span-5 text-left">
              <div className="flex items-center gap-2.5 mb-4 select-none">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-sm text-white bg-neutral-900 border"
                  style={{ borderColor: `${accentColor}50` }}
                >
                  <span style={{ color: accentColor }}>A</span>
                </div>
                <span className="font-display font-extrabold text-lg tracking-wider text-white">ALCHEMY STUDIO</span>
              </div>
              <p className="text-neutral-500 max-w-sm leading-relaxed mb-6">
                Rediseñando la web del mañana. Una fusión impecable de estética editorial, tecnología exponencial y sistemas interactivos personalizados.
              </p>
              
              {/* Social row */}
              <div className="flex items-center gap-4">
                <a href="https://x.com/Alquimista57582" target="_blank" rel="noopener noreferrer" aria-label="Twitter Social link" className="hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                <a href="https://www.linkedin.com/in/alchemy-webs-con-ia-219a39407/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Social link" className="hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/alchemistwebdesignerking/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Social link" className="hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
              </div>
            </div>

            <div className="md:col-span-3 text-left">
              <h4 className="text-[10px] font-mono tracking-widest font-bold text-neutral-300 uppercase mb-4">
                SISTEMAS RE-ACTIVOS
              </h4>
              <ul className="space-y-2.5 font-mono text-[11px]">
                {PROJECTS.map(proj => (
                  <li key={proj.id}>
                    <button 
                      onClick={() => handleThemeChange(proj.id)}
                      className="hover:text-white transition-all cursor-pointer flex items-center gap-2"
                      style={{ color: activeThemeId === proj.id ? accentColor : undefined }}
                    >
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: proj.accentHex }} />
                      <span>{proj.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 text-left">
              <h4 className="text-[10px] font-mono tracking-widest font-bold text-neutral-300 uppercase mb-4">
                CRÉDITOS Y DIRECTA
              </h4>
              <p className="leading-relaxed">
                Diseñado minuciosamente con IA el <span className="text-neutral-400 font-mono">2026</span>. <br />
                Alineado de forma nativa a los estándares de velocidad de núcleo de Chrome. <br />
                Todos los derechos reservados.
              </p>
            </div>

          </div>

          <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-wider text-neutral-600">
            <p>© {new Date().getFullYear()} ALCHEMY STUDIO. HECHO EN RE-ACT COMPILADO.</p>
            <p className="flex items-center gap-1.5 uppercase hover:text-neutral-400 transition-all select-none">
              <span>LATENCY: 14ms</span> <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </p>
          </div>
        </div>
      </footer>

      {/* DYNAMIC MODAL PRESENCE (SHOWCASE OVERLAYS) */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectShowcaseModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            onApplyTheme={(id) => {
              handleThemeChange(id);
            }}
            isThemeApplied={activeThemeId === selectedProject.id}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
