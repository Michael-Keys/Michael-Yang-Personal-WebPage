import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

// Simple in-memory counter for development fallback
let visitCount = 25;

// GET: Return current visit count
export async function GET() {
  try {
    const count = await get('visitorCount') || visitCount;
    return NextResponse.json({ count: parseInt(count.toString(), 10) });
  } catch {
    return NextResponse.json({ count: visitCount });
  }
}

// POST: Increment visit count
export async function POST() {
  try {
    const currentCount = await get('visitorCount') || visitCount;
    const newCount = parseInt(currentCount.toString(), 10) + 1;
    
    // Note: Edge Config is read-only at runtime
    // You'll need to update it via Vercel dashboard or API
    visitCount = newCount;
    
    return NextResponse.json({ count: newCount });
  } catch {
    visitCount += 1;
    return NextResponse.json({ count: visitCount });
  }
} 