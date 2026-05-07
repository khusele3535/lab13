import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth-token");

  if (!token) redirect("/");

  const baseUrl = "https://lab13-wine.vercel.app/";

  let products = [];
  let productCount = 0;
  let fetchError = false;

  try {
    const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch");
    products = await res.json();
    productCount = products.length;
  } catch (error) {
    fetchError = true;
  }

  if (fetchError) {
    return (
      <div className="p-10 text-center bg-red-50 text-red-600 rounded-2xl m-6 border border-red-100">
        <h2 className="text-xl font-bold">Мэдээлэл татахад алдаа гарлаа</h2>
        <p className="text-sm mt-2">API сервертэй холбогдож чадсангүй.</p>
        <p className="text-xs mt-4">Хандаж буй хаяг: {baseUrl}/api/products</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <div className="flex justify-between items-center bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Админ Хянах Самбар
          </h1>
          <p className="text-slate-400 text-sm">
            Системд амжилттай нэвтэрсэн байна
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
            Active Session
          </div>
          <Link
            href="/"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all no-underline"
          >
            Гарах
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all group">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="font-bold text-slate-800">Бүтээгдэхүүнүүд</h3>
          <p className="text-slate-500 text-xs mt-1">
            Нийт <span className="font-bold text-blue-600">{productCount}</span>{" "}
            бараа бүртгэлтэй
          </p>
          <Link
            href="/products"
            className="mt-4 inline-block text-blue-600 text-sm font-bold hover:underline no-underline"
          >
            Удирдах →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800">Статистик</h3>
          <p className="text-slate-500 text-xs mt-1">
            Одоогоор өгөгдөл байхгүй
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800">Хандах эрх</h3>
          <p className="text-slate-500 text-xs mt-1">Зөвхөн супер админ</p>
        </div>
      </div>
    </div>
  );
}
