'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

/**
 * Custom hook to get the current layout segment (e.g. [team] value).
 */
export function useCurrentUrl() {
  const currentUrl = useSelectedLayoutSegment();
  return currentUrl;
}
