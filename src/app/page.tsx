import { Typography } from "@mui/material";

import { getAllHymns } from "@/actions/hymns";

import styles from "./page.module.css";

export default async function Home() {
  const hymns = await getAllHymns();
  console.log("hymnts >>>>", hymns);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography variant="h3" component="h1">
          Hymns
        </Typography>
        {hymns.length === 0 && (
          <Typography variant="body1">Create first hymn</Typography>
        )}
      </main>
    </div>
  );
}
