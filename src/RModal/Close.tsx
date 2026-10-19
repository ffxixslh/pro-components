import { RButton, type RButtonProps } from '../RButton';
import { useRModal } from './useRModal';

export interface RModalCloseProps extends RButtonProps {}

export function RModalClose(props: RModalCloseProps) {
  const { children: propChildren, onClick: propOnClick, ...rest } = props;
  const rModalCtx = useRModal();

  return (
    <RButton
      {...rest}
      onClick={async (e) => {
        try {
          await propOnClick?.(e);
        } finally {
          rModalCtx.reject?.('close');
          rModalCtx.close?.();
        }
      }}
    >
      {propChildren ?? '关闭'}
    </RButton>
  );
}
