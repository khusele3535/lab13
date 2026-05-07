import { NextResponse } from 'next/server';

let products = [
  { id: "1", title: "iPhone 15", price: 3500000 },
  { id: "2", title: "iPad Pro", price: 4200000 }
];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    if (!data.title || !data.price) {
      return NextResponse.json({ error: { message: "Мэдээлэл дутуу байна!" } }, { status: 400 });
    }

    const nextId = products.length > 0 
      ? Math.max(...products.map(p => Number(p.id))) + 1 
      : 1;

    const newProduct = { 
      id: nextId.toString(), 
      title: data.title, 
      price: data.price 
    };

    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: { message: "Серверийн алдаа" } }, { status: 500 });
  }
}
