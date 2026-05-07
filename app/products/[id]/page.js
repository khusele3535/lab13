import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://vercel.app`, { cache: 'no-store' });
  const products = await res.json();
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-6 p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-black text-slate-900 tracking-tight">
        Бүтээгдэхүүний дэлгэрэнгүй
      </h1>

      <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">
          Сонгосон бүтээгдэхүүн: {product.title}
        </p>
        
        <div className="text-4xl font-mono font-black text-blue-600">
          {product.title} ({id})
        </div>
        
        <p className="mt-2 text-2xl font-bold text-green-600">
          Үнэ: {Number(product.price).toLocaleString()}₮
        </p>
      </div>

      {/* Буцах товч */}
      <Link 
        href="/products" 
        className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Жагсаалт руу буцах
      </Link>
    </div>
  );
}
