import React, { type ReactNode } from 'react';
import { ThemeProvider } from '@gravity-ui/uikit';

interface ThemeWrapperProps {
  children: ReactNode;
  isDark: boolean;
}

export default function ThemeWrapper({ children, isDark }: ThemeWrapperProps) {
  const theme = React.useMemo(() => (isDark ? 'dark' : 'light'), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
