'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Wrench, Calendar as CalendarIcon, Calculator, BookOpen, CheckSquare, MapPin, Search, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export const ModoSServicos: React.FC = () => {
  const { setCurrentView } = useApp();
  const [activeTool, setActiveTool] = useState<'calculadora' | 'calendario' | 'plano' | 'organizador'>('calculadora');

  // Calculator State
  const [nota1, setNota1] = useState<string>('7.5');
  const [nota2, setNota2] = useState<string>('6.0');
  const [nota3, setNota3] = useState<string>('8.0');
  const [mediaTarget, setMediaTarget] = useState<string>('7.0');

  const n1 = parseFloat(nota1) || 0;
  const n2 = parseFloat(nota2) || 0;
  const n3 = parseFloat(nota3) || 0;
  const mediaCalculada = ((n1 + n2 + n3) / 3).toFixed(1);
  const mediaVal = parseFloat(mediaCalculada);

  // Study Planner State
  const [goalInput, setGoalInput] = useState<string>('Passar no Vestibular IFMA');
  const [hoursInput, setHoursInput] = useState<string>('2 horas por dia');
  const [generatedPlan, setGeneratedPlan] = useState<boolean>(true);

  // Organizer Task State
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Revisar módulo 02 de HTML & CSS', done: true },
    { id: 2, text: 'Calcular nota necessária para recuperação de Matemática', done: false },
    { id: 3, text: 'Enviar inscrição para Bolsa Tech SLZ', done: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText) return;
    setTasks([...tasks, { id: Date.now(), text: newTaskText, done: false }]);
    setNewTaskText('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold">
            <Wrench className="w-4 h-4 text-blue-600" />
            <span>Modo S — Serviços e Utilidades do Estudante</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Ferramentas para Organizar seus Estudos
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl">
            Calculadora de notas, gerador de cronograma de estudos, organizador de tarefas e calendário de prazos de São Luís.
          </p>

          {/* Tool Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setActiveTool('calculadora')}
              className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                activeTool === 'calculadora'
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Calculadora de Notas</span>
            </button>

            <button
              onClick={() => setActiveTool('calendario')}
              className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                activeTool === 'calendario'
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
              <span>Calendário de Prazos</span>
            </button>

            <button
              onClick={() => setActiveTool('plano')}
              className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                activeTool === 'plano'
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Plano de Estudos</span>
            </button>

            <button
              onClick={() => setActiveTool('organizador')}
              className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 border transition ${
                activeTool === 'organizador'
                  ? 'bg-blue-600 text-white border-blue-600 shadow'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400'
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Organizador de Tarefas</span>
            </button>
          </div>
        </div>

        {/* TOOL 1: CALCULADORA DE NOTAS */}
        {activeTool === 'calculadora' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  🧮 Calculadora de Notas & Média Escolar
                </h2>
                <p className="text-xs text-slate-500">
                  Insira suas notas trimestrais ou bimestrais para saber sua média atual e a nota necessária para aprovação.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  1ª Avaliação / Nota 1
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={nota1}
                  onChange={(e) => setNota1(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  2ª Avaliação / Nota 2
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={nota2}
                  onChange={(e) => setNota2(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  3ª Avaliação / Nota 3
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="10"
                  value={nota3}
                  onChange={(e) => setNota3(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono font-bold text-sm"
                />
              </div>
            </div>

            {/* Results Box */}
            <div className="p-6 rounded-xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-slate-400">
                  Média Final Calculada:
                </span>
                <span className="text-3xl font-black font-mono text-amber-400">
                  {mediaCalculada}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                {mediaVal >= 7.0 ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Parabéns! Média acima da nota de aprovação (7.0).
                  </span>
                ) : (
                  <span className="text-amber-400 font-bold">
                    ⚠️ Atenção: Média abaixo de 7.0. Você precisa de {(21 - (n1 + n2)).toFixed(1)} na 3ª nota ou prova final.
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TOOL 2: CALENDÁRIO DE PRAZOS */}
        {activeTool === 'calendario' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  📅 Calendário de Provas & Inscrições SLZ
                </h2>
                <p className="text-xs text-slate-500">
                  Acompanhe datas limite de provas escolares, vestibulares e inscrições em bolsas de São Luís.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
                  Em 10 Dias
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Inscrições Bolsa Formação Tech SLZ
                </h4>
                <p className="text-xs text-slate-500">Prazo final: 15/09/2026</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  Em 15 Dias
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Prova Trimestral de Matemática
                </h4>
                <p className="text-xs text-slate-500">Data: 20/09/2026</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2">
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded">
                  Em 25 Dias
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                  Abertura do Hackathon SLZ Inovação
                </h4>
                <p className="text-xs text-slate-500">Data: 30/09/2026</p>
              </div>
            </div>
          </div>
        )}

        {/* TOOL 3: PLANO DE ESTUDOS */}
        {activeTool === 'plano' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  📚 Gerador de Plano de Estudos
                </h2>
                <p className="text-xs text-slate-500">
                  Organize sua rotina diária de aprendizado com base nas suas metas e tempo livre.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Seu Objetivo Principal
                </label>
                <input
                  type="text"
                  value={goalInput}
                  onChange={(e) => setGoalInput(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Tempo Disponível Diário
                </label>
                <input
                  type="text"
                  value={hoursInput}
                  onChange={(e) => setHoursInput(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
                />
              </div>
            </div>

            {/* Generated Plan Output */}
            <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Cronograma Sugerido para: {goalInput} ({hoursInput})
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <strong>Segunda & Quarta:</strong> 1h de Lógica de Programação + 1h de Exercícios no Modo A.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <strong>Terça & Quinta:</strong> 1h de Redação & Português + 1h de Prática em Projetos.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <strong>Sábado:</strong> 2h de Revisão e Busca de Oportunidades em SLZ.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TOOL 4: ORGANIZADOR DE TAREFAS */}
        {activeTool === 'organizador' && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  📝 Organizador de Tarefas Diárias
                </h2>
                <p className="text-xs text-slate-500">
                  Gerencie suas pendências escolares e metas da plataforma.
                </p>
              </div>
            </div>

            {/* Task Add Form */}
            <form onSubmit={addTask} className="flex gap-2">
              <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Adicionar nova tarefa..."
                className="flex-1 p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow shrink-0 flex items-center gap-1"
              >
                <Plus className="w-4 h-4" />
                <span>Adicionar</span>
              </button>
            </form>

            {/* Task List */}
            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between transition ${
                    task.done
                      ? 'bg-slate-100 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-75'
                      : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="flex items-center gap-3 text-left focus:outline-none"
                  >
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                        task.done
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-400'
                      }`}
                    >
                      {task.done && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        task.done
                          ? 'line-through text-slate-400'
                          : 'text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {task.text}
                    </span>
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-slate-400 hover:text-red-500 p-1"
                    title="Excluir tarefa"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
