import { Card, Button } from "react-bootstrap";

export default function Cards(props) {
  function toggle(){
    if (props.title === "Projects") {
      props.setTableState("project")
    }
    else {
      props.setTableState("tag")
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>Total {props.title}</Card.Title>
          <Card.Text>
            There are currently {props.total} {props.title}
          </Card.Text>
          <Button variant="primary" onClick={toggle}>Show {props.title}</Button>
        </Card.Body>
      </Card>
    </>
  );
}
