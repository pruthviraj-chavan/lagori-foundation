
import React, { createContext, useContext, useState, useEffect } from 'react';

// Only allow light mode
type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Always use light mode
  const [theme] = useState<Theme>('light');

  useEffect(() => {
    // Forcibly remove dark class if it exists
    document.documentElement.classList.remove('dark');
    
    // Store theme preference
    localStorage.setItem('theme', theme);
    
    // Add meta tag to enforce color scheme
    const meta = document.createElement('meta');
    meta.name = 'color-scheme';
    meta.content = 'light';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};
