import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SmsForm = () => {
  const [number, setNumber] = useState();
  const [body, setBody] = useState();

  const onSubmit = async (e) => {
    await e.preventDefault();
    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to: number, body: body }),
    });

    const data = await res.json();

    if (data.success) {
      await setNumber("");
      await setBody("");
    } else {
      await setNumber("An Error has occurred.");
      await setBody("An Error has occurred.");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>Send an SMS</h2>
      <Form.Group>
        <Form.Label htmlFor="to">To:</Form.Label>
        <Form.Control
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="message">Body</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send message
      </Button>
    </Form>
  );
};

export default SmsForm;
