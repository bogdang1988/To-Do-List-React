import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const submitHandle = (event) => {
    event.preventDefault();
    if (toDo.trim()) {
      const newState = toDoList.concat(toDo);
      setToDoList(newState);
      setToDo("");
    }
  };

  return (
    <Container>
      <Row>
        <Col lg={5}>
          <h1>To Do List</h1>
          <Form onSubmit={submitHandle}>
            <Form.Group className="mb-3">
              <Form.Label>To Do text</Form.Label>
              <Form.Control
                as="textarea"
                value={toDo}
                onChange={(event) => {
                  setToDo(event.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add To Do
            </Button>
          </Form>
          <div className="to-do-list">
            {!!toDoList.length &&
              toDoList.map((toDo, index) => {
                return <p key={index}>{toDo}</p>;
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
