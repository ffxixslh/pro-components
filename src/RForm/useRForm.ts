import { useContext } from 'react';
import { RFormContext } from './Context';

export const useRForm = () => {
  const ctx = useContext(RFormContext);
  if (!ctx) {
    throw new Error('"useRForm" can only be use in RFormContext.');
  }
  return ctx;
};
