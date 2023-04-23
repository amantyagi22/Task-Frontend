import { genderColor, taskList } from "@/util/helper";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last Name",
    dataIndex: "first_name",
    key: "last_name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (gender) => (
      <span>
        <Tag color={genderColor[gender]} key={gender}>
          {gender.toUpperCase()}
        </Tag>
      </span>
    ),
  },
  {
    title: "Income",
    dataIndex: "income",
    key: "income",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Car",
    dataIndex: "car",
    key: "car",
  },
  {
    title: "Quote",
    dataIndex: "quote",
    key: "quote",
  },
  {
    title: "Phone-Price",
    dataIndex: "phone_price",
    key: "phone_price",
  },
];

const threeColumns = [
  {
    title: "City",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Number of users",
    dataIndex: "user_count",
    key: "user_count",
  },
  {
    title: "Avg. Income",
    dataIndex: "avg_income",
    key: "avg_income",
  },
];

export const TableComponent = ({ data, requestId }) => {
  return (
    <Table
      dataSource={data}
      bordered
      caption={taskList[requestId]}
      columns={requestId === 4 ? threeColumns : columns}
    ></Table>
  );
};
