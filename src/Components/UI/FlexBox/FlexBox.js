import styles from "./FlexBox.module.css";

const FlexBox = (props) => {
  return (
    <div className={`${styles.flex} ${props.className}`}>{props.children}</div>
  );
};

export default FlexBox;
