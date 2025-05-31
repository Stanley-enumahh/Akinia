import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

interface ReusableTableProps<T> {
  columns: TableProps<T>["columns"];
  dataSource: T[];
}

function ReusableTable<T extends { key: React.Key }>({
  columns,
  dataSource,
}: ReusableTableProps<T>) {
  return (
    <Table<T> columns={columns} dataSource={dataSource} pagination={false} />
  );
}

export default ReusableTable;
