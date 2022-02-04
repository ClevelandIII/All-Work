import React, { useState, useEffect } from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import {
  FooterMessage,
  HeaderMessage,
} from "../components/common/WelcomeMessage";

const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  //*States
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //*Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("You should fix this issue... NOW!!!");
  };
  //*Effects
  useEffect(() => {
    setSubmitDisabled(!(email && password));
  }, [user]);

  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Bruh"
          // icon="close"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
        <Segment>
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            name="email"
            icon="envelope"
            iconPosition="left"
            type="email"
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            icon={{
              name: showPassword ? "eye" : "eye slash",
              link: true,
              circular: true,
              onClick: () => {
                setShowPassword(!showPassword);
              },
            }}
            type={showPassword ? "text" : "password"}
            iconPosition="left"
            required
            onChange={handleChange}
          />
          <Divider hidden />
          <Button
            color="violet"
            content="Login"
            icon="signup"
            type="submit"
            disabled={submitDisabled}
          />
        </Segment>
      </Form>
      <FooterMessage />
    </>
  );
};

export default login;
