import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

const WeaponsContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 1,
        m: 1,
        bgcolor: "skyblue",
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
};
export default WeaponsContainer;
