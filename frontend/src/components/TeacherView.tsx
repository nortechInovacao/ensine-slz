'use client';

import React from 'react';
import { Users, AlertCircle, TrendingUp, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

export const TeacherView: React.FC = () => {
  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span>Painel do Docente — EnsineSLZ</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Painel do Professor — Gestão de Turmas em SLZ
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Acompanhe o engajamento, desempenho em trilhas e estudantes que precisam de reforço.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs text-slate-500 font-medium">Turma Ativa</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Turma 2º Ano A</h3>
            <p className="text-xs text-slate-400">Escola de Ensino Médio SLZ</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs text-slate-500 font-medium">Total de Alunos</span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">32 alunos</h3>
            <p className="text-xs text-emerald-600 font-semibold">24 alunos ativos esta semana</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs text-slate-500 font-medium">Precisam de Atenção</span>
            <h3 className="text-xl font-bold text-amber-600">6 alunos</h3>
            <p className="text-xs text-amber-600 font-semibold">Atraso nas entregas</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs text-slate-500 font-medium">Conclusão Média em Trilhas</span>
            <h3 className="text-xl font-bold text-emerald-600">78%</h3>
            <p className="text-xs text-slate-400">Acima da média geral</p>
          </div>
        </div>

      </div>
    </div>
  );
};
