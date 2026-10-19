import { createContext } from 'react';

export interface RFormContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const RFormContext = createContext<RFormContextType | null>(null);
