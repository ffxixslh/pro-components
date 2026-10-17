import type { ActionType, ProFormInstance } from "@ant-design/pro-components";
import { createContext } from "react";

export interface RTableContextType {
  actionRef: React.MutableRefObject<ActionType | undefined>;
  formRef: React.MutableRefObject<ProFormInstance | undefined>;
}

export const RTableContext = createContext<RTableContextType | null>(null);
