"use client";

import { useState, useEffect, useRef } from 'react';

export function useVisitorCount() {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const hasIncremented = useRef(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Prevent multiple increments on the same page load
    if (hasIncremented.current) return;

    const updateVisitCount = async () => {
      try {
        // Check if we've already counted this page visit
        const hasCountedThisVisit = sessionStorage.getItem('visitCounted');
        
        if (!hasCountedThisVisit) {
          // This is a new page visit - increment the counter
          sessionStorage.setItem('visitCounted', 'true');
          hasIncremented.current = true;
          
          const response = await fetch('/api/visitors', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          
          if (response.ok) {
            const data = await response.json();
            setVisitCount(data.count);
          } else {
            throw new Error('Failed to increment visit count');
          }
        } else {
          // This page visit was already counted - just get current count
          hasIncremented.current = true;
          
          const response = await fetch('/api/visitors');
          
          if (response.ok) {
            const data = await response.json();
            setVisitCount(data.count);
          } else {
            throw new Error('Failed to get visit count');
          }
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error updating visit count:', error);
        hasIncremented.current = false;
        setVisitCount(1);
        setIsLoading(false);
      }
    };

    updateVisitCount();
    
    // Clear the visit flag when user navigates away
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('visitCounted');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Format number with commas for display
  const formatCount = (count: number): string => {
    return count.toLocaleString();
  };

  return {
    visitCount,
    formattedCount: formatCount(visitCount),
    isLoading
  };
} 