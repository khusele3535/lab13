import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const products = [{ id: "1", title: "iPhone 15" }, { id: "2", title: "iPad Pro" }];
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return NextResponse.json({ error: { message: "Олдсонгүй" } }, { status: 404 });
  }
  return NextResponse.json(product);
}
