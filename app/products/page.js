"use client";
import { useEffect, useState } from 'react';
import { productsClient } from '@/services/productsClient';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', price: '' });
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const data = await productsClient.getProducts();
      setProducts(data);
    } catch (err) {
      console.error("Дата татахад алдаа гарлаа:", err);
    }
  };

 useEffect(() => {
    let isMounted = true; 

    const fetchData = async () => {
      try {
        const data = await productsClient.getProducts();
        if (isMounted) {
          setProducts(data);
        }
      } catch (err) {
        console.error("Дата татахад алдаа гарлаа:", err);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await productsClient.createProduct({
      title: form.title,
      price: Number(form.price)
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      setForm({ title: '', price: '' });
      await loadData();
    }
  };

  const handleLogin = async () => {
    try {
      await fetch('/api/login', { method: 'POST' });
      alert("Админ эрх авлаа!");
    } catch (err) {
      console.error("Нэвтрэхэд алдаа гарлаа:", err);
    }
  };

  return (
    <div className="space-y-8 p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">
          {process.env.NEXT_PUBLIC_SITE_NAME || "Дэлгүүр"}
        </h1>
        <button 
          onClick={handleLogin} 
          className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-700 transition-colors"
        >
          Нэвтрэх
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4">
        <input 
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Нэр" 
          value={form.title} 
          onChange={e => setForm({...form, title: e.target.value})} 
        />
        <input 
          className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Үнэ" 
          type="number" 
          value={form.price} 
          onChange={e => setForm({...form, price: e.target.value})} 
        />
        <button className="bg-blue-600 text-white font-bold rounded-lg py-3 hover:bg-blue-700 transition-colors">
          Нэмэх
        </button>
        {error && <p className="text-red-500 text-sm col-span-full">{error}</p>}
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
              <p className="text-blue-600 font-bold mt-2">{Number(p.price).toLocaleString()}₮</p>
            </div>
            
            <Link 
              href={`/products/${p.id}`} 
              className="mt-4 text-center bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold py-2 px-4 rounded-lg transition-all"
            >
              Дэлгэрэнгүй үзэх
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
