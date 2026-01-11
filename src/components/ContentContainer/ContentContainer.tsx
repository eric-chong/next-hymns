import { ReactNode } from "react";

import styles from "./ContentContainer.module.css";

console.log("styles >>>", styles);
export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <div className={styles.container}>{children}</div>;
}
