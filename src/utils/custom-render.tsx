import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { RenderResult, render } from '@testing-library/react';

export const customRender = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
