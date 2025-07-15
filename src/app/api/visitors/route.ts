import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const VISITS_FILE = path.join(process.cwd(), 'data', 'visits.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Get current visit count
async function getVisitCount(): Promise<number> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(VISITS_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return parsed.count || 0;
  } catch {
    return 0;
  }
}

// Update visit count
async function updateVisitCount(count: number): Promise<void> {
  await ensureDataDirectory();
  const data = {
    count,
    lastUpdated: new Date().toISOString()
  };
  await fs.writeFile(VISITS_FILE, JSON.stringify(data, null, 2));
}

// GET: Return current visit count
export async function GET() {
  try {
    const count = await getVisitCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error getting visit count:', error);
    return NextResponse.json({ error: 'Failed to get visit count' }, { status: 500 });
  }
}

// POST: Increment visit count
export async function POST() {
  try {
    const currentCount = await getVisitCount();
    const newCount = currentCount + 1;
    await updateVisitCount(newCount);
    
    return NextResponse.json({ count: newCount });
  } catch (error) {
    console.error('Error updating visit count:', error);
    return NextResponse.json({ error: 'Failed to update visit count' }, { status: 500 });
  }
} 