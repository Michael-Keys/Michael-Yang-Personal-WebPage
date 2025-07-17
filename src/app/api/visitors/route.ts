import { NextResponse } from 'next/server';

// Simple in-memory counter for development and fallback
let visitCount = 0;

// Try to get initial count from environment variable or start at 25 (current count)
try {
  visitCount = parseInt(process.env.INITIAL_VISIT_COUNT || '25', 10);
} catch {
  visitCount = 25;
}

// Get current visit count with timeout
async function getVisitCount(): Promise<number> {
  // Try external service with shorter timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout
    
    const response = await fetch('https://api.countapi.xyz/get/personal-website-visitor-count/visits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const data = await response.json();
      if (data.value !== undefined) {
        visitCount = data.value;
        return data.value;
      }
          }
    } catch {
      // Silently fail and use fallback
    }
    
    // Fallback to in-memory counter
    return visitCount;
}

// Increment visit count with timeout
async function incrementVisitCount(): Promise<number> {
  // Try external service with shorter timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout
    
    const response = await fetch('https://api.countapi.xyz/hit/personal-website-visitor-count/visits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (response.ok) {
      const data = await response.json();
      if (data.value !== undefined) {
        visitCount = data.value;
        return data.value;
      }
          }
    } catch {
      // Silently fail and use fallback
    }
    
    // Fallback to in-memory counter
    visitCount += 1;
    return visitCount;
}

// GET: Return current visit count
export async function GET() {
  try {
    const count = await getVisitCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: visitCount });
  }
}

// POST: Increment visit count
export async function POST() {
  try {
    const newCount = await incrementVisitCount();
    return NextResponse.json({ count: newCount });
  } catch {
    visitCount += 1;
    return NextResponse.json({ count: visitCount });
  }
} 