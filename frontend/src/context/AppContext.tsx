'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

// ─── View Modes ────────────────────────────────────────────────────────────────
export type ViewMode =
  | 'home'
  | 'descoberta'
  | 'aprender'
  | 'projetos'
  | 'oportunidades'
  | 'verificacao'
  | 'utilidades'
  | 'mapa'
  | 'dashboard'
  | 'perfil'
  | 'docente'
  | 'sobre';

// ─── Auth ──────────────────────────────────────────────────────────────────────
export type AuthRole =
  | 'estudante'
  | 'professor'
  | 'instituicao'
  | 'parceiro'
  | 'docente'
  | 'admin';
export type UserRole = AuthRole;

export interface AppUser {
  name: string;
  email: string;
  role: AuthRole;
  avatar?: string;
  city?: string;
  neighborhood?: string;
  certificatesCount?: number;
  skills?: string[];
  goals?: string[];
  interests: string[];
  completedTrackSteps: string[];
}

// ─── Accessibility ─────────────────────────────────────────────────────────────
export interface AccessibilitySettings {
  highContrast: boolean;
  fontScale: number;
  letterSpacing: 'normal' | 'wide';
  reducedMotion: boolean;
  seniorMode: boolean;
  colorVisionMode: 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  voiceAssistant: boolean;
}

// ─── Notifications ─────────────────────────────────────────────────────────────
export interface AppNotification {
  id: string;
  title: string;
  body: string;
  text?: string;
  read: boolean;
  createdAt: string;
  date?: string;
}

// ─── Track Progress ────────────────────────────────────────────────────────────
export interface TrackProgress {
  trackId: string;
  completedSteps: string[];
}

// ─── Context Shape ─────────────────────────────────────────────────────────────
interface AppContextValue {
  // Navigation
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;

  // Auth
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
  user: AppUser;
  setUser: (u: AppUser | ((prev: AppUser) => AppUser)) => void;

  // Auth modal
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (v: boolean) => void;
  authModalRole: AuthRole;
  setAuthModalRole: (role: AuthRole) => void;

  // Search modal
  isSearchOpen: boolean;
  setIsSearchOpen: (v: boolean) => void;

  // Notifications
  isNotificationsOpen: boolean;
  setIsNotificationsOpen: (v: boolean) => void;
  unreadNotificationsCount: number;
  notificationList: AppNotification[];
  markNotificationsAsRead: () => void;

  // Accessibility modal
  isAccessibilityOpen: boolean;
  setIsAccessibilityOpen: (v: boolean) => void;
  accessibility: AccessibilitySettings;
  updateAccessibility: (patch: Partial<AccessibilitySettings>) => void;

  // Track learning progress
  activeTrackProgress: TrackProgress | null;
  updateTrackStep: (trackId: string, stepId: string, completed: boolean) => void;

  // Saved opportunities
  savedOpportunityIds: string[];
  toggleSaveOpportunity: (id: string) => void;

  // Language translation
  language: string;
  changeLanguage: (lang: string) => void;
}

// ─── Defaults ──────────────────────────────────────────────────────────────────
const defaultUser: AppUser = {
  name: 'Estudante SLZ',
  email: '',
  role: 'estudante',
  city: 'São Luís',
  neighborhood: 'Centro',
  certificatesCount: 2,
  skills: ['Desenvolvimento Web', 'Design UX/UI'],
  goals: ['Aprender Programação', 'Primeiro Emprego'],
  interests: ['Tecnologia', 'Programacao'],
  completedTrackSteps: [],
};

const defaultAccessibility: AccessibilitySettings = {
  highContrast: false,
  fontScale: 1,
  letterSpacing: 'normal',
  reducedMotion: false,
  seniorMode: false,
  colorVisionMode: 'normal',
  voiceAssistant: false,
};

const defaultNotifications: AppNotification[] = [
  {
    id: 'n1',
    title: 'Bem-vindo ao EnsineSLZ!',
    body: 'Explore trilhas, oportunidades e projetos para seu desenvolvimento.',
    text: 'Explore trilhas, oportunidades e projetos para seu desenvolvimento.',
    read: false,
    createdAt: new Date().toISOString(),
    date: 'Hoje',
  },
  {
    id: 'n2',
    title: 'Nova oportunidade em SLZ',
    body: 'Uma bolsa de tecnologia foi publicada para estudantes de Sao Luis.',
    text: 'Uma bolsa de tecnologia foi publicada para estudantes de Sao Luis.',
    read: false,
    createdAt: new Date().toISOString(),
    date: 'Ontem',
  },
  {
    id: 'n3',
    title: 'Desafio disponivel',
    body: 'O Desafio Mobilidade Urbana esta com inscricoes abertas.',
    text: 'O Desafio Mobilidade Urbana esta com inscricoes abertas.',
    read: false,
    createdAt: new Date().toISOString(),
    date: 'Há 2 dias',
  },
];

// ─── Context ───────────────────────────────────────────────────────────────────
const AppContext = createContext<AppContextValue | undefined>(undefined);

// ─── Provider ──────────────────────────────────────────────────────────────────
export function AppProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState<ViewMode>('home');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AppUser>(defaultUser);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalRole, setAuthModalRole] = useState<AuthRole>('estudante');

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notificationList, setNotificationList] = useState<AppNotification[]>(defaultNotifications);

  const [isAccessibilityOpen, setIsAccessibilityOpen] = useState(false);
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>(defaultAccessibility);

  const [activeTrackProgress, setActiveTrackProgress] = useState<TrackProgress | null>(null);
  const [savedOpportunityIds, setSavedOpportunityIds] = useState<string[]>([]);
  const [language, setLanguage] = useState('pt-BR');

  const changeLanguage = useCallback((langCode: string) => {
    setLanguage(langCode);
    document.documentElement.lang = langCode;

    // Set Google Translate cookie format
    const targetLang = langCode === 'pt-BR' ? 'pt' : langCode;
    document.cookie = `googtrans=/pt/${targetLang}; path=/;`;
    document.cookie = `googtrans=/pt/${targetLang}; domain=${window.location.hostname}; path=/;`;

    // Dispatch event to Google Translate combo if present
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  }, []);

  const unreadNotificationsCount = notificationList.filter((n) => !n.read).length;

  const markNotificationsAsRead = useCallback(() => {
    setNotificationList((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const updateAccessibility = useCallback((patch: Partial<AccessibilitySettings>) => {
    setAccessibility((prev) => ({ ...prev, ...patch }));
  }, []);

  const updateTrackStep = useCallback((trackId: string, stepId: string, completed: boolean) => {
    setActiveTrackProgress((prev) => {
      const base = prev && prev.trackId === trackId ? prev : { trackId, completedSteps: [] };
      const steps = completed
        ? [...new Set([...base.completedSteps, stepId])]
        : base.completedSteps.filter((s) => s !== stepId);
      return { trackId, completedSteps: steps };
    });
  }, []);

  const toggleSaveOpportunity = useCallback((id: string) => {
    setSavedOpportunityIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isAuthModalOpen,
        setIsAuthModalOpen,
        authModalRole,
        setAuthModalRole,
        isSearchOpen,
        setIsSearchOpen,
        isNotificationsOpen,
        setIsNotificationsOpen,
        unreadNotificationsCount,
        notificationList,
        markNotificationsAsRead,
        isAccessibilityOpen,
        setIsAccessibilityOpen,
        accessibility,
        updateAccessibility,
        activeTrackProgress,
        updateTrackStep,
        savedOpportunityIds,
        toggleSaveOpportunity,
        language,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────────────────────────────
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside <AppProvider>');
  }
  return ctx;
}

