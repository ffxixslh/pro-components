import type { ActionType } from "@ant-design/pro-components";
import { RTable } from "@ffxixslh/pro-components";
import { message } from "antd";
import React, { useRef } from "react";

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <RTable
      actionRef={actionRef}
      toolbar={{
        actions: [
          <RTable.Button
            key={"reload"}
            onClick={() => {
              actionRef.current?.reload();
            }}
          >
            刷新
          </RTable.Button>,
        ],
      }}
      rowKey={"id"}
      columns={[
        {
          dataIndex: "id",
          title: "Id",
        },
        {
          dataIndex: "name",
          title: "Name",
        },
      ]}
      request={async () => {
        message.success("请求成功");
        return [
          {
            id: "1",
            name: "foo",
          },
          {
            id: "2",
            name: "bar",
          },
          {
            id: "3",
            name: "baz",
          },
        ];
      }}
    />
  );
};
