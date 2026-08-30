'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Sparkles, HelpCircle, BookOpen, Briefcase, Rocket, ShieldCheck, X } from 'lucide-react';

export const RecommendationsSection: React.FC = () => {
  const { user, setCurrentView } = useApp();
  const [activeExplainId, setActiveExplainId] = useState<string | null>(null);

  const recommendations = [
    {
      id: 'rec-1',
      type: 'Trilha',
      title: 'Introdução à Programação & Lógica',
      provider: 'EnsineSLZ Trilhas',
      tag: 'Tecnologia',
      view: 'aprender' as const,
      icon: BookOpen,
      reason: 'Porque você marcou interesse em "Tecnologia" e "Programação" em seu perfil.',
    },
    {
      id: 'rec-2',
      type: 'Oportunidade',
      title: 'Bolsa Estudantil Tech — Formação Web em SLZ',
      provider: 'Instituto de Educação & Tecnologia MA',
      tag: 'Bolsa Gratuita',
      view: 'oportunidades' as const,
      icon: Briefcase,
      reason: 'Porque você reside em São Luís e busca seu primeiro estágio ou formação profissional.',
    },
    {
      id: 'rec-3',
      type: 'Projeto',
      title: 'Desafio Mobilidade Urbana em São Luís',
      provider: 'Comunidade EnsineSLZ',
      tag: 'Desafio Prático',
      view: 'projetos' as const,
      icon: Rocket,
      reason: 'Porque você possui habilidade em Raciocínio Lógico e deseja criar portfólio real.',
    },
  ];

  return (
    <section className="py-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Recomendações Personalizadas
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Recomendado para você
              </h2>
            </div>
          </div>
          
          <span className="hidden sm:inline-block text-xs text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
            Baseado no seu perfil em São Luís
          </span>
        </div>

        {/* Dynamic Greeting Prompt */}
        <div className="mb-6 p-4 rounded-xl bg-slz-50 dark:bg-slz-950/60 border border-slz-200 dark:border-slz-800 text-sm text-slz-900 dark:text-slz-200 flex items-center justify-between">
          <p>
            💡 Como você demonstrou interesse em <strong>{(user.interests ?? []).slice(0, 2).join(' e ')}</strong>, encontramos algumas opções em São Luís que combinam com seu momento.
          </p>
        </div>

        {/* Grid of Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((item) => {
            const Icon = item.icon;
            const isExplaining = activeExplainId === item.id;

            return (
              <div
                key={item.id}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-4 hover:border-slz-500 transition shadow-xs relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">
                      {item.type}
                    </span>
                    
                    <button
                      onClick={() => setActiveExplainId(isExplaining ? null : item.id)}
                      className="text-xs text-slate-500 hover:text-slz-600 dark:hover:text-slz-400 flex items-center gap-1 bg-white dark:bg-slate-700 px-2 py-1 rounded border border-slate-200 dark:border-slate-600 transition"
                      title="Saber por que esta opção foi recomendada"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Por que vejo isso?</span>
                    </button>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slz-100 dark:bg-slz-900 text-slz-700 dark:text-slz-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.provider}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explanation Drawer Popup */}
                {isExplaining && (
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/80 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 relative animate-in fade-in duration-150">
                    <button
                      onClick={() => setActiveExplainId(null)}
                      className="absolute top-2 right-2 text-amber-700 hover:text-amber-950 dark:hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                    <p className="font-semibold mb-1">Por que estou vendo isso?</p>
                    <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-tight">
                      {item.reason}
                    </p>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Fonte Verificada
                  </span>

                  <button
                    onClick={() => setCurrentView(item.view)}
                    className="text-xs font-bold text-slz-600 dark:text-slz-400 hover:underline"
                  >
                    Acessar agora →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
