import type { ProFormInstance } from '@ant-design/pro-components';
import { createContext } from 'react';

export interface RModalProFormContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  formRef: React.MutableRefObject<ProFormInstance | undefined>;
}

export const RModalProFormContext =
  createContext<RModalProFormContextType | null>(null);
