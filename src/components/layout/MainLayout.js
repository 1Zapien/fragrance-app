import NavBar from "./NavBar.js";

function MainLayout(props) {
  return (
    <div>
      <NavBar></NavBar>
      <main>{props.children}</main>
    </div>
  );
}

export default MainLayout;
