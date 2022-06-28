import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import type { NextPage } from "next";
import useSWR from "swr";
import WeaponFrame from "../src/components/weaponFrame";
import { apiRes } from "../src/models/weaponModel";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Weapons: NextPage = () => {
  const router = useRouter();
  const { data, error } = useSWR<apiRes>("/api/valorant-weapons", fetcher);

  const handleClickImg = (id: string) => {
    router.push({
      pathname: "/skin",
      query: { id: id },
    });
  };
  if (error) console.log(error);
  if (data) console.log(data);

  if (!data) return <></>;
  return (
    <div>
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
        {data.weapons.data.map((x) => (
          <WeaponFrame
            url={x.displayIcon}
            name={x.displayName}
            key={x.uuid}
            onClick={() => handleClickImg(x.uuid)}
          />
        ))}
      </Box>
    </div>
  );
};

export default Weapons;