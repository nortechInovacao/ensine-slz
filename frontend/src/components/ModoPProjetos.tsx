'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { FolderKanban, Users, Lightbulb, Rocket, CheckCircle2, ArrowRight, Award, Send } from 'lucide-react';

export const ModoPProjetos: React.FC = () => {
  const { user } = useApp();
  const [activeTab, setActiveTab] = useState<'desafios' | 'meus_projetos' | 'submeter'>('desafios');
  const [submittedIdea, setSubmittedIdea] = useState(false);
  const [joinedProjects, setJoinedProjects] = useState<string[]>(['proj-1']);

  const challenges = [
    {
      id: 'proj-1',
      category: 'Educação',
      title: 'Desafio Educação — Conectividade nas Escolas de SLZ',
      desc: 'Como melhorar o acesso a materiais digitais para estudantes das comunidades periféricas de São Luís?',
      membersCount: 4,
      status: 'Em Desenvolvimento',
      stage: 'Equipe',
    },
    {
      id: 'proj-2',
      category: 'Mobilidade',
      title: 'Desafio Mobilidade — Rotas de Ônibus & Horários SLZ',
      desc: 'Como facilitar a previsão de horários e integração do transporte público entre bairros populosos?',
      membersCount: 3,
      status: 'Inscrições Abertas',
      stage: 'Ideia',
    },
    {
      id: 'proj-3',
      category: 'Meio Ambiente',
      title: 'Desafio Meio Ambiente — Redução de Resíduos na Orla',
      desc: 'Como engajar a comunidade em iniciativas de descarte correto e reciclagem na Orla de São Luís?',
      membersCount: 5,
      status: 'Avaliação de Soluções',
      stage: 'Entrega',
    },
    {
      id: 'proj-4',
      category: 'Tecnologia',
      title: 'Desafio Tecnologia — Solução Digital Comunitária',
      desc: 'Crie uma aplicação web ou aplicativo simples para resolver um problema cotidiano do seu bairro em SLZ.',
      membersCount: 2,
      status: 'Inscrições Abertas',
      stage: 'Ideia',
    },
  ];

  const toggleJoin = (id: string) => {
    setJoinedProjects((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <FolderKanban className="w-4 h-4 text-indigo-600" />
            <span>Modo P — Projetos & Desafios Práticos</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Transforme conhecimento em experiência prática
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl">
            Conecte-se com outros estudantes de São Luís, monte equipes e desenvolva soluções para problemas reais da nossa cidade.
          </p>

          {/* Product Flow Breadcrumb Visual */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Fluxo dos Projetos:
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg">Ideia</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg">Equipe</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg">Desenvolvimento</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg">Entrega</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-lg">Avaliação</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg">Portfólio & Certificado</span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('desafios')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
              activeTab === 'desafios'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            Desafios Abertos
          </button>
          <button
            onClick={() => setActiveTab('meus_projetos')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
              activeTab === 'meus_projetos'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            Meus Projetos ({joinedProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('submeter')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
              activeTab === 'submeter'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            Submeter Ideia
          </button>
        </div>

        {/* Tab Content: Desafios Abertos */}
        {activeTab === 'desafios' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((c) => {
              const isJoined = joinedProjects.includes(c.id);

              return (
                <div
                  key={c.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-400 transition"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {c.category}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                        Estágio: {c.stage}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {c.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Users className="w-4 h-4 text-indigo-600" />
                      <span>{c.membersCount} participantes</span>
                    </div>

                    <button
                      onClick={() => toggleJoin(c.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                        isJoined
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                    >
                      {isJoined ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Inscrito no Projeto</span>
                        </>
                      ) : (
                        <span>Participar deste Desafio</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab Content: Meus Projetos */}
        {activeTab === 'meus_projetos' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Seus Projetos Ativos
            </h2>
            {joinedProjects.length === 0 ? (
              <p className="text-sm text-slate-500">Você ainda não entrou em nenhum desafio.</p>
            ) : (
              <div className="space-y-4">
                {challenges
                  .filter((c) => joinedProjects.includes(c.id))
                  .map((c) => (
                    <div key={c.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{c.title}</h4>
                        <p className="text-xs text-slate-500">Status: {c.status} • Sua Equipe: 4 membros</p>
                      </div>
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-3 py-1.5 rounded-lg border border-indigo-200 dark:border-indigo-800">
                        Ver Painel da Equipe →
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Submeter Ideia */}
        {activeTab === 'submeter' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 max-w-2xl">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Proponha uma Ideia de Projeto para São Luís
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Sua ideia será publicada para que outros estudantes possam formar equipe com você.
              </p>
            </div>

            {submittedIdea ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-900 dark:text-emerald-200">
                  Ideia Enviada com Sucesso!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Nossa comunidade em São Luís irá analisar e disponibilizar o seu projeto para formação de equipes em breve.
                </p>
                <button
                  onClick={() => setSubmittedIdea(false)}
                  className="text-xs font-bold text-emerald-700 dark:text-emerald-400 underline"
                >
                  Enviar outra ideia
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmittedIdea(true); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Título da Ideia / Projeto
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Horta Comunitária Educacional no Anjo da Guarda"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Categoria
                  </label>
                  <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm">
                    <option>Educação</option>
                    <option>Mobilidade</option>
                    <option>Meio Ambiente</option>
                    <option>Tecnologia</option>
                    <option>Comunidade & Cultura</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Descrição do Problema e Solução Proposta
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Explique o problema em São Luís e como sua ideia pode ajudar..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Ideia para Aprovação</span>
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
