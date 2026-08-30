'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { BookOpen, Briefcase, Rocket, Wrench, ShieldCheck, ArrowRight, Award, CheckCircle2, Bookmark, Compass } from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { user, setCurrentView, activeTrackProgress, savedOpportunityIds } = useApp();
  const progressPct = activeTrackProgress
    ? Math.round((activeTrackProgress.completedSteps.length / 5) * 100)
    : 60;

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-slz-900 via-slz-800 to-slate-900 text-white rounded-2xl p-8 border border-slz-800 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800">
                Dashboard do Estudante
              </span>
              <h1 className="text-3xl font-extrabold mt-2">
                Olá, {user.name.split(' ')[0]} 👋
              </h1>
              <p className="text-slz-200 text-sm mt-1">
                O que você quer fazer hoje em São Luís?
              </p>
            </div>

            {/* Quick Track Progress Card */}
            <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700 space-y-2 shrink-0">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Trilha em Andamento</span>
                <span className="text-amber-400 font-bold">{progressPct}%</span>
              </div>
              <div className="w-48 h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full transition-all duration-300" style={{ width: `${progressPct}%` }} />
              </div>
              <p className="text-[11px] text-slate-300">Introdução à Programação</p>
            </div>
          </div>
        </div>

        {/* 5 Main Quick Action Cards */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Ações Rápidas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div
              onClick={() => setCurrentView('aprender')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition cursor-pointer shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 transition">
                  📚 Continuar aprendendo
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-600 pt-4 block">Acessar trilhas →</span>
            </div>

            <div
              onClick={() => setCurrentView('oportunidades')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 transition cursor-pointer shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-600 transition">
                  💼 Encontrar oportunidades
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-amber-600 pt-4 block">Ver bolsas em SLZ →</span>
            </div>

            <div
              onClick={() => setCurrentView('projetos')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition cursor-pointer shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center font-bold">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-indigo-600 transition">
                  🚀 Participar de um projeto
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-indigo-600 pt-4 block">Entrar em desafios →</span>
            </div>

            <div
              onClick={() => setCurrentView('utilidades')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition cursor-pointer shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 transition">
                  🛠️ Usar uma ferramenta
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 pt-4 block">Calculadora & Plano →</span>
            </div>

            <div
              onClick={() => setCurrentView('verificacao')}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500 transition cursor-pointer shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-teal-600 transition">
                  🔎 Verificar informação
                </h3>
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-teal-600 pt-4 block">Modo V Auditoria →</span>
            </div>

          </div>
        </div>

        {/* Dashboard Grid: Active Progress & Saved Items */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Track Progress Box */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-slz-600" />
                Sua Aprendizagem em Andamento
              </h3>
              <button onClick={() => setCurrentView('aprender')} className="text-xs font-bold text-slz-600 hover:underline">
                Ver todas as aulas
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  Trilha — Introdução à Programação
                </h4>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  80% Concluído
                </span>
              </div>
              <p className="text-xs text-slate-500">Próximo passo: Concluir módulo de Git e GitHub</p>
              <button
                onClick={() => setCurrentView('aprender')}
                className="w-full py-2 bg-slz-600 hover:bg-slz-700 text-white font-bold text-xs rounded-lg transition"
              >
                Continuar de Onde Parou →
              </button>
            </div>
          </div>

          {/* Saved Opportunities Summary Box */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-amber-500" />
                Oportunidades Salvas ({savedOpportunityIds.length})
              </h3>
              <button onClick={() => setCurrentView('oportunidades')} className="text-xs font-bold text-amber-600 hover:underline">
                Explorar mais
              </button>
            </div>

            {savedOpportunityIds.length === 0 ? (
              <div className="text-center py-6 space-y-2">
                <p className="text-xs text-slate-500">Você ainda não salvou nenhuma oportunidade.</p>
                <button
                  onClick={() => setCurrentView('oportunidades')}
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-lg"
                >
                  Explorar Oportunidades em SLZ
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                  <h4 className="font-bold text-slate-900 dark:text-white">Bolsa de Estudo Formação Dev SLZ 2026</h4>
                  <p className="text-slate-500">IFMA • Prazo: 15/09/2026</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs">
                  <h4 className="font-bold text-slate-900 dark:text-white">Curso Gratuito de Inglês Instrumental</h4>
                  <p className="text-slate-500">Centro de Línguas • Prazo: 10/09/2026</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
