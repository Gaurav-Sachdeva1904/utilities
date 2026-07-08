export declare function debounce<T extends (...args: Parameters<T>) => void>(func: T, delay?: number): (...args: Parameters<T>) => void;
