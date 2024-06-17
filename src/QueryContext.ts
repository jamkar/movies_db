import { createContext } from 'react';
import { Query } from './types';

export const QueryContext = createContext<Query>({} as Query);
