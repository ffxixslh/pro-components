import { waitTime } from "@ffxixslh/pro-components";
import React from "react";

export default () => {
  return (
    <button
      onClick={async () => {
        await waitTime(1000);
      }}
    >
      刷新
    </button>
  );
};
