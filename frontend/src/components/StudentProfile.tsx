'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { User, MapPin, Award, BookOpen, FolderKanban, CheckCircle2, Bookmark, Code2 } from 'lucide-react';

export const StudentProfile: React.FC = () => {
  const { user } = useApp();

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Profile Card Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slz-700 text-white flex items-center justify-center font-extrabold text-2xl shadow-md">
              {user.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {user.name}
                </h1>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slz-100 dark:bg-slz-950 text-slz-700 dark:text-slz-300">
                  Estudante
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {user.city} â€” Bairro: {user.neighborhood}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center border border-slate-200 dark:border-slate-700">
              <span className="text-lg font-bold text-slate-900 dark:text-white block">{user.certificatesCount}</span>
              <span className="text-slate-500">Certificados</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center border border-slate-200 dark:border-slate-700">
              <span className="text-lg font-bold text-slate-900 dark:text-white block">1</span>
              <span className="text-slate-500">Projeto Ativo</span>
            </div>
          </div>
        </div>

        {/* Section: Minhas Habilidades (Activity Based) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-slz-600" />
                Minhas Habilidades PrÃ¡ticas
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                O progresso Ã© atualizado automaticamente conforme vocÃª conclui aulas e desafios.
              </p>
            </div>

            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-lg">
              Baseado em Atividades Reais
            </span>
          </div>

          {/* Skill Progress Bars */}
          <div className="space-y-4">
            {(user.skills ?? []).map((skill) => (
              <div key={skill} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span>{skill}</span>
                  <span className="text-slz-600 dark:text-slz-400 font-mono">Adicionada</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-slz-600 to-amber-500 rounded-full transition-all duration-500"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Ãreas de Interesse</h3>
            <div className="flex flex-wrap gap-2">
              {user.interests.map((item) => (
                <span key={item} className="px-3 py-1 bg-slz-50 dark:bg-slz-950 text-slz-700 dark:text-slz-300 rounded-lg text-xs font-semibold border border-slz-200 dark:border-slz-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">Objetivos em SÃ£o LuÃ­s</h3>
            <div className="flex flex-wrap gap-2">
              {(user.goals ?? []).map((item) => (
                <span key={item} className="px-3 py-1 bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 rounded-lg text-xs font-semibold border border-amber-200 dark:border-amber-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
