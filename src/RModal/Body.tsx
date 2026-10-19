import { type NativeProps, withNativeProps } from '@ffxixslh/utils';
import type React from 'react';

export interface RModalBodyProps extends NativeProps {
  children?: React.ReactNode;
}

export function RModalBody(props: RModalBodyProps): React.ReactElement {
  return withNativeProps(
    props,
    <div className="fpc-rmodal-body">
      <div className="fpc-rmodal-body-content">{props.children}</div>
    </div>,
  );
}
