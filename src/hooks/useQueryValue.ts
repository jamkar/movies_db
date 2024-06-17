import { useContext } from 'react';
import { QueryContext } from '../QueryContext';

const useQueryValue = () => useContext(QueryContext);

export default useQueryValue;
