import { type NativeProps, withNativeProps } from '@ffxixslh/utils';
import type React from 'react';

export interface RModalFooterProps extends NativeProps {
  children?: React.ReactNode;
}

export function RModalFooter(props: RModalFooterProps): React.ReactElement {
  return withNativeProps(
    props,
    <div className="fpc-rmodal-footer">
      <div className="fpc-rmodal-footer-content">{props.children}</div>
    </div>,
  );
}
