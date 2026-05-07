import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {/* Чимэглэлийн дүрс */}
      <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-8 animate-bounce">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>

      {/* Гарчиг */}
      <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">
        {process.env.NEXT_PUBLIC_SITE_NAME || "Манай Дэлгүүр"}
      </h1>
      
      <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed">
        Бүтээгдэхүүн удирдах болон админ хяналтын хэсэгтэй.
      </p>

      {/* Товчлуурууд */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/products" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
        >
          Дэлгүүр нээх
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        
        <Link 
          href="/admin" 
          className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-600 font-bold py-4 px-8 rounded-2xl transition-all"
        >
          Админ нэвтрэх
        </Link>
      </div>
    </div>
  );
}
