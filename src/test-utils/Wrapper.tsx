import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { QueryContext } from '../QueryContext';
import { theme } from '../theme';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>('');

  return (
    <MantineProvider theme={theme}>
      <QueryContext.Provider value={{ query, setQuery }}>
        {children}
      </QueryContext.Provider>
    </MantineProvider>
  );
};

export default Wrapper;
