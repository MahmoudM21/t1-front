
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from './ui/toggle';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Toggle 
        pressed={theme === 'dark'} 
        onPressedChange={toggleTheme}
        className="p-2 transition-all duration-300 bg-opacity-20 backdrop-blur-sm border border-white/10 hover:border-t1-accentBlue/70"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Toggle>
    </div>
  );
}
