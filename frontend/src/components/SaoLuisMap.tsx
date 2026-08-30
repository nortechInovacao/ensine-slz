'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { MapPin, Navigation, School, BookOpen, Briefcase, Trophy, Rocket, Filter } from 'lucide-react';

export const SaoLuisMap: React.FC = () => {
  const { setCurrentView } = useApp();
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [activeLocation, setActiveLocation] = useState<any>(null);

  const locations = [
    {
      id: 'loc-1',
      name: 'IFMA â€” Campus Monte Castelo',
      type: 'InstituiÃ§Ã£o',
      category: 'ðŸŽ“ Bolsas',
      bairro: 'Monte Castelo',
      desc: 'Sede de bolsas integrais de informÃ¡tica, robÃ³tica e cursos tÃ©cnicos gratuitos em SLZ.',
      coords: { top: '45%', left: '42%' },
      icon: School,
    },
    {
      id: 'loc-2',
      name: 'Polo de InovaÃ§Ã£o & Tech RenascenÃ§a',
      type: 'Empresa Parceira',
      category: 'ðŸ’¼ EstÃ¡gios',
      bairro: 'RenascenÃ§a',
      desc: 'Centro de empresas parceiras oferecendo vagas de estÃ¡gio e mentoria para estudantes.',
      coords: { top: '32%', left: '55%' },
      icon: Briefcase,
    },
    {
      id: 'loc-3',
      name: 'Multicenter Sebrae Cohafuma',
      type: 'Evento',
      category: 'ðŸ† Eventos',
      bairro: 'Cohafuma',
      desc: 'Local de grandes feiras de conhecimento, Hackathons e encontros de empreendedorismo.',
      coords: { top: '38%', left: '60%' },
      icon: Trophy,
    },
    {
      id: 'loc-4',
      name: 'Centro de LÃ­nguas ComunitÃ¡rio',
      type: 'Escola / Curso',
      category: 'ðŸ“š Cursos',
      bairro: 'Centro HistÃ³rico',
      desc: 'Cursos gratuitos de idiomas, comunicaÃ§Ã£o e redaÃ§Ã£o para vestibulares.',
      coords: { top: '40%', left: '35%' },
      icon: BookOpen,
    },
    {
      id: 'loc-5',
      name: 'Horta & Projeto ComunitÃ¡rio Anjo da Guarda',
      type: 'Projeto Social',
      category: 'ðŸš€ Projetos',
      bairro: 'Anjo da Guarda',
      desc: 'Iniciativa sustentÃ¡vel desenvolvida por equipes de estudantes do EnsineSLZ.',
      coords: { top: '65%', left: '28%' },
      icon: Rocket,
    },
    {
      id: 'loc-6',
      name: 'NÃºcleo de Tecnologia Cidade OperÃ¡ria',
      type: 'CapacitaÃ§Ã£o',
      category: 'ðŸ“š Cursos',
      bairro: 'Cidade OperÃ¡ria',
      desc: 'LaboratÃ³rio aberto para prÃ¡tica de programaÃ§Ã£o e robÃ³tica comunitÃ¡ria.',
      coords: { top: '55%', left: '72%' },
      icon: School,
    },
  ];

  const filters = ['Todos', 'ðŸ“š Cursos', 'ðŸ’¼ EstÃ¡gios', 'ðŸŽ“ Bolsas', 'ðŸ† Eventos', 'ðŸš€ Projetos'];

  const filteredLocations = selectedFilter === 'Todos'
    ? locations
    : locations.filter(l => l.category === selectedFilter);

  return (
    <div className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span>Mapa Interativo de SÃ£o LuÃ­s â€” MaranhÃ£o</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Encontre Cursos, Bolsas e Eventos Perto de VocÃª
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-3xl">
            Explore polos de ensino, empresas parceiras e projetos sociais espalhados pelos bairros de SÃ£o LuÃ­s.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-thin">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Filtros:
            </span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                  selectedFilter === f
                    ? 'bg-slz-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Map Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Container Simulation */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl relative min-h-[450px] overflow-hidden flex flex-col justify-between">
            
            {/* Map Header Overlay */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2 bg-slate-800/90 text-white px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-700">
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>SÃ£o LuÃ­s (Ilha do MaranhÃ£o)</span>
              </div>
              <span className="text-[10px] text-slate-400 bg-slate-800/90 px-2.5 py-1 rounded border border-slate-700">
                BaÃ­a de SÃ£o Marcos / BaÃ­a de SÃ£o JosÃ©
              </span>
            </div>

            {/* Stylized Vector Map Background Simulation */}
            <div className="absolute inset-0 bg-slate-950 opacity-90">
              {/* Decorative water body lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/60 rounded-l-full border-l border-slate-800/80 pointer-events-none" />
            </div>

            {/* Map Pins */}
            <div className="absolute inset-0 z-20">
              {filteredLocations.map((loc) => {
                const Icon = loc.icon;
                const isSelected = activeLocation?.id === loc.id;

                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    style={{ top: loc.coords.top, left: loc.coords.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                    }`}
                    title={loc.name}
                  >
                    <div className="relative">
                      <div className={`p-2.5 rounded-full text-white shadow-lg flex items-center justify-center ${
                        isSelected ? 'bg-amber-500 ring-4 ring-amber-500/30' : 'bg-slz-600 group-hover:bg-slz-500'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-slate-950 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap border border-slate-700 shadow-md">
                        {loc.bairro}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Map Footer Note */}
            <div className="relative z-10 pt-4 flex items-center justify-between text-xs text-slate-400">
              <span>Clique nos marcadores para detalhes dos locais em SLZ.</span>
              <span className="text-amber-400 font-bold">6 pontos ativos cadastrados</span>
            </div>

          </div>

          {/* Location Detail Sidebar */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            {activeLocation ? (
              <div className="space-y-4 animate-in fade-in duration-200">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {activeLocation.category}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {activeLocation.name}
                </h3>

                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
                  <p><strong>Bairro:</strong> {activeLocation.bairro}</p>
                  <p><strong>Tipo:</strong> {activeLocation.type}</p>
                  <p className="leading-relaxed bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                    {activeLocation.desc}
                  </p>
                </div>

                <button
                  onClick={() => setCurrentView('oportunidades')}
                  className="w-full py-2.5 rounded-xl bg-slz-600 hover:bg-slz-700 text-white font-bold text-xs transition"
                >
                  Ver Oportunidades Deste Local â†’
                </button>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-400 space-y-2">
                <MapPin className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700" />
                <p className="text-xs">Selecione um ponto no mapa de SÃ£o LuÃ­s para visualizar as detalhes do local.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

