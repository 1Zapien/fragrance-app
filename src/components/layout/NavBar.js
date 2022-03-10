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
      <Container fluid>
        <Navbar.Brand href="#" className={classes.nav_logo}>
          ART OF FRAGRANCE
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className={classes.toggle_button}
        />
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
              <Nav.Link
                href="/home"
                className={classes.nav_link}
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse.show"
              >
                {/* <Link to="/home">Home</Link> */}
                Home
              </Nav.Link>
              <Nav.Link href="/addfragrance" className={classes.nav_link}>
                {/* <Link to="/addfragrance">Add Fragrance </Link> */}
                Add Fragrance
              </Nav.Link>
              {isLoggedIn && (
                <Nav.Link
                  href="/"
                  onClick={logOutHandler}
                  className={classes.nav_link}
                >
                  {/* <Link to="/addfragrance">Add Fragrance </Link> */}
                  Log Out
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
