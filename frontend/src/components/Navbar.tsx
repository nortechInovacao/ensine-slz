'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useApp, ViewMode } from '@/context/AppContext';
import {
  Accessibility,
  Bell,
  BookOpen,
  Briefcase,
  ChevronDown,
  Compass,
  FolderKanban,
  Info,
  LogOut,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  User,
  Wrench,
  X,
} from 'lucide-react';

const translations = {
  pt: {
    home: 'Início',
    discover: 'Descobrir',
    learn: 'Aprender',
    opportunities: 'Oportunidades',
    projects: 'Projetos',
    utilities: 'Utilidades',
    map: 'Mapa de oportunidades',
    verify: 'Verificar informação',
    about: 'Sobre o EnsineSLZ',
    language: 'Idioma',
    accessibility: 'Acessibilidade',
  },
  en: {
    home: 'Home',
    discover: 'Discover',
    learn: 'Learn',
    opportunities: 'Opportunities',
    projects: 'Projects',
    utilities: 'Utilities',
    map: 'Opportunity map',
    verify: 'Verify information',
    about: 'About EnsineSLZ',
    language: 'Language',
    accessibility: 'Accessibility',
  },
} as const;

const mainLinks: { view: ViewMode; label: string; icon?: React.ElementType }[] = [
  { view: 'home', label: 'Início' },
  { view: 'descoberta', label: 'Descobrir', icon: Compass },
  { view: 'aprender', label: 'Aprender', icon: BookOpen },
  { view: 'oportunidades', label: 'Oportunidades', icon: Briefcase },
];

const moreLinks: { view: ViewMode; label: string; icon: React.ElementType }[] = [
  { view: 'projetos', label: 'Projetos', icon: FolderKanban },
  { view: 'utilidades', label: 'Utilidades', icon: Wrench },
  { view: 'mapa', label: 'Mapa de oportunidades', icon: MapPin },
  { view: 'verificacao', label: 'Verificar informação', icon: ShieldCheck },
  { view: 'sobre', label: 'Sobre o EnsineSLZ', icon: Info },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const {
    currentView,
    setCurrentView,
    isLoggedIn,
    setIsLoggedIn,
    user,
    setIsSearchOpen,
    setIsNotificationsOpen,
    setIsAccessibilityOpen,
    unreadNotificationsCount,
    setIsAuthModalOpen,
    setAuthModalRole,
    language,
    changeLanguage,
  } = useApp();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsMoreOpen(false);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const handleNavClick = (view: ViewMode) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    setIsMoreOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAuth = () => {
    setAuthModalRole('estudante');
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const isMoreActive = moreLinks.some(({ view }) => view === currentView);
  const labels = translations[language.startsWith('en') ? 'en' : 'pt'];

  const mainLinksLocalized = mainLinks.map((link) => {
    if (language.startsWith('en')) {
      const labelMap = {
        home: labels.home,
        descoberta: labels.discover,
        aprender: labels.learn,
        oportunidades: labels.opportunities,
      } as const;
      return { ...link, label: labelMap[link.view as keyof typeof labelMap] ?? link.label };
    }
    return link;
  });

  const moreLinksLocalized = moreLinks.map((link) => {
    if (language.startsWith('en')) {
      const labelMap = {
        projetos: labels.projects,
        utilidades: labels.utilities,
        mapa: labels.map,
        verificacao: labels.verify,
        sobre: labels.about,
      } as const;
      return { ...link, label: labelMap[link.view as keyof typeof labelMap] ?? link.label };
    }
    return link;
  });

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.28)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95">
      {/* Top Bar */}
      <div className="hidden border-b border-white/10 bg-slate-950 text-slate-300 sm:block">
        <div className="page-shell flex h-8 items-center justify-between text-[11px] font-medium">
          <span>Educação, oportunidades e caminhos para crescer em São Luís.</span>
          <button
            onClick={() => handleNavClick('verificacao')}
            className="flex items-center gap-1.5 transition hover:text-amber-300"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            Verificar informação
          </button>
        </div>
      </div>

      <div className="page-shell">
        <div className="flex h-[4.5rem] items-center justify-between gap-3">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex shrink-0 items-center gap-2.5 text-left"
            aria-label="Ir para o início"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
              <Image
                src="/Ensine-slz.jpeg"
                alt="EnsineSLZ Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
                Ensine<span className="text-slz-600 dark:text-slz-400">SLZ</span>
              </span>
              <span className="hidden text-[10px] font-semibold text-slate-500 lg:block dark:text-slate-400">
                Seu próximo passo começa aqui
              </span>
            </span>
          </button>

          {/* Navigation Links */}
          <nav
            className="hidden items-center rounded-xl border border-slate-200 bg-slate-50/80 p-1 lg:flex dark:border-slate-800 dark:bg-slate-900/70"
            aria-label="Navegação principal"
          >
            {mainLinksLocalized.map(({ view, label, icon: Icon }) => (
              <button
                key={view}
                onClick={() => handleNavClick(view)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-semibold transition ${
                  currentView === view
                    ? 'bg-white text-slz-700 shadow-sm dark:bg-slate-800 dark:text-slz-300'
                    : 'text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {label}
              </button>
            ))}

            {/* Dropdown "Mais" */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen((open) => !open)}
                aria-expanded={isMoreOpen}
                className={`flex items-center gap-1 rounded-lg px-2.5 py-2 text-sm font-semibold transition ${
                  isMoreActive
                    ? 'bg-white text-slz-700 shadow-sm dark:bg-slate-800 dark:text-slz-300'
                    : 'text-slate-600 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                Mais{' '}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMoreOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMoreOpen && (
                <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900">
                  {moreLinksLocalized.map(({ view, label, icon: Icon }) => (
                    <button
                      key={view}
                      onClick={() => handleNavClick(view)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                        currentView === view
                          ? 'bg-slz-50 text-slz-700 dark:bg-slz-950 dark:text-slz-300'
                          : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon className="h-4 w-4 text-slz-600 dark:text-slz-400" />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons & Language Select */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-1.5">
            {/* Accessibility Button */}
            <button
              onClick={() => setIsAccessibilityOpen(true)}
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slz-700 dark:text-slate-300 dark:hover:bg-slate-800"
              title="Acessibilidade"
              aria-label="Opções de acessibilidade"
            >
              <Accessibility className="h-5 w-5" />
            </button>

            {/* Language Selector */}
            <label className="hidden xl:block">
              <span className="sr-only">Idioma</span>
              <select
                value={language}
                onChange={(event) => changeLanguage(event.target.value)}
                className="max-w-36 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <optgroup label="Idioma">
                  <option value="pt-BR">🇧🇷 Português</option>
                  <option value="en">🇺🇸 English</option>
                </optgroup>
              </select>
            </label>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slz-700 sm:inline-flex dark:text-slate-300 dark:hover:bg-slate-800"
              title="Buscar na plataforma"
              aria-label="Buscar na plataforma"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Notifications Button */}
            <button
              onClick={() => setIsNotificationsOpen(true)}
              className="relative hidden rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slz-700 sm:inline-flex dark:text-slate-300 dark:hover:bg-slate-800"
              title="Notificações"
              aria-label="Notificações"
            >
              <Bell className="h-5 w-5" />
              {unreadNotificationsCount > 0 && (
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-950" />
              )}
            </button>

            {/* Auth / Profile */}
            {isLoggedIn ? (
              <div className="hidden items-center gap-1 border-l border-slate-200 pl-2 sm:flex dark:border-slate-700">
                <button
                  onClick={() => handleNavClick('dashboard')}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slz-100 text-xs font-bold text-slz-700 dark:bg-slz-900 dark:text-slz-300">
                    {user.name.charAt(0)}
                  </span>
                  <span className="hidden xl:inline">{user.name.split(' ')[0]}</span>
                </button>
                <button
                  onClick={() => handleNavClick('perfil')}
                  className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slz-700 dark:hover:bg-slate-800"
                  title="Meu perfil"
                >
                  <User className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
                  title="Sair"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="hidden items-center gap-1 border-l border-slate-200 pl-2 sm:flex dark:border-slate-700">
                <button
                  onClick={openAuth}
                  className="px-2 py-2 text-sm font-semibold text-slate-700 hover:text-slz-700 dark:text-slate-200"
                >
                  Entrar
                </button>
                <button
                  onClick={openAuth}
                  className="rounded-lg bg-slz-600 px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-slz-700"
                >
                  Criar conta
                </button>
              </div>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav
            className="page-shell grid grid-cols-2 gap-2 px-0"
            aria-label="Navegação móvel"
          >
            {[...mainLinks, ...moreLinks].map(({ view, label, icon: Icon }) => (
              <button
                key={view}
                onClick={() => handleNavClick(view)}
                className={`flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                  currentView === view
                    ? 'bg-slz-600 text-white'
                    : 'bg-slate-50 text-slate-700 hover:bg-slz-50 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </button>
            ))}
          </nav>
          <div className="page-shell mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 px-0 pt-3 dark:border-slate-800">
            <button
              onClick={() => {
                setIsSearchOpen(true);
                setIsMenuOpen(false);
              }}
              className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-bold text-slate-700 dark:border-slate-700 dark:text-slate-200"
            >
              Buscar
            </button>
            {!isLoggedIn && (
              <button
                onClick={openAuth}
                className="rounded-xl bg-slz-600 px-3 py-2.5 text-sm font-bold text-white"
              >
                Entrar ou criar conta
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
