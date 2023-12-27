// import styles from "../../styles/Nav/Nav.css"

const Nav = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        marginBottom: "3rem",
        marginTop: "2rem",
        // Remove border and padding from the nav element
      }}
    >
      <h1
        style={{
          border: "3px solid white",
          padding: "1rem",
          borderRadius: "5vh"
        }}
      >
        NOTE TAKING APP
      </h1>
    </nav>
  );
};

export default Nav;
