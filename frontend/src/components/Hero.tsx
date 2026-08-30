'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { ArrowRight, Compass, BookOpen, Briefcase, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { setCurrentView, setIsAuthModalOpen, setAuthModalRole, language } = useApp();
  const t = translations[language.startsWith('en') ? 'en' : 'pt-BR'].hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slz-50 via-white to-amber-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-16 lg:py-28 border-b border-slate-200/80 dark:border-slate-800">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0effe_1px,transparent_1px),linear-gradient(to_bottom,#e0effe_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 dark:opacity-5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-slz-100/60 to-transparent dark:from-slz-900/20 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-amber-100/40 to-transparent dark:from-amber-900/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left animate-fade-in-up">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slz-100 dark:bg-slz-900/60 border border-slz-200 dark:border-slz-800 text-slz-800 dark:text-slz-200 text-xs font-semibold shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{t.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              {t.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slz-600 via-slz-500 to-amber-500 dark:from-slz-300 dark:via-slz-400 dark:to-amber-400">
                {t.title2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setCurrentView('descoberta')}
                className="btn-primary-slz inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-bold text-base transition active:scale-[0.98]"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCurrentView('oportunidades')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-base border border-slate-300 dark:border-slate-700 shadow-sm transition active:scale-[0.98] hover:border-slz-400 hover:shadow-md"
              >
                <Briefcase className="w-5 h-5 text-amber-500" />
                <span>{t.ctaSecondary}</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.highlight1}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-slz-500 shrink-0" />
                <span>{t.highlight2}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{t.highlight3}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Logo + Interactive Flow */}
          <div className="lg:col-span-5 animate-fade-in-scale" style={{animationDelay: '0.15s'}}>
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700 shadow-2xl shadow-slz-900/10 space-y-4">
              
              {/* Logo em destaque */}
              <div className="flex items-center justify-center py-4 border-b border-slate-100 dark:border-slate-700/80">
                <div className="relative w-48 h-28 animate-float">
                  <Image
                    src="/Ensine-slz.jpeg"
                    alt="EnsineSLZ — Educação e Inovação em São Luís"
                    fill
                    className="object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>

              {/* Interactive Flow Nodes */}
              <div className="space-y-3">
                
                {/* Node 1: Aprender */}
                <div 
                  onClick={() => setCurrentView('aprender')}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 transition-all cursor-pointer group card-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition">
                        {t.feature1Title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t.feature1Text}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/50 px-2 py-1 rounded-full">
                    {t.feature1Tag}
                  </span>
                </div>

                {/* Node 2: Projetos & Desafios */}
                <div 
                  onClick={() => setCurrentView('projetos')}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-500/10 transition-all cursor-pointer group card-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition">
                        {t.feature2Title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t.feature2Text}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/50 px-2 py-1 rounded-full">
                    {t.feature2Tag}
                  </span>
                </div>

                {/* Node 3: Oportunidades Verificadas */}
                <div 
                  onClick={() => setCurrentView('oportunidades')}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 transition-all cursor-pointer group card-hover"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition">
                        {t.feature3Title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {t.feature3Text}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 dark:bg-amber-900/50 px-2 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> {t.feature3Tag}
                  </span>
                </div>

              </div>

              <div className="bg-gradient-to-r from-slz-50 to-amber-50 dark:from-slz-950/60 dark:to-amber-950/40 p-3 rounded-xl border border-slz-200/60 dark:border-slz-800 text-center">
                <p className="text-xs text-slz-900 dark:text-slz-200 font-medium">
                  {t.footerNote}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
