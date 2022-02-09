import React from "react";
import {
  FooterMessage,
  HeaderMessage,
} from "./components/common/WelcomeMessage";
import { useState, useEffect, useRef } from "react";
import { Button, Form, Message, Segment, TextArea } from "semantic-ui-react";
import CommonSocials from "./components/common/CommonSocials";
import ImageDropDiv from "./components/common/ImageDropDiv";
import axios from "axios";
import { setToken } from "./util/authUser";
import catchErrors from './util/catchErrors'
let cancel;

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
    const { name, value, files } = e.target;

    if (name === "media" && files.length) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormLoading(true);

    let profilePicURL;

    if (media !== null) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = await axios.post("/api/v1/uploads", formData);
      profilePicURL = res.data.src;
    }

    if (media !== null && !profilePicURL) {
      setFormLoading(false);
      return setErrporMsg("Error Uploading Image");
    }

    try {
      const res = await axios.post("/api/v1/user/signup", {
        user,
        profilePicURL,
      });
      setToken(res.data)
    } catch (error) {
      console.log(error);
      const errorMsg = catchErrors(error);
      setErrorMsg(errorMsg);
    }

    setFormLoading(false);

  };

  const handleUsernameAvail = async () => {
    const cancelToken = axios.CancelToken;
    setUserNameLoading(true);
    try {
      cancel && cancel();
      const res = await axios.get(`/api/v1/user/${username}`, {
        cancelToken: new axios.CancelToken((canceler) => {
          cancel = canceler;
        }),
      });
      if (res.data === "Availible") {
        setUsernameAvail(true);
        setErrorMsg(null);
        setUser((prev) => ({ ...prev, username }));
      }
    } catch (err) {
      setUsernameAvail(false);
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
          <Message
            error
            content={errorMsg}
            header="Whoops"
            icon="meh"
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
