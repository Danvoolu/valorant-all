import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import type { NextPage } from "next";
import useSWR from "swr";
import WeaponFrame from "../src/components/weaponFrame";
import { ApiResponseWeapon } from "../src/models/weaponModel";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Skin: NextPage = () => {
  const router = useRouter();
  const { data, error } = useSWR<ApiResponseWeapon>(
    "/api/valorant-weapons",
    fetcher
  );

  if (error) console.log(error);
  if (data) console.log(data);

  if (!data) return <></>;
  return <div>skin一覧</div>;
};

export default Skin;
