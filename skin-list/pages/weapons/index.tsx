import { useRouter } from "next/router";
import type { NextPage } from "next";
import useSWR from "swr";
import WeaponFrame from "../../src/components/weaponFrame";
import { ApiResponseWeapon, Weapons } from "../../src/models/weaponModel";
import WeaponsContainer from "../../src/components/weaponsContainer";
import { Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Index: NextPage = () => {
  const router = useRouter();
  const { data, error } = useSWR<ApiResponseWeapon<Weapons>>(
    "/api/valorant/weapons",
    fetcher
  );

  const handleClickImg = (id: string) => {
    console.log("onClick発動");
  };
  if (error) console.log(error);
  if (data) console.log(data);

  if (!data) return <></>;
  return (
    <Suspense fallback={<CircularProgress />}>
      <div>
        <WeaponsContainer>
          {data.weapons.data.map((x) => (
            <WeaponFrame
              url={x.displayIcon}
              id={x.uuid}
              name={x.displayName}
              key={x.uuid}
              onClick={handleClickImg}
            />
          ))}
        </WeaponsContainer>
      </div>
    </Suspense>
  );
};

export default Index;
