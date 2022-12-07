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
          <Card.Title className="d-flex justify-content-between">
            <div>
            Total {props.title}
            </div>
            <Button 
            variant="primary" 
            className="float-right" 
            onClick={toggle}>Show {props.title}
            </Button>
          </Card.Title>
          <hr />
          <Card.Text className="text-dark">
            <span className="display-6">{props.total} </span>
            <span>{props.title}</span>
          </Card.Text>
          
        </Card.Body>
      </Card>
    </>
  );
}
