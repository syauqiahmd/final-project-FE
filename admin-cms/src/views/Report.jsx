import { Table } from "react-bootstrap";
import TableBodyReport from "../components/TableBodyReport";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { fetchReports } from "../store/slices/report";

export default function Report() {
  const dispatch = useDispatch();

  const { reports } = useSelector((state) => {
    return state.report.reports;
  });

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  return (
    <>
      <h1 className="display-6">Reports</h1>
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
              return <TableBodyReport data={el} index={index} key={index}/>;
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
