import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddHymn() {
  return (
    <Fab sx={{ position: "absolute", bottom: 16, right: 16 }}>
      <AddIcon />
    </Fab>
  );
}
