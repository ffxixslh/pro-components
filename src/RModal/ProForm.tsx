import {
  ProForm,
  type ProFormInstance,
  type ProFormProps,
} from '@ant-design/pro-components';
import { message, Space, Spin } from 'antd';
import { isFunction } from 'es-toolkit';
import type React from 'react';
import { useImperativeHandle, useRef, useState } from 'react';
import { RModalBody } from './Body';
import { RModalClose } from './Close';
import { RModalFooter } from './Footer';
import { RModalProFormContext } from './ProFormContext';
import { RModalReset } from './Reset';
import { RModalSubmit } from './Submit';
import { useRModal } from './useRModal';

export interface RModalProFormProps<
  T = Record<string, any>,
  U = Record<string, any>,
> extends Omit<ProFormProps<T, U>, 'onFinish'> {
  /** 自动提示返回的字符串 */
  onFinish?: (formData: T) => Promise<boolean | string>;
  /** 自定义底部栏渲染 */
  Footer?:
    | React.ReactElement
    | ((action: {
        submit: () => void;
        reset: () => void;
        close: () => void;
      }) => React.ReactElement);
}

export function RModalProForm<T, U>(props: RModalProFormProps<T, U>) {
  const {
    formRef: propFormRef,
    onFinish: propOnFinish,
    loading: propLoading,
    Footer: propFooter,
    ...rest
  } = props;
  const [loading, setLoading] = useState(false);
  const formRef = useRef<ProFormInstance>();
  const rModalCtx = useRModal();

  const onFinish: ProFormProps<T>['onFinish'] = async (formData) => {
    if (!propOnFinish) {
      return true;
    }
    setLoading(true);
    try {
      const result = await propOnFinish(formData);
      if (typeof result === 'string') {
        message.success(result);
        rModalCtx.resolve?.(result);
      }
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
        rModalCtx.reject?.(error);
      }
    } finally {
      setLoading(false);
      rModalCtx.close?.();
    }
  };

  useImperativeHandle(propFormRef, () => formRef.current);

  return (
    <RModalProFormContext.Provider value={{ loading, setLoading, formRef }}>
      <RModalBody>
        <Spin spinning={loading}>
          <ProForm<T, U>
            layout="vertical"
            {...rest}
            submitter={false}
            formRef={formRef}
            loading={loading}
            onFinish={onFinish}
          />
        </Spin>
      </RModalBody>

      {propFooter ? (
        isFunction(propFooter) ? (
          propFooter({
            submit: () => {
              formRef.current?.submit;
            },
            reset: () => {
              formRef.current?.resetFields();
            },
            close: () => {
              rModalCtx.close?.();
            },
          })
        ) : (
          propFooter
        )
      ) : (
        <RModalFooter>
          <Space>
            <RModalClose />
            <RModalReset />
            <RModalSubmit />
          </Space>
        </RModalFooter>
      )}
    </RModalProFormContext.Provider>
  );
}
