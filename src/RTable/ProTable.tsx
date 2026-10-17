import {
  type ActionType,
  ProTable,
  type ProTableProps,
} from "@ant-design/pro-components";
import type { ProFormInstance } from "@ant-design/pro-components/lib/index.js";
import React, { useRef } from "react";
import { RTableContext } from "./Context";

export interface RTableProps<T, U, V>
  extends Omit<ProTableProps<T, U, V>, "request"> {
  request?: (params: U) =>
    | Promise<T[]>
    | Promise<{
        data: T[];
        total: number;
        [key: string]: any;
      }>;
}

const RTable = <
  T extends Record<string, any>,
  U extends Record<string, any>,
  V,
>(
  props: RTableProps<T, U, V>,
) => {
  const actionRef = useRef<ActionType>();
  const formRef = useRef<ProFormInstance>();

  const { request: propRequest, ...rest } = props;

  const request = async (params: U) => {
    if (!propRequest) {
      return {
        data: [],
        total: 0,
        success: true,
      };
    }

    const res = await propRequest?.(params);

    if (Array.isArray(res)) {
      return {
        data: res,
        success: true,
        total: res.length,
      };
    }

    return {
      ...res,
      success: true,
    };
  };

  return (
    <RTableContext.Provider value={{ actionRef, formRef }}>
      <ProTable<T, U, V>
        actionRef={actionRef}
        formRef={formRef}
        request={request}
        {...rest}
      />
    </RTableContext.Provider>
  );
};

export default RTable;
