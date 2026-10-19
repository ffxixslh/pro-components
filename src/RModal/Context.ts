import { createContext } from 'react';

export interface RModalContextType {
  close?: () => void;
  reject?: (e?: unknown) => void;
  resolve?: (msg?: any) => void;
}

export const RModalContext = createContext<RModalContextType | null>(null);
