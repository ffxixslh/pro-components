import { Button, type ButtonProps } from "antd";
import React, { useContext } from "react";
import { RTableContext } from "../RTable/Context";

export interface RButtonProps extends ButtonProps {
  onClick?: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => Promise<void> | void;
}

const RButton = (props: RButtonProps) => {
  const { onClick: propClick, ...rest } = props;
  const rTableCtx = useContext(RTableContext);

  return (
    <Button
      {...rest}
      onClick={async (e) => {
        e.preventDefault();

        await propClick?.(e);

        await rTableCtx?.actionRef.current?.reloadAndRest?.();
      }}
    />
  );
};

export default RButton;
