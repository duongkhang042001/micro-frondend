
import { ProColumns, ProTable } from "@ant-design/pro-components";
import { useModel } from "@umijs/max";
import { Button } from "antd";
import { Fragment } from "react";

const HomePage: React.FC = () => {
  const { todos, fetchAllTodos } = useModel('todoModel');

  const columns: ProColumns<any>[] = [
    {
      title: 'Title',
      width: 80,
      dataIndex: 'title',
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      align: 'right',
    }];

  return (
    <Fragment>
      <ProTable<any>
        dataSource={todos}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}

        columns={columns}
      />
      <Button.Group>
        <Button onClick={() => fetchAllTodos()}>FETCH TODO</Button>
      </Button.Group>
    </Fragment>
  );
};

export default HomePage;

