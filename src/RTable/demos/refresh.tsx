import { RTable } from "@ffxixslh/pro-components";
import { message } from "antd";
import React from "react";

export default () => {
  return (
    <RTable
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
      toolbar={{
        actions: [
          <RTable.Button
            key="action"
            onClick={async () => {
              await message.loading("操作中", 1);
            }}
          >
            操作
          </RTable.Button>,
        ],
      }}
    />
  );
};
