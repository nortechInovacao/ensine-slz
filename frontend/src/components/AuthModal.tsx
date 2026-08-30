'use client';

import React, { useState } from 'react';
import { useApp, UserRole } from '@/context/AppContext';
import { X, User, GraduationCap, Building2, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, setIsLoggedIn, user, setUser, authModalRole, setAuthModalRole } = useApp();
  const [step, setStep] = useState<1 | 2>(1);
  const [nameInput, setNameInput] = useState('João Silva');
  const [emailInput, setEmailInput] = useState('joao@estudante.slz.br');

  if (!isAuthModalOpen) return null;

  const roles: { role: UserRole; title: string; desc: string; icon: any }[] = [
    { role: 'estudante', title: 'Sou estudante', desc: 'Quero aprender, desenvolver habilidades e encontrar oportunidades.', icon: User },
    { role: 'professor', title: 'Sou professor', desc: 'Quero acompanhar minhas turmas e compartilhar conteúdos.', icon: GraduationCap },
    { role: 'instituicao', title: 'Sou instituição', desc: 'Quero publicar cursos, bolsas, eventos e programas de formação.', icon: Building2 },
    { role: 'parceiro', title: 'Sou parceiro', desc: 'Quero apoiar projetos sociais e mentoria em São Luís.', icon: Handshake },
  ];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setUser((prev) => ({
      ...prev,
      name: nameInput || prev.name,
      email: emailInput || prev.email,
      role: authModalRole,
    }));
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150">
        
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slz-600 dark:text-slz-400">
              Bem-vindo ao EnsineSLZ
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
              {step === 1 ? 'Como você quer utilizar a plataforma?' : 'Personalize sua experiência'}
            </h2>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Role Selector */}
        {step === 1 && (
          <div className="space-y-3">
            {roles.map((r) => {
              const Icon = r.icon;
              const isSelected = authModalRole === r.role;

              return (
                <div
                  key={r.role}
                  onClick={() => setAuthModalRole(r.role)}
                  className={`p-4 rounded-xl border transition cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-slz-50 dark:bg-slz-950/80 border-slz-600 text-slate-900 dark:text-white ring-2 ring-slz-600/20'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-slz-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{r.title}</h3>
                      <p className="text-xs text-slate-500">{r.desc}</p>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-slz-600 shrink-0" />}
                </div>
              );
            })}

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 mt-2 bg-slz-600 hover:bg-slz-700 text-white font-bold text-sm rounded-xl shadow transition flex items-center justify-center gap-2"
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Basic Info Form */}
        {step === 2 && (
          <form onSubmit={handleFinish} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Seu Nome Completo
              </label>
              <input
                type="text"
                required
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Seu E-mail
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Cidade Principal
              </label>
              <input
                type="text"
                disabled
                value="São Luís — Maranhão"
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-sm font-semibold text-slate-500"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300"
              >
                Voltar
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-slz-600 hover:bg-slz-700 text-white font-bold text-sm rounded-xl shadow transition"
              >
                Concluir Cadastro & Acessar
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
