import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./NavBar.module.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
// import { Link } from "react-router-dom";

function NavBar() {
  //getting auth context from store
  const authCtx = useContext(AuthContext);

  //getting logged in value
  const isLoggedIn = authCtx.isLoggedIn;

  //get log out function from authctx
  const logOutHandler = () => {
    authCtx.logout();
  };

  return (
    <Navbar collapseOnSelect bg="white" expand={false}>
      <Container fluid className={classes.nav_bar}>
        <Navbar.Brand
          href="home"
          className={classes.nav_logo}
          bsPrefix="customNav"
        >
          ART OF FRAGRANCE
        </Navbar.Brand>

        {isLoggedIn && (
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className={classes.toggle_button}
          />
        )}

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {isLoggedIn && (
                <>
                  <Nav.Link
                    href="/home"
                    className={classes.nav_link}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link href="/addfragrance" className={classes.nav_link}>
                    Add Fragrance
                  </Nav.Link>
                  <Nav.Link href="/myfragrances" className={classes.nav_link}>
                    My Fragraces
                  </Nav.Link>
                  <Nav.Link href="/account" className={classes.nav_link}>
                    Account
                  </Nav.Link>
                  <Nav.Link
                    href="/"
                    onClick={logOutHandler}
                    className={classes.nav_link}
                  >
                    Log Out
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
