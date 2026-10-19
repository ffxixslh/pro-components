import { LoadingOutlined } from '@ant-design/icons';
import { Button, type ButtonProps } from 'antd';
import { useContext, useState } from 'react';
import { RTableContext } from '../RTable/Context';

export interface RButtonProps extends ButtonProps {
  /** 自动渲染 loading 图标 */
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => Promise<void> | void;
}

export function RButton(props: RButtonProps) {
  const {
    onClick: propClick,
    icon: propIcon,
    loading: propLoading,
    ...rest
  } = props;
  const [loading, setLoading] = useState(propLoading ?? false);
  const rTableCtx = useContext(RTableContext);

  return (
    <Button
      {...rest}
      icon={loading ? <LoadingOutlined /> : propIcon}
      onClick={async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
          await propClick?.(e);

          await rTableCtx?.actionRef.current?.reloadAndRest?.();
        } finally {
          setLoading(false);
        }
      }}
    />
  );
}
