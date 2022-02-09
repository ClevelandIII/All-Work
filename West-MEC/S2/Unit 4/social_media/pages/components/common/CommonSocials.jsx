import { Button, Divider, Form, Message } from "semantic-ui-react";

const CommonSocials = ({
  user: { facebook, twitter, instagram, youtube },
  handleChange,
  showSocialLinks,
  setShowSocialLinks,
}) => {
  return (
    <>
      <Button
        content={showSocialLinks ? "Hide Social Links" : "Show Social Links"}
        color="orange"
        icon="at"
        type="button"
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />
      {showSocialLinks && (
        <>
          <Divider />
          <Message
            icon="attention"
            info
            size="tiny"
            header="Social Media Links are Optional!!!!11!!!!!1!!!!!!!1!!!!!!1!!!!"
          />

          <Form.Input
            name="facebook"
            icon="facebook f"
            iconPosition="left"
            placeholder="Facebook"
            value={facebook}
            onChange={handleChange}
          />
          <Form.Input
            name="twitter"
            icon="twitter"
            iconPosition="left"
            placeholder="Twitter"
            value={twitter}
            onChange={handleChange}
          />
          <Form.Input
            name="instagram"
            icon="instagram"
            iconPosition="left"
            placeholder="Instagram"
            value={instagram}
            onChange={handleChange}
          />
          <Form.Input
            name="youtube"
            icon="youtube"
            iconPosition="left"
            placeholder="Youtube"
            value={youtube}
            onChange={handleChange}
          />
        </>
      )}
    </>
  );
};

export default CommonSocials;
