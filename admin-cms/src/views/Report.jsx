import { Table, Button } from "react-bootstrap";
import TableBodyReport from "../components/TableBodyReport";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReports } from "../store/slices/report";
import socket from "../bin/socketio";

export default function Report() {
  const dispatch = useDispatch();

  const { reports } = useSelector((state) => {
    return state.report.reports;
  });

  function refresh() {
    dispatch(fetchReports());
  }

  useEffect(() => {
    dispatch(fetchReports());
    socket.on("report-toadmin/response", ()=>{
      dispatch(fetchReports());
    })
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1 className="display-6">Reports</h1>
        <Button variant="primary" className="float-right mb-2" onClick={refresh}>
          Refresh
        </Button>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No.</th>
              <th>Project</th>
              <th>Report Count</th>
              <th>Link</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((el, index) => {
              return <TableBodyReport data={el} index={index} key={index} />;
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
