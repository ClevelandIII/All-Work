import React from "react";
import {
  FooterMessage,
  HeaderMessage,
} from "../components/common/WelcomeMessage";
import { useState, useEffect, useRef } from "react";
import { Button, Form, Segment, TextArea } from "semantic-ui-react";
import regexUserName  from "../utils/valUsername";
import CommonSocials from "../components/common/CommonSocials";
import ImageDropDiv from "../components/common/ImageDropDiv";
import axios from "axios";

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    twitter: "",
    youtube: "",
    instagram: "",
    facebook: "",
  });

  const { name, email, password, bio } = user;

  //Form useStates
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [usernameAvail, setUsernameAvail] = useState(true);
  const [userNameLoading, setUserNameLoading] = useState(false);

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const [highlighted, setHighlighted] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const inputRef = useRef(null);

  //Form useEffects
  useEffect(() => {
    setSubmitDisabled(!(name && password && email && username));
  }, [user, username]);

  useEffect(() => {
    username === "" ? setUsernameAvail(false) : handleUsernameAvail();
  }, [username]);

  //Form Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUsernameAvail = async () => {
    setUserNameLoading(true);
    try {
      const res = await axios.get(`/api/v1/signup/${username}`);
      if (res.data === "Availible") {
        setUsernameAvail(true);
        setUser((prev) => ({ ...prev, username }));
      }
    } catch (err) {
      setErrorMsg("Username isnt availible");
    }

    setUserNameLoading(false);
  };

  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Segment>
          <ImageDropDiv
            handleChange={handleChange}
            inputRef={inputRef}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            media={media}
            setMedia={setMedia}
          />
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            value={name}
            icon="user"
            iconPosition="left"
            required
            onChange={handleChange}
          />
          <Form.Input
            loading={userNameLoading}
            error={!usernameAvail}
            label="Username"
            placeholder="Username"
            name="username"
            value={username}
            icon={usernameAvail ? "check" : "close"}
            iconPosition="left"
            required
            onChange={(e) => {
              setUsername(e.target.value);
              const test = regexUserName.test(e.target.value);
              if (test || regexUserName.test(e.target.value)) {
                setUsernameAvail(true);
              } else {
                setUsernameAvail(false);
              }
            }}
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
          <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            icon="envelope"
            iconPosition="left"
            required
            onChange={handleChange}
            type="email"
          />
          {/* <Divider hidden/> */}
          <Form.Field
            label="Bio"
            control={TextArea}
            name="bio"
            value={bio}
            onChange={handleChange}
            placeholder="Bio"
          />
          <CommonSocials
            user={user}
            handleChange={handleChange}
            setShowSocialLinks={setShowSocialLinks}
            showSocialLinks={showSocialLinks}
          />
          <Button
            icon="signup"
            content="Signup"
            type="submit"
            color="olive"
            disabled={submitDisabled || !usernameAvail}
          />
        </Segment>
      </Form>
      <FooterMessage />
    </>
  );
};

export default signup;
