'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { BookOpen, Briefcase, Rocket, Wrench, SearchCheck, ArrowRight } from 'lucide-react';

export const OQueVoceProcura: React.FC = () => {
  const { setCurrentView } = useApp();

  const categories = [
    {
      id: 'aprender',
      title: '📚 Quero aprender',
      subtitle: 'Encontre conteúdos, cursos e trilhas estruturadas do zero.',
      view: 'aprender' as const,
      color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20 hover:border-emerald-500',
      iconBg: 'bg-emerald-500 text-white',
      badge: 'Modo A',
    },
    {
      id: 'oportunidade',
      title: '💼 Quero uma oportunidade',
      subtitle: 'Encontre bolsas de estudo, vagas de estágio, programas e eventos em SLZ.',
      view: 'oportunidades' as const,
      color: 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 hover:border-amber-500',
      iconBg: 'bg-amber-500 text-white',
      badge: 'Modo O',
    },
    {
      id: 'participar',
      title: '🚀 Quero participar',
      subtitle: 'Entre em projetos e desafios reais da comunidade para criar seu portfólio.',
      view: 'projetos' as const,
      color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-950/20 hover:border-indigo-500',
      iconBg: 'bg-indigo-500 text-white',
      badge: 'Modo P',
    },
    {
      id: 'ferramenta',
      title: '🛠️ Preciso de uma ferramenta',
      subtitle: 'Use a calculadora de notas, calendário de provas e gerador de plano de estudos.',
      view: 'utilidades' as const,
      color: 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20 hover:border-blue-500',
      iconBg: 'bg-blue-500 text-white',
      badge: 'Modo S',
    },
    {
      id: 'verificar',
      title: '🔎 Quero verificar uma informação',
      subtitle: 'Confira se cursos, bolsas ou links educacionais possuem fontes oficiais confiáveis.',
      view: 'verificacao' as const,
      color: 'border-teal-200 dark:border-teal-800 bg-teal-50/50 dark:bg-teal-950/20 hover:border-teal-500',
      iconBg: 'bg-teal-600 text-white',
      badge: 'Modo V',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slz-600 dark:text-slz-400 bg-slz-50 dark:bg-slz-950 px-3 py-1 rounded-full border border-slz-200 dark:border-slz-800">
            Navegação por Objetivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            O que você procura hoje?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base">
            Selecione uma das áreas abaixo para acessar as ferramentas e conteúdos sob medida para o seu momento.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setCurrentView(cat.view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between group ${cat.color}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs">
                    {cat.badge}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-slz-600 dark:group-hover:text-slz-400 transition">
                  {cat.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              <div className="pt-6 flex items-center text-xs font-bold text-slz-600 dark:text-slz-400 group-hover:underline">
                <span>Acessar {cat.badge}</span>
              </div>
            </div>
          ))}

          {/* Special Quick Discovery Quiz Box */}
          <div
            onClick={() => {
              setCurrentView('descoberta');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-6 rounded-2xl border border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 to-amber-100/60 dark:from-amber-950/40 dark:to-slate-900 hover:border-amber-500 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500 text-slate-950">
                  Modo D — Guia
                </span>
                <ArrowRight className="w-5 h-5 text-amber-700 dark:text-amber-300 group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                💡 Ainda não sei por onde começar?
              </h3>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Responda a 2 perguntas rápidas sobre seus gostos e objetivos para o sistema sugerir o seu caminho ideal.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
              <span>Iniciar Teste de Descoberta →</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
