'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { BookOpen, CheckCircle2, Circle, Play, FileText, Code2, Award, ChevronRight, Sparkles } from 'lucide-react';

export const ModoAAprender: React.FC = () => {
  const { user, activeTrackProgress, updateTrackStep } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Programação');
  const [activeStepModal, setActiveStepModal] = useState<number | null>(null);

  const categories = [
    'Todos',
    'Matemática',
    'Português',
    'Redação',
    'Ciências',
    'História',
    'Geografia',
    'Inglês',
    'Tecnologia',
    'Programação',
    'Design',
    'Dados',
    'Inteligência Artificial',
    'Educação financeira',
    'Empreendedorismo',
    'Comunicação',
  ];

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Lógica de Programação',
      duration: '2h 30m',
      desc: 'Conceitos básicos de algoritmos, variáveis, condicionais e estruturas de repetição.',
      type: 'Teoria + Exercícios',
    },
    {
      id: 2,
      num: '02',
      title: 'HTML — Estruturação Web',
      duration: '2h 00m',
      desc: 'Tags semânticas, formulários, listas, tabelas e acessibilidade no HTML5.',
      type: 'Teoria + Prática',
    },
    {
      id: 3,
      num: '03',
      title: 'CSS — Estilização e Design',
      duration: '3h 00m',
      desc: 'Seletores, Flexbox, Grid Layout, responsividade e variáveis CSS.',
      type: 'Prática de Layout',
    },
    {
      id: 4,
      num: '04',
      title: 'JavaScript — Lógica Interativa',
      duration: '3h 30m',
      desc: 'Manipulação da DOM, eventos, funções, arrays e requisições HTTP básicas.',
      type: 'Exercícios Interativos',
    },
    {
      id: 5,
      num: '05',
      title: 'Git e GitHub',
      duration: '1h 30m',
      desc: 'Controle de versão, commits, repositórios e publicação de projetos.',
      type: 'Ferramental',
    },
    {
      id: 6,
      num: '06',
      title: 'Projeto Final — Site da Comunidade SLZ',
      duration: '4h 00m',
      desc: 'Construção prática de um site funcional aplicando todos os conceitos aprendidos.',
      type: 'Projeto Prático',
    },
  ];

  const progressPercent = activeTrackProgress
    ? Math.round((activeTrackProgress.completedSteps.length / steps.length) * 100)
    : 0;

  // Visual ASCII progress bar string generator
  const getAsciiProgressBar = (pct: number) => {
    const totalBlocks = 10;
    const filledBlocks = Math.round((pct / 100) * totalBlocks);
    const emptyBlocks = totalBlocks - filledBlocks;
    return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks) + ` ${pct}%`;
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>Modo A — Central de Aprendizagem</span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Aprenda com Trilhas e Materiais Guiados
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
                Acesse disciplinas essenciais, exercite seus conhecimentos e conquiste habilidades práticas.
              </p>
            </div>

            {/* Overall Progress Badge */}
            <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shrink-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                Seu Progresso Atual na Trilha
              </span>
              <div className="font-mono text-sm text-emerald-400 font-bold tracking-wider">
                `{getAsciiProgressBar(progressPercent)}`
              </div>
            </div>
          </div>

          {/* Categories Selector Horizontal Scroll */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Categorias de Estudo:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Track: Introdução à Programação */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">
                Trilha Principal Em Destaque
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Trilha — Introdução à Programação
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Do zero ao primeiro site publicado. Aprenda lógica, desenvolvimento web e Git.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                Nível: Iniciante
              </span>
              <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                Duração: ~16 horas
              </span>
            </div>
          </div>

          {/* Steps List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step) => {
              const isCompleted = activeTrackProgress?.completedSteps.includes(String(step.id)) ?? false;

              return (
                <div
                  key={step.id}
                  className={`p-5 rounded-xl border transition flex flex-col justify-between space-y-4 ${
                    isCompleted
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-base font-extrabold text-slate-400">
                        {step.num}
                      </span>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => updateTrackStep('programacao', String(step.id), !isCompleted)}
                      className="text-xs font-bold flex items-center gap-1 focus:outline-none"
                      title={isCompleted ? 'Marcar como não concluído' : 'Marcar como concluído'}
                    >
                      {isCompleted ? (
                        <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
                          Concluído
                        </span>
                      ) : (
                        <span className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1">
                          <Circle className="w-5 h-5" />
                          Pendente
                        </span>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{step.duration} • {step.type}</span>
                    <button
                      onClick={() => setActiveStepModal(step.id)}
                      className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Estudar Aula</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Acquired Skills Summary */}
          <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Habilidades Adquiridas ao Concluir
              </h4>
              <p className="text-xs text-slate-400">
                HTML5 semântico, CSS Flexbox & Grid, Lógica JavaScript e versionamento Git para seu portfólio.
              </p>
            </div>

            <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-3 py-1.5 rounded-lg border border-amber-800 shrink-0">
              Certificado EnsineSLZ Incluso
            </span>
          </div>

        </div>

        {/* Lesson View Modal Simulation */}
        {activeStepModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <Play className="w-5 h-5 text-emerald-600" />
                  Aula Prática — {steps.find(s => s.id === activeStepModal)?.title}
                </h3>
                <button
                  onClick={() => setActiveStepModal(null)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  Fechar (Esc)
                </button>
              </div>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <strong>Conteúdo da Aula:</strong> Nesta etapa, estudaremos os fundamentos práticos de {steps.find(s => s.id === activeStepModal)?.title}.
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl font-mono text-xs text-slate-800 dark:text-slate-200 space-y-1">
                  <p className="text-slate-500">// Exemplo de Código Didático EnsineSLZ</p>
                  <p><span className="text-blue-500">const</span> cidade = <span className="text-emerald-500">&apos;São Luís&apos;</span>;</p>
                  <p><span className="text-blue-500">function</span> saudarEstudante(nome) &#123;</p>
                  <p className="pl-4">console.log(<span className="text-emerald-500">`Bem-vindo ao futuro em $&#123;cidade&#125;, $&#123;nome&#125;!`</span>);</p>
                  <p>&#125;</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                <button
                  onClick={() => {
                    updateTrackStep('programacao', String(activeStepModal), true);
                    setActiveStepModal(null);
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow transition"
                >
                  Marcar Aula como Concluída
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
