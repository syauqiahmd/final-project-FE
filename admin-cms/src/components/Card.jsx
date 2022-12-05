import { Card,Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <>
      <Card>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
          <Card.Title>Total {props.title}</Card.Title>
          <Card.Text>
            The total of {props.title} are {props.total}
          </Card.Text>
          <Button variant="primary">Show {props.title}</Button>
        </Card.Body>
      </Card>
    </>
  );
}
