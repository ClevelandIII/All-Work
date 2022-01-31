import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container, Icon } from "semantic-ui-react";

const Navbar = () => {
  const router = useRouter();
  const isActive = (route) => router.pathname === route;

  return (
    <Menu borderless fluid>
      <Container text>
        <Link href="/login">
          <Menu.Item active={isActive("/login")}>
            <Icon size="large" color='violet' name="sign in" />
            Login
          </Menu.Item>
        </Link>
        <Link href="/signup">
          <Menu.Item active={isActive("/signup")}>
            <Icon size='large' color='olive' name="signup" />
            Sign up
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
};

export default Navbar;
