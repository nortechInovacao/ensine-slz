'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Briefcase, ShieldCheck, AlertTriangle, Clock, MapPin, ExternalLink, Bookmark, CheckCircle2, Search } from 'lucide-react';

export const ModoOOportunidades: React.FC = () => {
  const { savedOpportunityIds, toggleSaveOpportunity, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Todos',
    '🎓 Bolsas',
    '📚 Cursos',
    '💼 Estágios',
    '🧑💻 Formação',
    '🏆 Competições',
    '🚀 Empreendedorismo',
    '🔬 Pesquisa',
    '🎤 Eventos',
    '🤝 Voluntariado',
    '🌎 Intercâmbios',
  ];

  const opportunities = [
    {
      id: 'op-1',
      title: 'Bolsa de Estudo Formação Dev SLZ 2026',
      institution: 'Instituto Federal do Maranhão (IFMA) & Parceiros',
      category: '🎓 Bolsas',
      location: 'São Luís — Monte Castelo (Presencial / Híbrido)',
      modality: 'Híbrido',
      deadline: '15/09/2026',
      requirements: 'Ensino Médio completo ou cursando o 3º ano em escola pública em SLZ.',
      description: 'Bolsa integral de 6 meses para formação profissional em desenvolvimento frontend e banco de dados com bolsa auxílio.',
      source: 'Edital Oficial IFMA / Portal Gov.br',
      status: 'verified' as const, // verified | pending | expired
      link: 'https://ifma.edu.br',
    },
    {
      id: 'op-2',
      title: 'Estágio em Suporte & Tecnologia',
      institution: 'Empresa Local de Soluções SLZ',
      category: '💼 Estágios',
      location: 'São Luís — Renascença (Presencial)',
      modality: 'Presencial',
      deadline: '20/09/2026',
      requirements: 'Estudante de Informática, Análise de Sistemas ou Computação.',
      description: 'Vaga de estágio de 30h semanais para auxílio em infraestrutura de TI e suporte a sistemas.',
      source: 'Divulgação oficial da empresa parceira',
      status: 'verified' as const,
      link: 'https://exemplo.com.br',
    },
    {
      id: 'op-3',
      title: 'Curso Gratuito de Inglês Instrumental para Exatas',
      institution: 'Centro de Línguas Comunitário SLZ',
      category: '📚 Cursos',
      location: 'São Luís — Centro Histórico / EAD',
      modality: 'Online',
      deadline: '10/09/2026',
      requirements: 'Aberto a jovens de São Luís a partir de 15 anos.',
      description: 'Capacitação prática para leitura de documentação técnica em inglês e conversação básica.',
      source: 'Página da Instituição Parceira',
      status: 'verified' as const,
      link: 'https://exemplo.com.br',
    },
    {
      id: 'op-4',
      title: 'Hackathon Maranhão Inovação 2026',
      institution: 'Liga de Tecnologia & Sebrae MA',
      category: '🏆 Competições',
      location: 'São Luís — Multicenter Sebrae (Cohafuma)',
      modality: 'Presencial',
      deadline: '30/09/2026',
      requirements: 'Equipes de 3 a 5 estudantes de São Luís.',
      description: 'Maratona de 48 horas de ideação e desenvolvimento com premiação de R$ 10.000 para a melhor solução.',
      source: 'Regulamento em Verificação Pendente',
      status: 'pending' as const,
      link: 'https://exemplo.com.br',
    },
    {
      id: 'op-5',
      title: 'Programa de Mentoria para Menores Aprendizes',
      institution: 'ONG Saber Maranhão',
      category: '🧑💻 Formação',
      location: 'São Luís — Cidade Operária',
      modality: 'Presencial',
      deadline: '01/08/2026',
      requirements: 'Estudantes da rede pública entre 14 e 18 anos.',
      description: 'Capacitação para inserção no primeiro emprego e desenvolvimento de habilidades interpessoais.',
      source: 'Editais anteriores',
      status: 'expired' as const,
      link: 'https://exemplo.com.br',
    },
  ];

  const filteredOpps = opportunities.filter((op) => {
    const matchesCat = selectedCategory === 'Todos' || op.category === selectedCategory;
    const matchesSearch =
      op.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      op.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold">
            <Briefcase className="w-4 h-4 text-amber-600" />
            <span>Modo O — Central de Oportunidades</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Bolsas, Cursos, Estágios e Eventos em São Luís
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl">
            Todas as oportunidades passam pela curadoria do EnsineSLZ para garantir a veracidade dos dados e prazos.
          </p>

          {/* Search Bar & Category Scroll */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por título, instituição ou bairro em SLZ..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:bg-white focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Opportunities Feed */}
        <div className="space-y-6">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Exibindo {filteredOpps.length} oportunidades encontradas
            </span>

            <button
              onClick={() => setCurrentView('verificacao')}
              className="text-xs font-bold text-slz-600 dark:text-slz-400 hover:underline flex items-center gap-1"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Entenda o Selo Modo V de Verificação</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOpps.map((op) => {
              const isSaved = savedOpportunityIds.includes(op.id);

              return (
                <div
                  key={op.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-amber-400 transition relative"
                >
                  <div className="space-y-3">
                    
                    {/* Header Badges */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                        {op.category}
                      </span>

                      {/* Status Badges */}
                      {op.status === 'verified' && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          ✓ Verificado
                        </span>
                      )}

                      {op.status === 'pending' && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          ⚠ Verificação pendente
                        </span>
                      )}

                      {op.status === 'expired' && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                          Expirado
                        </span>
                      )}
                    </div>

                    {/* Title & Institution */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {op.title}
                      </h3>
                      <p className="text-xs font-semibold text-slz-600 dark:text-slz-400 mt-0.5">
                        {op.institution}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {op.description}
                    </p>

                    {/* Details Box */}
                    <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl space-y-1 text-xs text-slate-600 dark:text-slate-300">
                      <p className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span><strong>Local:</strong> {op.location}</span>
                      </p>
                      <p className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slz-500 shrink-0" />
                        <span><strong>Prazo de Inscrição:</strong> {op.deadline}</span>
                      </p>
                      <p><strong>Requisitos:</strong> {op.requirements}</p>
                      <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-200 dark:border-slate-700">
                        Fonte: {op.source}
                      </p>
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => toggleSaveOpportunity(op.id)}
                      className={`text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                        isSaved
                          ? 'bg-amber-500 text-slate-950 border-amber-500'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-amber-500'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{isSaved ? 'Salva' : 'Salvar'}</span>
                    </button>

                    <a
                      href={op.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-slz-600 hover:bg-slz-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition"
                    >
                      <span>Acessar Oportunidade</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};
