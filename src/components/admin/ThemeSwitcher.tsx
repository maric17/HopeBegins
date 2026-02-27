'use client';

import { useThemeStore } from '@/store/useThemeStore';

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex items-center gap-2 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl">
      <button
        onClick={() => setTheme('red')}
        className={`h-6 w-6 rounded-full bg-red-600 border-2 ${
          theme === 'red'
            ? 'border-zinc-900 dark:border-white shadow-md scale-110'
            : 'border-transparent opacity-50'
        } transition-all`}
        title="Red Theme"
      />
      <button
        onClick={() => setTheme('blue')}
        className={`h-6 w-6 rounded-full bg-blue-600 border-2 ${
          theme === 'blue'
            ? 'border-zinc-900 dark:border-white shadow-md scale-110'
            : 'border-transparent opacity-50'
        } transition-all`}
        title="Blue Theme"
      />
      <button
        onClick={() => setTheme('green')}
        className={`h-6 w-6 rounded-full bg-green-600 border-2 ${
          theme === 'green'
            ? 'border-zinc-900 dark:border-white shadow-md scale-110'
            : 'border-transparent opacity-50'
        } transition-all`}
        title="Green Theme"
      />
    </div>
  );
}
