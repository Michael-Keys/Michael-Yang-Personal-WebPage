import { NextResponse } from 'next/server';

// Simple in-memory counter for development and fallback
let visitCount = 0;

// Try to get initial count from environment variable or start at 0
try {
  visitCount = parseInt(process.env.INITIAL_VISIT_COUNT || '0', 10);
} catch {
  visitCount = 0;
}

// Get current visit count
async function getVisitCount(): Promise<number> {
  // Try external service first
  try {
    const response = await fetch('https://api.countapi.xyz/get/personal-website-visitor-count/visits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.value !== undefined) {
        visitCount = data.value;
        return data.value;
      }
    }
  } catch (error) {
    console.error('Error getting visit count from external service:', error);
  }
  
  // Fallback to in-memory counter
  return visitCount;
}

// Increment visit count
async function incrementVisitCount(): Promise<number> {
  // Try external service first
  try {
    const response = await fetch('https://api.countapi.xyz/hit/personal-website-visitor-count/visits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      if (data.value !== undefined) {
        visitCount = data.value;
        return data.value;
      }
    }
  } catch (error) {
    console.error('Error incrementing visit count with external service:', error);
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
  } catch (error) {
    console.error('Error getting visit count:', error);
    return NextResponse.json({ count: visitCount });
  }
}

// POST: Increment visit count
export async function POST() {
  try {
    const newCount = await incrementVisitCount();
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error updating visit count:', error);
    visitCount += 1;
    return NextResponse.json({ count: visitCount });
  }
} 