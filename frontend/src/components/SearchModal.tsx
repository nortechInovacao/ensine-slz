'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Search, X, BookOpen, Briefcase, Rocket, Wrench, Building2, ArrowRight } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setCurrentView } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isSearchOpen) return null;

  const results = [
    { title: 'Trilha de Lógica de Programação', category: 'Aprendizagem', view: 'aprender' as const, icon: BookOpen },
    { title: 'Bolsa de Estudo Formação Dev SLZ 2026', category: 'Oportunidades', view: 'oportunidades' as const, icon: Briefcase },
    { title: 'Desafio Mobilidade Urbana em São Luís', category: 'Projetos', view: 'projetos' as const, icon: Rocket },
    { title: 'Calculadora de Notas & Média', category: 'Utilidades', view: 'utilidades' as const, icon: Wrench },
    { title: 'Instituto Federal do Maranhão (IFMA Monte Castelo)', category: 'Instituições', view: 'mapa' as const, icon: Building2 },
  ].filter((r) => r.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150">
        
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2 flex-1">
            <Search className="w-5 h-5 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="O que você está procurando em São Luís? (ex: bolsa, programação, calculadora)..."
              className="w-full bg-transparent text-sm focus:outline-none text-slate-900 dark:text-white"
            />
          </div>
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Categorized */}
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="text-xs text-slate-500 text-center py-8">Nenhum resultado encontrado para &quot;{searchTerm}&quot;</p>
          ) : (
            results.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentView(r.view);
                    setIsSearchOpen(false);
                  }}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slz-50 dark:hover:bg-slz-950/80 border border-slate-200 dark:border-slate-700/80 transition cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-700 text-slz-600 dark:text-slz-400 border border-slate-200 dark:border-slate-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">{r.title}</h4>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">{r.category}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
