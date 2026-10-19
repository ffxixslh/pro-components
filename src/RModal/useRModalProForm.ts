import { useContext } from 'react';
import { RModalProFormContext } from './ProFormContext';

export const useRModalProForm = () => {
  const ctx = useContext(RModalProFormContext);
  if (!ctx) {
    throw new Error(
      '"useRModalProForm" can only be use in RModalProFormContext.',
    );
  }
  return ctx;
};
