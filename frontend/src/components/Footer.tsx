'use client';

import React from 'react';
import Image from 'next/image';
import { useApp, ViewMode } from '@/context/AppContext';
import { 
  BookOpen, 
  Briefcase, 
  FolderKanban, 
  Wrench, 
  Compass, 
  ShieldCheck, 
  MapPin, 
  Accessibility,
  Heart,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView } = useApp();

  const handleNavClick = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Institutional & Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src="/Ensine-slz.jpeg"
                  alt="EnsineSLZ Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Ensine<span className="text-slz-400">SLZ</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              O EnsineSLZ conecta conhecimento, habilidades, projetos e oportunidades para ajudar você a encontrar o próximo passo.
            </p>

            <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/80 text-xs text-slate-300">
              <p className="font-semibold text-amber-400 mb-1">Iniciativa Independente</p>
              <p className="text-[11px] text-slate-400 leading-tight">
                Projeto independente voltado para o desenvolvimento educacional e social de São Luís — Maranhão. Não possui vínculo comercial ou de produto com a Nortech ou empresas privadas.
              </p>
            </div>
          </div>

          {/* Col 2: Modos do EnsineSLZ */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Modos da Plataforma
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('descoberta')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-slz-400" />
                  Modo D — Descoberta de Caminhos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('aprender')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  Modo A — Aprender & Trilhas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('projetos')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <FolderKanban className="w-3.5 h-3.5 text-indigo-400" />
                  Modo P — Projetos e Desafios
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('oportunidades')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-400" />
                  Modo O — Oportunidades SLZ
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('verificacao')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Modo V — Verificação de Fontes
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('utilidades')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  Modo S — Utilidades e Ferramentas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Utilidades & Acessibilidade */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Recursos & Cidade
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('mapa')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Mapa de Oportunidades em São Luís
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('utilidades')} className="hover:text-amber-400 transition">
                  Calculadora de Notas & Média
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('utilidades')} className="hover:text-amber-400 transition">
                  Gerador de Plano de Estudos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('utilidades')} className="hover:text-amber-400 transition">
                  Calendário de Prazos e Provas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sobre')} className="hover:text-amber-400 transition flex items-center gap-1.5">
                  <Accessibility className="w-3.5 h-3.5 text-slz-400" />
                  Recursos de Acessibilidade
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Transparência & Privacidade */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Privacidade & Transparência
            </h3>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Respeitamos seus dados de acordo com a Lei Geral de Proteção de Dados (LGPD). Não coletamos informações desnecessárias.
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white transition cursor-pointer">Termos de Uso</li>
              <li className="hover:text-white transition cursor-pointer">Política de Privacidade</li>
              <li className="hover:text-white transition cursor-pointer">Canal de Denúncias & Conteúdo</li>
              <li className="hover:text-white transition cursor-pointer">Instituições Parceiras de SLZ</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> para estudantes e educadores de São Luís — Maranhão.
          </p>
          <p>
            © 2026 EnsineSLZ. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
