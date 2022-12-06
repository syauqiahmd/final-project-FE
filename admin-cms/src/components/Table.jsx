import { Table } from "react-bootstrap";
import TableBodyProjects from "./TableBodyProjects"
import TableBodyTags from "./TableBodyTags"

export default function Tables(props) {
  function tableHeadProjects() {
    return (
      <tr>
        <th>No.</th>
        <th>Title</th>
        <th>Introduction</th>
        <th>Difficulty</th>
        <th>Status</th>
      </tr>
    );
  }

  function tableHeadTags() {
    return (
      <tr>
        <th>No.</th>
        <th>Name</th>
      </tr>
    );
  }

  function tableHeadReports(){
    return (
      <tr>
        <th>No.</th>
        <th>Name</th>
      </tr>
    );
  }

  function tableBody(el,index){
    if (props.title === "Projects") {
      return <TableBodyProjects data={el} index={index} key={index}/>
    }else{
      return <TableBodyTags data={el} index={index} key={index}/>
    }
  }

  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            {props.title ==="Projects" ? tableHeadProjects() : tableHeadTags()}
          </thead>
          <tbody>
            {props.data.map((el,index) => {
              return tableBody(el,index)
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
