import { RButton, type RButtonProps } from '../RButton';
import { useRModalProForm } from './useRModalProFOrm';

export interface RModalResetProps extends RButtonProps {}

export function RModalReset(props: RModalResetProps) {
  const { children: propChildren, onClick: propOnClick, ...rest } = props;
  const rModalProFormCtx = useRModalProForm();

  return (
    <RButton
      loading={rModalProFormCtx.loading}
      {...rest}
      onClick={async (e) => {
        try {
          await propOnClick?.(e);
        } finally {
          rModalProFormCtx.formRef.current?.resetFields();
        }
      }}
    >
      {propChildren ?? '重置'}
    </RButton>
  );
}
