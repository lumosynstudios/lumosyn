'use client';

import * as React from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeContextType = {
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'lumosyn-theme',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<'dark' | 'light'>(
    'light'
  );
  const [mounted, setMounted] = React.useState(false);

  // Get system preference
  const getSystemTheme = React.useCallback((): 'dark' | 'light' => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }, []);

  // Initialize theme from storage or system
  React.useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = stored || defaultTheme;

    setThemeState(initialTheme);

    const resolved =
      initialTheme === 'system' ? getSystemTheme() : initialTheme;
    setResolvedTheme(resolved);

    // Apply theme to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(resolved);
    document.documentElement.style.colorScheme = resolved;
  }, [defaultTheme, storageKey, getSystemTheme]);

  // Listen to system theme changes
  React.useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const newResolvedTheme = e.matches ? 'dark' : 'light';
      setResolvedTheme(newResolvedTheme);

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newResolvedTheme);
      document.documentElement.style.colorScheme = newResolvedTheme;
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Update theme
  const setTheme = React.useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);

      const resolved = newTheme === 'system' ? getSystemTheme() : newTheme;
      setResolvedTheme(resolved);

      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(resolved);
      document.documentElement.style.colorScheme = resolved;
    },
    [storageKey, getSystemTheme]
  );

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme]
  );

  // Prevent flash of unstyled content
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  // Return default values if context is not available
  // This handles both SSR and cases where provider hasn't mounted yet
  if (context === undefined) {
    return {
      theme: 'system' as Theme,
      resolvedTheme: 'light' as const,
      setTheme: () => {},
    };
  }

  return context;
}

// Logo hook for easy theme-aware logo switching
export function useThemeLogo() {
  const { resolvedTheme } = useTheme();

  const logo = React.useMemo(() => {
    return {
      src:
        resolvedTheme === 'dark'
          ? '/assets/logo/lumosyn-dark-transparent.png'
          : '/assets/logo/lumosyn-light-transparent.png',
      alt: 'Lumosyn AI Logo',
    };
  }, [resolvedTheme]);

  return logo;
}
