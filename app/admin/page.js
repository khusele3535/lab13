import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token');

  if (!token) redirect('/');

  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  const products = await res.json();
  const productCount = products.length;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Толгой хэсэг */}
      <div className="flex justify-between items-center bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Админ Хянах Самбар</h1>
          <p className="text-slate-400 text-sm">Системд амжилттай нэвтэрсэн байна</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
            Active Session
          </div>
          <Link href="/products" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
            Гарах
          </Link>
        </div>
      </div>

      {/* Үйлдэл хийх 3 Карт (Өмнөх загвараар) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Бүтээгдэхүүнүүд (Бодит тоотой) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-800">Бүтээгдэхүүнүүд</h3>
          <p className="text-slate-500 text-xs mt-1">
            Нийт <span className="font-bold text-blue-600">{productCount}</span> бараа бүртгэлтэй байна
          </p>
          <Link href="/products" className="mt-4 inline-block text-blue-600 text-sm font-bold hover:underline">Удирдах →</Link>
        </div>

        {/* 2. Борлуулалт */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-purple-500 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-800">Борлуулалт</h3>
          <p className="text-slate-500 text-xs mt-1">Сүүлийн 24 цагт 0 борлуулалт</p>
          <span className="mt-4 inline-block text-slate-400 text-sm font-bold">Удахгүй ирнэ...</span>
        </div>

        {/* 3. Хэрэглэгчид */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-500 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-slate-800">Админ эрх</h3>
          <p className="text-slate-500 text-xs mt-1">Системийн админ: 1</p>
          <span className="mt-4 inline-block text-slate-400 text-sm font-bold">Хаалттай</span>
        </div>

      </div>
    </div>
  );
}
