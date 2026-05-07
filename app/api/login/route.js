import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: "Амжилттай" });
  response.cookies.set('auth-token', 'admin-secret-key', {
    httpOnly: true,
    path: '/',
  });
  return response;
}