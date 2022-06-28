import { useRouter } from "next/router";
import useSWR from "swr";
import WeaponFrame from "../../src/components/weaponFrame";
import WeaponsContainer from "../../src/components/weaponsContainer";
import { ApiResponseWeapon, WeaponByUuid } from "../../src/models/weaponModel";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Index = () => {
  const router = useRouter();
  const { weapon_id } = router.query;
  const { data, error } = useSWR<ApiResponseWeapon<WeaponByUuid>>(
    `/api/valorant/weapons/${weapon_id}`,
    fetcher
  );

  const handleClickImg = () => {};

  // パスパラメータから値を取得
  console.log(data);
  if (!data) return <></>;
  return (
    <WeaponsContainer>
      {data.weapons.data.skins.map((x) => (
        <WeaponFrame
          url={x.displayIcon ?? x.chromas[0].displayIcon}
          id={x.uuid}
          name={x.displayName}
          key={x.uuid}
          onClick={handleClickImg}
        />
      ))}
    </WeaponsContainer>
  );
};
export default Index;
