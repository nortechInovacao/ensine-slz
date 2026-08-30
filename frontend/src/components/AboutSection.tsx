'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Heart, MapPin, ShieldCheck, Target, Users, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { setCurrentView } = useApp();

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-slz-700 text-white flex items-center justify-center font-extrabold text-2xl mx-auto">
            E
          </div>
          
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Sobre o EnsineSLZ
          </h1>

          <p className="text-lg font-medium text-slz-600 dark:text-slz-400">
            &quot;O EnsineSLZ conecta conhecimento, habilidades, projetos e oportunidades para ajudar você a encontrar o próximo passo.&quot;
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Foco Inicial: São Luís — Maranhão</span>
          </div>
        </div>

        {/* Narrative Box */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Por que o EnsineSLZ nasceu?
          </h2>

          <p>
            Em São Luís, milhares de estudantes e jovens buscam diariamente formas de aprender novas habilidades, encontrar bolsas de estudo, cursos gratuitos, estágios e eventos educacionais. No entanto, muitas dessas oportunidades acabam ficando espalhadas entre redes sociais, grupos de mensagem, sites institucionais e páginas dispersas.
          </p>

          <p>
            O <strong>EnsineSLZ</strong> foi criado para funcionar como uma <strong>central organizada de educação e oportunidades</strong>. Mais do que uma plataforma de cursos, o EnsineSLZ é um ponto de encontro onde estudantes descobrem seus interesses, desenvolvem projetos práticos para a comunidade de São Luís e se conectam com o mercado de trabalho.
          </p>

          {/* Independent Initiative Clarification Box */}
          <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              Iniciativa Independente e Comunitária
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              O EnsineSLZ possui identidade própria e é mantido de forma independente para a comunidade maranhense. <strong>Não se trata de um produto da Nortech ou de qualquer outra corporação privada</strong>, garantindo autonomia, gratuidade e compromisso social com a população de São Luís.
            </p>
          </div>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Modo D & A</h4>
              <p className="text-xs text-slate-500">Descoberta e Aprendizado contínuo</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Modo P & O</h4>
              <p className="text-xs text-slate-500">Projetos reais e Oportunidades em SLZ</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-base">Modo V & S</h4>
              <p className="text-xs text-slate-500">Fontes verificadas e Utilidades práticas</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
