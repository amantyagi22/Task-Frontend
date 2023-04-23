import { TableComponent } from "@/components/TableComponent";
import { taskList } from "@/util/helper";
import { Button, Popover } from "antd";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [requestId, setRequestId] = useState();
  const handleClick = async (requestId) => {
    const { data } = await axios.get(`http://localhost:8080/api/${requestId}`);
    setData(data);
    setRequestId(requestId);
  };

  useEffect(() => {
    handleClick(5);
  }, []);
  return (
    <Fragment>
      <div className="button-container">
        {Array.from(Array(5), (e, i) => {
          return (
            <Popover key={i} content={taskList[i]} trigger={"hover"}>
              <Button key={i} onClick={() => handleClick(i)}>
                Query Number : {i + 1}
              </Button>
            </Popover>
          );
        })}
      </div>
      <TableComponent data={data} requestId={requestId} />
    </Fragment>
  );
}
