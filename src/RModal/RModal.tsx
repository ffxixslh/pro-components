import { Modal, type ModalProps } from 'antd';
import clsx from 'clsx';
import { RModalContext } from './Context';

export interface RModalProps extends Omit<ModalProps, 'visible'> {
  visible?: boolean;
  close?: () => void;
  afterClose?: () => void;
  reject?: (e?: unknown) => void;
  resolve?: (msg?: any) => void;
}

export function RModal(props: RModalProps) {
  const {
    visible: propVisible,
    close: propClose,
    reject: propReject,
    resolve: propResolve,
    rootClassName: propRootClassName,
    ...rest
  } = props;

  return (
    <RModalContext.Provider
      value={{
        close: propClose,
        reject: propReject,
        resolve: propResolve,
      }}
    >
      <Modal
        width={736}
        {...rest}
        open={propVisible}
        footer={null}
        rootClassName={clsx(propRootClassName, 'fpc-rmodal-root')}
      />
    </RModalContext.Provider>
  );
}
