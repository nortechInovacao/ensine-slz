'use client';

import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, XCircle, Search, ExternalLink, RefreshCw, Calendar, Building2 } from 'lucide-react';

export const ModoVVerificacao: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [activeResult, setActiveResult] = useState<any>(null);

  const sampleVerifications = [
    {
      title: 'Bolsa de Estudo Formação Dev SLZ 2026',
      institution: 'Instituto Federal do Maranhão (IFMA)',
      modality: 'Híbrido (Presencial no Monte Castelo + EAD)',
      cost: 'Gratuito',
      registrationDeadline: '15/09/2026',
      status: 'verified' as const, // verified (green), pending (yellow), outdated (red)
      statusText: '🟢 Verificado',
      source: 'Site oficial do IFMA (ifma.edu.br) — Edital Nº 12/2026',
      lastCheck: '30/08/2026',
      details: 'Conferido diretamente nos canais governamentais do Maranhão. Link original verificado com certificado de segurança.',
    },
    {
      title: 'Curso Gratuito de Robótica na Comunidade',
      institution: 'Associação de Moradores do Coroadinho',
      modality: 'Presencial',
      cost: 'Gratuito',
      registrationDeadline: '25/09/2026',
      status: 'pending' as const,
      statusText: '🟡 Verificação pendente',
      source: 'Rede social da associação local',
      lastCheck: '28/08/2026',
      details: 'Aguardando confirmação por e-mail oficial do responsável pela turma. Recomendamos confirmar presencialmente antes de enviar dados sensíveis.',
    },
    {
      title: 'Seleção para Estágio em Administração 2025',
      institution: 'Prefeitura Municipal de São Luís',
      modality: 'Presencial',
      cost: 'Gratuito',
      registrationDeadline: '10/12/2025',
      status: 'outdated' as const,
      statusText: '🔴 Informação desatualizada / Inscrições Encerradas',
      source: 'Diário Oficial de São Luís (Edição Dez/2025)',
      lastCheck: '15/01/2026',
      details: 'Esta oferta pertence ao ciclo anterior e se encontra expirada. Não envie dados pessoais para este formulário antigo.',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    const found = sampleVerifications.find(
      (item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.institution.toLowerCase().includes(query.toLowerCase())
    );
    if (found) {
      setActiveResult(found);
    } else {
      setActiveResult({
        title: query,
        institution: 'Fonte não cadastrada na base de auditoria',
        modality: 'Não especificada',
        cost: 'Não verificado',
        registrationDeadline: 'Pendente',
        status: 'pending',
        statusText: '🟡 Verificação pendente — Análise necessária',
        source: 'Link ou informe fornecido pelo usuário',
        lastCheck: 'Hoje (30/08/2026)',
        details: 'Não foi possível confirmar esta oferta automaticamente nos canais oficiais de São Luís. Nossa equipe recomenda cautela antes de preencher formulários.',
      });
    }
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Banner */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Modo V — Verificação de Informações Educacionais</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Auditoria e Confiabilidade de Oportunidades
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Antes de se inscrever em um curso ou bolsa, verifique se a oportunidade possui fonte oficial confirmada, prazos reais e link autêntico em São Luís.
          </p>

          {/* Verification Search Bar */}
          <form onSubmit={handleSearch} className="pt-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cole o nome do curso, instituição ou link da vaga para verificar..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:bg-white focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow transition shrink-0"
              >
                Verificar Agora
              </button>
            </div>
          </form>
        </div>

        {/* Audit Search Result Card */}
        {activeResult && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg space-y-6 animate-in fade-in duration-200">
            
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Relatório de Auditoria Modo V
              </span>

              {activeResult.status === 'verified' && (
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  {activeResult.statusText}
                </span>
              )}

              {activeResult.status === 'pending' && (
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  {activeResult.statusText}
                </span>
              )}

              {activeResult.status === 'outdated' && (
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border border-red-300 dark:border-red-800 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-red-600" />
                  {activeResult.statusText}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {activeResult.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                  <p className="text-slate-500 font-medium">Instituição Responsável:</p>
                  <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-teal-600" />
                    {activeResult.institution}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                  <p className="text-slate-500 font-medium">Modalidade & Custo:</p>
                  <p className="font-bold text-slate-900 dark:text-white">
                    {activeResult.modality} • {activeResult.cost}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                  <p className="text-slate-500 font-medium">Prazo de Inscrição:</p>
                  <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    {activeResult.registrationDeadline}
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                  <p className="text-slate-500 font-medium">Última Verificação:</p>
                  <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-teal-600" />
                    {activeResult.lastCheck}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 space-y-2 text-xs">
              <p className="font-bold text-slate-900 dark:text-white">
                Fonte Oficial Confirmada:
              </p>
              <p className="text-slate-600 dark:text-slate-300 font-mono">
                {activeResult.source}
              </p>
              <p className="text-slate-500 pt-1 border-t border-slate-200 dark:border-slate-700">
                {activeResult.details}
              </p>
            </div>

          </div>
        )}

        {/* Standard Verification Checklist Cards */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Exemplos Auditados Recentemente em São Luís
          </h3>

          <div className="space-y-3">
            {sampleVerifications.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveResult(item)}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-teal-500 transition cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.institution} • {item.registrationDeadline}
                  </p>
                </div>

                <span className="text-xs font-bold px-3 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                  {item.statusText}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
