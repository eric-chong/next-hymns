import styles from "./ContentContainer.module.css";

console.log("styles >>>", styles);
export default function ContentContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
