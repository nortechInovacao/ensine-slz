'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Compass, CheckCircle2, ArrowRight, Sparkles, RefreshCw, BookOpen } from 'lucide-react';

export const ModoDDescoberta: React.FC = () => {
  const { setCurrentView } = useApp();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Tecnologia']);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['Encontrar um estágio']);
  const [isGenerated, setIsGenerated] = useState<boolean>(true); // Shows initial recommendations by default

  const interestOptions = [
    'Resolver problemas',
    'Criar coisas',
    'Tecnologia',
    'Comunicação',
    'Ciências',
    'Negócios',
    'Design',
    'Arte',
    'Meio ambiente',
    'Educação',
    'Saúde',
    'Ainda não sei',
  ];

  const goalOptions = [
    'Melhorar minhas notas',
    'Aprender uma profissão',
    'Entrar na faculdade',
    'Conseguir meu primeiro emprego',
    'Encontrar um estágio',
    'Aprender tecnologia',
    'Criar um negócio',
    'Desenvolver novas habilidades',
    'Ainda não sei',
  ];

  const toggleInterest = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleGoal = (item: string) => {
    setSelectedGoals((prev) =>
      prev.includes(item) ? prev.filter((g) => g !== item) : [...prev, item]
    );
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slz-100 dark:bg-slz-950 text-slz-700 dark:text-slz-300 text-xs font-bold">
            <Compass className="w-4 h-4 text-slz-600" />
            <span>Modo D — Guia de Descoberta</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Descubra seus interesses e construa seu caminho
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-2xl">
            Responda às opções abaixo para que o EnsineSLZ analise suas preferências e sugira as trilhas e oportunidades mais alinhadas para você em São Luís.
          </p>
        </div>

        {/* Step 1 Questionnaire */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 space-y-6">
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slz-600 text-white text-xs flex items-center justify-center font-extrabold">1</span>
              O que você gosta de fazer?
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Selecione uma ou mais opções que chamam sua atenção.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {interestOptions.map((item) => {
              const active = selectedInterests.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => toggleInterest(item)}
                  className={`p-3 rounded-xl text-xs font-semibold text-left border transition flex items-center justify-between ${
                    active
                      ? 'bg-slz-50 dark:bg-slz-950/80 border-slz-600 text-slz-800 dark:text-slz-200 ring-2 ring-slz-600/20'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                  }`}
                >
                  <span>{item}</span>
                  {active && <CheckCircle2 className="w-4 h-4 text-slz-600 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>

        </div>

        {/* Step 2 Questionnaire */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm mb-8 space-y-6">
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs flex items-center justify-center font-extrabold">2</span>
              O que você gostaria de alcançar?
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Qual é seu principal objetivo no momento?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {goalOptions.map((item) => {
              const active = selectedGoals.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => toggleGoal(item)}
                  className={`p-3 rounded-xl text-xs font-semibold text-left border transition flex items-center justify-between ${
                    active
                      ? 'bg-amber-50 dark:bg-amber-950/80 border-amber-500 text-amber-900 dark:text-amber-200 ring-2 ring-amber-500/20'
                      : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                  }`}
                >
                  <span>{item}</span>
                  {active && <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 ml-1" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 flex items-center justify-end">
            <button
              onClick={() => setIsGenerated(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slz-600 hover:bg-slz-700 text-white font-bold text-sm shadow-md transition"
            >
              <Sparkles className="w-4 h-4" />
              <span>Gerar sugestões de caminhos</span>
            </button>
          </div>

        </div>

        {/* Results Output */}
        {isGenerated && (
          <div className="bg-gradient-to-br from-slz-900 to-slate-900 text-white rounded-2xl p-8 border border-slz-800 shadow-xl space-y-6 animate-in fade-in duration-300">
            
            <div className="flex items-center justify-between border-b border-slz-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold">Sugestão de Caminhos Recomendados</h3>
              </div>
              <span className="text-xs text-slz-300 bg-slz-800/80 px-3 py-1 rounded-full">
                Personalizado para São Luís
              </span>
            </div>

            <div>
              <p className="text-sm text-slz-200 font-semibold mb-3">
                Talvez você goste destas áreas:
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-xl bg-slz-800 border border-slz-700 text-white text-sm font-bold flex items-center gap-2">
                  💻 Tecnologia & Programação
                </span>
                <span className="px-4 py-2 rounded-xl bg-slz-800 border border-slz-700 text-white text-sm font-bold flex items-center gap-2">
                  🎨 Design & Criação
                </span>
                <span className="px-4 py-2 rounded-xl bg-slz-800 border border-slz-700 text-white text-sm font-bold flex items-center gap-2">
                  📊 Análise de Dados
                </span>
              </div>
            </div>

            {/* Recommended Track Cards */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-bold text-slz-400 mb-3">
                Trilha Recomendada para Iniciar:
              </p>

              <div className="bg-slate-800/90 rounded-xl p-5 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.5 rounded">
                      Iniciante
                    </span>
                    <span className="text-xs text-slate-400">Duração: 12 horas</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Trilha — Introdução à Programação & Web
                  </h4>
                  <p className="text-xs text-slate-300">
                    Aprenda Lógica, HTML, CSS, JavaScript e crie um projeto final funcional.
                  </p>
                </div>

                <button
                  onClick={() => setCurrentView('aprender')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Acessar Trilha Modo A</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
