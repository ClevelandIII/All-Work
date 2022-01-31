import Head from "next/head";

const HeadTags = () => {
  return (
    <Head>
      <title>Social Media App</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="An example social media app" />
      <meta charSet="UFT-8" />

      <link rel="icon" href="/favicon.ico" />

      <link rel="stylesheet" href="/style.css" />
      <link rel="stylesheet" href="/nprogress.css" />
    </Head>
  );
};

export default HeadTags;
