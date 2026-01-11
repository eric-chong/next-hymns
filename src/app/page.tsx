import { Typography } from "@mui/material";

import { ContentContainer } from "@/components/ContentContainer";
import { AddHymn } from "@/components/AddHymn";
import { getAllHymns } from "@/actions/hymns";

import styles from "./page.module.css";

export default async function Home() {
  const hymns = await getAllHymns();
  console.log("hymnts >>>>", hymns);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ContentContainer>
          <Typography variant="h3" component="h1" sx={{ textAlign: "center" }}>
            Hymns
          </Typography>

          {hymns.length === 0 && (
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Create first hymn
            </Typography>
          )}

          <AddHymn />
        </ContentContainer>
      </main>
    </div>
  );
}
