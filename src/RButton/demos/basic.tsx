import { RButton } from "@ffxixslh/pro-components";
import { message } from "antd";
import React from "react";

export default () => {
  return (
    <RButton
      key={"reload"}
      onClick={async () => {
        await message.loading("刷新中", 1);
      }}
    >
      刷新
    </RButton>
  );
};
