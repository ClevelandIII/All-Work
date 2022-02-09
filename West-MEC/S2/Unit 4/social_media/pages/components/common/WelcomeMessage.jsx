import { Icon, Message } from "semantic-ui-react";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";
  return (
    <Message
      icon={signupRoute ? "settings" : "privacy"}
      color={signupRoute ? "olive" : "violet"}
      header={signupRoute ? "Get Started Here" : "Welcome Back"}
      content={
        signupRoute ? "Create a New Account" : "Login with Email and Password"
      }
    />
  );
};
export const FooterMessage = () => {
  const router = useRouter();
  const signupRoute = router.pathname === "/signup";

  return (
    <>
      {signupRoute ? (
        <>
          <Message attached="bottom" color="violet">
            <Icon name="help" />
            Existing User? <Link href="/login">Login Here</Link>
          </Message>
        </>
      ) : (
        <>
          <Message attached="top" color="olive">
            <Icon name="help" />
            New User? <Link href="/signup">Signup Here</Link> instead
          </Message>
          <Message attached="bottom" color="red">
            <Icon name="lock" />
            Forgor 💀 Password? Reset <Link href="/reset">Here</Link>
          </Message>
        </>
      )}
    </>
  );
};
