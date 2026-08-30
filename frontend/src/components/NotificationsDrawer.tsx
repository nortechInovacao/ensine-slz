'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { Bell, X, Check, ShieldCheck, Clock, Award } from 'lucide-react';

export const NotificationsDrawer: React.FC = () => {
  const { isNotificationsOpen, setIsNotificationsOpen, notificationList, markNotificationsAsRead } = useApp();

  if (!isNotificationsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end">
      <div className="bg-white dark:bg-slate-900 max-w-sm w-full h-full p-6 border-l border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 animate-in slide-in-from-right duration-200 flex flex-col justify-between">
        
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Notificações</h3>
            </div>
            <button
              onClick={() => setIsNotificationsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            {notificationList.map((item) => (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                  item.read
                    ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-75'
                    : 'bg-amber-50/60 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                  <span>{item.title}</span>
                  <span className="text-[10px] text-slate-400">{item.date}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => {
              markNotificationsAsRead();
              setIsNotificationsOpen(false);
            }}
            className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4 text-emerald-500" />
            <span>Marcar todas como lidas</span>
          </button>
        </div>

      </div>
    </div>
  );
};
