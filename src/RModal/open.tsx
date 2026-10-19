import { type ImperativeHandler, renderImperatively } from '@ffxixslh/utils';
import { RModal, type RModalProps } from './RModal';

export type RModalShowProps = Omit<
  RModalProps,
  'visible' | 'destroyOnClose' | 'forceRender'
>;

export const closeFnSet = new Set<() => void>();

export function open<T = any>(props: RModalShowProps) {
  return new Promise<T>((resolve, reject) => {
    const handler: ImperativeHandler = renderImperatively(
      <RModal
        {...props}
        resolve={resolve}
        reject={reject}
        close={() => {
          handler.close();
        }}
        onCancel={(e) => {
          props.onCancel?.(e);
          handler.close();
          reject('cancel');
        }}
        afterClose={() => {
          closeFnSet.delete(handler.close);
          props.afterClose?.();
        }}
      />,
    );

    closeFnSet.add(handler.close);
  }).catch((reason) => {
    if (['close', 'cancel'].includes(reason)) return;
    throw new Error(reason);
  });
}
