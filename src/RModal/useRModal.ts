import { useContext } from 'react';
import { RModalContext } from './Context';

export const useRModal = () => {
  const ctx = useContext(RModalContext);
  if (!ctx) {
    throw new Error('"useRModal" can only be use in RModalContext.');
  }
  return ctx;
};
