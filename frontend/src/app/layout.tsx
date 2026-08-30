import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import VLibras from '@/components/VlibrasWidget';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'EnsineSLZ — Aprenda. Desenvolva. Encontre oportunidades.',
  description: 'Plataforma independente de educação, desenvolvimento de habilidades e oportunidades voltada para São Luís — Maranhão.',
  keywords: ['EnsineSLZ', 'São Luís', 'Maranhão', 'Educação', 'Bolsas de Estudo', 'Estágio SLZ', 'Cursos Gratuitos', 'Projetos Comunitários'],
  authors: [{ name: 'EnsineSLZ Iniciativa Comunitária' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <body className={`min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 ${inter.className} antialiased selection:bg-slz-500 selection:text-white`}>
        <AppProvider>
          {children}
          <VLibras />
        </AppProvider>
      </body>
    </html>
  );
}
