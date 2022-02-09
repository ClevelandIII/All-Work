import { Form, Header, Icon, Image, Segment } from "semantic-ui-react";

const ImageDropDiv = ({
  handleChange,
  inputRef,
  setHighlighted,
  highlighted,
  setMediaPreview,
  setMedia,
  media,
  mediaPreview,
}) => {
  return (
    <>
      <Form.Field>
        <Segment placeholder basic secondary>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="media"
            style={{ display: "none" }}
            ref={inputRef}
          />
          <div
            onClick={() => {
              inputRef.current.click();
            }}
            style={{ cursor: "pointer" }}
            onDragOver={(e) => {
              e.preventDefault();
              setHighlighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighlighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighlighted(true);
              // console.log(e.dataTransfer.files);
              const droppedFile = e.dataTransfer.files[0];
              setMediaPreview(URL.createObjectURL(droppedFile));
              setMedia(droppedFile);
            }}
          >
            {mediaPreview === null ? (
              <Segment
                placeholder
                basic
                style={{ cursor: "pointer" }}
                {...(highlighted && { color: "green" })}
              >
                <Header icon>
                  <Icon name="file image outline" />
                  Drag and drop or click to upload
                </Header>
              </Segment>
            ) : (
              <Segment placeholder basic >
                <Image
                  src={mediaPreview}
                  size="medium"
                  centered
                  style={{ cursor: "pointer" }}
                />
              </Segment>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
};

export default ImageDropDiv;
