import { ProForm, type ProFormProps } from '@ant-design/pro-components';
import { message } from 'antd';
import { useState } from 'react';
import { RFormContext } from './Context';

export interface RFormProps<T = Record<string, any>>
  extends Omit<ProFormProps<T>, 'onFinish'> {
  /** 自动提示返回的字符串 */
  onFinish?: (formData: T) => Promise<boolean | string>;
}

export function RForm<T>(props: RFormProps<T>) {
  const { onFinish: propOnFinish, ...rest } = props;
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish: ProFormProps<T>['onFinish'] = async (formData) => {
    if (!propOnFinish) {
      return true;
    }
    setLoading(true);
    try {
      const result = await propOnFinish(formData);
      if (typeof result === 'string') {
        messageApi.success(result);
      }
      return true;
    } catch (error) {
      if (error instanceof Error) {
        messageApi.error(error.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <RFormContext.Provider value={{ loading, setLoading }}>
      {contextHolder}
      <ProForm<T> {...rest} loading={loading} onFinish={onFinish} />
    </RFormContext.Provider>
  );
}
