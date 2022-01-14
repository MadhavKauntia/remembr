import styles from "./Header.module.css";

const Header = (props) => {
  return <h1>{props.children}</h1>;
};

export default Header;
