import type { ProFormInstance } from '@ant-design/pro-components';
import { createContext } from 'react';

export interface RFormContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  formRef: React.MutableRefObject<ProFormInstance | undefined>;
}

export const RFormContext = createContext<RFormContextType | null>(null);
