import { Box } from "@mui/material";

interface Props {
  url: string;
  name: string;
  onClick: (id: string) => void;
}

const WeaponFrame = ({ url, name, onClick }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <img src={url} style={{ width: 400 }} />
      {name}
    </Box>
  );
};
export default WeaponFrame;
