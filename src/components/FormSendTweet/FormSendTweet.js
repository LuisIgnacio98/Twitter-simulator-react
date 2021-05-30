import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FormSendTweet.scss";

export default function FormSendTweet(props) {
  const { sendTweet } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet__tittle"> Enviar Tweet</h2>
      <form
        className="form-send-tweet__form"
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet__form-name"
              type="text"
              name="name"
              placeholder="Nombre de Usuario"
              margin="normal"
            />
          </FormGroup>

          <FormGroup>
            <TextField
              className="form-send-tweet__form-textarea"
              name="tweet"
              multiline
              rows="6"
              placeholder="¿Qué está pasando?"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Twittear</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
