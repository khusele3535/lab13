"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <html lang="mn">
      <body className="bg-slate-50 min-h-screen font-sans">
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
            
            {/* 1. ЛОГО - Үүн дээр дарахаар Home руу очно */}
            <Link 
              href="/" 
              className="text-2xl font-black text-blue-600 tracking-tighter hover:scale-105 transition-transform"
            >
              LAB13
            </Link>

            {/* Цэсүүд */}
            <div className="flex gap-2">
              {/* 2. НҮҮР ХУУДАС ТОПЧ - Тусад нь нэмэв */}
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  isActive('/') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Нүүр
              </Link>

              <Link 
                href="/products" 
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  isActive('/products') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Бүтээгдэхүүн
              </Link>
              <Link 
                href="/admin" 
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  isActive('/admin') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Админ
              </Link>
            </div>
          </div>
        </nav>

        {/* Үндсэн агуулга */}
        <main className="max-w-5xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
