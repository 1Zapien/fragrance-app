import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

function MainLayout(props) {
  return (
    <div>
      <NavBar></NavBar>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
}

export default MainLayout;
