import React from "react";
import { Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Priority from "../../../Controllers/priorityController";
import moment from "moment";
import { Link } from "react-router-dom";

export default function bugCard(props) {
  const { color } = Priority(props.priority);
  const formatDate = moment().format("MM-DD-YYYY");

  return (
    <Col className="mt-5" md="4">
      <Card className="mt-2" style={{ backgroundColor: color }}>
        <CardTitle className="mt-2 text-center" tag="h5">
          {props.bug.name}
        </CardTitle>
        <CardBody>
          <CardText className="text-left ms-3">
            Assigned: {props.bug.assigned} <br />
            Status: {props.bug.completed === false ? "Resolved" : "Active"}
            <br />
            Priority: {props.bug.priority} <br />
            Created: {moment(props.bug.time).format("MM-DD-YY")} <br />
            Details: {props.bug.details} <br />
            Steps: {props.bug.steps} <br />
            Webpage: {props.bug.webpage} <br />
          </CardText>
          <Button outline color="info" className="ms-3 mt-3" size="sm">
            <Link to={`/editbug/${props.bug._id}`}>Edit Bug</Link>
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
