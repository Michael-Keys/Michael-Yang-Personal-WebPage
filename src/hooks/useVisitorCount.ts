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

    // Create a promise with timeout for the API call
    const fetchWithTimeout = (url: string, options: RequestInit, timeout: number = 5000) => {
      return Promise.race([
        fetch(url, options),
        new Promise<Response>((_, reject) => 
          setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
      ]);
    };

    const updateVisitCount = async () => {
      try {
        // Show a default count immediately to reduce perceived loading time
        const cachedCount = localStorage.getItem('visitCount');
        if (cachedCount) {
          setVisitCount(parseInt(cachedCount, 10));
          setIsLoading(false);
        }

        // Check if we've already counted this page visit
        const hasCountedThisVisit = sessionStorage.getItem('visitCounted');
        
        if (!hasCountedThisVisit) {
          // This is a new page visit - increment the counter
          sessionStorage.setItem('visitCounted', 'true');
          hasIncremented.current = true;
          
          try {
            const response = await fetchWithTimeout('/api/visitors', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            }, 3000); // 3 second timeout
            
            if (response.ok) {
              const data = await response.json();
              const newCount = data.count || 0;
              setVisitCount(newCount);
              localStorage.setItem('visitCount', newCount.toString());
            } else {
              throw new Error(`Failed to increment visit count: ${response.status}`);
            }
          } catch {
            // If API fails, increment the cached count locally
            const currentCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
            const newCount = currentCount + 1;
            setVisitCount(newCount);
            localStorage.setItem('visitCount', newCount.toString());
          }
        } else {
          // This page visit was already counted - just get current count
          hasIncremented.current = true;
          
          try {
            const response = await fetchWithTimeout('/api/visitors', {}, 3000);
            
            if (response.ok) {
              const data = await response.json();
              const newCount = data.count || 0;
              setVisitCount(newCount);
              localStorage.setItem('visitCount', newCount.toString());
            } else {
              throw new Error(`Failed to get visit count: ${response.status}`);
            }
          } catch {
            // If API fails, use cached count
            const cachedCount = localStorage.getItem('visitCount');
            if (cachedCount) {
              setVisitCount(parseInt(cachedCount, 10));
            }
          }
        }
        
        setIsLoading(false);
      } catch {
        // Set a fallback count to show something
        setVisitCount(prev => prev || 1);
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