import {useRef} from 'react';

export function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef(0);

  function debouncedFn(...args: any[]) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay) as unknown as number;
  }

  return debouncedFn;
}
