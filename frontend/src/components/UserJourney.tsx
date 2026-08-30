'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Compass, BookOpen, Award, FolderKanban, Briefcase, Target, ArrowRight } from 'lucide-react';

export const UserJourney: React.FC = () => {
  const { user, setCurrentView } = useApp();

  // Current stage calculated based on user activity
  const currentStageIndex = 2; // Habilidade / Projeto phase for demo user

  const stages = [
    {
      title: 'Descoberta',
      desc: 'Identifique seus interesses',
      icon: Compass,
      view: 'descoberta' as const,
    },
    {
      title: 'Aprendizado',
      desc: 'Trilhas e conhecimentos básicos',
      icon: BookOpen,
      view: 'aprender' as const,
    },
    {
      title: 'Habilidade',
      desc: 'Desenvolvimento de prática',
      icon: Target,
      view: 'aprender' as const,
    },
    {
      title: 'Projeto',
      desc: 'Desafios reais comunitários',
      icon: FolderKanban,
      view: 'projetos' as const,
    },
    {
      title: 'Portfólio',
      desc: 'Certificados & conquistas',
      icon: Award,
      view: 'perfil' as const,
    },
    {
      title: 'Oportunidade',
      desc: 'Estágios, bolsas e futuro',
      icon: Briefcase,
      view: 'oportunidades' as const,
    },
  ];

  return (
    <section className="py-14 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slz-600 dark:text-slz-400">
              Fluxo do Produto
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Sua Jornada de Crescimento em São Luís
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              O EnsineSLZ te acompanha em cada etapa: da primeira dúvida à conquista da oportunidade.
            </p>
          </div>

          <button
            onClick={() => setCurrentView('dashboard')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slz-600 dark:text-slz-400 hover:underline shrink-0"
          >
            <span>Ver meu progresso no Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Journey Timeline Bar */}
        <div className="relative">
          
          {/* Connector Line behind desktop cards */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isPast = idx < currentStageIndex;
              const isCurrent = idx === currentStageIndex;

              return (
                <div
                  key={stage.title}
                  onClick={() => setCurrentView(stage.view)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer bg-white dark:bg-slate-900 ${
                    isCurrent
                      ? 'border-slz-600 shadow-md ring-2 ring-slz-600/20'
                      : isPast
                      ? 'border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-400'
                      : 'border-slate-200 dark:border-slate-800 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${
                        isCurrent
                          ? 'bg-slz-600 text-white'
                          : isPast
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? 'bg-slz-100 text-slz-800 dark:bg-slz-950 dark:text-slz-300'
                          : isPast
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                      }`}
                    >
                      {isCurrent ? 'Sua Etapa' : isPast ? 'Concluído' : `Etapa 0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
