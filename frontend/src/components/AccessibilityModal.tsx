'use client';

import React, { useCallback, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import {
  Accessibility,
  AlertTriangle,
  Eye,
  Flame,
  Keyboard,
  Minus,
  Play,
  Plus,
  Type,
  Volume2,
  Wind,
  X,
  ZapOff,
} from 'lucide-react';

/* ──────────────────────────────────────────────
   Fire Mode Siren  –  plays a short alert sound
   using the Web Audio API (no external files).
   ────────────────────────────────────────────── */
function playSiren() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = 'sawtooth';
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    // Siren sweep: 880 Hz → 440 Hz → 880 Hz
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(440, ctx.currentTime + 0.4);
    osc.frequency.linearRampToValueAtTime(880, ctx.currentTime + 0.8);
    osc.frequency.linearRampToValueAtTime(440, ctx.currentTime + 1.2);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.2);
    osc.onended = () => ctx.close();
  } catch {
    // silently ignore if Web Audio API is unavailable
  }
}

/* ──────────────────────────────────────────────
   Visual flash overlay for Modo Fogo
   ────────────────────────────────────────────── */
function flashAlert() {
  const overlay = document.createElement('div');
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'z-index:9999',
    'pointer-events:none',
    'background:rgba(239,68,68,0.35)',
    'animation:slz-flash 0.9s ease-out forwards',
  ].join(';');
  const style = document.createElement('style');
  style.textContent =
    '@keyframes slz-flash{0%{opacity:1}60%{opacity:0.5}100%{opacity:0}}';
  document.head.appendChild(style);
  document.body.appendChild(overlay);
  setTimeout(() => {
    overlay.remove();
    style.remove();
  }, 950);
}

export const AccessibilityModal: React.FC = () => {
  const {
    isAccessibilityOpen,
    setIsAccessibilityOpen,
    accessibility,
    updateAccessibility,
  } = useApp();

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  /* ── Voice Assistant ── */
  const toggleVoice = useCallback(() => {
    if (!('speechSynthesis' in window)) return;
    if (accessibility.voiceAssistant) {
      window.speechSynthesis.cancel();
      updateAccessibility({ voiceAssistant: false });
      return;
    }
    const text =
      document.querySelector('main')?.innerText || document.body.innerText;
    const utt = new SpeechSynthesisUtterance(text.slice(0, 6000));
    utt.lang = document.documentElement.lang || 'pt-BR';
    utt.rate = 0.95;
    utt.onend = () => updateAccessibility({ voiceAssistant: false });
    speechRef.current = utt;
    window.speechSynthesis.speak(utt);
    updateAccessibility({ voiceAssistant: true });
  }, [accessibility.voiceAssistant, updateAccessibility]);

  /* ── Modo Fogo ── */
  const toggleFireMode = useCallback(() => {
    const next = !accessibility.seniorMode;
    updateAccessibility({ seniorMode: next });
    if (next) {
      playSiren();
      flashAlert();
    }
  }, [accessibility.seniorMode, updateAccessibility]);

  const fontScales: [number, string][] = [
    [0.9, 'P'],
    [1, 'M'],
    [1.15, 'G'],
    [1.3, 'GG'],
  ];

  if (!isAccessibilityOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50"
      onMouseDown={() => setIsAccessibilityOpen(false)}
    >
      <section
        onMouseDown={(e) => e.stopPropagation()}
        className="absolute right-3 top-20 w-[calc(100vw-1.5rem)] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20 dark:border-slate-700 dark:bg-slate-900 sm:right-6 sm:top-24"
        aria-label="Painel de acessibilidade"
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-950 px-4 py-3 text-white">
          <div className="flex items-center gap-2">
            <Accessibility className="h-5 w-5 text-amber-300" />
            <div>
              <h2 className="text-sm font-extrabold">Acessibilidade</h2>
              <p className="text-[11px] text-slate-300">Ajuste sua experiência</p>
            </div>
          </div>
          <button
            onClick={() => setIsAccessibilityOpen(false)}
            className="rounded-lg p-1.5 hover:bg-white/10"
            aria-label="Fechar painel"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-2 p-3">

          {/* Voice Assistant */}
          <button
            onClick={toggleVoice}
            className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
              accessibility.voiceAssistant
                ? 'border-slz-500 bg-slz-50 dark:bg-slz-950'
                : 'border-slate-200 hover:border-slz-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800'
            }`}
            aria-pressed={accessibility.voiceAssistant}
          >
            <span className="rounded-lg bg-slz-100 p-2 text-slz-700 dark:bg-slz-900 dark:text-slz-300">
              {accessibility.voiceAssistant ? (
                <Volume2 className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </span>
            <span>
              <span className="block text-sm font-bold">Assistente de voz</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {accessibility.voiceAssistant
                  ? 'Parar leitura da página'
                  : 'Ler o conteúdo em voz alta'}
              </span>
            </span>
            {accessibility.voiceAssistant && (
              <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-slz-500" />
            )}
          </button>

          {/* Modo Fogo */}
          <button
            onClick={toggleFireMode}
            className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
              accessibility.seniorMode
                ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-400/40 dark:bg-orange-950/40'
                : 'border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 dark:border-slate-700 dark:hover:bg-slate-800'
            }`}
            aria-pressed={accessibility.seniorMode}
          >
            <span
              className={`rounded-lg p-2 transition ${
                accessibility.seniorMode
                  ? 'animate-pulse bg-orange-500 text-white'
                  : 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
              }`}
            >
              <Flame className="h-5 w-5" />
            </span>
            <span>
              <span className="flex items-center gap-1.5 text-sm font-bold">
                Modo Fogo
                <AlertTriangle className="h-3.5 w-3.5 text-orange-500" />
              </span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {accessibility.seniorMode
                  ? '🔥 Ativado — texto maior e alerta sonoro'
                  : 'Texto maior, contraste e alertas visíveis'}
              </span>
            </span>
            {accessibility.seniorMode && (
              <span className="ml-auto rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                ON
              </span>
            )}
          </button>

          {/* Reduced Motion */}
          <button
            onClick={() =>
              updateAccessibility({ reducedMotion: !accessibility.reducedMotion })
            }
            className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
              accessibility.reducedMotion
                ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40'
                : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800'
            }`}
            aria-pressed={accessibility.reducedMotion}
          >
            <span
              className={`rounded-lg p-2 ${
                accessibility.reducedMotion
                  ? 'bg-teal-500 text-white'
                  : 'bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-300'
              }`}
            >
              <Wind className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold">Reduzir movimento</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">
                {accessibility.reducedMotion
                  ? 'Animações desativadas'
                  : 'Diminuir animações e transições'}
            </span>
            </span>
            {accessibility.reducedMotion && (
              <span className="ml-auto rounded-full bg-teal-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                ON
              </span>
            )}
          </button>

          {/* Color Vision Mode */}
          <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <div className="mb-2 flex items-center gap-2">
              <Eye className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-bold">Modo para daltonismo</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {(
                [
                  ['normal', 'Padrão'],
                  ['protanopia', 'Vermelho'],
                  ['deuteranopia', 'Verde'],
                  ['tritanopia', 'Azul'],
                ] as const
              ).map(([mode, label]) => (
                <button
                  key={mode}
                  onClick={() => updateAccessibility({ colorVisionMode: mode })}
                  className={`rounded-lg px-2 py-2 text-xs font-bold transition ${
                    accessibility.colorVisionMode === mode
                      ? 'bg-violet-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-violet-50 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                  aria-pressed={accessibility.colorVisionMode === mode}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Font Scale */}
          <div className="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
            <div className="mb-2 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-bold">
                <Type className="h-4 w-4 text-slz-600" />
                Tamanho da letra
              </span>
              <span className="text-xs font-bold text-slz-600">
                {Math.round(accessibility.fontScale * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  updateAccessibility({
                    fontScale: Math.max(0.8, +(accessibility.fontScale - 0.1).toFixed(2)),
                  })
                }
                className="rounded-lg bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                aria-label="Diminuir fonte"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <div className="flex flex-1 gap-1">
                {fontScales.map(([scale, label]) => (
                  <button
                    key={scale}
                    onClick={() => updateAccessibility({ fontScale: scale })}
                    className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition ${
                      accessibility.fontScale === scale
                        ? 'bg-slz-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slz-50 dark:bg-slate-800 dark:text-slate-200'
                    }`}
                    aria-pressed={accessibility.fontScale === scale}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  updateAccessibility({
                    fontScale: Math.min(1.5, +(accessibility.fontScale + 0.1).toFixed(2)),
                  })
                }
                className="rounded-lg bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
                aria-label="Aumentar fonte"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* High Contrast + Letter Spacing */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() =>
                updateAccessibility({ highContrast: !accessibility.highContrast })
              }
              className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                accessibility.highContrast
                  ? 'border-yellow-400 bg-yellow-300 text-slate-950'
                  : 'border-slate-200 text-slate-700 hover:bg-yellow-50 dark:border-slate-700 dark:text-slate-200'
              }`}
              aria-pressed={accessibility.highContrast}
            >
              {accessibility.highContrast ? '✓ Alto contraste' : 'Alto contraste'}
            </button>
            <button
              onClick={() =>
                updateAccessibility({
                  letterSpacing:
                    accessibility.letterSpacing === 'wide' ? 'normal' : 'wide',
                })
              }
              className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                accessibility.letterSpacing === 'wide'
                  ? 'border-sky-400 bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300'
                  : 'border-slate-200 text-slate-700 hover:bg-sky-50 dark:border-slate-700 dark:text-slate-200'
              }`}
              aria-pressed={accessibility.letterSpacing === 'wide'}
            >
              {accessibility.letterSpacing === 'wide'
                ? '✓ Espaçar letras'
                : 'Espaçar letras'}
            </button>
          </div>

          {/* Reset all */}
          <button
            onClick={() => {
              if (accessibility.voiceAssistant) window.speechSynthesis?.cancel();
              updateAccessibility({
                highContrast: false,
                fontScale: 1,
                letterSpacing: 'normal',
                reducedMotion: false,
                seniorMode: false,
                colorVisionMode: 'normal',
                voiceAssistant: false,
              });
            }}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-500 transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 dark:border-slate-700 dark:text-slate-400"
          >
            <ZapOff className="h-3.5 w-3.5" />
            Redefinir tudo
          </button>

          <p className="flex items-start gap-2 px-1 text-[11px] text-slate-500 dark:text-slate-400">
            <Keyboard className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Use Tab para navegar e Enter para selecionar.
          </p>
        </div>
      </section>
    </div>
  );
};
