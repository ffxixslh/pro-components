import {
  ProForm,
  type ProFormInstance,
  type ProFormProps,
} from '@ant-design/pro-components';
import { message } from 'antd';
import { useRef, useState } from 'react';
import { RFormContext } from './Context';

export interface RFormProps<T = Record<string, any>, U = Record<string, any>>
  extends Omit<ProFormProps<T, U>, 'onFinish'> {
  /** 自动提示返回的字符串 */
  onFinish?: (formData: T) => Promise<boolean | string>;
}

export function RForm<T, U>(props: RFormProps<T, U>) {
  const { onFinish: propOnFinish, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const formRef = useRef<ProFormInstance>();

  const onFinish: ProFormProps<T>['onFinish'] = async (formData) => {
    if (!propOnFinish) {
      return true;
    }
    setLoading(true);
    try {
      const result = await propOnFinish(formData);
      if (typeof result === 'string') {
        message.success(result);
      }
      return true;
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <RFormContext.Provider value={{ loading, setLoading, formRef }}>
      <ProForm<T, U>
        {...rest}
        formRef={formRef}
        loading={loading}
        onFinish={onFinish}
      />
    </RFormContext.Provider>
  );
}
