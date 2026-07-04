import { defineConfig } from 'tsup';

export default defineConfig({
    // 📂 Captures all TypeScript files across all subdirectories
    entry: ['src/**/*.ts', '!src/**/*.test.ts', '!src/**/*.spec.ts'],
    format: ['esm'],
    dts: true, // Generates matching folder-wise .d.ts files
    sourcemap: false, // Generates matching folder-wise .js.map files
    clean: true,
    bundle: true, // ⚡ CRUCIAL: Stops tsup from merging files together, preserving your folders
});
