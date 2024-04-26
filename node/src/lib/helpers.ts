/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: Function, delay: number) => {
  let timerId: NodeJS.Timeout | null = null;
  let firstCall = true;
  return (...args: any[]) => {
    if (firstCall) {
      func(...args);
      firstCall = false;
      return;
    }
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
      timerId = null;
    }, delay);
  };
};
