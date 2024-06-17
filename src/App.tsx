import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { useState } from 'react';
import { QueryContext } from './QueryContext';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  const [query, setQuery] = useState<string>('');

  return (
    <MantineProvider theme={theme}>
      <QueryContext.Provider value={{ query, setQuery }}>
        <Router />
      </QueryContext.Provider>
    </MantineProvider>
  );
}
