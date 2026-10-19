import { RButton, type RButtonProps } from '../RButton';
import { useRModal } from './useRModal';
import { useRModalProForm } from './useRModalProFOrm';

export interface RModalSubmitProps extends RButtonProps {}

export function RModalSubmit(props: RModalSubmitProps) {
  const { children: propChildren, onClick: propOnClick, ...rest } = props;
  const rModalCtx = useRModal();
  const rModalProFormCtx = useRModalProForm();

  return (
    <RButton
      type="primary"
      loading={rModalProFormCtx.loading}
      {...rest}
      onClick={async (e) => {
        try {
          await propOnClick?.(e);
          rModalProFormCtx.formRef.current?.submit();
        } finally {
          rModalCtx.close?.();
        }
      }}
    >
      {propChildren ?? '提交'}
    </RButton>
  );
}
